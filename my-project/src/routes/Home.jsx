import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

function Home(props) {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [showType, setShowType] = useState('table')

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:3000/books')
            .then(res => {
                setBooks(res.data.data)
                setLoading(false)
            })
            .catch((error) => {
                setLoading(false)

            })
    }, [])

    return (
        <>

            <main className='bg-stone-800 text-white h-screen'>
                <div className='p-4'>
                    <div className='flex justify-center items-center gap-x-4'>
                        <button className='bg-green-600 hover:bg-green-900 px-4 py-1 rounded-lg' onClick={() => setShowType('table')}>Table</button>
                        <button className='bg-green-600 hover:bg-green-900 px-4 py-1 rounded-lg' onClick={() => setShowType('card')}>Card</button>

                    </div>
                    <div className='flex justify-between items-center'>

                        <h1 className='text-3xl my-8 italic text-orange-300'> List of Books we have!</h1>
                        
                    </div>
                    {loading ? (<Spinner />) : showType === 'table' ? (<BooksTable books={books} />) : (<BooksCard books={books} />)
                    }

                </div>
            </main>

        </>
    );
}

export default Home;