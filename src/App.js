import React from 'react';
import './App.css';
import DefaultLayout from './Layout/DefaultLayout';
// import Dashboard from './Page/Dashboard/Dashboard.Page';
import AddTicket from "./Page/NewTicket/AddTicket.Page";
import TicketListing from './Page/Ticket-Listing/TicketListing.Page';
import Ticket from './Page/Ticket/Ticket.Page';

function App() {
  return (
    <div className='App'>
      {/* <Entry/> */}

      <DefaultLayout>
        {/* <Dashboard/>     */}
        {/* <AddTicket/> */}
        {/* <TicketListing/> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
