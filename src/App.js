import React from 'react';
import './App.css';
import Entry from './Page/Entry/Entry.Page';
import DefaultLayout from './Layout/DefaultLayout';
import Dashboard from './Page/Dashboard/Dashboard.Page';
// import { Entry } from "./Page/Entry/Entry.js";

function App() {
  return (
    <div className='App'>
      {/* <Entry/> */}

      <DefaultLayout>
        <Dashboard/>  
      </DefaultLayout>
    </div>
  );
}

export default App;
