import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import './AdminLogin.css';

export default function AdminLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);

      localStorage.setItem('admin_authenticated', 'true');
      
      if (onLoginSuccess) {
        onLoginSuccess();
      } 

      navigate('/admin');
    } catch (err) {
      console.error("Erro na autenticação:", err.code, err.message);

      switch (err.code) {
        case 'auth/invalid-credential':
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          setError('E-mail ou senha incorretos.');
          break;
        case 'auth/invalid-email':
          setError('Formato de e-mail inválido.');
          break;
        case 'auth/too-many-requests':
          setError('Muitas tentativas sem sucesso. Tente novamente mais tarde.');
          break;
        default:
          setError('Erro ao realizar login. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-icon">🔐</div>
        <h2>Acesso ao Painel</h2>
        <p className="login-subtitle">Informe suas credenciais do Firebase para acessar</p>

        {error && <div className="login-error-message">{error}</div>}

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError('');
              }}
              placeholder="seu-email@exemplo.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError('');
              }}
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="btn-login" disabled={loading}>
            {loading ? 'Autenticando...' : 'Entrar no Painel'}
          </button>
        </form>

        <div className="login-navigation-actions" style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button className="btn-form-redirect" onClick={() => navigate('/modulo/1')} style={{ cursor: 'pointer', padding: '10px', borderRadius: '6px', border: '1px solid #007bff', background: '#e7f1ff', color: '#007bff', fontWeight: '500' }}>
            📝 Ir para o Formulário
          </button>

          <button className="btn-back" onClick={() => navigate('/')}>
            ← Voltar ao Início
          </button>
        </div>
      </div>
    </div>
  );
}