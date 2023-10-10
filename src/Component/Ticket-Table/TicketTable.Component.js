import React from 'react'
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function TicketTable({tickets}) {
  return (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Opened Date</th>
            </tr>
        </thead>

        {
            tickets.length ? (
                tickets.map(ticket => (
                        <tbody key={ticket.id}>
                            <tr key={ticket.id}>
                                <td>{ticket.id}</td>
                                <td>
                                    <Link to={`/ticket/${ticket.id}`} >{ticket.subject}</Link>
                                </td>
                                <td>{ticket.status}</td>
                                <td>{ticket.addedAt}</td>
                            </tr>
                        </tbody>
                    )
                )
            ) : (
                <tbody>
                    <tr>
                        <td colSpan="4" className='text-center'>
                            No ticket show {" "}
                        </td>
                    </tr>
                </tbody>
                
            )
        }
        {/* <tbody key={1}>
            {
                tickets.length ? (
                    tickets.map(ticket => (
                        <tr key={ticket.id}>
                            <td>{ticket.id}</td>
                            <Link to={`/ticket/${ticket.id}`}>
                                <td>{ticket.subject}</td>
                            </Link>
                            <td>{ticket.status}</td>
                            <td>{ticket.addedAt}</td>
                        </tr>
                        )
                    )
                ) : (
                    <tr>
                        <td colSpan="4" className='text-center'>
                            No ticket show {" "}
                        </td>
                    </tr>
                )
            }
        </tbody> */}
    </Table>
  )
}

TicketTable.propTypes = {
    tickets: PropTypes.array.isRequired
}

export default TicketTable;