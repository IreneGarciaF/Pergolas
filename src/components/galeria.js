import {Container, Row, Col, Image} from 'react-bootstrap';
import './galeria.css';

//imagenes
import imagen1 from '../assets/Imagen1.webp';
import imagen2 from '../assets/Imagen2.webp';
import imagen3 from '../assets/Imagen3.webp';
import imagen4 from '../assets/imagen17.webp';
import imagen5 from '../assets/imagen5.webp';
import imagen6 from '../assets/imagen6.webp';
import imagen7 from '../assets/imagen7.webp';
import imagen8 from '../assets/imagen8.webp';
import imagen9 from '../assets/imagen9.webp';
import imagen10 from '../assets/Imagen23.webp';
import imagen11 from '../assets/imagen20.webp';
import imagen12 from '../assets/imagen12.webp';
import imagen13 from '../assets/imagen13.webp';
import imagen14 from '../assets/imagen14.webp';
import imagen15 from '../assets/imagen15.webp';
import imagen16 from '../assets/imagen16.webp';
import imagen17 from '../assets/imagen18.webp';
import imagen18 from '../assets/imagen19.webp';


function galeria() {
  return (
    <div className= "galeria" >
      <Container fluid className= "container-galeria">
      <Row className="fila1">
        <Col xs={6} md={6}>
          <Image src={imagen1} rounded className="f1c1"/>
        </Col>
        <Col xs={6} md={6}>
          <Image src={imagen2} rounded className="f1c2"/>
        </Col>
      </Row>

      <Row className="fila2">
        <Col xs={6} md={4}>
          <Image src={imagen3} rounded className="f2c1"/>
        </Col>
        <Col xs={6} md={4}>
          <Image src={imagen4} rounded className="f2c2"/>
        </Col>
        <Col xs={6} md={4}>
          <Image src={imagen5} rounded className="f2c3"/>
        </Col>
      </Row> 

      <Row className="fila3">
        <Col xs={6} md={8}>
          <Image src={imagen6} rounded className="f3c1"/>
        </Col>
        <Col xs={6} md={4}>

        <Row>
            <Col>
                <Image src={imagen7} rounded className="f3c2" />
            </Col>
        </Row>
        <Row>
            <Col>
                <Image src={imagen8} rounded className="f3c3" />
            </Col>
            </Row>
        </Col>
      </Row>

      <Row className="fila4">
        <Col xs={6} md={4}>
          <Image src={imagen10} rounded className="f4c1"/>
        </Col>
        <Col xs={6} md={8}>
          <Image src={imagen9} rounded className="f4c2"/>
        </Col>
      </Row> 

      <Row className="fila2">
        <Col xs={6} md={4}>
          <Image src={imagen11} rounded className="f2c1"/>
        </Col>
        <Col xs={6} md={4}>
          <Image src={imagen12} rounded className="f2c2"/>
        </Col>
        <Col xs={6} md={4}>
          <Image src={imagen13} rounded className="f2c3"/>
        </Col>
      </Row> 

      <Row className="fila3">
        
        <Col xs={6} md={4}>

        <Row>
            <Col>
                <Image src={imagen14} rounded className="f3c2" />
            </Col>
        </Row>
        <Row>
            <Col>
                <Image src={imagen15} rounded className="f3c3" />
            </Col>
            </Row>
        </Col>
        <Col xs={6} md={8}>
          <Image src={imagen16} rounded className="f3c1"/>
        </Col>
      </Row>
    
      <Row className="fila1">
        <Col xs={6} md={6}>
          <Image src={imagen17} rounded className="f1c1"/>
        </Col>
        <Col xs={6} md={6}>
          <Image src={imagen18} rounded className="f1c2"/>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default galeria
