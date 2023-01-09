
import React, { useState } from 'react' ;
import { BsPlayFill, BsPauseFill } from 'react-icons/bs' ;

import './Intro.css' ;
import images from '../../constants/images.js' ;

const Intro = () => {
    const [ playVideo, setPlayVideo ] = useState(false) ;
    const videoRef = React.useRef() ;

    const handleVideo = () => {
        setPlayVideo((prevPlayVideo) => !prevPlayVideo)
        if(playVideo) {
            videoRef.current.pause() ;
        } else {
            videoRef.current.play() ;
        }
    }
    
    return (
        <div className="app__video-wrapper">
            <div className='app__video'>
                <video src={images.people } ref={ videoRef } type='video/mp4' loop controls={ false } muted />
                <div className="app__video-overlay flex__center">
                    <div className="app__video-overlay_circle flex__center" onClick={ handleVideo }>
                    {playVideo ? (
                        <BsPauseFill color='fff' fontSize={ 30 }/>
                        ) : <BsPlayFill color='fff' fontSize={ 30 } /> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro ;