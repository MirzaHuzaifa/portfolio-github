import React from 'react';
import "./Cursor.css";



  

  const Cursor = ({ position }) => {
    return (
      <div
        className="cursor"
        style={{ left: `${position.x}px`, top: `${position.y}px`, zIndex: 999, backgroundColor: "white"}}
      />
    );
  };


export default Cursor;
