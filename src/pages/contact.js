import React, { useState } from 'react'
import Form from '../components/form'

const ContactPage = (props) => {

  const isEmail = (email) => {
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
  }

  const [formState, setFormState] = useState({
    email: '',
    name: '',
    message: ''
  })

  const handleInputs = event => {
    let { name, value } = event.target
    const updatedFormState = {
      ...formState,
      [name]: value
    }
    setFormState(updatedFormState)
  }

//clear inputs
  const handleSubmit = event => {
    event.preventDefault()
    setFormState({
      email: '',
      name: '',
      message: ''
    })

  }

  //post request to back end

  return (
    <>
      <Form
        formState={formState}
        handleInputs={handleInputs}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default ContactPage