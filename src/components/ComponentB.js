import React from 'react';
import { Link } from 'react-router-dom';

const ComponentB = () => {
  return (
    <div>
      <div>ComponentB</div>
      <Link to="componentc">ComponentCへ移動</Link>
    </div>
  );
};

export default ComponentB;