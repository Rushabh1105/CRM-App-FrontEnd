import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BreadCrumb from '../../Component/BreadCrumb.Component.js/BreadCrumb';
import tickets from '../../Assets/DummyTicket.json';
import MessageHistory from '../../Component/MessageHistory/MessageHistory.Component';
import UpdateTicket from '../../Component/UpdateTicket/UpdateTicket.Component';
import { useParams } from 'react-router-dom';

function Ticket() {

    const {tId} = useParams();

    const [message, setMessage] = useState('');
    const [ticket, setTicket] = useState("")
    useEffect( ()=>{
        for (let index = 0; index < tickets.length; index++) {
            if(tickets[index].id == tId ){
                setTicket(tickets[index]);
                continue;
            }
        }
    }, [message, tId])

    const handleOnChange = (e) => {
        setMessage(e.target.value);
    }

    const handleOnSubmit = () => {
        alert('Please enter')
    }

    // const ticket = tickets[0];
  return (
    <Container>
        <Row>
            <Col>
                <BreadCrumb page="Ticket" />
            </Col>
        </Row>

        <Row>
            <Col className='font-weight-bolder text-secondary '>
                <div className='subject'>
                    Subject: {ticket.subject}
                </div>
                <div className='date'>
                    Ticket Opened: {ticket.addedAt}
                </div>
                <div className='status'>
                    Status : {ticket.status}
                </div>
            </Col>

            <Col className='text-right'>
                <Button variant='outline-info'> Close Ticket </Button>
            </Col>
        </Row>

        <Row className='mt-4'>
            <Col>
                {
                    ticket.history && <MessageHistory msg={ticket.history}/>
                }
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
                <UpdateTicket 
                    msg={message}
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}
                />
            </Col>
        </Row>
    </Container>
  )
}

export default Ticket