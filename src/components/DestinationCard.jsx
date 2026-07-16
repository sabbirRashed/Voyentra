import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegCalendarMinus } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const DestinationCard = ({ destinations }) => {
    const {_id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = destinations;
    console.log(destinationName, country);
    return (
        <div className='space-y-1'>
            <div className=''>
                <Image
                    src={imageUrl}
                    alt='image'
                    width={400}
                    height={400}
                    loading='eager'
                    className='w-full h-60'></Image>
                <p className='flex items-center gap-1 mt-1 text-[#6C696D] font-medium'><HiOutlineLocationMarker />{country}</p>
            </div>

            <div className='flex justify-between'>
                <div>
                    <h2 className='text-2xl font-playFair font-medium'>{destinationName}</h2>
                    <h3 className='font-medium text-[#6C696D] mt-2 mb-4 flex items-center gap-1'>
                        <FaRegCalendarMinus />
                        {duration}
                    </h3>
                    <Link href={`/destinations/${_id}`}>
                        <Button variant='gost' className={'text-lg text-[#15a1b5] tracking-wide px-0'}>
                            <span className='border-b-2 border-b-gray-200'>BOOK NOW</span>
                            <GoArrowUpRight className='w-6 h-6' />
                        </Button>
                    </Link>
                </div>
                <h2 className='text-2xl font-playFair font-medium'>${price}<span className='text-base text-[#6C696D]'>/Person</span></h2>
            </div>
        </div>
    );
};

export default DestinationCard;