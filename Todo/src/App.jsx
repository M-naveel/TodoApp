import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import AddTodo from './Component/AddTodo'
import Todos from './Component/Todos'
function App() {


  return (
    <>    
    <div className="page-content">

    
          <Navbar />
          <AddTodo />
          <Todos />
          <Footer />
    
    </div>
    </>
  )
}

export default App
