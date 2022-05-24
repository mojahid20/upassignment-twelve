import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center mt-10' style={{'border-top-color':'transparent'}}>
    <div 
        className="  w-16 h-24 border-4 border-blue-400 border-dotted rounded-full animate-spin"></div>
</div>
    );
};

export default Loading;