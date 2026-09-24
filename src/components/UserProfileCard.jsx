import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import './UserProfileCard.css';

export default function UserProfileCard({ userData }) {
  const [selectedBadge, setSelectedBadge] = useState(null);

  if (!userData) {
    return (
      <div className="admin-card user-profile-card">
        <h2>👤 Dados do Usuário Cadastrado</h2>
        <p className="no-user-warning">Nenhum usuário identificado no momento.</p>
      </div>
    );
  }

  const handleOpenBadge = (badge) => {
    setSelectedBadge(badge);
  };

  const handleCloseBadge = () => {
    setSelectedBadge(null);
  };

  return (
    <>
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
                    <div
                      key={b.id}
                      className="badge-pill clickable"
                      title="Clique para ver detalhes"
                      onClick={() => handleOpenBadge(b)}
                    >
                      <span className="badge-icon">{b.icon}</span>
                      <small className="badge-title">{b.title}</small>
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

      {/* Modal para Visualização Expandida do Selo */}
      {selectedBadge && (
        <div className="badge-modal-overlay" onClick={handleCloseBadge}>
          <div className="badge-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="badge-modal-close"
              onClick={handleCloseBadge}
              aria-label="Fechar detalhes do selo"
            >
              <IoClose size={22} />
            </button>

            <div className="badge-modal-content">
              <div className="badge-modal-icon">{selectedBadge.icon}</div>
              <h3>{selectedBadge.title}</h3>
              {selectedBadge.description ? (
                <p>{selectedBadge.description}</p>
              ) : (
                <p className="badge-default-desc">
                  Selo conquistado com sucesso no módulo por atingir o rendimento mínimo!
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}