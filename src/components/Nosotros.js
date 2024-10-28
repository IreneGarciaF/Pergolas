import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsCheck } from 'react-icons/bs';
import './nosotros.css'

// imagenes
import asterisco from '../assets/asterisco.png';
import nosotros1 from '../assets/nosotros1.webp';
import nosotros2 from '../assets/nosotros2.webp';
import nosotros3 from '../assets/nosotros4.webp';
import nosotros4 from '../assets/nosotros3.webp';


function Nosotros() {
  return (
    <div className="nosotros">
      <Container fluid className="contenedor-nosotros">
        <img src={asterisco} className="asterisco-n" alt="Asterisco" />
        <h3>Nuestros servicios</h3>
        

        <Row className="fila1-nosotros">
          <Col md={6} className="texto-col">
            <div className="texto-n">
              <ol className="checklist-n">
                <span className="lista-n">
                  <BsCheck className="check-n" />
                  <li>Pérgolas Canor es la parte especializada en estructuras y pérgolas de madera de Carpintería Canor, con más de 40 años de experiencia en el sector de la madera.</li>
                </span>
              </ol>
            </div>
          </Col>
          <Col md={6}>
            <img src={nosotros1} alt="Nosotros 1" className="imagen-n" />
          </Col>
        </Row>


        <Row className="fila2-nosotros">
          <Col md={6}>
            <img src={nosotros2} alt="Nosotros 2" className="imagen-n" />
          </Col>
          <Col md={6} className="texto-col">
            <div className="texto-n">
              <ol className="checklist-n">
                <span className="lista-n">
                  <BsCheck className="check-n" />
                  <li>Nos especializamos en la creación de estructuras a medida, como cubiertas, pérgolas, cerramientos y revestimientos, para que puedas disfrutar de tu hogar y al aire libre con estilo y confort.</li>
                </span>
              </ol>
            </div>
          </Col>
        </Row>

        <Row className="fila2-nosotros">
          <Col md={6} className="texto-col">
            <div className="texto-n">
              <ol className="checklist-n">
                <span className="lista-n">
                  <BsCheck className="check-n" />
                  <li>Tenemos un equipo de alta cualificación y un backoffice para hacer realidad aquello que imagines y logran una total satisfacción del producto y su instalación final.</li>
                </span>
              </ol>
            </div>
          </Col>
          <Col md={6}>
            <img src={nosotros3} alt="Nosotros 3" className="imagen-n" />
          </Col>
        </Row>


        <Row className="fila3-nosotros">
          <Col md={6}>
            <img src={nosotros4} alt="Nosotros 4" className="imagen-n" />
          </Col>
          <Col md={6} className="texto-col">
            <div className="texto-n">
              <ol className="checklist-n">
                <span className="lista-n">
                  <BsCheck className="check-n" />
                  <li>Contamos con un equipo de profesionales altamente cualificados y responsables. Ellos se encargarán de asesorarte y guiarte en cada paso del proyecto, desde el diseño hasta la instalación final.</li>
                </span>
              </ol>
            </div>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default Nosotros;
