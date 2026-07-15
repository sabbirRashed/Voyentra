import { getDestinationById } from '@/lib/data';
import React from 'react';

const DestinationDetails = async({params}) => {
    const {destinationId} = await params;
    console.log(destinationId, 'destination Id');

    // const getDestination = await getDestinationById(destinationId);
    return (
        <div>
            Destination Details
        </div>
    );
};

export default DestinationDetails;