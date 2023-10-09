import React from 'react'
import { Table } from 'react-bootstrap';

function TicketTable() {
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
        <tbody>
            <tr>
                <td>1</td>
                <td>ssl Issue</td>
                <td>Client Response Pending</td>
                <td>2023-10-09</td>
            </tr>
            <tr>
                <td>1</td>
                <td>ssl Issue</td>
                <td>Client Response Pending</td>
                <td>2023-10-09</td>
            </tr>
            <tr>
                <td>1</td>
                <td>ssl Issue</td>
                <td>Client Response Pending</td>
                <td>2023-10-09</td>
            </tr>
        </tbody>
    </Table>
  )
}

export default TicketTable;