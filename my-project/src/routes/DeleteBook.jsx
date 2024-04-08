import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import BackButtonAdmin from '../components/home/BackButtonAdmin';

function DeleteBook(props) {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()
    const handleDeleteBook = () => {
        // e.preventDefault()
        setLoading(true)
        axios.delete(`http://localhost:3000/books/${id}`)
            .then(() => {
                setLoading(false)
                navigate('/')
            })
            .catch(err => {
                setLoading(false)
                alert("Error occured. Please check console")
                console.log(err)
            })

    }

    return (
        <div className='p-4 bg-stone-700 h-screen '>
            <BackButtonAdmin />

            <h1 className='text-3xl my-4 text-orange-500 text-center font-serif uppercase'> Delete Book</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col items-center border-2 border-orange-400 rounded-xl w-[600px] p-8 mx-auto'>
                <h3 className='text-2xl text-orange-200  italic'>Are you sure you want to delete this book?</h3>

                <button className='p-4 bg-orange-400 hover:bg-orange-500  rounded-lg m-8 ' onClick={handleDeleteBook}>Yes, Delete it</button>
            </div>
        </div>
    );
}

export default DeleteBook;