import { useState } from "react"

const StateDemoComponent = () => {

    const [name, setName] = useState("Default");

    const handleClick = () => {
        setName("Another One")
    }

    return (
        <>
            <h2>{name}</h2>
            <button onClick={handleClick}>
                Change Name
            </button>
        </>
    )
}

export default StateDemoComponent;