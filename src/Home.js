import {React, useState} from 'react'
import Bloglist from './Bloglist';

const Home = () => {
// hook declare start
    const [blogs, setBlogs] = useState([
      {
        title: 'Super Mario bros',
        detail: 'lorem ipsum ..',
        author: 'Shigeru Miyamoto',
        id: 1
      },
      {
        title: 'Mario Odessy',
        detail: 'lorem ipsum ..',
        author: 'Shigeru Miyamoto',
        id: 2
      },
    ]);

// /hook declare start
  return (
    <div className="home">
        <Bloglist blogs={blogs} title='All indexs'/>
    </div>
  )
}

export default Home

// hook is one of the react method which to use display-
// the changing dynamic value. Hook imported from react and calling it using useState
// it can be called using array, 1st value used to set the default and the 2nd is set to new dynamic value
