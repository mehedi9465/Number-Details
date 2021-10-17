import React from 'react';
import { Container, Image } from 'react-bootstrap';
import aboutLogo from '../../images/about/3815602.png'

const About = () => {
    return (
        <div id='about' className='py-5'>
            <Container>
            <div className='d-flex flex-column justify-content-center align-items-center m-5'>
                <Image  src={aboutLogo} width='300' fluid/>
                <p className='fs-5 m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat temporibus delectus dignissimos officia ex vero nam ducimus repudiandae vel, ipsa aliquam rerum quidem deserunt aspernatur excepturi voluptas distinctio perferendis tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora architecto tenetur rem consequatur iste sapiente distinctio ad dolor nostrum modi unde autem magnam facere voluptatum beatae, ipsa, recusandae assumenda sit.</p>
            </div>
            </Container>
        </div>
    );
};

export default About;