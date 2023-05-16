import "./App.css";
import {useState} from "react";
import Skills from "./component/Skills";
import Cursor from "./component/Cursor";
import SectionFirst from "./component/SectionFirst";

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };
  
  return (
    <div className="App"
    onMouseMove={handleMouseMove}
    >
      <Cursor position={cursorPosition} />
      
      <SectionFirst />

      <Skills />

    </div>
  );
}

export default App;
