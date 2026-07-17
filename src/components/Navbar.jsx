'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { LuUser } from 'react-icons/lu';
import { PiUserLight } from 'react-icons/pi';

const Navbar = () => {
    const pathName = usePathname();
    const {
        data: session,
        isPending,
    } = authClient.useSession()

    const user = session?.user;

    const links = <>
        <Link href={'/'}><li>Home</li></Link>
        <Link href={'/destinations'}><li>Destinations</li></Link>
        <Link href={'/bookings'}><li>My Bookings</li></Link>
        <Link href={'/add-destination'}><li>Admin</li></Link>
    </>

    const authLinks = <>
        <Link href={'/profile'}><li className='flex items-center gap-1'><PiUserLight /> Profile</li></Link>
        <Link href={'/login'}><li>Login</li></Link>
        <Link href={'/signUp'}><li>SignUp</li></Link>
    </>
    return (
        <nav className={`flex justify-between px-6  py-3 bg-[#ffffff3f] absolute ${pathName === '/' ? "top-4" : "top-0"} left-1/2 -translate-x-1/2 w-11/12 max-w-[1600px] overflow-hidden `}>
            <ul className={`flex items-center gap-8 font-medium ${pathName === '/' ? "text-white" : "text-[#0c0b0b]"}`}>
                {links}
            </ul>

            <div className='absolute left-1/2 top-1/2 -translate-y-1/2 bg-[#ffffff] w-40 h-15 rounded-full blur-lg rotate-x-45'></div>
            <h2 className='font-playFair text-3xl font-bold text-[#15a1b5] z-50 tracking-wide'>
                Voyentra
            </h2>

            {
                user ? <>
                    <ul
                        className={`flex items-center gap-8 font-medium ${pathName === '/' ? "text-white" : "text-[#0c0b0b]"}`}>
                        {authLinks}
                    </ul>
                </> : <div className='space-x-8'>

                    <Button onClick={()=>{handleLogout()}}>LogOut</Button>
                    <Avatar>
                        <Avatar.Image
                            alt={user?.name}
                            src={user?.image} />
                        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                    </Avatar>
                </div>
            }
        </nav>
    );
};

export default Navbar;