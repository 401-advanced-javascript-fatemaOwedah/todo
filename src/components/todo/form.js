import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useForm from '../hooks/form';

import 'bootstrap/dist/css/bootstrap.min.css';


function TodoForm(props) {
  const [item, setItem] = useState({});
  const [handelSubmit,handelChange] = useForm(addItem);
  function addItem(obj){
    props.handelSubmit(obj);
    setItem({...item,obj});
  }

  return (
    <>
      <h3>Add To Do Item</h3>
      <Form onSubmit={handelSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>To Do Item</Form.Label>
          <Form.Control type="text" placeholder="Item Details"  name="text"  onChange={handelChange}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control type="text" name="assignee" placeholder="Assignee Name" onChange={handelChange}/>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control type="range" custom defaultValue="1" min="1" max="5" name="difficulty" onChange={handelChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
         Add Item
        </Button>
      </Form>

      
    </>
  );

}

export default TodoForm;