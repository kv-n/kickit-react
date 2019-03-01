import React, { Component } from 'react';   
import '../Profile/Profile.css'
import { withRouter } from 'react-router-dom'

class Profile extends Component {

    state = {

       
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const user = JSON.stringify({
        })

        console.log(this.state)
        const shoesResponse = await fetch('http://localhost:8000/api/v1/shoes', {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(this.state),
          headers:{
            'Content-Type': 'application/json'
            }
        });
        this.props.history.push("/shoes");
        console.log(shoesResponse, 'hello')
    }
    
    render() {
        return(
            <div className="profile-container">
                <form className="Forms-Container" onSubmit={this.handleSubmit}>
                <h1 className="profile-header">Add Kicks Here</h1>
                    <input className="input1" onChange={(e) => this.handleInput(e)} type="text" name="brand" placeholder="Brand" />
                    <input className="input2" onChange={(e) => this.handleInput(e)} type="text" name="name" placeholder="Type" />
                    <input className="input2" onChange={(e) => this.handleInput(e)} type="text" name="picture" placeholder="Picture" />
                    <input className="input3" onChange={(e) => this.handleInput(e)} type="text" name="description" placeholder="Description" />
                    <input className="input4" onChange={(e) => this.handleInput(e)} type="text" name="size" placeholder="Size" />
                    <input className="input5" onChange={(e) => this.handleInput(e)} type="text" name="price" placeholder="Price" />
                    <input className="input6" onChange={(e) => this.handleInput(e)} type="text" name="created_by" placeholder="created by" />
                    <button type="submit" className="profile-btn">Kickit</button>
                </form>
            </div>
        )
    }
}


export default withRouter(Profile) 