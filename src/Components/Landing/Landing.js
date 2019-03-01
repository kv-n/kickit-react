import React from 'react';
import './Landing.css'
import { Link } from 'react-router-dom'

const Splash = (props) => {
    return (
        <div className="splash-container">
        <div className="splash">
            <Link to="/shoes"><h1>//Kickit.</h1></Link>
            <video id="bgvid" style={{ width: '100%' }}
                src="/kickit.mp4"
                loop
                autoPlay
                muted />
        </div>
        </div>
    )
}

export default Splash