import React from 'react';
import { Navigate } from 'react-router-dom'

const isAuth = true;

function PrivateRoute({children, ...rest}) {
  if( !isAuth ){
    return <Navigate to={"/"} />
  }

  return children;
}

export default PrivateRoute 