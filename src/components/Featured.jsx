// import { Button } from '@heroui/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import { FaRegCalendarMinus } from 'react-icons/fa';
// import { GoArrowUpRight } from 'react-icons/go';
// import { HiOutlineLocationMarker } from 'react-icons/hi';

// const Featured = async( {destination}) => {
//     console.log(destination);

//     const {_id, country, departureDate, destinationName, duration, imageUrl, price } = destination;
//     return (
//         <div className=''>

//             {/* Featured Card */}
//             <div className=''>

//                 <div className='space-y-1'>
//                     <div className=''>
//                         <Image
//                             src={imageUrl}
//                             alt={destinationName}
//                             width={400}
//                             height={400}
//                             loading='eager'
//                             className='w-full h-30 md:h-50'></Image>
//                         <p className='flex items-center gap-1 mt-1 text-xs text-[#6C696D] font-medium'><HiOutlineLocationMarker />{country}</p>
//                     </div>

//                     <div className='flex justify-between gap-2'>
//                         <div>
//                             <h2 className='text-xl font-playFair font-medium'>{destinationName}</h2>
//                             <h3 className='font-medium text-sm text-[#6C696D] my-2 flex items-center gap-1'>
//                                 <FaRegCalendarMinus />
//                                 12/12
//                             </h3>
//                             <Link href={`/destinations/${_id}`} className='group'>
//                                 <Button variant='gost' className={'text-[#15a1b5] tracking-wide px-0'}>
//                                     <span className='border-b-2 border-b-gray-200 group-hover:border-b-cyan-500 transition-all duration-300'>BOOK NOW</span>
//                                     <GoArrowUpRight/>
//                                 </Button>
//                             </Link>
//                         </div>
//                         <h2 className='text-2xl font-playFair font-medium'>${price}<span className='text-base text-[#6C696D]'>/person</span></h2>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Featured;


'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegCalendarMinus } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { Button } from "@heroui/react";


const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.55, ease: "easeOut" },
    },
};

const Featured = ({ destination, index }) => {
    const { _id, imageUrl, destinationName, country, price } = destination;

    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative"
        >
            <div className="space-y-1">

                {/* image */}
                <div className="relative overflow-hidden">
                    <div className="overflow-hidden">
                        <Image
                            src={imageUrl}
                            alt={destinationName}
                            width={400}
                            height={400}
                            loading={index < 4 ? 'eager' : 'lazy'}
                            className="w-full h-30 md:h-50 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        />
                    </div>

                    {/* price badge floats on image (mobile-friendly, premium feel) */}
                    <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-[10px] md:text-xs font-semibold px-2 py-1 tracking-wide text-cyan-600">
                        ${price}<span className="text-[#6C696D]">/person</span>
                    </span>

                    <p className='absolute bottom-2 left-2 flex items-center gap-1 text-xs text-white font-medium drop-shadow'>
                        <HiOutlineLocationMarker />{country}
                    </p>
                </div>

                {/* content */}
                <div className='flex justify-between items-start gap-2 pt-1'>
                    <div className="min-w-0">
                        <h2 className='text-lg md:text-xl font-playFair font-medium truncate'>{destinationName}</h2>
                        <h3 className='font-medium text-xs md:text-sm text-[#6C696D] my-1.5 md:my-2 flex items-center gap-1'>
                            <FaRegCalendarMinus />
                            12/12
                        </h3>
                        <Link href={`/destinations/${_id}`} className='group/link inline-block'>
                            <Button variant='ghost' className={'text-[#15a1b5] tracking-wide px-0 text-xs md:text-sm hover:bg-transparent'}>
                                <span className='border-b-2 border-b-gray-200 group-hover/link:border-b-cyan-500 transition-all duration-300'>
                                    BOOK NOW
                                </span>
                                <GoArrowUpRight className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Featured