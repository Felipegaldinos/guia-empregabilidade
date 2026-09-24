import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';

import { useDashboardData } from '../hooks/useDashboardData';
import UserProfileCard from './UserProfileCard';
import UserRankingTable from './UserRankingTable';
import ModuleDetailsList from './ModuleDetailsList';
import AdminMetricsGrid from './AdminMetricsGrid';
import './AdminDashboard.css';

export default function AdminDashboard({ allModulesData = [], onSelectModule }) {
  const navigate = useNavigate();
  const { userData, modulesProgress, allUsersRanking, loading, metrics } = useDashboardData(allModulesData);

  const handleLogout = async () => {
    if (window.confirm("Deseja realmente sair do Painel?")) {
      try {
        await signOut(auth);
      } catch (error) {
        console.error("Erro ao deslogar no Firebase:", error);
      }
      localStorage.removeItem('admin_authenticated');
      localStorage.removeItem('user_session_active');
      navigate('/admin-login');
    }
  };

  const handleContinueModule = (moduleId) => {
    if (onSelectModule) {
      onSelectModule(moduleId);
      navigate('/');
    } else {
      navigate(`/modulo/${moduleId}`);
    }
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '40px' }}>Carregando dados do painel...</div>;
  }

  return (
    <div className="admin-container">
      {/* Header */}
      <div className="admin-header">
        <div>
          <h1>📊 Painel de Monitoramento (Admin)</h1>
          <p>Acompanhamento de progresso, sistema de pontuação e ranking</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn-back-home" onClick={() => navigate('/')}>← Voltar à Home</button>
          <button className="btn-logout" onClick={handleLogout}>🚪 Sair / Deslogar</button>
        </div>
      </div>

      {/* Perfil & Gamificação */}
      <UserProfileCard userData={userData} />

      {/* Grid de Métricas Visuais */}
      <AdminMetricsGrid 
        metrics={metrics} 
        totalXP={userData?.totalXP} 
        totalModules={allModulesData.length} 
      />

      {/* Tabela de Ranking */}
      <UserRankingTable rankingList={allUsersRanking} />

      {/* Lista de Módulos */}
      <ModuleDetailsList 
        modulesProgress={modulesProgress} 
        onContinueModule={handleContinueModule} 
      />
    </div>
  );
}