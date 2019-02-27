import React from 'react';
import './Landing.css'

const Splash = () => {
    return (
        <div className="splash-container">
        <div className="splash">
            <h1>//Kickit.</h1>

            <video id="bgvid" style={{ width: '100%' }}
                src="/kickit.mp4"
                autoPlay
                muted />
        </div>
        </div>
    )
}

export default Splash