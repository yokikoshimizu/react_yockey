import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Store } from '../store/index';
import { TODOS } from '../actions/index';

const ComponentA = () => {
  const [data, setData] = useState([]);
  const { globalState, setGlobalState } = useContext(Store);
  console.log('20220122');
  useEffect(() => {
    console.log('useEffect が呼び出されました。');
    axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
      console.log(res.data, 'res check');
      setData(res.data)
      setGlobalState({
        type: TODOS,
        data: res.data
      });
    })
  }, []);

  return (
    <>
      <div>ComponentA</div>
      <Link to="componentb">ComponentBへ移動</Link>
      <Table striped bordered hover>
        
        <thead>
          <tr>
            <th>
              id
            </th>
            <th>
              userid
            </th>
            <th>
              title
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => {
            return (
              <tr key={index}>
                <td>{d.id}</td>
                <td>{d.userid}</td>
                <td>{d.title}</td>
              </tr>
            )
          })}
        </tbody>
        
      </Table>
    </>
  );
};

export default ComponentA;