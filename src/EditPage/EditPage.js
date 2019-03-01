import React, { Component } from 'react';   
import './EditPage.css'
import { withRouter } from 'react-router-dom'

class Edit extends Component {

    state = {
        shoe: {
            brand: "",
            name: "",
            description: "",
            size: "",
            price: "",
            picture: "",
            created_by: ""
        }
    }

    componentDidMount () {
        this.getShoes()
    }

    getShoes = async () => {
        console.log(`http://localhost:8000/api/v1/shoes/${this.props.match.params.id}`)
        try {
          const shoeResponse = await fetch(`http://localhost:8000/api/v1/shoes/${this.props.match.params.id}`)
          const shoeParsed = await shoeResponse.json()
          console.log(shoeParsed)
          this.setState({
            shoe: shoeParsed
          })
    
        } catch(err) {
          console.log(err)
          console.log('IS THIS WORKING')
        }
      }

    handleInput = (e) => {
        this.setState({
            shoe: {...this.state.shoe, [e.target.name] : e.target.value}
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(`${this.props.match.params.id}`)
        // console.log(this.state)
        const shoe = await fetch(`http://localhost:8000/api/v1/shoes/${this.props.match.params.id}/edit`, {
          method: 'PUT',
          credentials: 'include',
          body: JSON.stringify(this.state.shoe),
          headers:{
            'Content-Type': 'application/json'
            }
        });
        this.props.history.push("/shoes");
        console.log(await shoe.json())
        // this.props.history.push("/shoes");
    }

    handleDelete = async (e) => {
        e.preventDefault();
        const shoe = await fetch(`http://localhost:8000/api/v1/shoes/${this.props.match.params.id}`, {
          method: 'DELETE',
          credentials: 'include',
          body: JSON.stringify(this.state.shoe),
          headers:{
            'Content-Type': 'application/json'
            }
        });
        this.props.history.push("/shoes");
        console.log(await shoe.json())
    }
    
    render() {
        return(
            <div className="edit-container">
                <form className="edit-Forms-Container" onSubmit={this.handleSubmit}>
                <h1 className="edit-header">Edit Kicks Here</h1>
                    <input className="edit-input1" defaultValue={this.state.shoe.brand} onChange={(e) => this.handleInput(e)} type="text" name="brand" placeholder="Brand" />
                    <input className="edit-input2" onChange={(e) => this.handleInput(e)} type="text" name="name" placeholder="Type" />
                    <input className="edit-input3" onChange={(e) => this.handleInput(e)} type="text" name="picture" placeholder="Picture" />
                    <input className="edit-input4" onChange={(e) => this.handleInput(e)} type="text" name="description" placeholder="Description" />
                    <input className="edit-input5" onChange={(e) => this.handleInput(e)} type="text" name="size" placeholder="Size" />
                    <input className="edit-input6" onChange={(e) => this.handleInput(e)} type="text" name="price" placeholder="Price" />
                    <button type="submit" className="edit-btn">Kickit</button>
                    <button type="submit" className="edit-btn" onClick={(e) => this.handleDelete(e)}>Delete</button>
                </form>
            </div>
        )
    }
}


export default withRouter(Edit) 