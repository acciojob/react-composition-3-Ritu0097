import React from "react";
import Tooltip from './Tooltip.js';
const App = () => {
  return (
    <div>
      <h1>Tooltip Example</h1>
      <Tooltip text="Hello! This is a tooltip.">
        <button>Hover over me</button>
      </Tooltip>
      <Tooltip text="Another tooltip example.">
        <div>Hover over this div</div>
      </Tooltip>
    </div>
  )
}

export default App
