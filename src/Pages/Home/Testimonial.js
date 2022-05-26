import React from 'react';
import people1 from '../../Assete/Image/people1.png';
import people2 from '../../Assete/Image/people2.png';
import people3 from '../../Assete/Image/people3.png';
import Review from './Review';
const Testimonial = () => {
    const reviews=[
        {
            id:1,
            name:"- Romy Taormina, Co-Founder, ",
            description:'its always a pleasure to work with Will and his team. They are personable, responsive, and results-oriented!',
            location:'new Delhi',
            img:people1,
        },
        {
            id:2,
            name:"- Jody Hansen, CEO ",
            description:'Your thoughtfulness and support of MPCC is very much appreciated. You are a very dear friend to the Chamber, and I want to assure you that your confidence in MPCC will be justified.',
            location:'tokio',
            img:people2,
        },
        {
            id:3,
            name:"- Sean Jacobs, Sponsor Relations,",
            description:'Always available to answer any questions. Very knowledgeable about the services they provide. Would recommend to anyone!',
            location:'Sunfrancisco',
            img:people3,
        },
    ]
    return (
        <section   className='mx-10'>
            <div id="review" className='text-center my-5'>
            <h3 className='text-3xl text-primary'>Reviews</h3>
            <h4>whats Our Client Say</h4>
            </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 '>
                  {
                      reviews.map(review => <Review
                      key={review._id}
                      review={review}
                      ></Review>)
                  }
              </div>
        </section>
    );
};

export default Testimonial;