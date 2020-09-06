const axios = require('axios');

const getNotesFromServer = () => {
    axios.get('http://gateway-sandbox.apps.ca-central-1.starter.openshift-online.com/gateway/getNotes')
    .then(resposne => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    })
}


const NotesList = () => {
    return (
        <>
        {getNotesFromServer()}
        <p>This is a note</p>
        <br/>
        <p>This is another note</p>
        <br/>
        </>
    )
  }
  
  export default NotesList
