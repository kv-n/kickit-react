import React from 'react';
import './Landing.css'
import { Link } from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player'

const Splash = (props) => {
    return (
        <div className="splash-container">
        <div className="splash">
            {/* <Link to="/shoes"><h1>//Kickit.</h1></Link> */}

            <div className='container'>
  Kick 
  <div className='flip'>
    <div><div>Jordan</div></div>
    <div><div>Nike</div></div>
    <div><div>Adidas</div></div>
  </div>
  It
</div>


            <video id="bgvid" style={{ width: '100%' }}
                src="/kickit.mp4"
                loop
                autoPlay
                muted />


                <ReactAudioPlayer className="Audio" src="/canikickit.mp3" 
                autoPlay={true}/>
        </div>
        </div>
    )
}

export default Splash