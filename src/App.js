import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { render } from '@testing-library/react';

function App() {
  const [count, setCount ] = useState(0);
  const name = 'yokiko';
  const buttonAlert = () => {
    window.alert('警告ざます')
  }

    const increment = () => {
      setCount(count + 1);
      console.log(count);
    }
    const decrement = () => {
      setCount(count - 1);
      console.log(count);
    }
    const countReset = () => {
      setCount(0);
      console.log(count);
    }

  return (
    <div>
      <div>
        <button onClick={increment}>いいね</button>
        <button onClick={decrement}>よくないね</button>
        <button onClick={countReset}>リセット!</button>
        {count}
      </div>
      <div>
        <h1>Hello world</h1>
        <h2>Hello world</h2>
        <h3>Hello world</h3>
        <h4>Hello world</h4>

        <button
          onClick={() => window.alert("Hello world")}
        ></button>

        <button>button</button>
        <input type="text" />
        <a href='#'>a タグ</a>
        {name}
      </div>
      <div className="App">
        <button onClick={buttonAlert}>Hello World</button>
      </div>
    </div>
  );
};

export default App;
