import React from 'react';
import "./Cursor.css";



  

  const Cursor = ({ position }) => {
    return (
      <div
        className="cursor"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    );
  };


export default Cursor;