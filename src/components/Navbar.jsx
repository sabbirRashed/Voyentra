'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { PiUserLight } from 'react-icons/pi';
import { toast } from 'react-toastify';
import MenuDrawer from './MenuDrawer';

const Navbar = () => {
    const links = <>
        <Link href={'/'}><li>Home</li></Link>
        <Link href={'/destinations'}><li>Destinations</li></Link>
        <Link href={'/bookings'}><li>My Bookings</li></Link>
        <Link href={'/add-destination'}><li>Add Destination</li></Link>
    </>

    const router = useRouter();
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
        router.push('/')
    }

    return (

        // Big screen
        <>
            <nav className={`hidden md:flex justify-between w-11/12 max-w-364 pr-4 bg-white/30 absolute ${pathName === '/' ? "top-4" : "top-0"} left-1/2 -translate-x-1/2 overflow-hidden `}>


                {/* logo */}
                <div className=" bg-white pl-4 pr-10 py-3 rounded-br-full">

                    <h2 className="font-playFair text-2xl md:text-3xl font-bold text-cyan-500 tracking-wide">
                        Voyentra
                    </h2>
                </div>

                {/* page links */}
                <ul className={`flex items-center gap-4 md:gap-8 text-sm md:text-base font-medium ${pathName === '/' ? "text-white" : "text-[#0c0b0b]"}`}>
                    {links}
                </ul>

                {/* auth links */}
                {
                    user ?
                        <div className='flex justify-end items-center gap-3 md:gap-4'>
                            <Link href={'/profile'}><li className={`flex items-center gap-1 ${pathName === '/' ? "text-white" : "text-[#0c0b0b]"}`}><PiUserLight /> Profile</li></Link>
                            <Avatar className='border border-gray-200'>
                                <Avatar.Image
                                    referrerPolicy='no-referrer'
                                    alt={user?.name}
                                    src={user?.image} />
                                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                            </Avatar>
                            <Button className={'bg-cyan-500 hover:bg-cyan-400 transition-colors duration-300 rounded-none'} onClick={() => { handleLogout() }}>Logout</Button>

                        </div> : <>
                            <div
                                className={`flex items-center gap-4 font-medium ${pathName === '/' ? "text-white" : "text-[#0c0b0b]"}`}>

                                <Link href={'/login'}>
                                    <Button variant='outline' className={`rounded-none hover:bg-cyan-500 transition-[background-color] duration-300 ${pathName === '/' ? "text-white" : "text-[#0c0b0b]"}`}>Login</Button>
                                </Link>

                                <Link href={'/signUp'}>
                                    <Button className={'rounded-none bg-cyan-500 hover:bg-cyan-400 transition-colors duration-300 '}>Sign Up</Button>
                                </Link>
                            </div>
                        </>
                }
            </nav>


            {/* small screen */}
            <nav className={`md:hidden w-11/12 max-w-364 pr-4 flex justify-between  bg-white/30 absolute ${pathName === '/' ? "top-4" : "top-0"} left-1/2 -translate-x-1/2 overflow-hidden `}>

                {/* logo */}
                <div className=" bg-white pl-4 pr-10 py-3 rounded-br-full">
                    <h2 className="font-playFair text-2xl md:text-3xl font-bold text-cyan-500 tracking-wide">
                        Voyentra
                    </h2>
                </div>

                {/* auth links */}
                {
                    user ?
                        <div className='flex justify-end items-center gap-1 md:gap-4'>
                            <Avatar size='sm' className='border border-gray-200'>
                                <Avatar.Image
                                    referrerPolicy='no-referrer'
                                    alt={user?.name}
                                    src={user?.image} />
                                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                            </Avatar>
                            <MenuDrawer/>
                        </div> : <>
                            <div
                                className={`flex items-center gap-1 font-medium ${pathName === '/' ? "text-white" : "text-[#0c0b0b]"}`}>
                                <Link href={'/login'}>
                                    <Button size='sm'  className={`rounded-none bg-cyan-500 hover:bg-cyan-400 transition-colors duration-300 `}>Login</Button>
                                </Link>
                                <MenuDrawer/>
                                {/* <Link href={'/signUp'}>
                                    <Button size='sm' className={''}>Sign Up</Button>
                                </Link> */}
                            </div>
                        </>
                }
            </nav>
        </>
    );
};

export default Navbar;