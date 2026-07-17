'use client'
import { Button, DateField, Label, Separator } from '@heroui/react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const BookingCard = ({ destination }) => {

    const { _id,
        destinationName,
        country, category,
        price, duration,
        departureDate,
        imageUrl,
        description

    } = destination;

    return (
        <div className='min-w-100 border border-gray-200 shadow-xl p-6 space-y-5'>
            <div className='space-y-1'>
                <span className='text-sm text-[#6C696D]'>Starting from</span>
                <h2 className='text-3xl md:text-4xl text-cyan-500 font-bold font-playFair'>${price}</h2>
                <span className='text-sm text-[#6C696D]'>per person</span>
            </div>

            <DateField className="w-full rounded-none shadow-none" name="date">
                <Label className='text-[#6C696D]'>Departure date</Label>
                <DateField.Group className={'rounded-none shadow-none bg-gray-50 border border-gray-200 py-5'}>
                    <DateField.Input >{(segment) => <DateField.Segment  segment={segment} />}</DateField.Input>
                </DateField.Group>
            </DateField>

            <Separator />

            <Button className={'w-full rounded-none bg-cyan-500 py-5'}>
                Book Now <FaArrowRight />
            </Button>
        </div>
    );
};

export default BookingCard;