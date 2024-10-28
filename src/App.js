import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppHeader from './components/header';
import Appfooter from './components/footer';
import Inicio from './components/inicio';
import Galeria from './components/galeria';
import Nosotros from './components/Nosotros';
import Contacto from './components/contacto';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router> 
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header>
        <AppHeader id="header" />
      </header>
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/galeria" element={<Galeria />} /> 
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />  
          <Route path="/" element={<Inicio />} exact />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </main>
      <footer>
        <Appfooter id="footer" />
      </footer>
    </div>
  </Router>
  );
}

export default App;