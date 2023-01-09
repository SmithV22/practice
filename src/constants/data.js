
import images from './images';

const services = [
    {
        service: '10 Minute Session',
        price: '$30',
    },
    {
        service: '30 Minute Session',
        price: '$50',
    },
    {
        service: '60 Minute Session',
        price: '$75',
    },
    {
        service: 'Monthly 60 Minute Session',
        price: '$840',
    },
    {
        service: 'Bi-Weekly 60 Minute Session',
        price: '$1,680',
    },
];

const courses = [
    {
        title: 'Mindset for Daily Life',
        price: '$200',
        
    },
    {
        title: 'Buisness Mindset',
        price: '$460',
        
    },
    {
        title: 'Mindset for Success',
        price: '$500',
        
    },
    {
        title: 'Mindset for Health',
        price: '$525',
        
    },
    {
        title: 'Mindset for Coaching',
        price: '$1260',
        
    },
];

const awards = [
    {
        imgUrl: images.award02,
        title: 'Bib Gourmond',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
        imgUrl: images.award01,
        title: 'Rising Star',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
        imgUrl: images.award05,
        title: 'AA Hospitality',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
        imgUrl: images.award03,
        title: 'Outstanding Chef',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
];

export default { services, courses, awards } ;