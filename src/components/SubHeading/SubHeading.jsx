
import React from 'react' ;

import images from '../../constants/images' ;
import './Subheading.css' ;

const SubHeading = ({ title }) => 
    (
        <div className='subheading'>
            <p className="p__cormorant">{ title }</p>
        {/* <img className='lightbulb_img' src={ images.lightbulb } alt='lightbulb' /> */}
        </div>
    )


export default SubHeading ;