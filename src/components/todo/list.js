import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoList(props){
  return (
    <Container  className="ul">
       {props.list.map(item => (
         <Container className="li"  key={item._id}>
            <Row className="firstRow">
                <Col  key={item._id} className={`complete-${item.complete}`}  onClick={() => props.handleComplete(item,item._id)}>
                   {item.complete}
                 </Col>
                <Col> {item.assignee} </Col>
                <Col className="text-end">
                 <button onClick={() => props.handelDelete(item._id)}>x</button>
                </Col>
            </Row>
            <Row>
            <Col md="auto">
              {item.text} 
              </Col>
            </Row>
            <Row className="text-end">
            <Col md={{ span: 9, offset: 3 }}> Difficulty : {item.difficulty}</Col>
           
            </Row>
        </Container>
       ))}
    </Container>
  );
}
export default TodoList;