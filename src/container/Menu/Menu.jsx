
import React from 'react';

import { SubHeading, MenuItem } from '../../components' ;
import data from '../../constants/data.js' ; 
import images from '../../constants/images.js' ; 
import './Menu.css' ;

const Menu = () => {
    return (
        <div className="app__specialMenu flex__center section__padding" id="menu">
            <div className="app__specialMenu-title">
                <SubHeading title="Take the Next Step" />
                <h1 className="headtext__cormorant">Services Made Just For You</h1>
            </div>
            <div className="app__specialMenu-menu">
                <div className="app__specialMenu-menu_services  flex__center">
                    <p className="app__specialMenu-menu_heading">Services</p>
                    <div className="app__specialMenu-menu_items">
                        {data.services.map((service, index) => (
                            <MenuItem key={ service.service + index } title={ service.service } price={ service.price }/>
                        ))}
                    </div>
                </div>
                <div className="app__specialMenu-menu_img">
                    <img src={images.books} alt="menu__img" />
                </div>
                <div className="app__specialMenu-menu_courses  flex__center">
                    <p className="app__specialMenu-menu_heading">Courses</p>
                    <div className="app__specialMenu-menu_items">
                        {data.courses.map((course, index) => (
                            <MenuItem key={ course.title + index } title={ course.title } price={ course.price }/>
                        ))}
                    </div>
                </div>
            </div>
            <div style={{ marginTop: 15 }}>
                <button type="button" className="custom__button">View More</button>
            </div>
        </div>
    );

}

export default Menu;