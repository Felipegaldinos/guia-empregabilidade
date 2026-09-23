import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './AdminFloatingButton.css';

export default function AdminFloatingButton() {
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Hooks declarados no topo
  const [position, setPosition] = useState(() => ({
    x: typeof window !== 'undefined' ? window.innerWidth - 80 : 20,
    y: typeof window !== 'undefined' ? window.innerHeight - 80 : 20
  }));

  const isDragging = useRef(false);
  const dragStartOffset = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);

  // Manipuladores de movimento e finalização do drag do mouse via refs para evitar re-binds desnecessários
  const handleMouseMove = useRef((e) => {
    if (!isDragging.current) return;
    hasMoved.current = true;

    const newX = Math.max(10, Math.min(window.innerWidth - 70, e.clientX - dragStartOffset.current.x));
    const newY = Math.max(10, Math.min(window.innerHeight - 70, e.clientY - dragStartOffset.current.y));

    setPosition({ x: newX, y: newY });
  });

  const handleMouseUp = useRef(() => {
    isDragging.current = false;
    window.removeEventListener('mousemove', handleMouseMove.current);
    window.removeEventListener('mouseup', handleMouseUp.current);
  });

  // Garante a remoção dos event listeners ao desmontar o componente
  useEffect(() => {
    const mouseMoveHandler = handleMouseMove.current;
    const mouseUpHandler = handleMouseUp.current;

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('mouseup', mouseUpHandler);
    };
  }, []);

  // 2. Retorno antecipado após a declaração de todos os Hooks
  if (location.pathname === '/admin' || location.pathname === '/admin-login') {
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

    window.addEventListener('mousemove', handleMouseMove.current);
    window.addEventListener('mouseup', handleMouseUp.current);
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
      👤
    </div>
  );
}