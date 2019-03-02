import React, { useState } from "react";
import ReactDOM from "react-dom";
import ColorPicker from "./components/ColorPicker";
import "./styles.css";
import Canvas from "./components/Canvas";

function App() {
  const [color, setColor] = useState(0);
  return (
    <div className="App">
      <ColorPicker currentColor={color} setColor={color => setColor(color)} />
      <Canvas />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
