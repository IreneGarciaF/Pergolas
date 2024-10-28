import {Nav, Row, Col, Container, Button, Form} from 'react-bootstrap';
import { BsCheck } from 'react-icons/bs';
import MapComponent from './funciones/mapa';
import './contacto.css'

function contacto() {
     const location1 = [37.973908, -1.116070]; // Coordenadas de la primera ubicación
    const location2 = [38.721646, 0.055500]; // Coordenadas de la segunda ubicación
  return (
    <div>
      <div className="contenedor-contacto">
        <Row className="contacto">
            <Col md={4} className="atencion">
            <h4>Atención <br/> personalizada</h4>
            <ol className="checklist-atencion">
              <span className="lista-atencion">
                <BsCheck className="check-atencion" />
                <li>Contamos con un equipo de profesionales altamente cualificados y responsables.</li>
                </span>
            <span className="lista-atencion">
                <BsCheck className="check-atencion" />
                <li>Ellos se encargarán de asesorarte y guiarte en cada paso del proyecto, desde el diseño hasta la instalación final.</li>
              </span>
            </ol>
            </Col>

            <Col className="d-flex align-items-center justify-content-center">
                    <div style={{ borderLeft: '1px solid #ccc', height: '100%', margin: '0 10px' }}></div>
                </Col>

            <Col md={7} className="formulario">
                <Form.Group className="form-contacto">
                    <Form.Label className="etiqueta">Nombre y Apellidos</Form.Label>
                    <Form.Label className="obligatorio"> (obligatorio)</Form.Label>
                    <Form.Control as="textarea" rows={2} type="text" required />
                    <Form.Control.Feedback type="introduce un nombre válido" />
                </Form.Group>
                <Form.Group className="form-contacto">
                    <Form.Label className="etiqueta">Correo electrónico</Form.Label>
                    <Form.Label className="obligatorio"> (obligatorio)</Form.Label>
                    <Form.Control as="textarea" rows={2} type="email" required />
                    <Form.Control.Feedback type="el email que has introducido no es válido" />
                </Form.Group>
                <Form.Group className="form-contacto" >
                    <Form.Label className="etiqueta">Teléfono</Form.Label>
                    <Form.Label className="obligatorio"> (obligatorio)</Form.Label>
                    <Form.Control as="textarea" rows={2} type="text" required />
                    <Form.Control.Feedback type="introduce un teléfono válido" />
                </Form.Group>
                <Form.Group className="form-contacto" >
                    <Form.Label className="etiqueta">Población</Form.Label>
                    <Form.Label className="obligatorio"> (obligatorio)</Form.Label>
                    <Form.Control as="textarea" rows={2} type="text" required />
                    <Form.Control.Feedback type="introduce un nombre válido" />
                </Form.Group>
                <Form.Group className="form-contacto" >
                    <Form.Label className="etiqueta">Dinos qué necesitas</Form.Label>
                    <Form.Control as="textarea" rows={8} />
                </Form.Group>
                <Button variant="link" className="btn-form">Contáctanos</Button>
            </Col>
        </Row>
      </div>

      <div>
      <Container fluid className= "contenedor-mapa">
    
        <Row className="fila-mapas">
        <Col md={6} className="mapa-1">
        <MapComponent position={location1}/>
        <Nav.Link href="https://maps.app.goo.gl/fGUVNkX89n6ZPmxv7" className="direccion">Calle Naranjo, Murcia, Murcia (30011)</Nav.Link>
        </Col>

        <Col md={6} className="mapa-2">
        <MapComponent position={location2}/>
        <Nav.Link href="https://maps.app.goo.gl/BQvRVNdfRmC9xCwE6" className="direccion" >Camino Viejo de Valencia s/n, Benissa, Alicante (03720)</Nav.Link>
        </Col>
        </Row>
      </Container>
      </div>

      <div className="privacidad">
        <div className="texto-privacidad">
          <p>
          Pérgolas Canor, te informa sobre su Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través del sitio Web <Nav.Link href="https://pergolascanor.es" >http://www.pergolascanor.es</Nav.Link>
          </p>
          <p>
          En este sentido, el Titular garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y de Garantía de Derechos Digitales (LOPD GDD). Cumple también con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD).
          </p>
          <p>
          El uso de sitio Web implica la aceptación de esta Política de Privacidad así como las condiciones incluidas en el Aviso Legal.
          </p>
          </div>
      </div>


    </div>
  )
}

export default contacto
