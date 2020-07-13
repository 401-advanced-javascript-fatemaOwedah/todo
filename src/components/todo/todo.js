import React, {  useEffect, useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import TodoForm from './form.js';
import { FilterContext } from '../../contex/todo';

import './todo.scss';

function ToDo(){
  
  const context = useContext(FilterContext);
  useEffect(() => {
    if (context.list.filter(item => !item.complete).length >= 1) { document.title = 'Incomplete'; }
    else  { document.title = 'complete'; }
  }, [context.list]);
  
 

  return (
    <>
      <Container>
        <Navbar bg="dark" variant="dark" style={{ marginTop: 1 + 'em' }}>
          <Navbar.Brand >To Do List Manager ({context.list.filter(item => !item.complete).length}) </Navbar.Brand>
        </Navbar>
     </Container>
    </>
  );
}

export default ToDo;