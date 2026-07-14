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
        <nav className='flex justify-between px-10 border py-4 bg-white'>
            <ul className='flex items-center gap-8 font-medium text--[#0c0b0b]'>
                {links}
            </ul>

            <h2 className='text-2xl font-medium text-[#15a1b5]'>
                Voyentra
            </h2>

            <ul className='flex items-center gap-8 font-medium'>
                {authLinks}
            </ul>
        </nav>
    );
};

export default Navbar;