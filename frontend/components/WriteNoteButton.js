import axios from 'axios'

const WriteNoteButton = () => {

    const writeNotes = () => {
        axios.post('notes-sandbox.apps.ca-central-1.starter.openshift-online.com/notes/new',
        {text: "new message sent from frontend"});
        location.reload();
    }
  
    return (
        <>
        <input type='button' value='Send' onClick={writeNotes}/>
        </>
    )
  }
  
  export default WriteNoteButton
