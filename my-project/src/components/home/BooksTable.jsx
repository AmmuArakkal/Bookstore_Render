import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faUser, faCircleInfo, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';




function BooksTable({ books }) {
    return (
        (<table className='w-full border-separate  border-spacing-2'>
            <thead className='text-pink-600'>
                <tr>
                    <th className='border border-slate-600  rounded-md'>No</th>
                    <th className='border border-slate-600  rounded-md'>Title</th>
                    <th className='border border-slate-600  rounded-md max-md:hidden'>Author</th>
                    <th className='border border-slate-600  rounded-md max-md:hidden'>Publish Year</th>
                    <th className='border border-slate-600  rounded-md'>Information</th>




                </tr>
            </thead>
            <tbody className='text-zinc-400'>
                {books.map((book, index) => (
                    <tr key={book._id} className='h-8'>
                        <td className='border border-slate-700  rounded-md text-center'>{index + 1}</td>
                        <td className='border border-slate-700  rounded-md text-center'>{book.title}</td>
                        <td className='border border-slate-700  rounded-md text-center max-md:hidden'>{book.author}</td>
                        <td className='border border-slate-700  rounded-md text-center max-md:hidden'>{book.publishYear}</td>
                        <td className='border border-slate-700  rounded-md text-center'>
                            <div className='flex justify-center gap-x-4'>
                                <Link to={'/books/details/' + book._id}>
                                    <FontAwesomeIcon icon={faCircleInfo} className='text-xl text-green-600 hover:text-zinc-300' />

                                </Link>
                                {/* <Link to={'/books/edit/' + book._id}>
                                    <FontAwesomeIcon icon={faPenToSquare} className='text-xl text-yellow-600 hover:text-zinc-300' />

                                </Link>
                                <Link to={'/books/delete/' + book._id}>
                                    <FontAwesomeIcon icon={faTrashCan} className='text-xl text-red-600 hover:text-zinc-300' />
                                </Link> */}

                            </div>
                        </td>

                    </tr>
                ))}
            </tbody>

        </table>)
    );
}

export default BooksTable;