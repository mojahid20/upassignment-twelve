import React from 'react';
import tool1 from '../../Assete/tools/tool1.jpg'
import tool6 from '../../Assete/tools/tool6.jpg'
import image5 from '../../Assete/tools/image5.jpg'
import cutter from '../../Assete/tools/cutter.webp'
import tool2 from '../../Assete/tools/tool2.jpg'
import tool4 from '../../Assete/tools/tool4.jpg'
import Product from './Product';
const Products = () => {
    const products=[
        {
            id:1,
            name:"Electric Planer Brandix",
            ratting:4.9,
            price:'$700.00',
            img:tool1,
        },
        {
            id:2,
            name:"Undefined Tool IRadix",
            ratting:3.9,
            price:'$1000.00',
            img:tool6,
        },
        {
            id:3,
            name:"Drill Series 3 Brandix",
            ratting:5.00,
            price:'$500.00',
            img:image5,
        },
        {
            id:4,
            name:"Drill Series 3 Brandix",
            ratting:5.00,
            price:'$500.00',
            img:cutter,
        },
        {
            id:5,
            name:"Drill Series 3 Brandix",
            ratting:5.00,
            price:'$500.00',
            img:tool2,
        },
        {
            id:6,
            name:"Drill Series 3 Brandix",
            ratting:5.00,
            price:'$500.00',
            img:tool4,
        },
    ]
    return (
        <section className='mx-10'>
               <div className='text-center text-3xl mt-5'>
                    <h3 className='text-success'>Top Rated Product</h3>
                    
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                    {
                        products.map(product => <Product
                        key={product.id}
                        product={product}
                        ></Product>)
                    }
                </div>
        </section>
    );
};

export default Products;