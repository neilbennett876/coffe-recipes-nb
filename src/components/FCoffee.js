import React, {useState, useEffect} from "react"; //importing react, useState and useEffect from react

function FCoffee ({firstName}) { //creates react component which takes in a PROP firstName
    const [coffeeList, setCoffeeList] = useState() //creates state variable and setter and initializes coffee to undefined
    const [temperature, setTemperature] = useState('iced') //creates a state variable and a setter and initializes temperature to "iced"
    useEffect(() => { //listens for a change in state in temperature
        fetch(`https://api.sampleapis.com/coffee/${temperature}`) //if there is a change in state, fetch carries out a get request on this url
            .then(response => response.json()) //handling response of the API call, response is converted to JSON file
            .then(data => setCoffeeList(data)) //getting data from line above and sets it to the setter setCoffeeList
            // .then(setCoffeeList) Same as line above
            .catch(console.error) //error handling in the case there is an error in lines 7-9
    }, [temperature])
    return ( // whenever there is a functional component, this return RETURNS valid JSX
        <>
            <h1>Coffee List (F)</h1>
            <p>Hello {firstName}</p>
            <button onClick={()=>setTemperature('hot')}>Hot🔥</button>
            <button onClick={()=>setTemperature('iced')}>Iced❄️</button>
            {!coffeeList
                ? <h2>Loading🤔</h2>
                :<>
                <h2>Coffees ☕️</h2>
                {coffeeList.map(coffee => {
                    return <p key={coffee.id}>{coffee.title}</p>
                    }
                )}
                </>
            }
        </>
    )
}

export default FCoffee;