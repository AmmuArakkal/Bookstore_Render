import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faBookOpen, faUser, faCircleInfo, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function AdminSingleCard({ book }) {
    return (
        <div key={book._id} className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
            <h2 className='absolute top-1 right-2 px-4 py-1 bg-inherit italic rounded-lg text-red-200'>{book.publishYear}</h2>
            {/* <h4 className='my-2 text-gray-500'>book._id</h4> */}
            <div className='flex justify-start items-center gap-x-2'>
                <FontAwesomeIcon icon={faBookOpen} className='text-red-400 text-2xl' />
                <h2 className='my-1 text-green-500'>{book.title}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <FontAwesomeIcon icon={faUser} className='text-red-300' />
                <h2 className='my-1 text-green-500'>{book.author}</h2>
            </div>
            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>

                {/* <Link to={'/books/details/' + book._id}>
                    <FontAwesomeIcon icon={faCircleInfo} className='text-2xl text-green-800 hover:text-zinc-300' />
                </Link> */}
                <Link to={'/books/edit/' + book._id}>

                    <FontAwesomeIcon icon={faPenToSquare} className='text-2xl text-yellow-600 hover:text-zinc-300' />
                </Link>
                <Link to={'/books/delete/' + book._id}>

                    <FontAwesomeIcon icon={faTrashCan} className='text-2xl text-red-600 hover:text-zinc-300' />
                </Link>

            </div>

        </div>
    );
}

export default AdminSingleCard;