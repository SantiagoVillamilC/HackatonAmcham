import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/home'
import NavMenu from './components/nav/nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavMenu/>
      <Home/>
    </>
  )
}

export default App
