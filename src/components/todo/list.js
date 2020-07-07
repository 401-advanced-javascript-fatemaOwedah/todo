import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
let word, state;
function TodoList(props){
  return (
    <Container  className="ul">
       {props.list.map(item => (
         !item.complete ? word = 'Pending' : word = 'Complete',
         !item.complete ? state = 'danger' : state = 'success',
         <Container className="li"  key={item._id}>
            <Row className="firstRow">
            <Col className="text-end">
            <Button variant= {state} onClick={() => props.handleComplete(item,item._id)}>
              {word}
            </Button>                
            </Col>
            <Col md={{ span: 25, offset: 4 }}> {item.assignee} </Col>
                <Col className="text-end">
                 <button onClick={() => props.handelDelete(item._id)}>x</button>
                </Col>
            </Row>
            <Row>
            <Col md="auto">
              {item.item} 
              </Col>
            </Row>
            <Row className="text-end">
            <Col md={{ span: 25, offset: 7 }}> Difficulty : {item.difficulty}</Col>
           
            </Row>
        </Container>
       ))}
    </Container>
  );
}
export default TodoList;