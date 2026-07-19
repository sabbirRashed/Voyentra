import { Button } from '@heroui/react';
import React from 'react';
import { MdOutlineArrowForward } from 'react-icons/md';

const Featured = () => {
    return (
        <div className='min-h-[40vh] w-11/12 max-w-360 mx-auto py-30'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-2xl md:text-4xl font-medium font-playFair'>Featured Destinations</h2>
                    <p className='text-sm md:text-base text-[#6C696D] mt-2'>Handpicked travel experiences for the adventure seekers</p>
                </div>
                <div>
                    <Button variant='outline' size='' className={'hidden md:inline-block rounded-none border-cyan-500 text-cyan-500'}>ALL DESTINATIONS <MdOutlineArrowForward /></Button>
                    <Button variant='outline' size='sm' className={'md:hidden rounded-none text-xs border-cyan-500 text-cyan-500'}>ALL DESTINATIONS <MdOutlineArrowForward/></Button>
                   
                </div>
            </div>

            {/* Featured Card */}
            <div className='min-h-[20vh] border border-red-500 mt-6 md:mt-10'>

            </div>
        </div>
    );
};

export default Featured;