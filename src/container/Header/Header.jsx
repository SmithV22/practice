
import React from 'react' ;
import { SubHeading } from '../../components';

import images from '../../constants/images' ;
import './Header.css' ;

const Header = () => {
    return (
        <div className='app__header'>
            <div className="app__wrapper_info">
                <SubHeading title='Know Your Thoughts' />
                <h1 className="app__header-h1">
                    The Key To A Healthy Mindset
                </h1>
                <p className="p__opensans" style={{ margin: '2rem 0' }}>
                Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
                </p>
                <button className="custom__button" type='button'>Explore</button>
            </div>
            <div className="app__wrapper_img">
                <img src={ images.thinking } alt='girl thinking' className='app__header-img' />
            </div>
        </div>
    )
} ;

export default Header ;