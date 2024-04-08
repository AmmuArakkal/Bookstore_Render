import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import AdminTable from '../components/home/AdminTable';
import AdminCard from '../components/home/AdminCard';

function AdminPage(props) {
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
                        <Link to={'/books/create'}>
                            <button className='bg-pink-500 p-1 rounded-lg' >+Add Book</button>
                        </Link>
                    </div>
                    {loading ? (<Spinner />) : showType === 'table' ? (<AdminTable books={books} />) : (<AdminCard books={books} />)
                    }

                </div>
            </main>

        </>
    );
}



export default AdminPage;