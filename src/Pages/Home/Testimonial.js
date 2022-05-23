import React from 'react';
import people1 from '../../Assete/Image/people1.png';
import people2 from '../../Assete/Image/people2.png';
import people3 from '../../Assete/Image/people3.png';
import Review from './Review';
const Testimonial = () => {
    const reviews=[
        {
            id:1,
            name:"mojahid",
            deskcriptio:'',
            location:'Dhaka',
            img:people1,
        },
        {
            id:2,
            name:"jamal",
            deskcriptio:'',
            location:'Dhaka',
            img:people2,
        },
        {
            id:3,
            name:"hasan",
            deskcriptio:'',
            location:'Dhaka',
            img:people3,
        },
    ]
    return (
        <section >
            <div className='text-center my-5'>
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