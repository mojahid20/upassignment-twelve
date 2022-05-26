import React from 'react';
import { useParams } from 'react-router-dom';
import UseserviceDailes from '../../Hookc/UseserviceDailes';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';



const Checkout = () => {
    const {partsId}= useParams()
    const [service]=UseserviceDailes(partsId)
    const [user] = useAuthState(auth);

    const handalpleseorder= event =>{
        event.preventDefault()
        const order={
            email:user.email,
            service: service.name,
            partsId: partsId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                toast('Your order is booked!!!');
                event.target.reset();
            }
        })
    }
    
    return (
        <div className='w-48 mx-auto'>
            <h2 className='text-3xl'>plese booking : {service.name} </h2>
            <form onSubmit={handalpleseorder}>
                <input className='border w-80 p-2 mb-4' type="text" value={user?.displayName} name='name' placeholder='name' required />
                <br />
                <input className='border w-80 p-2 mb-4' type="text" value={user?.email} name='email' placeholder='email' required />
                <br />
                <input className='border w-80 p-2 mb-4' value={service.name} type="text" name='service' placeholder='service' required />
                <br />
                <input className='border w-80 p-2 mb-4' type="text" name='address' placeholder='address' required />
                <br />
                <input className='border w-80 p-2 mb-4' type="text" name='phone' placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="plese Order" />
            </form>
            <ToastContainer />
        </div>
        
    );
};

export default Checkout;