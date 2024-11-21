import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Greet from './components/Greet'

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          {/* This pattern will not render main route element if its declared */}
          <Route path='/aboutme'>
            <Route path='subroute/:name' element={<Greet />} />
          </Route>
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router >
    </>
  )
}

export default App
