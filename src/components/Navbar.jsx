import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const links = <>
        <Link href={'/'}><li>Home</li></Link>
        <Link href={'/destinations'}><li>Destinations</li></Link>
        <Link href={'/bookings'}><li>My Bookings</li></Link>
        <Link href={'/admin'}><li>Admin</li></Link>
    </>

    const authLinks = <>
        <Link href={'/profile'}><li>Profile</li></Link>
        <Link href={'/login'}><li>Login</li></Link>
        <Link href={'/signUp'}><li>SignUp</li></Link>
    </>
    return (
        <nav className='flex justify-between px-6  py-3 bg-[#ffffff3f] absolute top-4 left-1/2 -translate-x-1/2 w-11/12 overflow-hidden '>
            <ul className='flex items-center gap-8 font-medium text-white'>
                {links}
            </ul>

            <div className='absolute left-1/2 top-1/2 -translate-y-1/2 bg-[#ffffff] w-40 h-15 rounded-full blur-lg'></div>
            <h2 className='text-3xl font-medium text-[#15a1b5] z-50'>
                Voyentra
            </h2>

            <ul className='flex items-center gap-8 font-medium text-white'>
                {authLinks}
            </ul>
        </nav>
    );
};

export default Navbar;