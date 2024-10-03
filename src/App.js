import React, { useState } from 'react'

function App() {
const {name}=useApp()
  return (
    <div>
      {name}
    </div>
  )
}
const useApp=()=>{
  const [name, setName]=useState('gedeon')
  setTimeout(()=>{
    setName('pasdenom')
  },2000)
  return(
  {name}
)}
export default App
