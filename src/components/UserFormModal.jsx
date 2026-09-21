import { useState } from 'react';
import './UserFormModal.css'; // Certifique-se de criar este arquivo CSS para estilizar o modal

export default function UserFormModal({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    curso: '',
    objetivo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Salva a identificação no navegador para persistir a sessão
    localStorage.setItem('user_identification', JSON.stringify(formData));
    
    // Notifica o componente pai que o formulário foi preenchido
    onSubmitSuccess(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Identificação de Acesso</h2>
        <p>Preencha os campos abaixo para desbloquear o conteúdo interativo do módulo:</p>

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

          <button type="submit" className="submit-btn">
            Iniciar Módulo
          </button>
        </form>
      </div>
    </div>
  );
}