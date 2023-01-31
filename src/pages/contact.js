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

  //clear inputs
  const handleSubmit = event => {
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