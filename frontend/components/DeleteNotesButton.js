import axios from 'axios'

const DeleteNoteButton = () => {

    const eraseNotes = async () => {
        await axios.post('http://gateway-sandbox.apps.ca-central-1.starter.openshift-online.com/gateway/clear')
        location.reload();
    }
  
    return (
        <>
        <input type='button' value='Erase' onClick={eraseNotes}/>
        </>
    )
  }
  
  export default DeleteNoteButton
