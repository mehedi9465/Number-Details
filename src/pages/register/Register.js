import React, { useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const getName = e => {
        setName(e.target.value);
        console.log(name);
    }

    const getEmail = e => {
        setEmail(e.target.value);
        console.log(email);
    }

    const getPassword = e => {
        setPassword(e.target.value);
        console.log(password);
    }

    const { registerUser } = useFirebase();

    const handleSignUpProcess = (e) => {
        e.preventDefault();
        registerUser(name, email, password);
        history.push('/');
    }

    return (
        <div>
            <h1 className='display-5 text-center mt-5'>Register</h1>
            <div className='mt-5'>
            <Row className="justify-content-center">
            <Col xl={3} lg={5} md={5} xs={6}>
                <Form className=''>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onKeyUp={getName}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required onBlur={getEmail}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required onBlur={getPassword}/>
                    </Form.Group>
                    <Button variant="outline-primary d-block mx-auto mt-4" type="submit" onClick={handleSignUpProcess}>
                        Register
                    </Button>
                </Form>
                </Col>
            </Row> 
            </div>                              
        </div>
    );
};

export default Register;