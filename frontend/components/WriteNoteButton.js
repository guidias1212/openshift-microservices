const WriteNoteButton = () => {

    const writeNotes = () => {
        alert("Send a POST + GET msg to Backend")
    }
  
    return (
        <>
        <input type='button' value='Send' onClick={writeNotes}/>
        </>
    )
  }
  
  export default WriteNoteButton