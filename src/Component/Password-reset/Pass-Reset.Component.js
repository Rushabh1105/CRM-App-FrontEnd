import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';


function ResetPassword( {handleOnchange, handleResetSubmit, email, formSwitcher} ) {
  return (
    <Container>
        <Row>
            <Col>
                <h1 className='text-info text-center'> Reset Password </h1>
                <hr/>

                <Form autoComplete='off' onSubmit={handleResetSubmit}>
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
                    <Button type='submit' className='mt-4'>SUbmit</Button>
                </Form>
                <hr/>
            </Col>
        </Row>
            <Col>
                <a href="#" onClick={()=>{formSwitcher('login')}}>Loging Now!!!</a>
            </Col>
        <Row>

        </Row>
    </Container>
  )
}

ResetPassword.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    handleResetSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}
export default ResetPassword;