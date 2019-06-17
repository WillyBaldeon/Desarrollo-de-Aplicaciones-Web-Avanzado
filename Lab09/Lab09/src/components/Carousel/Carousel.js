import React from 'react';
import { Carousel } from 'react-bootstrap';

import slide1 from '../../assets/img/slide1.jpg';
import slide2 from '../../assets/img/slide2.jpg';
import slide3 from '../../assets/img/slide3.jpg';
import slide4 from '../../assets/img/slide4.jpg';

const CarouselComponent = props => {
    return(
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={slide1} alt="First slide"/>
                <Carousel.Caption>
                    <h3>Primer elemento</h3>
                    <p>Descripción genérica 1</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={slide2} alt="Second slide"/>
                <Carousel.Caption>
                    <h3>Segundo elemento</h3>
                    <p>Descripción genérica 2</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={slide3} alt="Third slide"/>
                <Carousel.Caption>
                    <h3>Tercer elemento</h3>
                    <p>Descripción genérica 3</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={slide4} alt="First slide"/>
                <Carousel.Caption>
                    <h3>Cuarto elemento</h3>
                    <p>Descripción genérica 4</p>
                </Carousel.Caption>
            </Carousel.Item>            
        </Carousel>
    );
};

export default CarouselComponent;