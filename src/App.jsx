import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

// components
import Title from './components/Title'
import MyDiches from './components/MyDiches'

function App() {

  return (
    <div className="app">
     <Title />
     <Outlet />
    </div>
  )
}

export default App