import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';


function TodoForm(props) {
  const [item, setItem] = useState({});

  const _handleInputChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    item && setItem({ ...item, item });
  };

  return (
    <>
      <h3>Add To Do Item</h3>
      <Form onSubmit={_handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>To Do Item</Form.Label>
          <Form.Control type="text" placeholder="Item Details"  name="text"  onChange={_handleInputChange}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control type="text" name="assignee" placeholder="Assignee Name" onChange={_handleInputChange}/>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control type="range" custom defaultValue="1" min="1" max="5" name="difficulty" onChange={_handleInputChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
         Add Item
        </Button>
      </Form>

      
    </>
  );

}

export default TodoForm;