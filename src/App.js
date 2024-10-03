import React, { useState } from 'react'

function App() {
  const [data, setData]=useState('salut')
  return (
    <div>
      <input type='text' value={data} onChange={(e)=>setData(e.target.value)}/>
    {data}
    </div>
  )
 }

export default App
