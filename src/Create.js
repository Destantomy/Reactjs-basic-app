import React, { useState } from 'react'

const Create = () => {
  const [title, setTitle] = useState('')
  const [auth, setAuth] = useState('desta')
  const [studio, setStudio] = useState('')
  const [detail, setDetail] = useState('')

  return (
    <div className='create'>
      <p>New Game Disk</p>
      <form>
        <label>Game title: </label>
        <input type="text" required autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <label>Author: </label>
        <select required
        value={auth}
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
        <button>Add BLog</button>
      </form>

      
      <p><br /> Testing Area here onChange function</p>
      <p>{title}</p>
      <p>{auth}</p>
      <p>{studio}</p>
      <p>{detail}</p>
    </div>
  )
}

export default Create
