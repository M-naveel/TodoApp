import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Component/AddTodo'
import Todos from './Component/Todos'
function App() {


  return (
    <>
          <AddTodo />
          <Todos />
    </>
  )
}

export default App
