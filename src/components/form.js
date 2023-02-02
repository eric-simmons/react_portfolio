
import Input from './input'

const Form = (props) => {
    return (
        <>
            <form
                onSubmit={props.handleSubmit}>
                <label htmlFor="email" className='form-label'>Email</label>
                <input
                    name="email"
                    onChange={props.handleInputs}
                    value={props.formState.email}
                    type="email"
                    className="form-control"
                />
                <label htmlFor="name" className='form-label'>Name</label>
                <input
                    name="name"
                    onChange={props.handleInputs}
                    value={props.formState.name}
                    type="text"
                    className="form-control"
                />
                <label htmlFor="message" className='form-label'>Message</label>
                <input
                    name="message"
                    onChange={props.handleInputs}
                    value={props.formState.message}
                    type="text"
                    className="form-control"
                />
                <button 
                className='btn btn-info'
                disabled={props.disabled}
                >Submit
                </button>
            </form>
        </>
    );
}

export default Form