import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'

    
class Userlogout extends Component {
    
    handleLogout = async () => {
        try {
            const loginResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/logout`, {
                method: 'GET',
                credentials: 'include',
                // body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const parsedResponse = await loginResponse.json();
            this.props.doSetCurrentUser({})
            this.props.history.push("/");
            console.log(parsedResponse, 'logged')

        } catch (err) {
            console.log(err)
            console.log('hittting')
        }
    }


    render() {
        return (
                <Link className = "logout-btn" to='/' onClick={this.handleLogout}>//Logout</Link>

        )
    }
}

export default withRouter(Userlogout);