import React from 'react';
import like from '../../Assete/icon/like.png'
import project from '../../Assete/icon/project.png'
import fleg from '../../Assete/icon/flag.png'
import viewr from '../../Assete/icon/viewr.png'
import banner2 from '../../Assete/icon/banner2.jpg'
import Summary from './Summary';
const Summarys = () => {
    const summarys=[
        {
            id:1,
            count:"55",
            hading:"support",
            
            img:like,
        },
        {
            id:2,
            
            count:'200+',
            hading:"finishing project",
            img:project,
        },
        {
            id:3,
            count:'400+',
            hading:"stats",
        
            img:fleg,
        },
        {
            id:4,
            count:'350+',
            hading:"helpful client",
            
            img:viewr,
        },
    ]
    return (
        <section id='summary' className='mx-10'style={{

            background:`url(${banner2})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            
            }}>
        <div  className='text-center text-3xl mt-5'>
             <h3 className='font-bold'>Summary page</h3>
             
         </div>
         <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
              {
             summarys.map(summary => <Summary
             key={summary.id}
             summary={summary}
             ></Summary>) 
          }
         </div>
 </section>
        
    );
};

export default Summarys;