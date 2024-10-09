import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

const Home=()=>{
  return(
    <div>
    <h1>Home</h1>
    <Link to="about">About</Link>
    </div>
  )
}
const About=()=>{
  return(
    <h1>About est la page</h1>
  )
}
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
