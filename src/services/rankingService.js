import { db } from './firebase';
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';

// Mapeamento oficial dos Selos da plataforma
export const BADGES_MAP = {
  1: { id: 1, title: 'Perfil Campeão', icon: '🏅' },
  2: { id: 2, title: 'Conectado ao Mercado', icon: '📡' },
  3: { id: 3, title: 'Navegador Seguro', icon: '🛡️' },
  4: { id: 4, title: 'Pronto pra Entrevista', icon: '🎥' }
};

export async function processModuleQuizResult({ userId, moduleId, correctCount, totalQuestions, pointsPerCorrect = 10, minPassPercentage = 0.7 }) {
  if (!userId) return null;

  const pointsEarned = correctCount * pointsPerCorrect;
  const passRatio = totalQuestions > 0 ? correctCount / totalQuestions : 0;
  const hasEarnedBadge = passRatio >= minPassPercentage;

  const userRef = doc(db, 'users', userId);
  const userSnap = await getDoc(userRef);

  const badgeInfo = BADGES_MAP[moduleId];

  if (!userSnap.exists()) {
    // Registo inicial se o documento do utilizador ainda não existir
    const newUserData = {
      totalXP: pointsEarned,
      badges: hasEarnedBadge ? [{ id: moduleId, title: badgeInfo.title, icon: badgeInfo.icon, earnedAt: new Date().toISOString() }] : [],
      moduleScores: {
        [`mod_${moduleId}`]: {
          correct: correctCount,
          total: totalQuestions,
          score: pointsEarned,
          passed: hasEarnedBadge
        }
      }
    };
    await setDoc(userRef, newUserData, { merge: true });
    return { pointsEarned, hasEarnedBadge, newTotalXP: pointsEarned };
  }

  // Atualização de utilizador existente (garante que não duplica pontos ao refazer)
  const existingData = userSnap.data();
  const previousModuleData = existingData.moduleScores?.[`mod_${moduleId}`] || { score: 0 };
  const previousScore = previousModuleData.score || 0;

  const scoreDifference = Math.max(0, pointsEarned - previousScore);
  const updatedTotalXP = (existingData.totalXP || 0) + scoreDifference;

  const updatePayload = {
    totalXP: updatedTotalXP,
    [`moduleScores.mod_${moduleId}`]: {
      correct: correctCount,
      total: totalQuestions,
      score: Math.max(previousScore, pointsEarned),
      passed: hasEarnedBadge || previousModuleData.passed || false
    }
  };

  // Adiciona o selo caso tenha atingido a nota mínima e ainda não o tenha no perfil
  const alreadyHasBadge = (existingData.badges || []).some(b => b.id === moduleId);
  if (hasEarnedBadge && !alreadyHasBadge) {
    updatePayload.badges = arrayUnion({
      id: moduleId,
      title: badgeInfo.title,
      icon: badgeInfo.icon,
      earnedAt: new Date().toISOString()
    });
  }

  await updateDoc(userRef, updatePayload);

  return {
    pointsEarned,
    hasEarnedBadge,
    newTotalXP: updatedTotalXP
  };
}