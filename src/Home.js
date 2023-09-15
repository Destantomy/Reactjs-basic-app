import {React, useState} from 'react'

const Home = () => {
// hook declare start
    const [name, setName] = useState('Mario');
    const [p, setP] = useState('P1');

    const clicked = () => {
        setName('Luigi');
        setP('P2');
    }
// /hook declare start
  return (
    <div className="home">
        <h2>Home Page</h2>
        <p>{ name } is the {p}</p>
        <button onClick={clicked}>Click Me</button>
    </div>
  )
}

export default Home

// hook is one of the react method which to use display-
// the changing dynamic value. Hook imported from react and calling it using useState
// it can be called using array, 1st value used to set the default and the 2nd is set to new dynamic value
