import {useState, useEffect} from 'react'

const Note = () => {

  const [getText, setText] = useState()

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <p>Write a note:</p>
      <input type='text' value={getText} onChange={handleChange}>
      </input>
      <p>{getText}</p>
    </>
  )
}


export default Note