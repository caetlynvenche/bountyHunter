import React from 'react'
import EditForm from './EditForm'

//try changing state to match other one's state
//currently getting rid of everything and replacing it with just the updated values

class Bounty extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newFName: props.fName,
            newLName: props.lName,
            newType: props.type,
            newIsLiving: props.isLiving,
            newBounty: props.bounty
        }
    }

    handleEditChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    
    handleEditSubmit = (e) => {
        e.preventDefault()
    
        const id = this.props._id
        const updates = {
            fName: this.state.newFName,
            lName: this.state.newLName,
            type: this.state.newType,
            bounty: this.state.newBounty
        }
    
        this.props.handleEdit(id, updates)
    }

    render () {
        return (
            <section>
                <h1>{this.props.fName} {this.props.lName}</h1>
                <h2>{this.props.type}</h2>
                <p>{this.props.bounty} credits</p>
                {
                    this.props.isLiving 
                    ?
                    <p>Is Alive</p>
                    :
                    <p>Is Dead</p>
                }
                <button onClick= {() => this.props.handleDelete(this.props._id)}>Delete</button>


                <EditForm  {...this.props} 
                    handleEditChange={this.handleEditChange}
                    handleEditSubmit={this.handleEditSubmit}
                    newFName={this.state.newFName}
                    newLName={this.state.newLName}
                    newType={this.state.newType}
                    newBounty={this.state.newBounty} />
            </section>
        )
    }
}

export default Bounty