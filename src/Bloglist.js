import React from 'react'
import {Link} from 'react-router-dom'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Bloglist = ({blogs, title}) => {

  return (
    <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>studio: {blog.studio}</p>
            <p>written by: {blog.author}</p>
            <br />
            <p className='fontsize-date'>{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</p>
            <br />
            <Link to={`/blogs/${blog.id}`} className='btn-detail'>details</Link>
          </div>
        ))}
    </div>
  )
}

export default Bloglist
