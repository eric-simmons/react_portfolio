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
  }

  //reset inputs
  const handleSubmit = event => {
    
    event.preventDefault()
    fetch("https://formsubmit.co/ajax/EricTomlinsonSimmons@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: "FormSubmit",
        message: "I'm from Devro LABS"
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
    //prevent submit if there is an error
    if (!errorMessage) {
      console.log('submit')
      
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