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
          console.log('hello')
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
            <div className="profile-container">
                <h1 className="profile-header">Edit Kicks Here</h1>
                <form className="Forms-Container" onSubmit={this.handleSubmit}>
                    <input className="input1" defaultValue={this.state.shoe.brand} onChange={(e) => this.handleInput(e)} type="text" name="brand" placeholder="Brand" />
                    <input className="input2" onChange={(e) => this.handleInput(e)} type="text" name="name" placeholder="Type" />
                    <input className="input2" onChange={(e) => this.handleInput(e)} type="text" name="picture" placeholder="Picture" />
                    <input className="input3" onChange={(e) => this.handleInput(e)} type="text" name="description" placeholder="Description" />
                    <input className="input4" onChange={(e) => this.handleInput(e)} type="text" name="size" placeholder="Size" />
                    <input className="input5" onChange={(e) => this.handleInput(e)} type="text" name="price" placeholder="Price" />
                    <input className="input6" onChange={(e) => this.handleInput(e)} type="text" name="created_by" placeholder="created by" />
                    <button type="submit" className="profile-btn">Kickit</button>
                    <button type="submit" className="profile-btn" onClick={(e) => this.handleDelete(e)}>Delete</button>
                </form>
            </div>
        )
    }
}


export default withRouter(Edit) 