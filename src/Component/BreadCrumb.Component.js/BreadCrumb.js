import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';


function BreadCrumb({page}) {
  return (
    <Breadcrumb className='mt-1'>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default BreadCrumb