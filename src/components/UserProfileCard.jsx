export default function UserProfileCard({ userData }) {
  if (!userData) {
    return (
      <div className="admin-card user-profile-card">
        <h2>👤 Dados do Usuário Cadastrado</h2>
        <p className="no-user-warning">Nenhum usuário identificado no momento.</p>
      </div>
    );
  }

  return (
    <div className="admin-card user-profile-card">
      <h2>👤 Dados do Usuário Cadastrado</h2>
      <div className="user-details-grid">
        <div className="user-details">
          <p><strong>Nome:</strong> {userData.nome || 'Não informado'}</p>
          <p><strong>Idade:</strong> {userData.idade ? `${userData.idade} anos` : 'Não informada'}</p>
          <p><strong>Área / Curso:</strong> {userData.curso || 'Não informado'}</p>
          <p><strong>Objetivo:</strong> {userData.objetivo || 'Não informado'}</p>
        </div>

        <div className="user-gamification-info">
          <div className="xp-badge-container">
            <span className="xp-title">Pontuação Total:</span>
            <span className="xp-value">⚡ {userData.totalXP || 0} XP</span>
          </div>

          <div className="badges-wrapper">
            <strong>Selos Conquistados:</strong>
            <div className="badges-list">
              {userData.badges && userData.badges.length > 0 ? (
                userData.badges.map((b) => (
                  <div key={b.id} className="badge-pill" title={b.title}>
                    <span>{b.icon}</span>
                    <small>{b.title}</small>
                  </div>
                ))
              ) : (
                <em style={{ color: '#888', fontSize: '0.9rem' }}>
                  Nenhum selo conquistado ainda (mínimo de 70% de acertos por módulo).
                </em>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}