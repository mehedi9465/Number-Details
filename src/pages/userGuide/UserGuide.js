import React from 'react';
import { Container, Image } from 'react-bootstrap';

const UserGuide = () => {
    return (
        <div id='userGuide' className='bg-light py-5'>
            <Container>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <Image className='m-5' src='https://cdn-icons-png.flaticon.com/256/5381/5381758.png' fluid/>
                    <p className='m-5 fs-5 text-justify'>
                    (1) <br />
                    First Authenticate yourself to this website
                    <br /><br />
                    (2) <br />
                    After Authentication provide your required phone number 
                    <br /><br />
                    (3) <br />
                    Then click on proceed and it will provide you all important informations about your phone number
                    <br /><br />
                    <span className='text-danger'>Note:</span> The inputed number must be in local format.
                    <br />
                    <span className='text-primary'>Local Format: 8801677317270 <br /> international Format: +8801677317270</span>
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default UserGuide;