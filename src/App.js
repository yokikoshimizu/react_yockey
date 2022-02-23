import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// components
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComponentA />} />
        <Route path="/componenta" element={<ComponentA />} />
        <Route path="/componentb" element={<ComponentB />} />
        <Route path="/componentb/componentc" element={<ComponentC />} />
      </Routes>
    </Router>
  )
}

export default App
