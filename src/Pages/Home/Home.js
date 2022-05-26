import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Parts from './Parts';
import Products from './Products';
import Review from './Review';

import Summary from './Summary';
import Summarys from './Summarys';
import Testimonial from './Testimonial';



const Home = () => {
    return (
        <div >
            <Banner />
            <Parts />
            <Products />
            <Testimonial />
            <Summarys />
            <Contact />
           <Footer />

        </div>
    );
};

export default Home;