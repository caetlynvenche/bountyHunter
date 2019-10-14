import React from 'react'

const EditForm = (props) => {
    return (
            <form onSubmit={props.handleEditSubmit}>

                <div>
                    <input type="text" name="newFName" placeholder={props.fName} onChange={props.handleEditChange} />
                    <input type="text" name="newLName" placeholder={props.lName} onChange={props.handleEditChange} />
                </div>
            

            <div>
                <input type="radio" name="newType" value="Jedi" onChange={props.handleEditChange} />
                <label>Jedi</label>
                <input type="radio" name="newType" value="Sith" onChange={props.handleEditChange} />
                <label>Sith</label>
                <input type="number" name="newBounty" placeholder={props.bounty} onChange={props.handleEditChange} />
            </div>
            
            <div>
                <button>Update Bounty</button>
            </div>
            
            </form>
    )
}

export default EditForm