import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FilterContext } from '../../contex/todo';
import Auth from '../../auth/auth';
import LoginContext from '../../auth/context';

let word, state;
function TodoList() {
  const [complete, setComplete] = useState('false');
  const [click, setClick] = useState('Go To All');
  const [page, setPage] = useState(0);
  const context = useContext(FilterContext);
  let array = context.list.sort(function (a, b) { return a.difficulty - b.difficulty });
  let array2 = [];
  function clicked() {
    if (complete === 'false') {
      setClick('Go To In-Complete');
      setComplete('true');
      setPage(0);
    } else {
      setClick('Go To All');
      setComplete('false');
      setPage(0);
    }
  }
  if (complete === 'false') {
    array2 = array.filter(value => {
      if (value.complete === false) {
        return value;
      }
    })
  } else {
    array2 = array;
  }
  let count = 0;
  let result = new Array(Math.ceil(array2.length / 3));
  if (array2.length > 3) {
    const n = 3
    let sub = array2;
    result = result
      .fill()
      .map(() => sub.splice(0, n)) ///[[],[]]
    count = 5;
  }


  function pages(e) {
    e.preventDefault();
    setPage(e.target.id);
    console.log('in pages function======>', page);
    //  count =5;
    render(e.target.id)

    // TodoList();
  }
  function buttons() {
    let button = [];
    for (let i = 0; i < result.length; i++) {
      button.push(<Button key={i} id={i} onClick={pages} style={{ width: '20%', marginLeft: 50 + 'em', marginTop: 1 + 'em', borderRadius: 20 + 'em' }}>{i + 1}</Button>);
    }
    return button;
  }

  function render(page) {
    console.log('[pages in function render====>', page);
    if (count === 5) {
      console.log('result fully ==========================', result);
      console.log('result fully page ==========================', result[page]);
      return <Container className="ul" style={{ width: '100%', marginTop: 25 + 'em', marginRight: -17 + 'em' }}>
        {result[page].map(item => (
          !item.complete ? word = 'Pending' : word = 'Complete',
          !item.complete ? state = 'danger' : state = 'success',
          <Container className="li" key={item._id} >
            <LoginContext>
              <Auth capability="update">
                <Row className="firstRow">
                  <Col className="text-end">
                    <Button style={{ borderRadius: 50 + 'em' }} variant={state} onClick={() => context.update(item, item._id)}>
                      {word}
                    </Button>
                  </Col>
                </Row>
              </Auth>
            </LoginContext>

            <Col md={{ span: -9, offset: -3 }}> {item.assignee} </Col>
            <LoginContext>
              <Auth capability="delete">
                <Col className="text-end">
                  <button onClick={() => context.delete(item._id)} md={{ span: 0, offset: 0 }}>x</button>
                </Col>
              </Auth>
            </LoginContext>

            <Row>
              <Col md="auto">
                {item.item}
              </Col>
            </Row>
            <Row className="text-end">
              <Col md={{ span: 25, offset: 5 }}> Difficulty : {item.difficulty}</Col>

            </Row>
          </Container>

        ))}
      </Container>
    } else {
      return <Container className="ul" style={{ width: '90%', marginTop: 14 + 'em', marginRight: -24 + 'em' }}>
      {array2.map(item => (
        !item.complete ? word = 'Pending' : word = 'Complete',
        !item.complete ? state = 'danger' : state = 'success',
        <Container className="li" key={item._id} >
          <LoginContext>
            <Auth capability="update">
              <Row className="firstRow">
                <Col className="text-end">
                  <Button style={{ borderRadius: 50 + 'em' }} variant={state} onClick={() => context.update(item, item._id)}>
                    {word}
                  </Button>
                </Col>
              </Row>
            </Auth>
          </LoginContext>

          <Col md={{ span: -9, offset: -3 }}> {item.assignee} </Col>
          <LoginContext>
            <Auth capability="delete">
              <Col className="text-end">
                <button onClick={() => context.delete(item._id)} md={{ span: 0, offset: 0 }}>x</button>
              </Col>
            </Auth>
          </LoginContext>

          <Row>
            <Col md="auto">
              {item.item}
            </Col>
          </Row>
          <Row className="text-end">
            <Col md={{ span: 25, offset: 5 }}> Difficulty : {item.difficulty}</Col>

          </Row>
        </Container>

      ))}
    </Container>

    }
  }
  // let conditions = page>-1;
  // console.log(conditions);
  // console.log('res ==>',result);
  console.log('array =====', array2.length);
  console.log('count==========>', count);
  // console.log(page);//[],[[],[]]//buttons//button ->2//got to page 2
  return (
    <>
      {render(page)}
      {buttons()}
      <Button variant={state} onClick={clicked} style={{ width: '20%', marginLeft: 50 + 'em', marginTop: 1 + 'em', borderRadius: 20 + 'em' }}>
        {click}
      </Button>
    </>
  );
}
export default TodoList;