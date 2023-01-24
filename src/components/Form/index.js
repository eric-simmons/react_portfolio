import React from 'react';
function FormBody(props) {
    return (
        <>
            <form className='container' onSubmit={props.handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input
                        name="email"
                        onChange={props.handleInputs}
                        value={props.formState.email}
                        type="email"
                        className="form-control"
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="firstName" className='form-label'>First Name</label>
                    <input
                        name="firstName"
                        onChange={props.handleInputs}
                        value={props.formState.firstName}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="lastName" className='form-label'>Last Name</label>
                    <input
                        name="lastName"
                        onChange={props.handleInputs}
                        value={props.formState.lastName}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="message" className='form-label'>Message</label>
                    <input
                        name="message"
                        onChange={props.handleInputs}
                        value={props.formState.message}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button className='btn btn-info'>Submit</button>
            </form>
        </>
    );
}

export default FormBody