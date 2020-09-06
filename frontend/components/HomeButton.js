const GoHomeButton = () => {

    const goHome = () => {
        window.open("http://frontend-sandbox.apps.ca-central-1.starter.openshift-online.com/", "_self")
    }

    return (
        <>
        <input type='button' value='Back' onClick={goHome}/>
        </>
    )
}

export default GoHomeButton