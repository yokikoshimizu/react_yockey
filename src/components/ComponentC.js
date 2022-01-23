import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ComponentC = () => {
  const [data,setData] = useState([]);
    console.log('20220122');
  

  useEffect(() => {
    console.log('useEffect が呼び出されました。');

    axios.get('https://jsonplaceholder.typicode.com/comments').then(res => {
        console.log(res.data, 'res check');
        setData(res.data)
  })

}, []);

  return (
    <>
      <div>
        <div>ComponentC</div>
        <Link to="/">ComponentAへ移動</Link>
      </div>
      <Button href='https://jsonplaceholder.typicode.com/comments' onClick={() =>
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
                { data.map((d,index) => {
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
      }>
      GetData
      </Button>
    </>
  );
};

export default ComponentC;
