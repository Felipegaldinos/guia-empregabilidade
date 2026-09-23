import { BrowserRouter, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminFloatingButton from './components/AdminFloatingButton';
import AppRoutes from './components/Rotas/AppRoutes';
import { AuthProvider } from './contexts/AuthContext';

import './App.css';

function AppLayout() {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin' || location.pathname === '/admin-login';

  return (
    <div className="app-container">
      {!isAdminPage && <Header />}

      <main className="main-content">
        <AppRoutes />
      </main>

      {!isAdminPage && <Footer />}

      <AdminFloatingButton />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </BrowserRouter>
  );
}