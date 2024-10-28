import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

//estilo
import './footer.css';

function Appfooter() {
  return (
    <Container fluid className="contenedor-footer">
      <Row>
        <Col>
            <div className="div-pergolas">
                <h2> Pérgolas Canor </h2>
                <p>Nos especializamos en la creación de estructuras a medida, como <b>cubiertas, pérgolas, cerramientos y revestimientos </b>, para que puedas disfrutar de tu hogar y al aire libre con estilo y confort.</p>
                <div className="btn-footer">
                <Button variant="link" className="btn-presupuesto" href="#" >Solicita tu presupuesto</Button>
                <Button variant="link" className="btn-whatsapp" href="https://web.whatsapp.com/" >Consulta por WhatsApp</Button>
                </div>
            </div>
        </Col>
        <Col>
        <div className="div-contacto"> 
            <h5>Contacto</h5>
            <div>
                <div>
                    <a href="https://www.google.com/maps/place/38%C2%B043'17.9%22N+0%C2%B003'19.8%22E/@38.721646,0.0555,17z/data=!3m1!4b1!4m4!3m3!8m2!3d38.721646!4d0.0555?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"> 
                    <p>Camino Viejo de Valencia </p>
                    <p>Benissa, Alicante 03720</p>
                    </a>
                </div>
                <p>
                    <a href="tel:+34965730087">965 730 087</a>
                </p>
            </div>
            <div>
                <div>
                    <a href="https://www.google.com/maps/place/Pergolas+Canor/@37.974165,-1.1187959,576m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd6383a13b175091:0x25981e1d829e7e26!8m2!3d37.974165!4d-1.116221!16s%2Fg%2F11y4szfng6?entry=tts&g_ep=EgoyMDI0MDUyOS4wKgBIAVAD"> 
                    <p>Calle Naranjo</p>
                    <p>Murcia, Murcia 30011</p>
                    </a>
                </div>
                <p>
                    <a href="tel:+34968842335">968 842 335</a>
                </p>
            </div>
            <div>
                <p>
                    <a href="mailto:info@pergolascanor.es">info@pergolascanor.es</a>
                </p>
                <p>
                    <a href="tel:+34614306304">614 30 63 04</a>
                </p>
                <p>
                    <a href="tel:+34620453905">620 45 39 05</a>
                </p>
            </div>
        </div> 
        </Col>
        <Col>
            <div className="div-menu">
                <h5> Menú </h5>
                <p>
                <a href="/"> Inicio </a>
                </p>
                <p>
                <a href="/galeria"> Galería </a>
                </p>
                <p>
                <a href="/Nosotros"> Nosotros </a>
                </p>
                <p>
                <a href="/contacto"> Contacto </a>
                </p>
            </div> 
        </Col>
      </Row>
    </Container>
  )
}

export default Appfooter;
