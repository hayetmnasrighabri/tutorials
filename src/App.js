import React from 'react'

function App() {
  return (
    <div>
      <A/>
    </div>
  )
}
const A=()=>{
  const name="John Doe"
  return(
    <B name={name}/>
  )
}
const B=({name})=>{
  return(
    <C name={name}/>
  )
}
const C=({name})=>{
  return(
   <h1>{name}</h1>
  )
}
export default App
