  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'
  import Navbar from './Component/Navbar'
  import Home from './Component/Home'
  import About from './Component/About'
  import Skills from './Component/Skills'
  import Footer from './Component/Footer'
  import Contact from './Component/Contact'
  import Projects from './Component/Project'

  function App() {
    const [count, setCount] = useState(0)

    return (
      <>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </>
    )
  }

  export default App
