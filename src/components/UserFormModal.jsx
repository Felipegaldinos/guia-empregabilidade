import { useState } from 'react';
import './UserFormModal.css';

export default function UserFormModal({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    curso: '',
    objetivo: '',
    senha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Salva a ficha de cadastro do usuário
    localStorage.setItem('user_identification', JSON.stringify(formData));

    // 2. Marca a sessão do usuário como ativa (para não perder o login ao navegar)
    localStorage.setItem('user_session_active', 'true');

    // 3. Autentica o usuário automaticamente como Administrador
    localStorage.setItem('admin_authenticated', 'true');

    // 4. Dispara o callback informando o sucesso
    onSubmitSuccess(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Cadastro de Acesso</h2>
        <p>Preencha seus dados para criar seu perfil e acessar o módulo:</p>

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
              placeholder="Ex.: Criar 1º portfólio, Melhorar LinkedIn, Evitar fraudes"
              value={formData.objetivo}
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
              placeholder="Crie sua senha de acesso"
              value={formData.senha}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            Cadastrar e Iniciar Módulo
          </button>
        </form>
      </div>
    </div>
  );
}