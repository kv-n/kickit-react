import React, { Component } from 'react';
import '../Profile/Profile.css'

class Profile extends Component {
    render(){
        return(
            <div>
                <forms className="Profile-Container">
                    <input type="text" name="brand"/>
                    <input type="text" name="name"/>
                    <input type="text" name="description"/>
                    <input type="text" name="size"/>
                    <input type="text" name="price"/>
                </forms>
            </div>
        )
    }
}


export default Profile 