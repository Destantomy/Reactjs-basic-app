import {React, useEffect, useState} from 'react'
import Bloglist from './Bloglist';

const Home = () => {
// hook declare start
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
// /hook declare start

    useEffect(() => {
      setTimeout(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
          if(!res.ok) {
            throw Error('couldnt fetch data from resource')
          }
          return res.json();
        })
        .then(data => {
          setBlogs(data);
          setIsPending(false);
          setError(null)
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        })
      }, 1000);
    }, []);

  return (
    <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading ..</div>}
        {blogs && <Bloglist blogs={blogs} title='All Games'/>}
    </div>
  )
}

export default Home

// hook is one of the react method which to use display-
// the changing dynamic value. Hook imported from react and calling it using useState
// it can be called using array, 1st value used to set the default and the 2nd is set to new dynamic value
