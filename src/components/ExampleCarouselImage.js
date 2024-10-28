import React from 'react';
import imagen1 from '../assets/Imagen1.webp'; // Ajusta la ruta según sea necesario

const ExampleCarouselImage = () => {
    return (
        <img
            src={imagen1}
            alt="Descripción de la imagen"
            className="img-carrusel"
        />
    );
};

export default ExampleCarouselImage;
