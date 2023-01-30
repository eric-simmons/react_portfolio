
import Input from './input'

const Form = (props) => {
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
                <label htmlFor="name" className='form-label'>Name</label>
                <input
                    name="name"
                    onChange={props.handleInputs}
                    value={props.formState.name}
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

export default Form