import React from 'react';
import { Image } from 'react-bootstrap';
import notFoundGIF from '../../images/not Found/404-drib23.gif';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='notFound'>
            <div className='mt-5'>
            <Image className='mt-5' src={notFoundGIF} fluid/>
            </div>
        </div>
    );
};

export default NotFound;