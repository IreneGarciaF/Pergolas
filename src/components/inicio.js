import './inicio.css'
import Button from 'react-bootstrap/Button';
import ControlledCarousel from './funciones/carrusel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { BsCheck } from "react-icons/bs";

// imagenes
import asterisco from '../assets/asterisco.png'
import servicios1 from '../assets/servicios1.webp'
import servicios2 from '../assets/servicios2.webp'
import servicios3 from '../assets/servicios3.webp'
import servicios4 from '../assets/servicios4.webp'
import servicios5 from '../assets/servicios5.webp'


function Inicio() {
  return (
    <div>
    {/* Introducción con foto */} 

    <div className="main">
      <div className="overlay">
            <h1>Pérgolas Canor</h1>
            <h2>Fabricación propia de pérgolas de madera
            en Murcia y Benissa</h2>
            <p>La mejor pérgola al mejor precio.</p>
            <p>Dinos tu presupuesto, ¡te lo mejoramos!</p>
            <Button variant="link" className="btn-overlay">Solicita presupuesto gratis</Button>
        </div>
    </div>

    <div className="espaciador"></div>

    {/* Carrusel*/} 

    <div>
        <ControlledCarousel className="carrusel"/>
    </div>
    <div className="btn-carrusel">
        <Button variant="link" >Visita nuestra galería</Button>
    </div>

    {/* Columnas con fotos e información */} 
    <Container fluid className="contenedor-servicios">
      <img src={asterisco} className="asterisco-g" alt="Asterisco" />
      <h3>Nuestros servicios</h3>

      <Row className="fila1-servicios">
        <Col md={6} className="texto">
          <div className="texto">
            <img src={asterisco} className="asterisco" alt="Asterisco" />
            <h5>Diseño y construcción de pérgolas</h5>
            <ol className="checklist">
              <span className="lista">
                <BsCheck className="check" />
                <li>Creamos pérgolas personalizadas para adaptarse a cualquier espacio y estilo, utilizando los mejores materiales y técnicas de construcción.</li>
              </span>
            </ol>
          </div>
        </Col>
        <Col md={6}>
          <img src={servicios1} alt="Servicios 1" className="imagen" />
        </Col>
      </Row>

      <Row className="fila2-servicios">
        <Col md={6}>
          <img src={servicios3} alt="Servicios 3" className="imagen" />
        </Col>
        <Col md={6} className="texto">
          <div className="texto">
            <img src={asterisco} className="asterisco" alt="Asterisco" />
            <h5>Revestimientos</h5>
            <ol className="checklist">
              <span className="lista">
                <BsCheck className="check" />
                <li>Instalamos revestimientos de madera de alta calidad que dan un toque de elegancia y calidez a tu hogar.</li>
              </span>
            </ol>
          </div>
        </Col>
      </Row>

      <Row className="fila2-servicios">
        <Col md={6} className="texto">
          <div className="texto">
            <img src={asterisco} className="asterisco" alt="Asterisco" />
            <h5>Cerramientos y tejados</h5>
            <ol className="checklist">
              <span className="lista">
                <BsCheck className="check" />
                <li>Creamos cerramientos de madera y pladur a medida que aportan privacidad y protección a tu terraza o jardín.</li>
                </span>
            <span className="lista">
                <BsCheck className="check" />
                <li>Aislamos y construimos tejados con acabados en teja y tégola.</li>
              </span>
            </ol>
          </div>
        </Col>
        <Col md={6}>
          <img src={servicios2} alt="Servicios 2" className="imagen" />
        </Col>
      </Row>

      <Row className="fila2-servicios">
        <Col md={6}>
          <img src={servicios4} alt="Servicios 4" className="imagen" />
        </Col>
        <Col md={6} className="texto">
          <div className="texto">
            <img src={asterisco} className="asterisco" alt="Asterisco" />
            <h5>Reparación y mantenimiento</h5>
            <ol className="checklist">
              <span className="lista">
                <BsCheck className="check" />
                <li>Un mantenimiento adecuado de tu pérgola le prolonga la vida útil.</li>
                </span>
            <span className="lista">
                <BsCheck className="check" />
                <li>Pintura, cambio de madera estropeada, reparación de cubierta, tanto de tela asfáltica, tégola o teja.</li>
              </span>
            </ol>
          </div>
        </Col>
      </Row>

      <Row className="fila3-servicios">
        <Col md={6} className="texto">
          <div className="texto">
            <img src={asterisco} className="asterisco" alt="Asterisco" />
            <h5>Montaje de estructuras</h5>
            <ol className="checklist">
              <span className="lista">
                <BsCheck className="check" />
                <li>¿Tienes tu propia pérgola? Nosotros te la montamos.</li>
                </span>
            <span className="lista">
                <BsCheck className="check" />
                <li>Casetas, porches, toldos y marquesinas de madera.</li>
                </span>
            <span className="lista">
                <BsCheck className="check" />
                <li>Todos los modelos y estilos.</li>
              </span>
            </ol>
          </div>
        </Col>
        <Col md={6}>
          <img src={servicios5} alt="Servicios 5" className="imagen" />
        </Col>
      </Row>

    </Container>
    </div>
    
  )
}

export default Inicio
