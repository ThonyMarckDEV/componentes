import React from 'react';
import BarraProgresoProyecto from '../components/BarraProgresoProyecto';
import Modulo from '../components/Modulo';

// Componente Home principal
const BarraProgreso = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="mb-4">
        <BarraProgresoProyecto />
      </div>
      <div className="mt-4">
        <Modulo />
      </div>
    </div>
  );
};

export default BarraProgreso;
