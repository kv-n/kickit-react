import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'


class Userlogout extends Component {
    
    handleLogout = async () => {
        try {
            const loginResponse = await fetch('http://localhost:8000/api/v1/users/logout', {
                method: 'GET',
                credentials: 'include',
                // body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const parsedResponse = await loginResponse.json();
            console.log(this.state)
            this.props.history.push("/shoes");
            this.setState({
                users: {}
            })
            console.log(parsedResponse, 'logged')

        } catch (err) {
            console.log(err)
        }
    }


    render() {
        return (
            <div>
                <button onClick={this.handleLogout}>Logout</button>
            </div>

        )
    }
}

export default withRouter(Userlogout);