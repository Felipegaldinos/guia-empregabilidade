import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Inicializa o aplicativo Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Analytics apenas no navegador
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Exporta a instância de Auth
export const auth = getAuth(app);

// Inicializa e exporta o Firestore
export const db = getFirestore(app);

// Habilita a persistência de dados em cache offline para o Firestore
if (typeof window !== 'undefined') {
  enableIndexedDbPersistence(db).catch((err) => {
    if (err.code === 'failed-precondition') {
      // Múltiplas abas abertas ao mesmo tempo. A persistência só pode ser ativada em uma aba por vez.
      console.warn("A persistência offline do Firestore falhou porque múltiplas abas estão abertas.");
    } else if (err.code === 'unimplemented') {
      // O navegador atual não possui suporte para IndexedDB/persistência.
      console.warn("O navegador atual não suporta persistência offline do Firestore.");
    }
  });
}

export default app;