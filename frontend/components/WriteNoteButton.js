import {useState, useEffect} from 'react'
import axios from 'axios'
import NotesList from './NotesList'

const WriteNoteButton = () => {

    const writeNotes = () => {
        axios.post('http://gateway-sandbox.apps.ca-central-1.starter.openshift-online.com/gateway/writeNote',
        {text: "new message sent from frontend"});
        NotesList;
        alert("Message sent")
    }
  
    return (
        <>
        <input type='button' value='Send' onClick={writeNotes}/>
        </>
    )
  }
  
  export default WriteNoteButton
