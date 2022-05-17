import React from "react";

class CCoffee extends React.Component {
    constructor(props) { //constructor allows properties and features to be added to this class
        super(props)
        this.state = {
            count: 0,
            another: "what",
        }
    }
    handleClick() {
        this.setState({count: this.state.count + 1}) //uses a built in method to combine the new state and the old state
    }

    render() { // every class component has a render method
        const { count } = this.state //destructuring
        const { firstName } = this.props //destructuring
        return ( //jsx returns
        <>
            <h1>Coffee List (CC)</h1>
            <p>Hello {firstName}</p> 
            <p>You clicked the button {count} times.</p>
            <button onClick={() => this.handleClick()}>Click me!!</button>
        </>
        )
    }
}

export default CCoffee