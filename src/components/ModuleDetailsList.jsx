export default function ModuleDetailsList({ modulesProgress, onContinueModule }) {
  return (
    <div className="admin-card">
      <h2>📚 Detalhamento por Módulo</h2>
      <div className="modules-list">
        {modulesProgress.map((mod) => (
          <div key={mod.id} className="module-status-item">
            <div className="module-info">
              <h3>Módulo {mod.id}: {mod.title}</h3>
              <span className={`status-badge ${mod.isCompleted ? 'completed' : 'in-progress'}`}>
                {mod.isCompleted ? '✓ Concluído' : `Em andamento (${mod.answeredCount}/${mod.totalQuestions})`}
              </span>
            </div>

            <div className="module-stats-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', flexWrap: 'wrap', width: '100%' }}>
              <div className="module-stats">
                <div>
                  <small>Respondidas:</small>
                  <p>{mod.answeredCount} / {mod.totalQuestions}</p>
                </div>
                <div>
                  <small>Acertos:</small>
                  <p>{mod.correctCount}</p>
                </div>
                <div>
                  <small>Aproveitamento:</small>
                  <p><strong>{mod.accuracy}%</strong></p>
                </div>
              </div>

              {!mod.isCompleted && (
                <button
                  className="btn-continue-module"
                  onClick={() => onContinueModule(mod.id)}
                >
                  {mod.answeredCount > 0 ? 'Continuar de onde parou →' : 'Iniciar Módulo →'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}