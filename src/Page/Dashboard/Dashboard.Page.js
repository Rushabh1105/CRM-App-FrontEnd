import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import TicketTable from '../../Component/Ticket-Table/TicketTable.Component';
import BreadCrumb from '../../Component/BreadCrumb.Component.js/BreadCrumb';
import tickets from '../../Assets/DummyTicket.json';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <Container>

        <Row>
            <Col>
                <BreadCrumb 
                    page="Dashboard" 
                />
            </Col>
        </Row>
        <Row>
            <Col className='text-center mt-5 mb-2'>
                <Link to="/add-ticket">
                    <Button 
                        variant='info'
                        style={{ fontSize: "3rem", padding: "10px 30px" }}
                    > 
                        Add New Ticket
                    </Button>
                </Link>
            </Col>
        </Row>

        <Row>
            <Col className='text-center mt-2 mb-2'>
                <div>
                    Total Ticket: 50
                </div>

                <div>
                    Pending Ticket: 50
                </div>
            </Col>
        </Row>

        <Row>
            <Col >
                Recently Added Ticket
            </Col>
        </Row>
        <hr />

        <Row>
            <Col className='recent-ticket'>
                <TicketTable tickets={tickets}/>
            </Col>
        </Row>
    </Container>
  )
}

export default Dashboard;