import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Tooltip text="This is a tooltip!">
        <p>Hover over me</p>
      </Tooltip>
      <Tooltip text="Another tooltip">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-4">
          Hover over me
        </button>
      </Tooltip>
    </div>
  );
};

export default App;