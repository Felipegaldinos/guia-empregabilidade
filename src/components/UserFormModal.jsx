import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import './UserFormModal.css';

export default function UserFormModal({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    curso: '',
    objetivo: '',
    email: '',
    senha: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
  
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email.trim(), 
        formData.senha
      );

      const user = userCredential.user;

      const userPayload = {
        uid: user.uid,
        nome: formData.nome.trim(),
        idade: Number(formData.idade),
        curso: formData.curso.trim(),
        objetivo: formData.objetivo.trim(),
        email: formData.email.trim(),
        createdAt: serverTimestamp()
      };

      await setDoc(doc(db, 'users', user.uid), userPayload);

      localStorage.setItem('user_identification', JSON.stringify(userPayload));
      localStorage.setItem('user_session_active', 'true');

      onSubmitSuccess(userPayload);

    } catch (err) {
      console.error("Erro no cadastro Firebase:", err.code, err.message);

      switch (err.code) {
        case 'auth/email-already-in-use':
          setError('Não foi possível concluir o cadastro. E-mail com restrição.');
          break;
        case 'auth/weak-password':
          setError('A senha deve conter no mínimo 6 caracteres.');
          break;
        case 'auth/invalid-email':
          setError('Digite um e-mail válido.');
          break;
        default:
          setError('Ocorreu um erro ao realizar o cadastro. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Cadastro de Acesso</h2>
        <p>Preencha seus dados para criar seu perfil e acessar o módulo:</p>

        {error && <div className="modal-error-message" style={{ color: '#dc3545', marginBottom: '15px' }}>{error}</div>}

        <form onSubmit={handleSubmit} className="user-form">
          <div className="form-group">
            <label htmlFor="nome">Nome Completo</label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              placeholder="Digite seu nome"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="idade">Idade</label>
            <input
              type="number"
              id="idade"
              name="idade"
              required
              min="10"
              max="100"
              placeholder="Sua idade"
              value={formData.idade}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="curso">Área de Atuação ou Curso</label>
            <input
              type="text"
              id="curso"
              name="curso"
              required
              placeholder="Ex.: Programação Full Stack / SENAI"
              value={formData.curso}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="objetivo">Objetivo Principal</label>
            <input
              type="text"
              id="objetivo"
              name="objetivo"
              required
              placeholder="Ex.: Criar 1º portfólio, Melhorar LinkedIn"
              value={formData.objetivo}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="seu-email@exemplo.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Crie uma Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              required
              minLength={6}
              placeholder="Crie sua senha (mínimo 6 caracteres)"
              value={formData.senha}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Cadastrando...' : 'Cadastrar e Iniciar Módulo'}
          </button>
        </form>
      </div>
    </div>
  );
}