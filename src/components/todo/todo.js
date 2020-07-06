import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../hooks/useAjax';


import './todo.scss';

function ToDo(){
  const [list, setList] = useState([]);
  
  const [addItem, updateItem,  deleteItem] = useAjax(add);

  function add(lists) {
    setList(lists);
  }

  useEffect(() => {
    if (list.filter(item => !item.complete).length >= 1) { document.title = 'Incomplete'; }
    else  { document.title = 'complete'; }
  }, [list]);
  
 

  return (
    <>
      <header>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand >Home</Navbar.Brand>
        </Navbar>
      </header>

      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand >To Do List Manager ({list.filter(item => !item.complete).length}) </Navbar.Brand>
        </Navbar>
        <Row className="todo">
          <Col> 
           <div>
             <TodoForm handleSubmit={addItem} />
           </div>
           </Col>
           <Col >
           <div>
            <TodoList
            list={list}
            handleComplete={updateItem}
            handleDelete={deleteItem}
            />
           </div>
          </Col>
       </Row>
     </Container>
    </>
  );
}
export default ToDo;