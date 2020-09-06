import axios from 'axios'

const DeleteNoteButton = () => {

    const eraseNotes = () => {
        axios.delete('http://gateway-sandbox.apps.ca-central-1.starter.openshift-online.com/gateway/clear')
        // alert("Messages clear")
    }
  
    return (
        <>
        <input type='button' value='Erase' onClick={eraseNotes}/>
        </>
    )
  }
  
  export default DeleteNoteButton
