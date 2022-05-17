import React, {useState} from "react";

function FCoffee ({firstName}) {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <>
            <h1>Coffee List (F)</h1>
            <p>Hello {firstName}</p>
            <p>You clicked the button {count} times.</p>
            <button onClick={handleClick}>Click me!!</button>
        </>
    )
}

export default FCoffee;