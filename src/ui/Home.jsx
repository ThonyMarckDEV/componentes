import React from 'react';
import { useNavigate } from 'react-router-dom';

// Componente Home principal
const Home = () => {
  const navigate = useNavigate();
  
  // Función para navegar a diferentes rutas
  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Panel de navegación */}
      <div className="w-full max-w-4xl mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Componentes react</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Botón para Módulo 1 */}
          <button 
            onClick={() => navigateTo('/modulo')}
            className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <span>Módulo Component</span>
          </button>
          
          {/* Botón para Módulo 2 */}
          <button 
            onClick={() => navigateTo('/barraprogreso')}
            className="p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
          >
            <span>Barra Progreso Component</span>
          </button>
          
          {/* Botón para Módulo 3 */}
          <button 
            onClick={() => navigateTo('/modulo3')}
            className="p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
          >
            <span>Módulo 3</span>
          </button>
          
          {/* Botón para Configuración */}
          <button 
            onClick={() => navigateTo('/configuracion')}
            className="p-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
          >
            <span>Configuración</span>
          </button>
          
          {/* Botón para Reportes */}
          <button 
            onClick={() => navigateTo('/reportes')}
            className="p-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center"
          >
            <span>Reportes</span>
          </button>
          
          {/* Botón para Usuarios */}
          <button 
            onClick={() => navigateTo('/usuarios')}
            className="p-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
          >
            <span>Usuarios</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;