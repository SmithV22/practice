
import React from 'react' ;
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs' ;

import images from '../../constants/images' ;
import { SubHeading } from '../../components' ;
import './Gallery.css' ;

const Gallery = () => {
    const scrollRef = React.useRef(null) ;
    const scroll = (direction) => {
        const { current } = scrollRef ;
        if(direction === 'left') {
            current.scrollLeft -= 300 ;
        } else {
            current.scrollLeft += 300 ;
        }
    }

    const pictures = [images.man, images.woman, images.woman2, images.man2] ;

    return (
        <div className='app__gallery flex__center'>
            <div className="app__gallery-content">
                <SubHeading title='Instagram' />
                <h1 className="headtext__cormorant">
                    Testimonials
                </h1>
                <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
                </p>
                <button type='button' className="custom__button">View More</button>
            </div>
            <div className="app__gallery-images">
                <div className="app__gallery-images_container" ref={ scrollRef }>
                    { pictures.map((picture, index ) => (
                        <div className="app__gallery-images_card flex__center" key={ `gallery_image-${ index + 1 }`}>
                            <img src={ picture } alt='galleryImg' />
                            <BsInstagram className='gallery__image-icon' />
                        </div>
                    ))}
                </div>
                <div className="app__gallery-images_arrows">
                    <BsArrowLeftShort className='gallery__arrow-icon' onClick={ () => scroll('left') } />
                    <BsArrowRightShort className='gallery__arrow-icon' onClick={ () => scroll('right') } />
                </div>
            </div>
        </div>
    ) ;
}

export default Gallery ;