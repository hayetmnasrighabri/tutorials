import React from 'react'

function App() {
  const numberList=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
      {numberList.map((number)=>{
        return(
        <div>{number}</div>
      )})}
    </div>
  )
}

export default App
