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
                    allBookings.map(booking => <MyBookingCard key={booking._id} booking={booking}></MyBookingCard>)
                }
            </div>


        </div>
    );
};

export default MyBookings;