import React from 'react'
import axios from 'axios'
import Bounty from './Bounty'
import Form from './Form'
import './styles/styles.css'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            savedData: [],
            fName: "",
            lName: "",
            type: "",
            isLiving: true,
            bounty: 0
        }
    }

    componentDidMount() {
        this.getBounties()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const newInfo = {
            fName: this.state.fName,
            lName: this.state.lName,
            type: this.state.type,
            isLiving: true,
            bounty: this.state.bounty
        }

        axios.post("/bounty", newInfo)
            .then(res => {
                console.log(res)
                this.getBounties()
            })
            .catch(err => console.log(err))
    }

    handleDelete = (id) => {
        console.log("delete", id)
        axios.delete(`/bounty/${id}`)
            .then(() => {
                this.setState({
                    fName: "",
                    lName: "",
                    type: "",
                    isLiving: true,
                    bounty: 0
                })
                this.getBounties()
            })
            .catch(err => console.log(err))
    }

    handleEdit = (id, updates) => {
        axios.put(`bounty/${id}`, updates)
            .then((res) => {
                this.setState(prevState => ({
                    savedData: prevState.savedData.map(bounty => bounty._id === id ? res.data : bounty)
                }))
                this.getBounties()
            })
            .catch(err => console.log(err))

        console.log("handle edit here")
    }

    getBounties = () => {
        axios.get("/bounty")
        .then(res => {
            this.setState({
                savedData: res.data
            })
        })
        .catch(err => console.log(err))
    }


    render() {
        const mappedBounties = this.state.savedData.map(bounty => <Bounty 
            key = {bounty._id} 
            {...bounty} 
            handleDelete={this.handleDelete} 
            handleEdit={this.handleEdit} 
            handleChange={this.handleChange}/>)
        return (
            <div>
                <header>
                    <h1>Bounty Hunter</h1>
                </header>
                <Form {...this.state} handleChange={this.handleChange} handleSubmit = {this.handleSubmit} />
                { mappedBounties }
            </div>
        )
    }
}

export default App