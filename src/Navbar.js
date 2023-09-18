import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>Games Blogger</h1>
        <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" className='new-blog'>New Game</Link>
        </div>
    </nav>
  )
}

export default Navbar
