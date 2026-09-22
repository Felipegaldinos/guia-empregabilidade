import { Routes, Route, Navigate } from 'react-router-dom';
import ModulesSection from '../ModulesSection';
import DownloadSection from '../DownloadSection';
import ModuleWrapper from '../ModuleWrapper';
import FinalResult from '../FinalResult';
import AdminDashboard from '../AdminDashboard';
import AdminLogin from '../AdminLogin';

import { module1Data } from '../../data/module1Data';
import { module2Data } from '../../data/module2Data';
import { module3Data } from '../../data/module3Data';
import { module4Data } from '../../data/module4Data';

const allModules = [module1Data, module2Data, module3Data, module4Data];

function HomePage() {
  return (
    <>
      <ModulesSection />
      <DownloadSection />
    </>
  );
}

// Componente Reutilizável de Rota Privada
function PrivateRoute({ children, isAuthenticated, redirectTo = '/admin-login' }) {
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
}

export default function AppRoutes() {
  // Checagem dinâmiça da autenticação do Admin
  const isAdminAuthenticated = localStorage.getItem('admin_authenticated') === 'true';

  return (
    <Routes>
      {/* Rotas Públicas */}
      <Route path="/" element={<HomePage />} />
      <Route path="/modulo/:id" element={<ModuleWrapper />} />
      <Route 
        path="/resultado" 
        element={<FinalResult allModulesData={allModules} />} 
      />
      <Route path="/admin-login" element={<AdminLogin />} />

      {/* Rota Privada (Admin) */}
      <Route 
        path="/admin" 
        element={
          <PrivateRoute isAuthenticated={isAdminAuthenticated}>
            <AdminDashboard allModulesData={allModules} />
          </PrivateRoute>
        } 
      />

      {/* Rota Fallback (Redireciona rotas inexistentes para a Home) */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}