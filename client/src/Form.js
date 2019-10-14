import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <input type="text" name="fName" placeholder="First Name" onChange={props.handleChange} required />
                <input type="text" name="lName" placeholder="Last Name" onChange={props.handleChange} />
            </div>
            

            <div>
                <input type="radio" name="type" value="Jedi" onChange={props.handleChange} required/>
                <label>Jedi</label>
                <input type="radio" name="type" value="Sith" onChange={props.handleChange} required/>
                <label>Sith</label>
                <input type="number" name="bounty" placeholder="Bounty" onChange={props.handleChange} />
            </div>
            
            <div>
                <button>Send Bounty</button>
            </div>
            
        </form>
    )
}

export default Form