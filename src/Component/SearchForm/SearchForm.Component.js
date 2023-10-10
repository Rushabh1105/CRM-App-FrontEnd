import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
 
function SearchForm({handleOnChange, str}) {

  return (
    <Form>
        <Form.Group as={Row}>
            <Form.Label column sm="3">
                Search: {" "}
            </Form.Label>
            <Col sm="9">
                    <Form.Control
                        name="searchString"
                        type="text"
                        onChange={handleOnChange}
                        placeholder='Search...'
                        value={str}
                    />
            </Col>
        </Form.Group>
    </Form>
  )
}


SearchForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired
}
export default SearchForm