import BookingCard from '@/components/BookingCard';
import DeleteAlert from '@/components/DeleteAlert';
import EditModal from '@/components/EditModal';
import { getDestinationById } from '@/lib/data';
import { Button, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaRegCalendarMinus } from 'react-icons/fa';
import { FaArrowLeft, } from 'react-icons/fa6';
import { HiOutlineLocationMarker } from 'react-icons/hi';


const DestinationDetails = async ({ params }) => {
    const { destinationId } = await params;

    const destination = await getDestinationById(destinationId);
    const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = destination;


    return (
        <div className='w-11/12 max-w-360 mx-auto my-30  min-h-[60vh]'>
            {/* page header */}
            <div className='flex justify-between items-center'>
                <Button
                    variant='ghost'
                    className={'text-base md:text-xl text-[#6C696D] group hover:bg-transparent '}>
                    <span
                        className=' text-[#6c696da9]  transition-transform duration-300 group-hover:-translate-x-2'>
                        <FaArrowLeft />
                    </span>
                    <span className='md:hidden'>Back</span>
                    <span className='hidden md:block'>Back to Destination</span>
                </Button>

                <div className='flex justify-between items-center space-x-4 '>
                    <EditModal destination={destination} />

                    <DeleteAlert destination={destination} />
                </div>
            </div>

            {/* image */}
            <div className='mt-4 mb-6 md:mb-10'>
                <Image src={imageUrl}
                    alt={destinationName}
                    width={400}
                    height={400}
                    loading='eager'
                    className='w-full h-100 md:h-150'></Image>
            </div>

            <Separator orientation="horizontal" className='w-full' />

            {/* content */}
            <div className='flex flex-col md:flex-row justify-between gap-10 mt-6 md:mt-10'>
                {/* details content */}
                <div className='space-y-6 md:space-y-10'>
                    <div className='space-y-3 md:space-y-4'>
                        <p className='font-medium text-[#6C696D] flex items-center gap-1'>
                            <HiOutlineLocationMarker />
                            {country}
                        </p>
                        <h2 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-playFair font-semibold '>
                            {destinationName}
                        </h2>
                        <h3 className='text-base md:text-lg font-medium flex items-center gap-2'>
                            <span className='text-[#6C696D]'><FaRegCalendarMinus /></span>
                            {duration}</h3>
                    </div>

                    <div className='space-y-3 md:space-y-5'>
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold font-playFair'>Overview</h2>
                        <p className='text-sm md:text-base text-[#6C696D]'>{description}</p>
                    </div>
                </div>

                {/* booking card */}
                <div>
                    <BookingCard destination={destination}></BookingCard>
                </div>

            </div>
        </div>
    );
};

export default DestinationDetails;