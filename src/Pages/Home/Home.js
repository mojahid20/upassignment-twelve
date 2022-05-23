import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Parts from './Parts';
import Products from './Products';

import Summary from './Summary';
import Testimonial from './Testimonial';
import Tools from './Tools';


const Home = () => {
    return (
        <div >
            <Banner />
            <Parts />
            <Products />
            <Testimonial />
            <Summary />
            <Contact />
           <Footer />
        </div>
    );
};

export default Home;