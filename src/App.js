import React, { createContext, useContext } from 'react'

function App() {
  return (
    <div>
      <A/>
    </div>
  )
}
const Name=createContext("Gedeon")
const A=()=>{

  return(
    <Name.Provider value='Koffi'>
        <B/>
    </Name.Provider>
   
  )
}
const B=()=>{
  return(
    <C/>
  )
}
const C=()=>{
  const name=useContext(Name)
  return(
   <h1>{name}</h1>
  )
}
export default App
