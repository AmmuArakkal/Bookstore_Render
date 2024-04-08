import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import BackButtonAdmin from '../components/home/BackButtonAdmin';

function EditBook(props) {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [publishYear, setPublishYear] = useState('')

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const { id } = useParams();
    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:3000/books/${id}`)
            .then(res => {
                setTitle(res.data.title)
                setAuthor(res.data.author)
                setPublishYear(res.data.publishYear)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                alert("error occured. Please  check console");
                console.log(err)
            })
    }, [])

    const handleEditBook = () => {
        const data = {
            title,
            author,
            publishYear
        }
        setLoading(true)
        axios.put(`http://localhost:3000/books/${id}`, data)
            .then(() => {
                setLoading(false)
                navigate('/')
            })
            .catch(err => {
                setLoading(false)
                alert("An error occured. Please check console")
                console.log(err)
            })
    }
    return (
        <div className='p-4 bg-stone-700 h-screen'>
            <BackButtonAdmin />
            <h1 className='text-3xl my-4 text-orange-500 text-center font-serif uppercase'>Edit Book</h1>
            {loading ? <Spinner /> : ''}

            <div className='flex flex-col border-2 border-orange-400  rounded-xl w-[600px] p-4 mx-auto'>

                <div className='my-4'>
                    <label className='text-xl mr-4 text-orange-200'>Title</label>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'></input>
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-orange-200'>Author</label>
                    <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'></input>
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-orange-200'>Publish Year</label>
                    <input type='number' value={publishYear} onChange={(e) => setPublishYear(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'></input>

                </div>

                <button className='p-2 bg-orange-300 hover:bg-orange-400 m-8 rounded-lg' onClick={handleEditBook}>Save</button>
            </div>
        </div>
    );
}

export default EditBook;