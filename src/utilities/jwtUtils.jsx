// jwtUtils.jsx
import API_BASE_URL from '../js/urlHelper';
import { jwtDecode } from "jwt-decode";

// Función para obtener si el correo está verificado
export const getEmailVerified = (token) => {
  const decodedToken = jwtDecode(token);
  
  // Imprimir el valor de emailVerified
  if (decodedToken) {
   // console.log("emailVerified:", decodedToken.emailVerified);
  }

  // Devolver el valor tal cual está en el token
  return decodedToken ? decodedToken.emailVerified : 0; // Devuelve 0 si no está definido
};

// Otras funciones (como getPerfil, getIdUsuario, etc.)
export const getPerfil = (token) => {
  const decodedToken = jwtDecode(token);
  return decodedToken?.profilePictureUrl ? `${decodedToken.profilePictureUrl}` : '';
};

// Función para obtener el ID del usuario
//export const getIdUsuario = (token) => decodeToken(token)?.idUsuario ?? null;

export const getClaims = (token) => {
  try {
    return jwtDecode(token) ?? null;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

// Función para obtener el username de usuario
//export const getUsername = (token) => decodeToken(token)?.sub ?? null;

export const getUsername = (token) => jwtDecode(token)?.sub ?? null;

// Función para obtener el nombre de usuario
export const getFullName = (token) => jwtDecode(token)?.fullName ?? null;

// Función para obtener el rol del usuario
export const getUserRole = (token) => jwtDecode(token)?.role ?? null;

// Función para obtener el rol del usuario
export const getEmail= (token) => jwtDecode(token)?.email ?? null;

// // Función para verificar si el token está expirado
export const isTokenExpired = (token) => {
  const decodedToken = jwtDecode(token);
  if (decodedToken?.exp) {
    const currentTime = Date.now() / 1000; // Tiempo actual en segundos
    return decodedToken.exp < currentTime;
  }
  return true; // Si no hay exp, considera el token como expirado
};


// Función para obtener la fecha de expiración
export const getTokenExpirationDate = (token) => {
  const exp = jwtDecode(token)?.exp;
  return exp ? new Date(exp * 1000) : null;
};

// Función para verificar el token de manera general
export const verifyToken = (token) => {
  if (!token) {
    return { valid: false, message: "Token no proporcionado" };
  }
  
  if (isTokenExpired(token)) {
    return { valid: false, message: "Token expirado" };
  }
  
  return { valid: true, message: "Token válido" };
};

// Función para obtener el valor de una cookie por su nombre
const getCookie = (name) => {
  const cookieString = document.cookie;
  const cookies = cookieString.split(';').map(cookie => cookie.trim());

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      return decodeURIComponent(cookieValue); // Decodifica el valor de la cookie
    }
  }

  return null; // Si no se encuentra la cookie, devuelve null
};

// // Función para obtener el token JWT de la cookie
export const getTokenFromCookie = () => {
  const tokenName = 'jwt'; // Nombre de la cookie donde se almacena el token
  return getCookie(tokenName);
};


export const removeTokenFromCookie = () => {
  // Elimina el token de la cookie
  document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};


// Function to verify if the account is a Google account
export const isGoogleAccount = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken?.isGoogleAccount === true;
  } catch (error) {
    console.error("Error checking Google account:", error);
    return false;
  }
};

// New function to get the created at date
export const getCreatedAt = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken?.createdAt 
      ? new Date(decodedToken.createdAt).toLocaleDateString('es', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }) 
      : "Usuario desde 2023";
  } catch (error) {
    console.error("Error decoding token for createdAt:", error);
    return "Usuario desde 2023";
  }
};

export default {
  getEmailVerified,
  getPerfil,
  getUsername,
  getFullName,
  getUserRole,
  isTokenExpired,
  getTokenExpirationDate,
  verifyToken,
  getTokenFromCookie,
  removeTokenFromCookie,
  getEmail,
  isGoogleAccount,
  getCreatedAt
};
