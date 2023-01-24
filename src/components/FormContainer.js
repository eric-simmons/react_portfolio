import React, { useState } from 'react';
import Form from './Form';

function FormContainer() {

    const [formState, setFormState] = useState({
        email: '',
        firstName: '',
        lastName: '',
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


    const handleSubmit = event => {
        event.preventDefault()
        console.log(formState)
    }


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
export default FormContainer