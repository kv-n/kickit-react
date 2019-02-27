import React, { Component } from 'react';
import '../Profile/Profile.css'

class Profile extends Component {
    render(){
        return(
            <div className="profile-container">
                <h1 className="profile-header">Add Kicks Here</h1>
                <forms className="Forms-Container">
                    <input className="input1" type="text" name="brand" placeholder="Brand" />
                    <input className="input2" type="text" name="name" placeholder="Type" />
                    <input className="input3" type="text" name="description" placeholder="Description" />
                    <input className="input4" type="text" name="size" placeholder="Size" />
                    <input className="input5" type="text" name="price" placeholder="Price" />
                    <button className="profile-btn">Kickit</button>
                </forms>
            </div>
        )
    }
}


export default Profile 