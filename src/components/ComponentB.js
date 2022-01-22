import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const ComponentB = () => {
  const [data,setData] = useState([]);
    console.log('20220122');
  

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