import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import Header from './components/Header';
import ModulesSection from './components/ModulesSection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import ModulePage from './components/ModulePage';

import { module1Data } from './data/module1Data';
import { module2Data } from './data/module2Data';
import { module3Data } from './data/module3Data';
import { module4Data } from './data/module4Data';

import './App.css';

// Mapeamento centralizado dos 4 módulos
const modulesMap = {
  1: { data: module1Data, nextPath: '/modulo/2' },
  2: { data: module2Data, nextPath: '/modulo/3' },
  3: { data: module3Data, nextPath: '/modulo/4' }, 
  4: { data: module4Data, nextPath: null }          // Substitua null por module4Data
};

// Componente da Página Inicial
function HomePage() {
  return (
    <>
      <ModulesSection />
      <DownloadSection />
    </>
  );
}

// Componente Wrapper Dinâmico com suporte a rotas e parâmetros
function ModuleWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const currentModule = modulesMap[id];

  // Caso acesse um módulo inválido ou ainda não cadastrado
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

      {/* Forçar o recarregamento do componente ao mudar o ID usando a prop `key` */}
      <ModulePage 
        key={id}
        moduleData={currentModule.data} 
        onNextModule={handleNextModule} 
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Rota dinâmica que atende /modulo/1, /modulo/2, /modulo/3 e /modulo/4 */}
            <Route path="/modulo/:id" element={<ModuleWrapper />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}