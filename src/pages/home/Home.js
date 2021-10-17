import React, { useEffect, useState } from 'react';
import About from '../about/About';
import Services from '../userGuide/UserGuide';
import { Col, Form, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import NumberDetails from '../numberDetails/NumberDetails';
import useAPI from '../../hooks/useAPI';
import useFirebase from '../../hooks/useFirebase';
import { Link } from 'react-router-dom';


const Home = () => {
    const [userNumber, setUserNumber] = useState(null);
    const [numberDetails, setNumberDetails] = useState({});
    const { details, setNumber } = useAPI();
    const { user } = useFirebase();

    const getNumber = (e) => {
        setUserNumber(e.target.value);
        console.log(userNumber);
    }

    const handleProceed = () => {
        setNumber(userNumber);
        setNumberDetails(details);
        console.log(numberDetails);
    }

    useEffect(() => {
        setNumberDetails(details)
    }, [details])

    return (
        <div className='text-center'>
            {
                user?.email ?
                <div id='home' className='my-5 pb-5'>
                <Row className="justify-content-center my-5">
                    <Col xl={3} lg={5} md={5} xs={6}>
                    <Form.Group className="mt-5" controlId="formBasicEmail">
                    <Form.Label>Enter Your Phone Number</Form.Label>
                        <Form.Control type="number" placeholder="Example: 8801677317270"  required onBlur={getNumber}/>
                        <Button className='mt-4 mb-4 btn btn-outline-dark' onClick={handleProceed}>Proceed</Button>
                    </Form.Group>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xl={6} lg={8} md={9} sm={10} xs={10}>
                        <NumberDetails numberDetails={numberDetails}></NumberDetails>
                    </Col>
                </Row>
            </div>
            :
            <div>
                <h1 className='display-5 py-5 my-5'>Please <Link to='/login'>Login</Link> or <Link to='/login'>register</Link>  to Continue</h1>
            </div>
            }
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;