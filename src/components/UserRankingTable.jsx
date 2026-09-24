import { auth } from '../services/firebase';

export default function UserRankingTable({ rankingList = [] }) {
  if (!rankingList.length) return null;

  const currentUid = auth.currentUser?.uid;

  // 1. Pega apenas os 10 primeiros colocados
  const top10 = rankingList.slice(0, 10);

  // 2. Encontra o índice/posição do usuário logado no ranking completo
  const currentUserIndex = rankingList.findIndex((u) => u.id === currentUid);
  const currentUserData = currentUserIndex !== -1 ? rankingList[currentUserIndex] : null;

  // 3. Verifica se o usuário logado está fora do Top 10 (ou seja, posição >= 10)
  const isUserOutsideTop10 = currentUserIndex >= 10;

  // Função auxiliar para formatar a medalha/posição
  const formatRank = (index) => {
    if (index === 0) return '🥇 1º';
    if (index === 1) return '🥈 2º';
    if (index === 2) return '🥉 3º';
    return `${index + 1}º`;
  };

  return (
    <div className="admin-card">
      <h2>🏆 Ranking Geral (Top 10)</h2>
      <div className="table-responsive">
        <table className="ranking-table">
          <thead>
            <tr>
              <th>Posição</th>
              <th>Nome</th>
              <th>Curso / Área</th>
              <th>Pontuação (XP)</th>
              <th>Selos</th>
            </tr>
          </thead>
          <tbody>
            {/* Renderiza apenas o Top 10 */}
            {top10.map((u, idx) => (
              <tr key={u.id} className={u.id === currentUid ? 'active-row' : ''}>
                <td>
                  <strong>{formatRank(idx)}</strong>
                </td>
                <td>{u.nome || 'Usuário Sem Nome'}</td>
                <td>{u.curso || '—'}</td>
                <td><strong style={{ color: '#28a745' }}>{u.totalXP || 0} XP</strong></td>
                <td>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {u.badges && u.badges.length > 0 ? (
                      u.badges.map((b) => <span key={b.id} title={b.title}>{b.icon}</span>)
                    ) : (
                      <span>—</span>
                    )}
                  </div>
                </td>
              </tr>
            ))}

            {/* Exibe uma linha separadora e a posição do usuário logado se ele estiver fora do Top 10 */}
            {isUserOutsideTop10 && currentUserData && (
              <>
                <tr className="ranking-separator-row">
                  <td colSpan="5" style={{ textAlign: 'center', padding: '6px', color: '#888', fontStyle: 'italic', backgroundColor: '#f8f9fa' }}>
                    •••
                  </td>
                </tr>
                <tr key={currentUserData.id} className="active-row user-out-of-top">
                  <td>
                    <strong>{formatRank(currentUserIndex)}</strong>
                  </td>
                  <td><strong>{currentUserData.nome || 'Você'} (Sua Posição)</strong></td>
                  <td>{currentUserData.curso || '—'}</td>
                  <td><strong style={{ color: '#28a745' }}>{currentUserData.totalXP || 0} XP</strong></td>
                  <td>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      {currentUserData.badges && currentUserData.badges.length > 0 ? (
                        currentUserData.badges.map((b) => <span key={b.id} title={b.title}>{b.icon}</span>)
                      ) : (
                        <span>—</span>
                      )}
                    </div>
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}