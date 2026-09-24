import { auth } from '../services/firebase';

export default function UserRankingTable({ rankingList = [] }) {
  if (!rankingList.length) return null;

  const currentUid = auth.currentUser?.uid;

  return (
    <div className="admin-card">
      <h2>🏆 Ranking Geral de Usuários</h2>
      <div className="table-responsive">
        <table className="ranking-table">
          <thead>
            <tr>
              <th>Posição</th>
              <th>Nome</th>
              <th>Curso / Área</th>
              <th>Pontuação (XP)</th>
              <th>Selos</th>
            </tr>
          </thead>
          <tbody>
            {rankingList.map((u, idx) => (
              <tr key={u.id} className={u.id === currentUid ? 'active-row' : ''}>
                <td>
                  <strong>
                    {idx === 0 ? '🥇 1º' : idx === 1 ? '🥈 2º' : idx === 2 ? '🥉 3º' : `${idx + 1}º`}
                  </strong>
                </td>
                <td>{u.nome || 'Usuário Sem Nome'}</td>
                <td>{u.curso || '—'}</td>
                <td><strong style={{ color: '#28a745' }}>{u.totalXP || 0} XP</strong></td>
                <td>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {u.badges && u.badges.length > 0 ? (
                      u.badges.map((b) => <span key={b.id} title={b.title}>{b.icon}</span>)
                    ) : (
                      <span>—</span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}