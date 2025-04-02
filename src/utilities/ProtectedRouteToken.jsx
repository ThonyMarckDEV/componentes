import React from 'react';
import { Navigate } from 'react-router-dom';
import jwtUtils from '../utilities/jwtUtils'; // Asegúrate de tener esta utilidad para decodificar el token

const ProtectedRoute = ({ element }) => {
  // Obtener el JWT desde localStorage
  const token = jwtUtils.getTokenFromCookie();

  if (!token) {
      return <Navigate to="/401" />;
  }
  // Si no hay token, se muestra el elemento original
  return element;
};

export default ProtectedRoute;
