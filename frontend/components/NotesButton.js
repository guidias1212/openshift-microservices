const GoNotesButton = () => {

    const goNotes = () => {
        window.open('http://frontend-sandbox.apps.ca-central-1.starter.openshift-online.com/tree/notes', "_self")
    }

    return (
        <>
        <input type='button' value='Notes' onClick={goNotes}/>
        </>
    )
}

export default GoNotesButton