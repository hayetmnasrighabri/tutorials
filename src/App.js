import React from 'react'
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom'

const Home=()=>{
  return(
    <div>
    <h1>Home</h1>
    <Link to="about">About</Link>
    </div>
  )
}
const About=()=>{
  const {id}=useParams()
  return(
    <h1>About est la page {id}</h1>
  )
}
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about/:id" element={<About/>}/>
        <Route path='*' element={<h1>404</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
