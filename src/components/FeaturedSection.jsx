'use client'
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { MdOutlineArrowForward } from 'react-icons/md';
import Featured from './Featured';
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const FeaturedSection = ({ destinations }) => {
    return (
        <div className="w-11/12 max-w-360 mx-auto py-30">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='flex justify-between items-center gap-4'
            >
                {/* content */}
                <div>
                    <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-cyan-500 font-semibold">
                        Curated For You
                    </span>
                    <h2 className='text-2xl md:text-4xl font-medium font-playFair mt-1'>Featured Destinations</h2>
                    <p className='text-sm md:text-base text-[#6C696D] mt-2'>Handpicked travel experiences for the adventure seekers</p>
                </div>
                <div>
                    <Link href={'/destinations'}>
                        <Button variant='outline' className={'hidden md:flex rounded-none border-cyan-500 text-cyan-500 group'}>
                            ALL DESTINATIONS
                            <MdOutlineArrowForward className="transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                    <Link href={'/destinations'}>
                        <Button variant='outline' size='sm' className={'md:hidden rounded-none text-xs border-cyan-500 text-cyan-500'}>
                            ALL DESTINATIONS <MdOutlineArrowForward />
                        </Button>
                    </Link>
                </div>
            </motion.div>

            {/* featured cards */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-10"
            >
                {
                    destinations.map((data, index) => (
                        <Featured key={data._id} destination={data} index={index} />
                    ))
                }
            </motion.div>
        </div>
    );
};

export default FeaturedSection;