import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { getBookingInfoByUserId } from '@/lib/data';
import MyBookingCard from '@/components/MyBookingCard';
import Image from 'next/image';
import { Button, Card } from '@heroui/react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaRegCalendarMinus, FaRegEye } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { LuTicketsPlane } from 'react-icons/lu';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Link from 'next/link';


const MyBookings = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;

    if (!user) {
        return
    }
    const allBookings = await getBookingInfoByUserId(user?.id);


    console.log(allBookings);

    return (
        <div className='min-h-[80vh] w-11/12 max-w-360 mx-auto my-30'>
            <h2 className='font-playFair font-semibold text-3xl md:text-4xl lg:text-5xl'>My Bookings</h2>
            <p className='text-[#6C696D] text-base md:text-xl mt-4'>Manage and view your upcoming travel plans</p>

            <div className='mt-10 flex flex-col gap-6'>

                {
                    allBookings.length > 0 ? <>
                        {
                            allBookings.map(booking => <MyBookingCard key={booking._id} booking={booking}></MyBookingCard>)
                        } </>
                        :
                        <div
                            className='flex flex-col items-center justify-center text-center min-h-50 border border-gray-200 shadow p-4 md:p-10 gap-4'>
                            <div className='bg-cyan-50 rounded-full p-5'>
                                <LuTicketsPlane className='h-10 w-10 md:h-12 md:w-12 text-cyan-500' />
                            </div>

                            <div className='space-y-2'>
                                <h2 className='text-xl md:text-2xl font-semibold font-playFair'>
                                    No Bookings Found
                                </h2>
                                <p className='text-sm md:text-base text-[#6c6c6c] max-w-sm'>
                                    You haven&apos;t booked any trips yet. Start exploring destinations and plan your next adventure.
                                </p>
                            </div>

                            <Link href='/destinations'>
                                <Button
                                    className={'rounded-none bg-cyan-500 text-xs md:text-sm md:px-6 mt-2'}>
                                    Explore Destinations
                                </Button>
                            </Link>
                        </div>
                }
            </div>


        </div>
    );
};

export default MyBookings;