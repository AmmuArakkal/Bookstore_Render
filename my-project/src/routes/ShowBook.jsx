import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

function ShowBook(props) {

    const [book, setbook] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:3000/books/${id}`)
            .then(res => {
                setbook(res.data)
                // console.log(res.data)
                setLoading(false);

            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }, [])
    return (
        <div className='p-4 bg-stone-700 h-screen'>
            <BackButton />
            <h1 className='text-3xl my-4 text-center font-serif uppercase text-orange-500'>Show Book</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className='flex flex-col  border-2  border-orange-400  rounded-xl w-fit p-4 mx-auto'>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-orange-200'>Title :</span>
                        <span className='text-orange-300 text-xl'>{book.title}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-orange-200'>Author :</span>
                        <span className='text-orange-300 text-xl'>{book.author}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-orange-200'>Publish year:</span>
                        <span className='text-orange-300 text-xl'>{book.publishYear}</span>
                    </div>
                    <div className='my-4'>
                        <span className=' mr-4 text-orange-200'>Create time :</span>
                        <span className='text-orange-300 '>{new Date(book.createdAt).toString()}</span>
                    </div>
                    <div className='my-4'>
                        <span className=' mr-4 text-orange-200'>Update time :</span>
                        <span className='text-orange-300'>{new Date(book.updatedAt).toString()}</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShowBook;