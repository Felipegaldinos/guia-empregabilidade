export default function AdminMetricsGrid({ metrics, totalXP, totalModules }) {
  return (
    <div className="admin-metrics-grid">
      <div className="metric-card">
        <span className="metric-label">Módulos Concluídos</span>
        <span className="metric-number">{metrics.completedModulesCount} de {totalModules}</span>
      </div>
      <div className="metric-card">
        <span className="metric-label">Progresso Geral</span>
        <span className="metric-number">{metrics.overallCompletionPercentage}%</span>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${metrics.overallCompletionPercentage}%` }}></div>
        </div>
      </div>
      <div className="metric-card">
        <span className="metric-label">Aproveitamento Médio</span>
        <span className="metric-number">{metrics.overallAccuracy}%</span>
        <span className="metric-subtext">{metrics.grandTotalCorrect} acertos em {metrics.grandTotalAnswered} respondidas</span>
      </div>
      <div className="metric-card highlight-xp">
        <span className="metric-label">Total de XP</span>
        <span className="metric-number">{totalXP || 0} XP</span>
        <span className="metric-subtext">+{metrics.grandTotalCorrect * 10} XP acumulados nas questões</span>
      </div>
    </div>
  );
}