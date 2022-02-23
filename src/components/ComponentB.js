import React, { useReducer, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ADD_EVENT, ALLDELETE_EVENT, TEXTDELETE_EVENT, DONE_EVENT } from '../actions/index';
import reducer from '../reducers';
import axios from 'axios';
import { Button, Form, FormLabel, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentB = () => {
  const [ state, dispatch ] = useReducer(reducer, []);
  const [ title, setTitle ] = useState('');
  const [ body, setBody ] = useState('');
  const [ comment, setComment ] = useState('');
  const [ setData ] = useState([]);
  console.log('20220122');
  
  useEffect(() => {
    console.log('useEffect が呼び出されました。');
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      setData(res.data)
    })
  }, [setData]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_EVENT,
      title,
      body,
      comment
    });
    setTitle('');
    setBody('');
    setComment('');
  };

  let alldeleteClick = (e) => {
    e.preventDefault();
    dispatch({
      type: ALLDELETE_EVENT,
    });
    setTitle('');
    setBody('');
    setComment('');
  };

  const textdeleteClick = (id) => {
    dispatch({
      type: TEXTDELETE_EVENT,
      id//←ここでreducerにイベントのidを渡している id: idは、idだけに省略できる
    });
    setTitle('');
    setBody('');
    setComment('');
  };

  const doneClick = (id) => {
    dispatch({
      type: DONE_EVENT,
      id//←ここでreducerにイベントのidを渡している id: idは、idだけに省略できる
    });
    setTitle('');
    setBody('');
    setComment('');
  };

  return (
    <>
      <div>
        <div>ComponentB</div>
        <Link to="componentc">ComponentCへ移動</Link>
      </div>
      <div>
        <Form>
          <Form.Group controlId="formBasicPassword">
            <FormLabel>Title</FormLabel>
            <Form.Control
              type="text"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <FormLabel>Body</FormLabel>
            <Form.Control
              type="text"
              placeholder="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <FormLabel>comment</FormLabel>
            <Form.Control
              type="text"
              placeholder="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleClick}>
            イベント作成
          </Button>
          <Button variant="danger" onClick={alldeleteClick}>
            イベント全削除
          </Button>
        </Form>
        <h1>Table</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>body</th>
              <th>comment</th>
              <th>#</th>
              <th>完了</th>
            </tr>
          </thead>
          <tbody>
            {state.map((data) => {
              return (
                <tr
                  key={data.id}
                  style={{ backgroundColor: data.isDone === true ? "gray" : "white" }}
                >
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.body}</td>
                  <td>{data.comment}</td>
                  <td>
                    <Button variant="danger" onClick={() => textdeleteClick(data.id)}>削除</Button>
                  </td>
                  <td>
                    <Button variant="primary" onClick={() => doneClick(data.id)}>完了</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ComponentB;