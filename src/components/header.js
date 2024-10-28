import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import galeria from './galeria';
//Estilo
import './header.css';
//Iconos
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
//imagenes

import logo from '../assets/PCLogo.png';


function AppHeader() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid className="cabecera">
        <Nav className="empresa">
        <Navbar.Brand className="logo" href="#">
            <img className="logo" src={logo} alt="PC logo"></img>
        </Navbar.Brand>
        <Navbar.Brand href="#home">Pérgolas Canor</Navbar.Brand>
        </Nav>
        <Navbar.Collapse className="navegacion" id="basic-navbar-nav">           
            <Nav className="links">       
            <Nav className="link_nav">
            <Nav.Link href="/" >Inicio</Nav.Link>
            <Nav.Link href="/galeria" >Galería</Nav.Link>
            <Nav.Link href="/Nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            </Nav>
        <Container className="botones">
        <Navbar className="link-rrss"> 
            <Nav href="https://web.whatsapp.com/">
                <FaWhatsapp color='green' fontSize='26px'/>
            </Nav>
            <Nav href="https://www.facebook.com/groups/511976025588244/posts/8057074701078301/?_rdr">
                <FaFacebook color='blue' fontSize='26px' />
            </Nav>
            <Nav href="https://www.instagram.com/pergolascanor/">
                <FaInstagram color='#E1306C' fontSize='26px' />
            </Nav>    
        </Navbar>
        <Navbar className="btn-header">
            <Button variant="link" className="btn">Solicita tu presupuesto</Button>{' '}
            <Button variant="link" className="btn">Llámanos 614306304</Button>{' '}
        </Navbar>
        </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default AppHeader;