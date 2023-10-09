import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function LoginForm( {handleOnchange, handleSubmit, email, pass, formSwitcher } ) {
    
  return (
    <Container>
        <Row>
            <Col>
                <h1 className='text-info text-center'> Client Login </h1>
                <hr/>

                <Form autoComplete='off' onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label> Email Address </Form.Label>
                        <Form.Control 
                            type='email' 
                            name='email' 
                            value={email}
                            placeholder='Enter Email' 
                            onChange={handleOnchange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='mt-3'> Password </Form.Label>
                        <Form.Control 
                            type='password' 
                            name='password' 
                            value={pass}
                            placeholder='Enter Password' 
                            onChange={handleOnchange}
                            required
                        />
                    </Form.Group>

                    <Button type='submit' className='mt-4'>LogIn</Button>
                </Form>
                <hr/>
            </Col>
        </Row>
            <Col>
                <a href="#!" onClick={() => formSwitcher('reset')} >Forgot Password</a>
            </Col>
        <Row>

        </Row>
    </Container>
  )
}

LoginForm.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired
}

export default LoginForm;