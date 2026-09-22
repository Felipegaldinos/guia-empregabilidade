import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
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
  const [isLoading, setIsLoading] = useState(true); // Evita renderizar o modal antes de ler o localStorage

  useEffect(() => {
    const savedUser = localStorage.getItem('user_identification');
    const sessionActive = localStorage.getItem('user_session_active');
    const adminAuth = localStorage.getItem('admin_authenticated');

    // Considera logado se houver usuário salvo E (sessão ativa OU admin logado)
    if (savedUser && (sessionActive === 'true' || adminAuth === 'true')) {
      setUserData(JSON.parse(savedUser));
      setIsSessionActive(true);
    } else {
      setIsSessionActive(false);
    }

    setIsLoading(false); // Conclui a leitura do localStorage
  }, [id]);

  const handleFormSubmitSuccess = (data) => {
    localStorage.setItem('user_identification', JSON.stringify(data));
    localStorage.setItem('user_session_active', 'true');
    localStorage.setItem('admin_authenticated', 'true');

    setUserData(data);
    setIsSessionActive(true);
  };

  const currentModule = modulesMap[id];

  // Enquanto lê o localStorage, não renderiza nada para evitar o "piscar" do modal
  if (isLoading) {
    return <div style={{ textAlign: 'center', padding: '40px' }}>Carregando...</div>;
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
      {/* Exibe o modal SOMENTE se a checagem terminou e NÃO houver sessão ativa */}
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
        key={`${id}-${userData?.nome || 'guest'}`}
        moduleData={currentModule.data} 
        userData={userData}
        onNextModule={handleNextModule} 
      />
    </div>
  );
}