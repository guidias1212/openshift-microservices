import {useState, useEffect} from 'react'
import axios from 'axios'

const NotesList = () => {
    const [getText, setText] = useState(["Loading notes from server..."])
    

    useEffect(async () => {
        const response = await axios.get('http://notes-sandbox.apps.ca-central-1.starter.openshift-online.com/notes/getAll');
        setText(response.data);
    }, [])

    return (
        <div>
            {
                getText.map((data, index) => {
                    return (
                        <div key={index}>
                            <p>{data.text}</p>
                        </div>
                    )
                })
            }
        </div>
    )
  }
  
  export default NotesList
