'use client'
import { deleteBookingById } from '@/lib/data';
import { Button } from '@heroui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaRegCalendarMinus } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoEyeOutline } from 'react-icons/io5';
import { LuTicketsPlane } from 'react-icons/lu';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';

const MyBookingCard = ({ booking }) => {
    const router = useRouter();

    const {
        _id,
        userName,
        destinationName,
        country,
        price,
        imageUrl,
        departureDate,

    } = booking;

    const handleDelete = async () => {
        console.log(_id);
        const result = await deleteBookingById(_id);
        console.log(result);

        if (result.deletedCount > 0) {
            toast.error('Booking Canceled.', {
                autoClose: 2000,
                position: 'top-center'
            })
            router.refresh()
        }
    }

    return (
        <div className='flex flex-col md:flex-row gap-4 md:gap-8  min-h-50 border border-gray-200 shadow p-4 '>
            <div className=''>

                <Image
                    src={imageUrl}
                    alt={destinationName}
                    width={400}
                    height={400}
                    className='h-full'></Image>
            </div>

            <div className='space-y-3 w-full'>
                <div>
                    <span className='flex items-center gap-1 text-sm text-[#6c6c6c] font-medium mb-1 '>
                        <HiOutlineLocationMarker />{country}
                    </span>
                    <h2 className='text-2xl md:text-3xl font-semibold font-playFair'>{destinationName}</h2>
                </div>
                <div className='space-y-2'>
                    <h4 className='flex items-center gap-2 text-[#6C696D]'><FaRegCalendarMinus />Departure Date: {new Date(departureDate).toLocaleDateString()}</h4>
                    <h4 className='flex items-center gap-2 text-[#6C696D]'><LuTicketsPlane />Booking ID: {_id.slice(-4).toUpperCase()}</h4>
                </div>

                <div className='flex justify-between items-center'>
                    <span className='text-3xl xl:text-4xl font-semibold font-playFair text-cyan-500'>${price}</span>
                    <div className='space-x-4'>
                        <Button
                        onClick={handleDelete}
                            variant='outline'
                            className={'border border-red-500 rounded-none text-red-500 text-xs md:text-sm'}>
                            <RiDeleteBin6Line className='h-4 w-4' />
                            Cancel
                        </Button>
                        <Button
                            className={'rounded-none bg-cyan-500  text-xs md:text-sm md:px-5'}>
                            <IoEyeOutline className='h-4 w-4' />
                            View
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookingCard;