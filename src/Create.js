import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState('')
  const [author, setAuth] = useState('desta')
  const [studio, setStudio] = useState('')
  const [detail, setDetail] = useState('')
  const [isPending, setPending] = useState(false)
  const navigate = useNavigate()

const handleSubmit = (e) => {
  // this function below to avoid the page reload while doing submit value
  e.preventDefault()

  const blog = { title, author, studio, detail }
  // console.log(blog)

  setPending(true);

  fetch('http://localhost:8000/blogs/', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(blog)
  })
  .then(() => {
    console.log('game data successfuly added')
    setPending(false)
    // history.go(-1) // --> this syntax mean go back one through history
    navigate('/'); // --> this syntax wwill bring you back to root page / home
  })
}

  return (
    <div className='create'>
      <p>New Game Disk</p>
      <form onSubmit={handleSubmit}>
        <label>Game title: </label>
        <input type="text" required autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <label>Author: </label>
        <select required
        value={author}
        onChange={(e) => setAuth(e.target.value)}>
          <option value="desta">desta</option>
          <option value="destajr">destajr</option>
        </select>
        <label>Studio: </label>
        <input type="text" required
        value={studio}
        onChange={(e) => setStudio(e.target.value)}
        />
        <label>Detail: </label>
        <textarea required
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        ></textarea>
        {!isPending && <button>Add Game</button>}
        {isPending && <button disabled>Adding ...</button>}
      </form>
    </div>
  )
}

export default Create
