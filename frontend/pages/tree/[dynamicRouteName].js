import { useRouter } from 'next/router'
import Head from 'next/head'
import NoteTextBox from '../../components/NoteTextBox'
import HomeButton from '../../components/HomeButton'
import WriteNoteButton from '../../components/WriteNoteButton'
import DeleteNoteButton from '../../components/DeleteNotesButton'
import NotesComponent from '../../components/NotesComponent'
import NavigationBar from '../../components/NavigationBar'

const NotesPage = () => {
  const router = useRouter()
  const { dynamicRouteName } = router.query
  
  return (
    <>
      <Head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
          <title>Memo - Board</title>
      </Head>
      <NavigationBar/>
      <div class='row'>
        <div class='col-sm-3'/>
        <div class='row'/>
        <div class='col-sm-3'>
          <NoteTextBox/>
          <HomeButton/> 
          <WriteNoteButton/>
          <DeleteNoteButton/>
        </div>
        <div class='col-sm-3'>
          <NotesComponent/>
        </div>
        <div class='col-sm-3'/>
      </div>
    </>
  )
}

export default NotesPage