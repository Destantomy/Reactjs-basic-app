import {React, useEffect, useState} from 'react'
import Bloglist from './Bloglist';

const Home = () => {
// hook declare start
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
// /hook declare start

    useEffect(() => {
      setTimeout(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log(data);
          setBlogs(data);
          setIsPending(false);
        });
      }, 1000);
    }, []);

  return (
    <div className="home">
        {isPending && <div>Loading ..</div>}
        {blogs && <Bloglist blogs={blogs} title='All Games'/>}
    </div>
  )
}

export default Home

// hook is one of the react method which to use display-
// the changing dynamic value. Hook imported from react and calling it using useState
// it can be called using array, 1st value used to set the default and the 2nd is set to new dynamic value
