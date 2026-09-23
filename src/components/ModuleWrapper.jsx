import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebase';

import ModulePage from './ModulePage';
import UserFormModal from './UserFormModal';

import { module1Data } from '../data/module1Data';
import { module2Data } from '../data/module2Data';
import { module3Data } from '../data/module3Data';
import { module4Data } from '../data/module4Data';

const modulesMap = {
  1: { data: module1Data, nextPath: '/modulo/2' },
  2: { data: module2Data, nextPath: '/modulo/3' },
  3: { data: module3Data, nextPath: '/modulo/4' },
  4: { data: module4Data, nextPath: '/resultado' }
};

export default function ModuleWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userSnap = await getDoc(userDocRef);

          if (userSnap.exists()) {
            const data = userSnap.data();
            setUserData(data);
            localStorage.setItem('user_identification', JSON.stringify(data));
          } else {
            const savedUser = localStorage.getItem('user_identification');
            if (savedUser) setUserData(JSON.parse(savedUser));
          }
          setIsSessionActive(true);
        } catch (error) {
          console.error("Erro ao procurar utilizador no Firestore:", error);
          setIsSessionActive(true);
        }
      } else {
        setUserData(null);
        setIsSessionActive(false);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [id]);

  const handleFormSubmitSuccess = (data) => {
    setUserData(data);
    setIsSessionActive(true);
  };

  const currentModule = modulesMap[id];

  if (isLoading) {
    return <div style={{ textAlign: 'center', padding: '40px' }}>Carregando perfil...</div>;
  }

  if (!currentModule || !currentModule.data) {
    return (
      <div style={{ maxWidth: '980px', margin: '40px auto', textAlign: 'center' }}>
        <h2>Módulo {id} em breve!</h2>
        <Link to="/" style={{ color: '#007bff', fontWeight: '600' }}>
          ← Voltar para todos os módulos
        </Link>
      </div>
    );
  }

  const handleNextModule = () => {
    if (currentModule.nextPath) {
      navigate(currentModule.nextPath);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div>
      {/* Exibe o modal apenas se a verificação terminou e NÃO houver utilizador logado */}
      {!isSessionActive && (
        <UserFormModal onSubmitSuccess={handleFormSubmitSuccess} />
      )}

      <div style={{ maxWidth: '980px', margin: '20px auto 0', padding: '0 15px' }}>
        <Link 
          to="/" 
          style={{
            color: '#007bff',
            fontWeight: '600',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.9rem'
          }}
        >
          ← Voltar para todos os módulos
        </Link>
      </div>

      <ModulePage 
        key={`${id}-${userData?.uid || userData?.nome || 'guest'}`}
        moduleData={currentModule.data} 
        userData={userData}
        onNextModule={handleNextModule} 
      />
    </div>
  );
}