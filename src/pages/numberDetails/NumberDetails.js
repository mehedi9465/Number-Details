import React from 'react';

const NumberDetails = ({ numberDetails }) => {

    return (
        <div className='shadow-lg p-5 rounded-pill'>
            <h1 className='display-5 mb-4'> Deatils of {numberDetails?.phone}</h1>
            <p><span className='me-5'>Country Code: {numberDetails?.country?.code}</span> <span className='ms-5'>Calling Code: {numberDetails?.country?.prefix}</span></p>
            <p>International Format: {numberDetails?.format?.international}</p>
            <p>Local Format: {numberDetails?.format?.local}</p>
            <p>Number type: {numberDetails?.type}</p>
            <p>Carrier: {numberDetails?.carrier}</p>
            <p>Loaction: {numberDetails?.location}</p>
        </div>
    );
};

export default NumberDetails;