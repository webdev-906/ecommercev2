import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from '../components/Home';
import Products from '../components/Products';
import Contact from '../components/Contact';
import React from 'react'

const NavBar = () => {
  return (
    <div>
      <BrowserRouter>
      <header>
        <nav>
      <h2 className="logo">R<span>.</span>A<span>.</span>S</h2>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='products'>Products</NavLink>
          <NavLink to='contact'>Contact</NavLink>
        </nav>
      </header>
      <main>
  
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </main>
      </BrowserRouter>
    </div>
  )
}

export default NavBar