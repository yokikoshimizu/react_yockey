import React from 'react'
import './App.css';
import Card from './Card';

const sampleArray = [
  { id: 1, name: 'aaa', date: 19920928 },
  { id: 2, name: 'bbb', date: 19920929 },
  { id: 3, name: 'ccc', date: 19920930 },
  { id: 4, name: 'ddd', date: 19920901 },
  { id: 5, name: 'aaa', date: 19920902 },
]

const App = () => {
  return (
    <div>
      <div>
        {sampleArray.map((data,index) => {
          return <Card id={data.id} name={data.name} date={data.date} key={index}></Card>
        })}
      </div>
      <div>
        <Card name="yokiko" date="2021/12/18"></Card>
      </div>
    </div>
  );
};

export default App
