import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carrusel.css';

const imagenes = [
    require('../../assets/Imagen1.webp'),
    require('../../assets/Imagen2.webp'),
    require('../../assets/Imagen3.webp'),
    require('../../assets/imagen4.webp'),
    require('../../assets/imagen5.webp'),
    require('../../assets/imagen6.webp'),
    require('../../assets/imagen7.webp'),
    require('../../assets/imagen8.webp'),
];

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="contenedor-carrusel">
            <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
                {imagenes.map((imagen, idx) => (
                    <Carousel.Item key={idx}>
                        <img
                            className="img-carrusel"
                            src={imagen}
                            alt={`Slide ${idx + 1}`}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className="carousel-caption">
                <h3 className="numeracion">{index + 1} / 8</h3>
            </div>
        </div>
    );
}

export default ControlledCarousel;
