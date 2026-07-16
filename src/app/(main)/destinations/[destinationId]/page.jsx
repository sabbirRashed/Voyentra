import { getDestinationById } from '@/lib/data';
import { Button, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaRegCalendarMinus, FaRegEdit } from 'react-icons/fa';
import { FaArrowLeft, } from 'react-icons/fa6';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RiDeleteBin6Line } from 'react-icons/ri';

const DestinationDetails = async ({ params }) => {
    const { destinationId } = await params;
    console.log(destinationId, 'destination Id');

    const destination = await getDestinationById(destinationId);
    const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = destination;


    return (
        <div className='w-11/12 max-w-360 mx-auto my-30  min-h-[60vh]'>
            {/* page header */}
            <div className='flex justify-between items-center'>
                <Button variant='ghost' className={'text-xl text-[#6C696D] group hover:bg-transparent '}>
                    <span className='text-[#6c696da9]  transition-transform duration-300 group-hover:-translate-x-2'><FaArrowLeft /></span>
                    Back to Destination
                </Button>

                <div className='flex justify-between items-center space-x-4 '>
                    <Button variant='outline' className={'rounded-none  space-x-1'}>
                        <FaRegEdit />
                        Edit
                    </Button>
                    <Button variant='outline' className={'rounded-none  border border-red-500 text-red-500 space-x-1'}>
                        <RiDeleteBin6Line />
                        Cancel
                    </Button>
                </div>
            </div>

            {/* image */}
            <div className='mt-4 mb-10'>
                <Image src={imageUrl}
                    alt={destinationName}
                    width={400}
                    height={400}
                    loading='eager'
                    className='w-full h-150'></Image>
            </div>

            <Separator orientation="horizontal" className='w-full' />

            {/* content */}
            <div className='flex flex-col md:flex-row justify-between mt-10'>
                {/* details content */}
                <div className='space-y-10'>
                    <div className='space-y-4'>
                        <p className='font-medium text-[#6C696D] flex items-center gap-1'>
                            <HiOutlineLocationMarker />
                            {country}
                        </p>
                        <h2 className='text-2xl md:text-3xl lg:text-5xl font-playFair font-semibold '>
                            {destinationName}
                        </h2>
                        <h3 className='text-lg font-medium flex items-center gap-2'>
                            <span className='text-[#6C696D]'><FaRegCalendarMinus /></span>
                            {duration}</h3>
                    </div>

                    <div className='space-y-5'>
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold font-playFair'>Overview</h2>
                        <p className='text-sm md:text-base text-[#6C696D]'>{description}</p>
                    </div>
                </div>

                {/* booking card */}
                <div className='min-w-100 border-2 border-blue-500 p-4'>
                    Booking card
                </div>
            </div>
        </div>
    );
};

export default DestinationDetails;