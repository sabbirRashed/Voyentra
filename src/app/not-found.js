import { Button } from '@heroui/react';
import Link from 'next/link';
import { FaPlaneDeparture } from 'react-icons/fa6';

export default function NotFound() {
    return (
        <div className='min-h-[80vh] flex flex-col items-center justify-center text-center px-4 gap-6'>
            <div className='bg-cyan-50 rounded-full p-6'>
                <FaPlaneDeparture className='h-12 w-12 md:h-16 md:w-16 text-cyan-500' />
            </div>

            <div className='space-y-3'>
                <h1 className='text-6xl md:text-8xl font-bold font-playFair text-cyan-500'>
                    404
                </h1>
                <h2 className='text-2xl md:text-3xl font-semibold font-playFair'>
                    Looks Like You&apos;re Off The Map
                </h2>
                <p className='text-sm md:text-base text-[#6c6c6c] max-w-md mx-auto'>
                    The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
                </p>
            </div>

            <Link href='/'>
                <Button className='rounded-none bg-cyan-500 text-xs md:text-sm md:px-6'>
                    Back To Home
                </Button>
            </Link>
        </div>
    );
}