const GoHomeButton = () => {

    const goHome = () => {
        window.open("/", "_self")
    }

    return (
        <>
        <input class='btn btn-info' type='button' value='Back' onClick={goHome}/>
        </>
    )
}

export default GoHomeButton