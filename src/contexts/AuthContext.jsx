import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase';
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Escuta em tempo real o status de autenticação do Firebase
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const logout = () => {
    return firebaseSignOut(auth);
  };

  return (
    <AuthContext.Provider value={{ currentUser, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para consumir o contexto facilmente
export const useAuth = () => useContext(AuthContext);