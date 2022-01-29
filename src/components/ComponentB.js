import React, { useReducer, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ADD_EVENT, ALLDELETE_EVENT } from '../actions/index';
import reducer from '../reducers';
import axios from 'axios';
import { Button, Form, FormLabel, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ComponentB = () => {
  const [ state, dispatch ] = useReducer(reducer, []);
  const [ title, setTitle ] = useState('');
  const [ body, setBody ] = useState('');
  const [ data,setData ] = useState([]);
    console.log('20220122');

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_EVENT,
      title,
      body
    });
    setTitle('');
    setBody('');
  };

  let alldeleteClick = (e) => {
    e.preventDefault();
    dispatch({
      type: ALLDELETE_EVENT,
      title,
      body
    });
    setTitle('');
    setBody('');
  };

  useEffect(() => {
    console.log('useEffect が呼び出されました。');

    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
        console.log(res.data, 'res check');
        setData(res.data)
  })

}, []);

  return (
    <>
      <div>
        <div>ComponentB</div>
        <Link to="componentc">ComponentCへ移動</Link>
      </div>

      <div>
      <Form>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Body</Form.Label>
          <Form.Control
            type="text"
            placeholder="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
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
            <thread>
              <tr>
                <th>id</th>
                <th>title</th>
                <th>body</th>
                <th>#</th>
              </tr>
            </thread>
            <tbody>
              {state.map((data,index) => {
                return (
                  <tr key={index}>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.body}</td>
                    <td>
                      <Button varient="danger">削除</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>


      <Table striped bordered hover>  
      <thead>
        <tr>
          <th>
            userID
          </th>
          <th>
            id
          </th>
          <th>
            title
          </th>
          <th>
            body
          </th>
        </tr>
      </thead>
      <tbody>
            { data.map((d,index) => {
                return (
                  <tr key={index}>
                      <td>{d.userID}</td>
                      <td>{d.id}</td>
                      <td>{d.title}</td>
                      <td>{d.body}</td>
                  </tr>
                  )
              })}
      </tbody>
  </Table>
  </>
  );
};

export default ComponentB;