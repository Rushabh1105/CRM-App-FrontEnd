import React from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

function UpdateTicket({msg, handleOnChange, handleOnSubmit }) {

  return (
    <Form onSubmit={handleOnSubmit}>
        <Form.Label> Reply </Form.Label>
        <br/>
        <Form.Text>Please Reply Here...</Form.Text>
        <Form.Control
            as="textarea"
            row="5"
            name="detail"
            value={msg}
            onChange={handleOnChange}
        />
        <div className='text-right mt-3 mb-3'>
            <Button variant='info' type="submit">Reply</Button>
        </div>
    </Form>
  )
}

UpdateTicket.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired,
}

export default UpdateTicket