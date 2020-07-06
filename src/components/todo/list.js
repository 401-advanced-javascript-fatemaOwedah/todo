import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

let variant ='';
function TodoList (props) {
  return (
    <ListGroup as="ul">
      {props.list.map(item => {
        ! item.complete ? variant = 'success' : variant = 'danger',
        <ListGroup.Item
          className={`complete-${item.complete.toString()} li ` }
          key={item._id}
        >
          <span onClick={() => props.handleComplete(item._id)}>
            {item.text}  By   {item.assignee} 
          </span>
          </ListGroup.Item>
      })}
    </ListGroup>
  );
}
export default TodoList;