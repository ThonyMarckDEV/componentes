//import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';

//Contextos


// Componentes Home
import Home from './ui/Home';

// UIS AUTH
import ErrorPage from './components/ErrorPage';
import ErrorPage401 from './components/ErrorPage401';

// Components
import Modulo from './components/Modulo';
import BarraProgresoProyecto from './ui/BarraProgreso';



// Utilities
import ProtectedRouteHome from './utilities/ProtectedRouteHome';
//import ProtectedRouteUser from './utilities/ProtectedRouteUser';
//import ProtectedRouteToken from './utilities/ProtectedRouteToken';

// Scripts
//import { updateLastActivity } from './js/lastActivity';


function AppContent() {
  //const location = useLocation();

  // useEffect(() => {
  //   const token = jwtUtils.getTokenFromCookie();

  //   if (token) {
  //     updateLastActivity();

  //     const intervalId = setInterval(() => {
  //       updateLastActivity();
  //     }, 10000);

  //     return () => clearInterval(intervalId);
  //   }
  // }, [location.pathname]);


  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<ProtectedRouteHome element={<Home />} />} />

      <Route path="/modulo"  element={<Modulo />} />

      <Route path="/barraprogreso"  element={<BarraProgresoProyecto />} />
      

    
      {/* Ruta de error */}
      <Route path="/404" element={<ErrorPage />} />
      <Route path="/401" element={<ErrorPage401 />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;