const GoNotesButton = () => {

    const goNotes = () => {
        window.open('http://localhost:3000/tree/notes', "_self")
    }

    return (
        <>
        <input type='button' value='Notes' onClick={goNotes}/>
        </>
    )
}

export default GoNotesButton