import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Header } from './components'
import { Home, Contact } from './pages'

const App = () => {
  return (
    <>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='contact' element={ <Contact />} />

    </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App