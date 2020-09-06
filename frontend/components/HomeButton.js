const GoHomeButton = () => {

    const goHome = () => {
        window.open("http://localhost:3000", "_self")
    }

    return (
        <>
        <input type='button' value='Back' onClick={goHome}/>
        </>
    )
}

export default GoHomeButton