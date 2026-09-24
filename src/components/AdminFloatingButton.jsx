import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import './AdminFloatingButton.css';

export default function AdminFloatingButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const [position, setPosition] = useState(() => ({
    x: typeof window !== 'undefined' ? window.innerWidth - 80 : 20,
    y: typeof window !== 'undefined' ? window.innerHeight - 80 : 20
  }));

  const [showTooltip, setShowTooltip] = useState(true);

  const isDragging = useRef(false);
  const dragStartOffset = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);

  // Timer para exibir a mensagem a cada 3 minutos (180.000 ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setShowTooltip(true);
    }, 180000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    hasMoved.current = true;

    const newX = Math.max(10, Math.min(window.innerWidth - 70, e.clientX - dragStartOffset.current.x));
    const newY = Math.max(10, Math.min(window.innerHeight - 70, e.clientY - dragStartOffset.current.y));

    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  if (location.pathname === '/admin' || location.pathname === '/admin-login') {
    return null;
  }

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

  const handleCloseTooltip = (e) => {
    e.stopPropagation(); // Evita disparar o clique do botão/navegação
    setShowTooltip(false);
  };

  return (
    <div
      className="admin-floating-container"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
      title="Painel de Administração"
    >
      {showTooltip && (
        <div className="admin-tooltip">
          <span>Acompanhe seus resultados</span>
          <button
            className="admin-tooltip-close"
            onClick={handleCloseTooltip}
            aria-label="Fechar mensagem"
          >
            <IoClose size={14} />
          </button>
        </div>
      )}

      <div className="admin-floating-btn">
        <FaUserShield size={22} />
      </div>
    </div>
  );
}