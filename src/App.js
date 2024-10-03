import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const age=20

  return (
    <div>
      <h1>Value is {count}</h1>
      <button onClick={() => {setCount(count + 1)}}>
        { age ?'mineur':'majeur'} 
      </button>
    </div>
  );
}

export default App;
