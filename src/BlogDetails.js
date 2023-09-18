import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

  return (
    <div className='blog-details'>
      {isPending && <div>Please Wait ...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
            <h2>{ blog.title }</h2>
            <p>Story:<br/>{ blog.detail }</p>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
