import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

let state;
function TodoList (props) {
  return (
    <ListGroup as="ul">
      {props.list.map(item => (
        !item.complete ? state = 'success' : state = 'danger',
        <ListGroup.Item as ="li"
          className={`complete-${item.complete.toString()}` }
          key={item._id} onClick={() => props.handleComplete(item._id)}
          variant = {`${state}`}
        >
          {item.text}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
export default TodoList;