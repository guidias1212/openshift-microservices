import axios from 'axios'
import NotesList from './NotesList'

const WriteNoteButton = () => {

    const writeNotes = async ()  => {
        await axios.post('http://gateway-sandbox.apps.ca-central-1.starter.openshift-online.com/gateway/writeNote',
        {text: document.getElementById("note-input").value});
        location.reload();
    }
  
    return (
        <>
        <input type='button' value='Send' onClick={writeNotes}/>
        </>
    )
  }
  
  export default WriteNoteButton
