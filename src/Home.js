import {React, useState} from 'react'
import Bloglist from './Bloglist';

const Home = () => {
// hook declare start
    const [blogs, setBlogs] = useState([
      {
        title: 'Super Mario bros',
        studio: 'Nintendo corp.',
        author: 'Shigeru Miyamoto',
        id: 1
      },
      {
        title: 'Mario Odessy',
        studio: 'Nintendo corp.',
        author: 'Shigeru Miyamoto',
        id: 2
      },
      {
        title: 'Metal Gear: The Panthom Pain',
        studio: 'Fox',
        author: 'Hideo Kojima',
        id: 3
      },
    ]);

// /hook declare start
  return (
    <div className="home">
        <Bloglist blogs={blogs} title='All Games'/>
        <Bloglist blogs={blogs.filter((blog) => blog.author === 'Hideo Kajima')} title='Konami' />
    </div>
  )
}

export default Home

// hook is one of the react method which to use display-
// the changing dynamic value. Hook imported from react and calling it using useState
// it can be called using array, 1st value used to set the default and the 2nd is set to new dynamic value
