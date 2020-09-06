import {useState, useEffect} from 'react'
import axios from 'axios'

const NotesList = () => {
    const [getText, setText] = useState(["Loading notes from server..."])
    

    useEffect(async () => {
        const response = await axios.get('http://gateway-sandbox.apps.ca-central-1.starter.openshift-online.com/gateway/getNotes');
        setText(response.data.notes);
    }, [])

    return (
        <div>
            {
                getText.map((notes, index) => {
                    return (
                        <div key={index}>
                            <p>{notes}</p>
                        </div>
                    )
                })
            }
        </div>
    )
  }
  
  export default NotesList
