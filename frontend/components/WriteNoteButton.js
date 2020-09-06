import axios from 'axios'

const WriteNoteButton = () => {

    const writeNotes = () => {
        axios.post('http://gateway-sandbox.apps.ca-central-1.starter.openshift-online.com/gateway/writeNote',
        {text: "new message sent from frontend"});
        alert("Message sent")
    }
  
    return (
        <>
        <input type='button' value='Send' onClick={writeNotes}/>
        </>
    )
  }
  
  export default WriteNoteButton
