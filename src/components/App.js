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
        <div>Hover me to see another tooltip</div>
      </Tooltip>
    </div>
  )
}
//helllo
export default App
