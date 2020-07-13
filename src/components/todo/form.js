import React, { useState ,useContext} from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import useForm from '../hooks/form';
import {FilterContext} from '../../contex/todo';

import 'bootstrap/dist/css/bootstrap.min.css';


function TodoForm(props) {
  const [item, setItem] = useState({});
  const [handelSubmit,handelChange] = useForm(addItemm);
  const context = useContext(FilterContext);
  function addItemm(obj){
    context.add(obj);
    setItem({...item,obj});
  }


  return (
    <>
      <h3 >Add To Do Item</h3>
      <Form onSubmit={handelSubmit} style={{ float: 'left' , width:'150%' , marginTop: -30 + 'em', padding: 0 + 'em'}}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>To Do Item</Form.Label>
          <Form.Control type="text" name="item" placeholder="Details"
            onChange={handelChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control type="text" name="assignee" placeholder="Assignee Name" onChange={handelChange}/>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control type="range" custom defaultValue="1" min="0" max="5" name="difficulty" onChange={handelChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
         Add Item
        </Button>
      </Form>

      
    </>
  );

}

export default TodoForm;