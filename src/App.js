import React, { useEffect, useState } from 'react'

function App() {
  const [count, setCount]=useState(0)
  const [watch, setWatch]=useState(0)
  useEffect(()=>{
   setCount(count+1)
  },[])
  useEffect(()=>{
    setWatch(count+1)
  },[count])
  return (
    <div>
      <h1>value is {count}</h1>
      <h2>watch is {watch}</h2>    
    </div>
  )
}

export default App
