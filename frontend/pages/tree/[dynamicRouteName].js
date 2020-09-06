import { useRouter } from 'next/router'
import NoteTextBox from '../../components/NoteTextBox'
import HomeButton from '../../components/HomeButton'
import WriteNoteButton from '../../components/WriteNoteButton'
import DeleteNoteButton from '../../components/DeleteNotesButton'
import NotesComponent from '../../components/NotesComponent'

const Dias = () => {
  const router = useRouter()
  const { dynamicRouteName } = router.query
  
  return (
    <div class='row'>
      <div class='column'>
        <NoteTextBox/>
        <HomeButton/> 
        <WriteNoteButton/>
        <DeleteNoteButton/></div>

      <div class='column'>
        <NotesComponent/>
      </div>
      
    </div>
  )
}

export default Dias