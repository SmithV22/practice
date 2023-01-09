
import React from 'react' ;

import images from '../../constants/images' ;
import { SubHeading } from '../../components';
import './Counselor.css' ;

const Counselor = () => {
    return (
        <div className='app__bg app__wrapper section__padding'>
            <div className="app__wrapper_img app__wrapper_img-reverse">
                <img src={ images.profile } alt='profile_picture' />
            </div>
            <div className="app__wrapper_info">
                <SubHeading title="Nice to Meet You" />
                <h1 className="headtext__cormorant">
                    A Bit About Me
                </h1>
                <div className="app__counselor-content">
                    <div className="app__couselor-content_quote">
                        <img src={ images.quote } alt='quote' />
                        <p className="p__opensans">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <p className="p__opensans">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <div className="app__counselor-sign">
                        <p>Missy Couselor</p>
                        <p className="p__opesans">Head Counselor and Founder</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counselor ;