import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h2>Sorry</h2>
      <p>That page can not be found</p>
      <Link to='/'>Back to home-page ..</Link>
    </div>
  )
}

export default NotFound
