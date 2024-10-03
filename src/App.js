import React, { useState } from 'react'

function App() {
  const [name, setName]=useState('gedeon')
  setTimeout(()=>{
    setName('pasdenom')
  },2000)
  return (
    <div>
      {name}
    </div>
  )
}

export default App
