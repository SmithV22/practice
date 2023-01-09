
import React from 'react' ;

import images from '../../constants/images'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='app__aboutus flex__center'>
            <div className="app__aboutus-overlay ">
                <img src={ images.sitting_sun } alt='tree' />
                </div>
            <div className="app__aboutus-content flex__center">
                <div className="app__aboutus-content_about">
                    <h1 className="headtext__cormorant">
                        About Us
                    </h1>
                    <p className="p__openSans">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et. 
                    </p>
                    <button className="custom__button">Know More</button>
                </div>
                <div className="app__aboutus-content_history">
                    <h1 className="headtext__cormorant">
                        Our History
                    </h1>
                    <p className="p__openSans">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et. 
                    </p>
                    <button className="custom__button">Know More</button>
                </div>
                
            </div>
        </div>
    )
}

export default AboutUs ;