import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function BackButtonAdmin({ destination = '/adminpage' }) {
    return (
        <div className='flex'>
            <Link to={destination} className='bg-amber-400 text-black px-4 py-1 rounded-lg w-fit'>
                <BsArrowLeft className='text-2xl' />  </Link>

        </div>
    );
}

export default BackButtonAdmin;