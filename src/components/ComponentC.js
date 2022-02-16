import React, { useState,useReducer } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import reducer from '../reducers/index'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ComponentD from './ComponentD';

const initialCount = {
  count: 0
}

const ComponentC = () => {
  const [ state, dispatch ] = useReducer(reducer, initialCount);
  const [data,setData] = useState([]);
    console.log('20220122');
  
  const getAPIData = async () => {
    try {
      const comments= await axios.get('https://jsonplaceholder.typicode.com/comments')
      setData(comments.data);
    } catch(res){
    console.log("🚀 ~ file: ComponentC.js ~ line 23 ~ getAPIData ~ res", res)}
  };

  const increment = () => {
    console.log('increment');
    dispatch({
      type: 'INCREMENT'
    });
  };

  const decrement = () => {
    console.log('decrement')
    dispatch({
      type: 'DECREMENT'
    })
  }

  const setCount = () => {
    console.log('reset')
    dispatch({
      type: 'RESET'
    })
  }

  return (
    <>
      <ComponentD />
      <div>
        <div>
          <div>ComponentC</div>
          <Link to="/">ComponentAへ移動</Link>
        </div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={setCount}>Reset</button>
        <h1>{state.count}</h1>
      </div>

      <Button onClick={getAPIData}>Button</Button>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              postID
            </th>
            <th>
              id
            </th>
            <th>
              name
            </th>
            <th>
              email
            </th>
            <th>
              body
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => {
            return (
              <tr key={index}>
                <td>{d.pstID}</td>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.body}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    
    </>
  );
};

export default ComponentC;
