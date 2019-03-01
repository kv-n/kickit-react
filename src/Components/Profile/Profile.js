import React, { Component } from 'react';   
import '../Profile/Profile.css'
import { withRouter } from 'react-router-dom'
import mp3_file from './kickit.mp3'

class Profile extends Component {

    state = {
            brand: "",
            name: "",
            description: "",
            size: "",
            price: "",
            picture: "",
            user:"",
            created_by:''
    }

    componentDidMount(){
        this.setState({
                ...this.state,
                user: this.props.currentUser.username,
                created_by: this.props.currentUser.id
        })
    }

    handleInput(e) {
        this.setState({
            ...this.state,
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
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
        const { brand, name, description, size, price, picture, created_by } = this.state
        return(
            <div className="profile-container">
                <form className="Forms-Container" onSubmit={this.handleSubmit}>
                <h1 className="profile-header">Add Kicks Here</h1>
                    <input className="input1" onChange={this.handleInput.bind(this)} type="text" name="brand" placeholder="Brand" value={brand}/>
                    <input className="input2"  onChange={this.handleInput.bind(this)} type="text" name="name" placeholder="Type" value={name} />
                    <input className="input2" onChange={this.handleInput.bind(this)} type="text" name="picture" placeholder="Picture" value={picture}/>
                    <input className="input3"  onChange={this.handleInput.bind(this)} type="text" name="description" placeholder="Description" value={description}/>
                    <input className="input4"  onChange={this.handleInput.bind(this)} type="text" name="size" placeholder="Size" value={size}/>
                    <input className="input5"  onChange={this.handleInput.bind(this)} type="text" name="price" placeholder="Price" value={price}/>
                    {/* <input className="input6" onChange={(e) => this.handleInput(e)} type="text" name="created_by" placeholder="created by" value={created_by}/> */}
                    <button type="submit" onClick={() => new Audio(mp3_file).play()} className="profile-btn">Kickit</button>
                </form>
            </div>
        )
    }
}


export default withRouter(Profile) 