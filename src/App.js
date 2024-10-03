import React, {useState } from 'react'

function App() {
  const [count, setCount]=useState(0)
  
  return (
    <div>
      <h1>value is {count}</h1>
      <button onClick={()=>setCount(count+1)}>Incrementer</button>
   
    </div>
  )
}

export default App
