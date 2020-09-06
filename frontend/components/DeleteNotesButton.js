import axios from 'axios'

const DeleteNoteButton = () => {

    const eraseNotes = () => {
        axios.post('http://notes-sandbox.apps.ca-central-1.starter.openshift-online.com/notes/clear')
        location.reload();
    }
  
    return (
        <>
        <input type='button' value='Erase' onClick={eraseNotes}/>
        </>
    )
  }
  
  export default DeleteNoteButton
