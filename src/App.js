import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer, Header } from './components'
import { Home, Contact, Login, Register, Reset } from './pages'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='contact' element={ <Contact />} />
      <Route path='login' element={ <Login />} />
      <Route path='register' element={ <Register />} />
      <Route path='reset' element={ <Reset />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App