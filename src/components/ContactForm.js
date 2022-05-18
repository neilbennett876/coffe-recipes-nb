import { useEffect, useState } from "react"

export default function ContactForm () {
    const [formData, setFormData] = useState({})

// const [firstName, setFirstName] = useState("")
// const [lastName, setLastName] = useState("")
// const [terms, setTerms] = useState(false)
// const [validForm, setValidForm] = useState(false)



// useEffect(()=>{if(contactFormInfo.firstName && contactFormInfo.lastName && contactFormInfo.terms) {
//     setValidForm(true)
// }}, [contactFormInfo.firstName, contactFormInfo.lastName, contactFormInfo.terms]) 



const sendData = (e) => {
    e.preventDefault()  //preventDefault prevents thet page from being loaded

    fetch(`${process.env.REACT_API_ENDPOINT}/hot`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json)
    .then(data => console.log('Success:', data))
    .catch(err => console.error(err))

}

const setFormObject = (event, name) => {
    // setFormData(event.target.value)
    setFormData({...formData, [event.target.name]: event.target.value})
}


    return( 
    <>
    <form method="post">

    <label>
    First Name: 
    <input type="text"
    name="firstName"
    placeholder="First Name"
    // onChange={event=> setFormData( {...formData, firstName: event.target.value} )}/>
    onChange={event=> setFormObject(event)}/>
    </label>
    
    <br/>
    <label>
        Last Name:
    <input
    type="text"
    name="lastName"
    onChange={event => setFormObject(event)}/>
    </label>

    <br/>
    <label>
    Address: 
    <input type="text" name="address"
    onChange={event => setFormObject(event)}/>
    </label>

    <br/>
    <label>
        Zip: 
    <input type="type" name="zip" maxLength={5}
    onChange={(e) => setFormObject(e)}/>
    </label>

    <br />
    <label>
        Date:
        <input type="date"/>
        </label>

        <br />
        <label>
            Terms and conditions
            <input type="checkbox" onChange={event => setFormObject(event)}/>
        </label>
        <br/>

        {/* <label>
           <textarea name="message" cols="30" rows="10" />
        </label>
        <button onClick={(e)=>{sendData(e)}} disabled={!validForm}>Submit</button> */}


        <br/>
        <label>State: </label>
        <select name="state" onChange={event=>{}}>
            <option value="fl">FL</option>
            <option value="il">IL</option>
            <option value="ny">NY</option>
            <option value="nj">NJ</option>
            </select>
            
        </form>
        </>
    )
}