import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer, Header } from './components'
import { Home, Contact } from './pages'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='contact' element={ <Contact />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App