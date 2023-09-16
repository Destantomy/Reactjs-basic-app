import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>Games Blogger</h1>
        <div className="links">
        <a href="/">Home</a>
        <a href="/create" className='new-blog'>New Blog</a>
        </div>
    </nav>
  )
}

export default Navbar
