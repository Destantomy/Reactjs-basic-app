import React from 'react'

const Bloglist = ({blogs, title, handleDelete}) => {

  return (
    <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>studio: {blog.studio}</p>
            <p>written: {blog.author}</p>
            <button className="previews" onClick={() => handleDelete(blog.id)}>delete</button>
          </div>
        ))}
    </div>
  )
}

export default Bloglist
