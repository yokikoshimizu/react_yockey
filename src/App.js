import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComponentA />}></Route>
        <Route path="/componenta" element={<ComponentA />}></Route>
        <Route path="/componentb" element={<ComponentB />}></Route>
        <Route path="/componentb/componentc" element={<ComponentC />}></Route>
      </Routes>
    </Router>
  )
}

export default App
