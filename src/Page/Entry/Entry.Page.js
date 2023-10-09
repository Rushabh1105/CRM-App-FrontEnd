import React, { useState } from 'react';
import './Entry.Page.css';
import LoginForm from '../../Component/Login/Login.Component';
import ResetPassword from '../../Component/Password-reset/Pass-Reset.Component';


function Entry() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formLoad, setFormLoad] = useState('login');

  const handleOnchange = e => {
    const { name, value } = e.target;

    switch(name){
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();

    if( !email || !password ){
      return alert('Please enter required information ');
    }

    // API for signing requests
  }

  const handleResetSubmit = e => {
    e.preventDefault();

    if( !email ){
      return alert('Please enter email');
    }

    // API for signing requests
  }

  const formSwitcher = formType => {
    setFormLoad(formType);
  }

  return (
    <div className='entry-page bg-info'>
      <div className='mt-4 p-5 bg-white text-black rounded form-box'>
        { formLoad === 'login' && 
          <LoginForm 
            handleOnchange={handleOnchange}
            handleSubmit={handleSubmit}
            formSwitcher={formSwitcher}
            email={email}
            pass={password}
          />
        }

        {
          formLoad ==='reset' && 
          <ResetPassword
            handleOnchange={handleOnchange}
            formSwitcher={formSwitcher}
            handleResetSubmit={handleResetSubmit}
            email={email}
          />
        }
      </div>
    </div>
  )
}

export default Entry;