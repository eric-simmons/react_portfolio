import React, { useState } from 'react'
import Form from '../components/form'
import { isEmail } from '../utils/helpers'

const ContactPage = (props) => {
  const [errorMessage, setErrorMessage] = useState('')
  const [formState, setFormState] = useState({
    email: 'Email@email.com',
    name: 'Name',
    message: 'Message'
  })

  const handleInputs = event => {
    let value = event.target.value
    let field = event.target.name

    if (field === "email") {
      let emailTest = isEmail(value)
      if (!emailTest) {
        setErrorMessage("Email is Invalid")
      } else {
        setErrorMessage('')
      }
    }
    else {
      if (!value.length) {
        setErrorMessage(`${field} is required`)
      } else {
        setErrorMessage("")
      }
    }

    const updatedFormState = {
      ...formState,
      [field]: value
    }
    setFormState(updatedFormState)
    console.log(formState.email)
  }

  //reset inputs
  const handleSubmit = event => {
fetch("https://formsubmit.co/ajax/erictomlinsonsimmons@gmail.com", {
  method: "POST",
  headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
  },
  body: JSON.stringify({
    email: formState.email,
      name: formState.name,
      message: formState.message
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
    
    event.preventDefault()
    //prevent submit if there is an error
    if (!errorMessage) {
   
      
      setFormState({
        email: 'Email@email.com',
        name: 'Name',
        message: 'Message'
      })
    }



  }

  //post request to back end

  return (
    <>
      <Form
        formState={formState}
        handleInputs={handleInputs}
        handleSubmit={handleSubmit}
      />
      <center>
        <h3>{errorMessage}</h3>
      </center>
    </>
  )
}

export default ContactPage