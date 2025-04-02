import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../img/talkylogo.png';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 sm:px-8 py-3 bg-gradient-to-r from-gray-900 to-black text-white shadow-md">
      {/* Logo de Talky */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Talky" className="h-8 mr-2" />
      </Link>
      
      {/* Botones de acción */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        <Link 
          to="/register" 
          className="border border-gray-700 bg-black bg-opacity-40 px-3 sm:px-5 py-2 text-sm font-medium rounded-full hover:border-white transition-all duration-300"
        >
          Registrarse
        </Link>
        <Link 
          to="/login" 
          className="bg-white text-black px-3 sm:px-5 py-2 text-sm font-medium rounded-full hover:bg-gray-200 transition-all duration-300 shadow-sm"
        >
          Iniciar Sesión
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;