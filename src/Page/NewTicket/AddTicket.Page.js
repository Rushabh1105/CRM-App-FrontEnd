import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BreadCrumb from '../../Component/BreadCrumb.Component.js/BreadCrumb'
import  AddTicketForm from '../../Component/Form/AddTicketForm.Component';

function AddTicket() {
  return (
    <Container>
        <Row>
            <Col>
                <BreadCrumb page="New Ticket" />        
            </Col>
        </Row>

        <Row>
            <Col>
                <AddTicketForm />
            </Col>
        </Row>
    </Container>
  )
}

export default AddTicket;