'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { TbMoodSadDizzy } from 'react-icons/tb';
import { IoRefreshOutline } from 'react-icons/io5';
import { Button } from '@heroui/react';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className='min-h-[80vh] flex flex-col items-center justify-center text-center px-4 gap-6 relative overflow-hidden'>
            {/* Decorative blurred background blobs */}
            <div className='absolute -top-20 -left-20 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-60 -z-10'></div>
            <div className='absolute -bottom-20 -right-20 w-72 h-72 bg-rose-100 rounded-full blur-3xl opacity-60 -z-10'></div>

            <div className='bg-rose-50 rounded-full p-6 animate-pulse'>
                <TbMoodSadDizzy className='h-12 w-12 md:h-16 md:w-16 text-rose-500' />
            </div>

            <div className='space-y-3'>
                <h1 className='text-5xl md:text-7xl font-bold font-playFair bg-gradient-to-r from-cyan-500 to-rose-500 bg-clip-text text-transparent'>
                    Oops!
                </h1>
                <h2 className='text-2xl md:text-3xl font-semibold font-playFair'>
                    Something Turned Turbulent
                </h2>
                <p className='text-sm md:text-base text-[#6c6c6c] max-w-md mx-auto'>
                    An unexpected error occurred while loading this page. Don&apos;t worry, our crew is already on it.
                </p>
                {error?.message && (
                    <p className='text-xs text-rose-400 font-mono bg-rose-50 px-3 py-1 inline-block'>
                        {error.message}
                    </p>
                )}
            </div>

            <div className='flex flex-col sm:flex-row items-center gap-3'>
                <Button
                    onClick={() => reset()}
                    className='rounded-none bg-cyan-500 text-xs md:text-sm md:px-6 flex items-center gap-2'>
                    <IoRefreshOutline className='h-4 w-4' />
                    Try Again
                </Button>
                <Link href='/'>
                    <Button
                        variant='outline'
                        className='rounded-none border-cyan-500 text-cyan-500 text-xs md:text-sm md:px-6 hover:bg-cyan-50'>
                        Back To Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}