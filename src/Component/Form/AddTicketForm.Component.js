import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './AddTicketForm.css'

function AddTicketForm( {handleSubmit, handleOnchange, formData} ) {

  // console.log(formData); 
  return (
    <div className='mt-4 p-5 bg-light text-black rounded form-box add-ticket'>

      <h1 className='text-info text-center'> Add New Ticket</h1>
      <hr/>

      <Form autoComplete='off' onSubmit={handleSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}> Subject </Form.Label>
          <Col sm={9}>
            <Form.Control 
              // type='text' 
              name='subject' 
              value={formData.subject}
              minLength={3}
              onChange={handleOnchange}
              required
              placeholder='Subject'
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mt-4'>
          <Form.Label column sm={3} className=''> Issue Date </Form.Label>
          <Col sm={9}>
            <Form.Control 
              type='date' 
              name='issueDate'  
              value={formData.issueDate}
              onChange={handleOnchange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label className='mt-3'> Details </Form.Label>
          <Form.Control 
            as="textarea"
            name='detail'
            rows="5" 
            value={formData.detail}
            onChange={handleOnchange}
            required
          />
        </Form.Group>

        <div className="d-grid gap-2 mt-4" >
          <Button type='submit' variant='info' size='lg'>Submit</Button>
        </div>
      </Form>
    </div>
  )
}

AddTicketForm.propType={
  handleSubmit: PropTypes.func.isRequired,
  handleOnchange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired
}
     
export default AddTicketForm