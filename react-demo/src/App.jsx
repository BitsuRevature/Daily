import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EvenDemoComponent from './EvenDemoComponent'
import StateDemoComponent from './StateDemoComponent'
import AxiosGetDemo from './AxiosGetDemo'
import NavBar from './component/NavBar'
import { Router, Route, Routes } from 'react-router-dom'
import TextComponent from './component/hoc/TextComponent'
import MyContext from './component/contextdemo/MyContext'

function App() {
  const [count, setCount] = useState(0)
  const sharedData = "This is shared data";
  return (
    // <Router>
    //   <div className='app'>
    //     <NavBar />
    //   </div>

    // </Router>
    <MyContext.Provider value={sharedData}>
      <TextComponent />
    </MyContext.Provider>
  )
}

export default App
