'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { LuUser } from 'react-icons/lu';
import { PiUserLight } from 'react-icons/pi';
import { toast } from 'react-toastify';

const Navbar = () => {
    const links = <>
        <Link href={'/'}><li>Home</li></Link>
        <Link href={'/destinations'}><li>Destinations</li></Link>
        <Link href={'/bookings'}><li>My Bookings</li></Link>
        <Link href={'/add-destination'}><li>Admin</li></Link>
    </>

    const authLinks = <>
        <Link href={'/login'}><li>Login</li></Link>
        <Link href={'/signUp'}><li>Sign Up</li></Link>
    </>

    const pathName = usePathname();
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;

    const handleLogout = async () => {
        const { data, error } = await authClient.signOut();

        if (data) {
            toast.success('LogOut successfull', {
                autoClose: 2000,
                position: 'top-center'
            })
        } else {
            toast.error(`Something went wrong!`)
        }

    }

    return (
        <nav className={`flex justify-between px-6  py-3 bg-[#ffffff3f] absolute ${pathName === '/' ? "top-4" : "top-0"} left-1/2 -translate-x-1/2 w-11/12 max-w-[1600px] overflow-hidden `}>
            {/* page links */}
            <ul className={`flex items-center gap-8 font-medium ${pathName === '/' ? "text-white" : "text-[#0c0b0b]"}`}>
                {links}
            </ul>

            {/* logo */}
            <div className="relative inline-block px-6 py-">
                <div className="absolute -inset-3 bg-white blur-xl rounded-full"></div>

                <h2 className="relative z-10 font-playFair text-3xl font-bold text-cyan-500 tracking-wide">
                    Voyentra
                </h2>
            </div>

            {/* auth links */}
            {
                user ?
                    <div className='flex justify-end items-center gap-4'>
                        <Link href={'/profile'}><li className={`flex items-center gap-1 ${pathName === '/' ? "text-white" : "text-[#0c0b0b]"}`}><PiUserLight /> Profile</li></Link>
                        <Avatar className='border border-gray-200'>
                            <Avatar.Image
                                referrerPolicy='no-referrer'
                                alt={user?.name}
                                src={user?.image} />
                            <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                        </Avatar>
                        <Button className={'bg-cyan-500 rounded-none'} onClick={() => { handleLogout() }}>Logout</Button>

                    </div> : <>
                        <ul
                            className={`flex items-center gap-8 font-medium ${pathName === '/' ? "text-white" : "text-[#0c0b0b]"}`}>
                            {authLinks}
                        </ul>
                    </>
            }
        </nav>
    );
};

export default Navbar;