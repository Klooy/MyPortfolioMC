import React, { useState, useEffect } from 'react';
import { Home, RefreshCw } from 'lucide-react';

const NotFound = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isHovering) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        setPosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovering]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="relative inline-block"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <h1 
            className="text-9xl font-bold text-white mb-8"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: 'transform 0.2s ease-out'
            }}
          >
            404
          </h1>
        </div>
        
        <h2 className="text-3xl font-semibold text-gray-300 mb-4">
          ¡Página no encontrada!
        </h2>
        
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Lo siento, la página que estás buscando parece que se ha perdido en el espacio digital.
        </p>
        
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RefreshCw size={20} />
            Volver atrás
          </button>
          
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            <Home size={20} />
            Ir al inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;