import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/home'
import NavMenu from './components/nav/nav'
import Cabecera from './components/header/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavMenu/>
    <Cabecera/>
      <Home/>
    </>
  )
}

export default App
