import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Create from './pages/Create'
import Update from './pages/Update'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<Create/>}/>
        <Route path="/add/:id" element={<Update />} />
      </Routes>
    </div>
  )
}

export default App
