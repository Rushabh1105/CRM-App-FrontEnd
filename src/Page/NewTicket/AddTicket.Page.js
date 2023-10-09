import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BreadCrumb from '../../Component/BreadCrumb.Component.js/BreadCrumb'
import  AddTicketForm from '../../Component/Form/AddTicketForm.Component';


const initialFormData = {
    subject: '',
    issueDate: '',
    detail: ''
}

function AddTicket() {
    const [formData, setFormData] = useState(initialFormData);
    useEffect( () => {
            
    }, [formData])
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log('form submission');
    }

    const handleOnchange = e => {
        const { name, value } = e.target;

        
        setFormData({
            ...formData,
            [name]: value,
        })
    }

  return (
    <Container>
        <Row>
            <Col>
                <BreadCrumb page="New Ticket" />        
            </Col>
        </Row>

        <Row>
            <Col>
                <AddTicketForm 
                    handleOnchange={handleOnchange}
                    handleSubmit={handleSubmit}
                    formData={formData}
                />
            </Col>
        </Row>
    </Container>
  )
}

export default AddTicket;