import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle, signInWithGithub, login } = useFirebase();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()

    const getEmail = event => {
        setEmail(event.target.value);
        console.log(email);
    }

    const getPassword = event => {
        setPassword(event.target.value);
        console.log(password);
    }

    const handleLoginProcess = (e) => {
        e.preventDefault();
        login(email, password)
        history.push('/');
    }

    return (
        <div>
            <h1 className='display-5 text-center mt-5'> Login</h1>
            <div className='mt-5'>
           <Row className="justify-content-center">
           <Col xl={3} lg={5} md={5} xs={6}>
            <Form className=''>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required onKeyUp={getEmail}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required onKeyUp={getPassword}/>
                </Form.Group>
                <Button variant="outline-primary" type="submit" onClick={handleLoginProcess}>
                    Login
                </Button>
            </Form>
            </Col>
           </Row>
            <div className='text-center flex-wrap'>
            <p className='mt-4'> Or Sign In With</p>
                <Button className='m-2 danger' variant='outline-danger' onClick={signInWithGoogle}>Google <img src="https://cdn-icons-png.flaticon.com/16/2702/2702602.png" alt=""/></Button>
                <Button className='m-2' variant='outline-dark' onClick={signInWithGithub}>GitHub <img src="https://cdn-icons-png.flaticon.com/16/733/733609.png" alt="" /></Button>
                <Button className='m-2' variant='outline-primary'>Facebook <img src="https://cdn-icons-png.flaticon.com/16/2111/2111393.png" alt="" /></Button>
            </div>
            </div>
        </div>
    );
};

export default Login;