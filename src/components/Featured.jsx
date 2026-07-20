import { getFeaturedDestination } from '@/lib/data';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegCalendarMinus } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineArrowForward } from 'react-icons/md';

const Featured = async( {destination}) => {
    console.log(destination);

    const {_id, country, departureDate, destinationName, duration, imageUrl, price } = destination;
    return (
        <div className=''>
        
            {/* Featured Card */}
            <div className=''>

                <div className='space-y-1'>
                    <div className=''>
                        <Image
                            src={imageUrl}
                            alt={destinationName}
                            width={400}
                            height={400}
                            loading='eager'
                            className='w-full h-30 md:h-50'></Image>
                        <p className='flex items-center gap-1 mt-1 text-xs text-[#6C696D] font-medium'><HiOutlineLocationMarker />Bangladesh</p>
                    </div>

                    <div className='flex justify-between'>
                        <div>
                            <h2 className='text-2xl font-playFair font-medium'>Cox's Bazar</h2>
                            <h3 className='font-medium text-sm text-[#6C696D] my-2 flex items-center gap-1'>
                                <FaRegCalendarMinus />
                                12/12
                            </h3>
                            <Link href={`/destinations/${_id}`} className='group'>
                                <Button variant='gost' className={'text-[#15a1b5] tracking-wide px-0'}>
                                    <span className='border-b-2 border-b-gray-200 group-hover:border-b-cyan-500 transition-all duration-300'>BOOK NOW</span>
                                    <GoArrowUpRight/>
                                </Button>
                            </Link>
                        </div>
                        <h2 className='text-2xl font-playFair font-medium'>$120<span className='text-base text-[#6C696D]'>/person</span></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;