const GoNotesButton = () => {

    const goNotes = () => {
        window.open('/tree/notes', "_self")
    }

    return (
        <>
        <input class='btn btn-primary px-5' type='button' value='Board' onClick={goNotes}/>
        </>
    )
}

export default GoNotesButton