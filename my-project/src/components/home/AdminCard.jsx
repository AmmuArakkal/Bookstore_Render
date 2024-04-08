import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faBookOpen, faUser, faCircleInfo, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import BookSingleCard from './BookSingleCard';
import AdminSingleCard from './AdminSingleCard';


function AdminCard({ books }) {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {books.map((item) => (
                <AdminSingleCard key={item._id} book={item} />
            ))}

        </div>
    );
}

export default AdminCard;