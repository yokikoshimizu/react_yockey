import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const sampleArray = [
    { id: 1, name: 'aaa', date: 19920928 },
    { id: 2, name: 'bbb', date: 19920929 },
    { id: 3, name: 'ccc', date: 19920930 },
    { id: 4, name: 'ddd', date: 19920901 },
    { id: 5, name: 'aaa', date: 19920902 },
  ]

const ComponentA = () => {
  const [data,setData] = useState([]);
    console.log('20220122');
  

  useEffect(() => {
    console.log('useEffect が呼び出されました。');

    axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
        console.log(res.data, 'res check');
        setData(res.data)
  })

}, []);


  return (
    <>
      <div>ComponentA</div>
      <Link to="componentb">ComponentBへ移動</Link>
        <Table responsive="sm">
          <table>
            <theader>
              <tr>
                <th><h1>id</h1></th>
                <th><h1>name</h1></th>
                <th><h1>date</h1></th>
              </tr>
            </theader>
            <tbody>
              {sampleArray.map((data,index) => {
                <li id={data.id} name={data.name} date={data.date} key={index}></li>
              })}
            </tbody>
          </table>
        </Table>
    </>
  );
};

export default ComponentA;