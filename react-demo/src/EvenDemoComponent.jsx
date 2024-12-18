
const EvenDemoComponent  = () => {

    const handleClick = () => {
        console.log("Clicked")
    }

    return (
        <>
            <h2>Here</h2>
            <button
               onClick={handleClick}
            >
                Click Me
            </button>
        </>
    )

}

export default EvenDemoComponent;