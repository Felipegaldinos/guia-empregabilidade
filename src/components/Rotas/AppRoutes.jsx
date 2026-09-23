import { Routes, Route, Navigate } from 'react-router-dom';
import ModulesSection from '../ModulesSection';
import DownloadSection from '../DownloadSection';
import ModuleWrapper from '../ModuleWrapper';
import FinalResult from '../FinalResult';
import AdminDashboard from '../AdminDashboard';
import AdminLogin from '../AdminLogin';
import { useAuth } from '../../contexts/AuthContext';

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

function PrivateRoute({ children }) {
  const { currentUser, loading } = useAuth();

  if (loading) return <div>Carregando...</div>;

  if (!currentUser) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/modulo/:id" element={<ModuleWrapper />} />
      <Route 
        path="/resultado" 
        element={<FinalResult allModulesData={allModules} />} 
      />
      <Route path="/admin-login" element={<AdminLogin />} />

      <Route 
        path="/admin" 
        element={
          <PrivateRoute>
            <AdminDashboard allModulesData={allModules} />
          </PrivateRoute>
        } 
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}