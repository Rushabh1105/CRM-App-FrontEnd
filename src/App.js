import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import DefaultLayout from './Layout/DefaultLayout';
import Dashboard from './Page/Dashboard/Dashboard.Page';
import AddTicket from "./Page/NewTicket/AddTicket.Page";
import TicketListing from './Page/Ticket-Listing/TicketListing.Page';
import Ticket from './Page/Ticket/Ticket.Page';
import Entry from './Page/Entry/Entry.Page';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute.Component';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Entry} />

          <Route path="/dashboard" element={ <>
            <PrivateRoute>
              <DefaultLayout>
                <Dashboard/>
              </DefaultLayout>
            </PrivateRoute>
          </> }/>
          
          <Route path="/add-ticket" element={ 
            <>
              <PrivateRoute>
                <DefaultLayout>
                  <AddTicket/>
                </DefaultLayout>
              </PrivateRoute>
            </>
           }/>

          <Route path="/tickets" element={ 
            <>
              <PrivateRoute>
                <DefaultLayout>
                  <TicketListing/>
                </DefaultLayout>
              </PrivateRoute>
            </>
           }/>

          <Route path="/ticket/:tId" element={ 
            <>
              <PrivateRoute>
                <DefaultLayout>
                  <Ticket/>
                </DefaultLayout>
              </PrivateRoute>
            </>
           }/>

        </Routes>       
      </BrowserRouter>
    </div>
  );
}

export default App;
