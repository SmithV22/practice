
import React from 'react' ;

import { SubHeading } from '../../components' ;
import images from '../../constants/images.js' ;
import './Findus.css' ;

const Findus = () => {
    return (
        <div className='app__bg app__wrapper section__padding app__background' id='contact' >
            <div className="app__wrapper_info">
                <SubHeading title='Contact Information' />
                <h1 className="headtext__comorant" style={{ margin: '2rem 0'}}>
                    Find Us
                </h1>
                <div className="app__wrapper-content">
                    <p className="p__opensans">
                        7654 Anywhere Lane, Best Place, State, 23456
                    </p>
                    <p className="p__cormonrant" style={{ color: '#DCCA87', margin: '2rem 0' }}>
                    Business Hours
                    </p>
                    <p className="p__opensans">
                        Mon - Fri 11:00 am - 7:00 pm 
                    </p>
                    <p className="p__opensans">
                        Sat - Sun Closed 
                    </p>
                    <p className="p__opensans" style={{ margin: '.5rem' }}>
                        (333) 555-7777
                    </p>
                </div>
                <button className="custom__button" style={{ margin: '1rem 0' }}>
                    Visit Us
                </button>
            </div>
            <div className="app__wrapper_img">
                <img src={ images.map } alt='map' />
            </div>
        </div>
    )
}

export default Findus ;