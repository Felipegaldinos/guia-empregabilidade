import { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './AdminFloatingButton.css';

export default function AdminFloatingButton() {
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Declarar TODOS os Hooks no topo
  const [position, setPosition] = useState(() => ({
    x: typeof window !== 'undefined' ? window.innerWidth - 80 : 20,
    y: typeof window !== 'undefined' ? window.innerHeight - 80 : 20
  }));
  
  const isDragging = useRef(false);
  const dragStartOffset = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);

  // 2. Se estiver na página do Admin, retorna null DEPOIS dos hooks serem executados
  if (location.pathname === '/admin') {
    return null;
  }

  // Início do arraste (Mouse)
  const handleMouseDown = (e) => {
    isDragging.current = true;
    hasMoved.current = false;
    dragStartOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Movimento do arraste (Mouse)
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    hasMoved.current = true;

    const newX = Math.max(10, Math.min(window.innerWidth - 70, e.clientX - dragStartOffset.current.x));
    const newY = Math.max(10, Math.min(window.innerHeight - 70, e.clientY - dragStartOffset.current.y));

    setPosition({ x: newX, y: newY });
  };

  // Fim do arraste (Mouse)
  const handleMouseUp = () => {
    isDragging.current = false;
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  // Suporte a Telas Sensíveis ao Toque (Mobile)
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    isDragging.current = true;
    hasMoved.current = false;
    dragStartOffset.current = {
      x: touch.clientX - position.x,
      y: touch.clientY - position.y
    };
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    hasMoved.current = true;
    const touch = e.touches[0];

    const newX = Math.max(10, Math.min(window.innerWidth - 70, touch.clientX - dragStartOffset.current.x));
    const newY = Math.max(10, Math.min(window.innerHeight - 70, touch.clientY - dragStartOffset.current.y));

    setPosition({ x: newX, y: newY });
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const handleClick = () => {
    if (!hasMoved.current) {
      navigate('/admin');
    }
  };

  return (
    <div
      className="admin-floating-btn"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
      title="Painel de Administração"
    >
      👤 {/* Substituído a engrenagem pelo boneco */}
    </div>
  );
}