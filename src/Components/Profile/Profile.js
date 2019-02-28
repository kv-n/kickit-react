import React, { Component } from 'react';
import '../Profile/Profile.css'
import { withRouter } from 'react-router-dom'
import LogOut from '../../LogOut/LogOut'

class Profile extends Component {

    state = {
       
    }

    // userUpdate = (e) => {
    //     e.preventDefault()
    //     axios.put(`${process.env.REACT_APP_API_URL}/users/${this.props.user.id}`, this.state)
    //         .then(res => {
    //             (res.status === 200)
    //                 ? this.props.history.push(`/users/${this.props.user.id}`)
    //                 : console.log(res.error)
    //         })
    // }

    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.props.history.push("/shoes");
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

        console.log(shoesResponse, 'hello')
    }
    
    render() {
        return(
            <div className="profile-container">
                <h1 className="profile-header">Add Kicks Here</h1>
                <LogOut/>
                <form className="Forms-Container" onSubmit={this.handleSubmit}>
                    <input className="input1" onChange={(e) => this.handleInput(e)} type="text" name="brand" placeholder="Brand" />
                    <input className="input2" onChange={(e) => this.handleInput(e)} type="text" name="name" placeholder="Type" />
                    <input className="input2" onChange={(e) => this.handleInput(e)} type="text" name="picture" placeholder="Picture" />
                    <input className="input3" onChange={(e) => this.handleInput(e)} type="text" name="description" placeholder="Description" />
                    <input className="input4" onChange={(e) => this.handleInput(e)} type="text" name="size" placeholder="Size" />
                    <input className="input5" onChange={(e) => this.handleInput(e)} type="text" name="price" placeholder="Price" />
                    <input className="input5" onChange={(e) => this.handleInput(e)} type="text" name="created_by" placeholder="created by" />
                    <button type="submit" className="profile-btn">Kickit</button>
                </form>
            </div>
        )
    }
}


export default withRouter(Profile) 