import DestinationCard from '@/components/DestinationCard';
import { getDestinations } from '@/lib/data';
import React from 'react';

const DestinationsPage = async () => {

    const destinations = await getDestinations();


    return (
        <div className='min-h-[80vh] w-11/12 max-w-360 mx-auto my-30 space-y-10'>
            {/* heading */}
            <div className='space-y-4'>
                <h2 className='font-playFair font-semibold text-3xl md:text-4xl lg:text-5xl '>Explore All Destinations</h2>
                <p className='text-[#6C696D] text-base md:text-xl'>Find your perfect travel experience from our curated collection</p>
            </div>

            {/* card container */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    destinations.map(item => <DestinationCard
                        key={item._id}
                        destinations={item}>
                    </DestinationCard>)
                }

            </div>
        </div>
    );
};

export default DestinationsPage;