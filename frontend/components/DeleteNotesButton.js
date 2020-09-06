const DeleteNoteButton = () => {

    const eraseNotes = () => {
        alert("Send a DELETE msg to Backend")
    }
  
    return (
        <>
        <input type='button' value='Erase' onClick={eraseNotes}/>
        </>
    )
  }
  
  export default DeleteNoteButton