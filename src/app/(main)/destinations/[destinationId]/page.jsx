import { getDestinationById } from '@/lib/data';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { FaArrowLeft, } from 'react-icons/fa6';
import { RiDeleteBin6Line } from 'react-icons/ri';

const DestinationDetails = async ({ params }) => {
    const { destinationId } = await params;
    console.log(destinationId, 'destination Id');

    const destination = await getDestinationById(destinationId);
    const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = destination;


    return (
        <div className='w-11/12 max-w-360 mx-auto my-30 border border-r-red-500 min-h-[60vh]'>
            {/* page header */}
            <div className='flex justify-between items-center'>
                <Button variant='ghost' className={'text-xl text-[#6C696D] group hover:bg-transparent '}>
                    <span className='text-[#6c696da9]  transition-transform duration-300 group-hover:-translate-x-2'><FaArrowLeft /></span>
                    Back to Destination
                </Button>

                <div className='flex justify-between items-center space-x-4 '>
                    <Button variant='outline' className={'rounded-none py-5 space-x-1'}>
                        <FaRegEdit />
                        Edit
                    </Button>
                    <Button variant='outline' className={'rounded-none py-5 border border-red-500 text-red-500 space-x-1'}>
                        <RiDeleteBin6Line />
                        Cancel
                        </Button>
                </div>
            </div>

            {/* image */}
            <div className='mt-4'>
                <Image src={imageUrl}
                    alt={destinationName}
                    width={400}
                    height={400}
                    loading='eager'
                    className='w-full h-150'></Image>
            </div>

            {/* content */}
            <div>

            </div>
        </div>
    );
};

export default DestinationDetails;