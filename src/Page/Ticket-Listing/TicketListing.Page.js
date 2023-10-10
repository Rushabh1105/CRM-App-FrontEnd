import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button} from 'react-bootstrap';
import BreadCrumb from '../../Component/BreadCrumb.Component.js/BreadCrumb'
import SearchForm from '../../Component/SearchForm/SearchForm.Component';
import TicketTable from '../../Component/Ticket-Table/TicketTable.Component';
import tickets from '../../Assets/DummyTicket.json';

function TicketListing() {

    const [str, setStr] = useState('');
    const[dispTicket, setDispTicket] = useState(tickets);
    useEffect( ()=>{}, [str] ); 
    useEffect( ()=>{}, [str, dispTicket] );

    const handleOnChange = (e) => {
        const {value} = e.target;
        setStr(value);
        searchTicket(value);
    };

    const searchTicket = (searchStr) => {
        const displayTickets = tickets.filter(
            (row) => {
                return row.subject.toLowerCase().includes(searchStr.toLowerCase())
                
            }
        );

        setDispTicket(displayTickets)
    }

    

  return (
    <Container>
        <Row>
            <Col>
                <BreadCrumb page="Ticket Listing" />
            </Col>
        </Row>
        <Row className='mt-5'>
            <Col>
                <Button variant='info'> Add New Ticket </Button>
            </Col>
            <Col className='text-right'>
                <SearchForm 
                    handleOnChange={handleOnChange} 
                    str={str}
                />
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <TicketTable tickets={dispTicket}/>
            </Col>
        </Row>
    </Container>
  )
}

export default TicketListing