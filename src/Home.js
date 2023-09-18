import React from 'react'
import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Home = () => {
  const {error, isPending, data: blogs} = useFetch('http://localhost:8000/blogs/')

  return (
    <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading ...</div>}
        {blogs && <Bloglist blogs={blogs} title='All Games'/>}
    </div>
  )
}

export default Home

// hook is one of the react method which to use display-
// the changing dynamic value. Hook imported from react and calling it using useState
// it can be called using array, 1st value used to set the default and the 2nd is set to new dynamic value
