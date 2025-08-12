'use client';
import { useEffect, useRef } from 'react';

export default function ScrollHideHeader() {
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const header = document.getElementById('site-header');

      if (!header) return;

      // Mostrar header cuando se hace scroll hacia arriba o está en la parte superior
      if (currentScroll < lastScroll.current || currentScroll < 100) {
        header.style.transform = 'translateY(0)';
        header.style.transition = 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out';
        
        // Cambiar fondo según la posición
        if (currentScroll < 50) {
          // Transparente en la parte superior
          header.style.backgroundColor = 'transparent';
          header.style.backdropFilter = 'none';
        } else {
          // Blanco semi-transparente cuando se hace scroll
          header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
          header.style.backdropFilter = 'blur(8px)';
        }
      } else if (currentScroll > lastScroll.current && currentScroll > 100) {
        // Ocultar header cuando se hace scroll hacia abajo y no está en la parte superior
        header.style.transform = 'translateY(-100%)';
        header.style.transition = 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out';
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}

