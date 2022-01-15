import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import Extra from './extra';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComponentA></ComponentA>}></Route>
        <Route path="/componentb" element={<ComponentB></ComponentB>}></Route>
        <Route path="/componentc" element={<ComponentC></ComponentC>}></Route>
        <Route path="/extra" element={<Extra></Extra>}></Route>
      </Routes>
    </Router>
  )
}

export default App
