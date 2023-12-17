import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import useFetch from './useFetch'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('https://reactjs-json-server.vercel.app/blogs/' + id);
    const navigate = useNavigate()

    const handeDelete = () => {
      fetch('https://reactjs-json-server.vercel.app/blogs/' + id, {
        method: 'DELETE'
      })
      .then(() => {
        navigate('/')
      })
    }

    // console.log(blog)

  return (
    <div className='blog-details'>
      {isPending && <div>Please Wait ...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
            <h2>{ blog.title }</h2>
            <p>Story:<br/>{ blog.detail }</p>
            <br />
            <p className='fontsize-date'>{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</p>
            <br />
            <button className='btn-delete' onClick={handeDelete} >delete</button>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
