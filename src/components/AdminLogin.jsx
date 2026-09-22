import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

export default function AdminLogin({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 1. Busca os dados cadastrados salvos no localStorage
    const savedUserData = JSON.parse(localStorage.getItem('user_identification') || 'null');

    // 2. Verifica se existe algum cadastro realizado
    if (!savedUserData) {
      setError('Nenhum usuário cadastrado encontrado. Por favor, faça o cadastro primeiro.');
      return;
    }

    // 3. Normaliza os nomes para evitar erros de acentuação/espaços extras/letras maiúsculas
    const inputUser = username.trim().toLowerCase();
    const savedUser = (savedUserData.nome || '').trim().toLowerCase();
    const inputPassword = password.trim();
    const savedPassword = (savedUserData.senha || '').trim();

    // 4. Valida se o Nome e a Senha coincidem com o cadastro
    if (inputUser === savedUser && inputPassword === savedPassword) {
      localStorage.setItem('admin_authenticated', 'true');
      
      if (onLoginSuccess) {
        onLoginSuccess();
      }
      
      navigate('/admin');
    } else {
      setError('Nome completo ou senha incorretos.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-icon">🔐</div>
        <h2>Acesso ao Painel</h2>
        <p className="login-subtitle">Informe o nome completo e senha cadastrados</p>

        {error && <div className="login-error-message">{error}</div>}

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Nome Completo</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (error) setError('');
              }}
              placeholder="Digite o seu nome completo"
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

          <button type="submit" className="btn-login">
            Entrar no Painel
          </button>
        </form>

        <button className="btn-back" onClick={() => navigate('/')}>
          ← Voltar ao Início
        </button>
      </div>
    </div>
  );
}