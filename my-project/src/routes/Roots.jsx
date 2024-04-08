import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Roots(props) {
    return (
        <>
            <header className='flex justify-between p-3 h-15 shadow-md bg-black '>
                <h1 className='font-extrabold text-pink-700 text-2xl'>Book Store</h1>
                <nav>
                    <ul className='flex gap-x-3 text-orange-400 '>
                        <li className='hover:text-orange-600'>
                            <Link to={'/'}>Home</Link>
                        </li>
                        {/* <li className='hover:text-orange-600'>
                            <Link to={'/adminpage'}>Admin</Link>
                        </li> */}
                        <li className='hover:text-orange-600'>
                            <Link to={'/login'}>Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
            <footer className='flex   justify-between  align-items-center p-3 bg-black text-orange-200 text-sm'>
                <span>&copy;Ammu A D</span>
                <span>Project</span>
            </footer>
        </>
    );
}

export default Roots;