import React from 'react'
import {Link} from 'react-router-dom'

const Bloglist = ({blogs, title}) => {

  return (
    <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>studio: {blog.studio}</p>
            <p>written: {blog.author}</p>
            <Link to={`/blogs/${blog.id}`} className='btn-detail'>details</Link>
          </div>
        ))}
    </div>
  )
}

export default Bloglist
