import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ComponentC = () => {
  const [data,setData] = useState([]);
    console.log('20220122');
  
  const getAPIData = async () => {
    try {
      const comments= await axios.get('https://jsonplaceholder.typicode.com/comments')
      setData(comments.data);
    } catch(res){
    console.log("🚀 ~ file: ComponentC.js ~ line 23 ~ getAPIData ~ res", res)}
  };

  return (
    <>
      <div>
        <div>ComponentC</div>
        <Link to="/">ComponentAへ移動</Link>
      </div>
    <setData>
      <Button
        onClick={getAPIData}
      >Button</Button>
    </setData>
      
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
    
    </>
  );
};

export default ComponentC;
