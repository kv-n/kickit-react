import React from 'react';
import { Link } from 'react-router-dom'
import LogOut from '../../LogOut/LogOut'
import './Navigation.css'
import Login from '../../Login/Login'



const Navigation = (props) => {
    console.log(props.currentUser)
    return(
        <div className="nav-container">
        <Link to='/'><img className="logo-nav" src="https://i.imgur.com/sWeO4J0.png" alt="shoes"/></Link>
            <ul className="nav-flex">
                <li id="list1" className="nav-list"><Link to='/shoes'>//Kicks</Link></li>
                <li id="list2" className="nav-list"><Link to='/profile'>//Add to Collection</Link></li>
                {
                    props.currentUser.username
                        ? <li id="list3" onClick={props.handleLogout} className="nav-list"><LogOut doSetCurrentUser={props.doSetCurrentUser}/></li>
                        : 
                        (
                            <div className="ternary-nav">
                                <li id="list3" className="nav-list"><Link to='/login'>//Log in</Link></li>
                                <li id="list4" className="nav-list"><Link to='/register'>//Register</Link></li>
                            </div>
                        )
                       
                }
            </ul>
        </div> 
    )
}




export default Navigation