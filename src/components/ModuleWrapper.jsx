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
  4: { data: module4Data, nextPath: null }
};

export default function ModuleWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  // Verifica se o usuário já preencheu os dados anteriormente
  useEffect(() => {
    const savedUser = localStorage.getItem('user_identification');
    if (savedUser) {
      setUserData(JSON.parse(savedUser));
    }
  }, []);

  const currentModule = modulesMap[id];

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
    } else {
      alert("Parabéns! Você concluiu todos os módulos!");
    }
  };

  return (
    <div>
      {/* Se não houver dados do usuário salvos, bloqueia e exibe o modal */}
      {!userData && (
        <UserFormModal onSubmitSuccess={(data) => setUserData(data)} />
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
        key={id}
        moduleData={currentModule.data} 
        onNextModule={handleNextModule} 
      />
    </div>
  );
}