import React from 'react';
import './App.css';
import DefaultLayout from './Layout/DefaultLayout';
// import Dashboard from './Page/Dashboard/Dashboard.Page';
import AddTicket from "./Page/NewTicket/AddTicket.Page";

function App() {
  return (
    <div className='App'>
      {/* <Entry/> */}

      <DefaultLayout>
        {/* <Dashboard/>     */}
        <AddTicket/>
      </DefaultLayout>
    </div>
  );
}

export default App;
