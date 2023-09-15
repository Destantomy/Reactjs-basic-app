import React from 'react'

const Bloglist = (props) => {
    
    const blogs = props.blogs;
    const title = props.title;

    console.log(props, blogs);

  return (
    <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blogs.id}>
            <h3>{blog.title}</h3>
            <p>written by {blog.author}</p>
          </div>
        ))}
    </div>
  )
}

export default Bloglist
