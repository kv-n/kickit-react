import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class LogOut extends Component {

    handleSubmit = async () => {

        
        try {
            const response = await fetch('http://localhost:8000/api/v1/users/logout')
            if (!response.ok) {
                throw Error(response.statusText)
            } else {
                console.log(response)
            }
            const deletedSession = await response.json();
            this.setState({
                user: deletedSession.user || {}
            })
            this.props.history.push('/')

        } catch (err) {

        }

    }



    render() {
        return(
            <div>
                {/* <button onClick={this.handleSubmit}>Log Out</button> */}
            </div>
        )
    }
}


export default LogOut







