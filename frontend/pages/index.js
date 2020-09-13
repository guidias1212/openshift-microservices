import NotesButton from '../components/NotesButton'
import NavigationBar from '../components/NavigationBar'
import Head from 'next/head'
export default function Home(props) {

  return (
    <>
    <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <title>Memo - Homepage</title>
    </Head>
    <NavigationBar/>
    <div class='row'>
      <div class='col-sm-4'></div>
        <div class='col-sm-4'>
          <div class='d-flex justify-content-center'>  
            <h1>Welcome to Memo!</h1>
          </div>
          <div class='d-flex justify-content-center'>
          <img src="/note.png" alt="memo-picture" ></img>
          </div>
          <div class='d-flex justify-content-center'>
            <p>Go to the notes board:</p>
          </div>
          <div class='d-flex justify-content-center'>
            <NotesButton/>
          </div>
        </div>
      <div class='col-sm-4'></div>
    </div>
    </>
  )
}
