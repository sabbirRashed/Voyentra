'use client'
import { authClient } from '@/lib/auth-client';
import { bookingDestination } from '@/lib/data';
import { Button, DateField, Label, Separator } from '@heroui/react';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { toast } from 'react-toastify';

const BookingCard = ({ destination }) => {
    const [departureDate, setDepartureDate] = useState('');

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;

    const { price, _id, destinationName, imageUrl, country } = destination;

    const handleBooking = async () => {
        const { data: tokenData } = await authClient.token();

        const bookingData = {
            userId: user?.id,
            userName: user?.name,
            userImage: user?.image,
            destinationId: _id,
            destinationName,
            price,
            imageUrl,
            country,
            departureDate: new Date(departureDate),
        }
        const result = await bookingDestination(bookingData, tokenData?.token);
        if (result.acknowledged) {
            toast.success(`you booked ${destinationName}`, {
                autoClose: 2000,
                position: 'top-center'
            })
        }

    }

    return (
        <div className='min-w-100 border border-gray-200 shadow-xl p-6 space-y-5'>
            <div className='space-y-1'>
                <span className='text-sm text-[#6C696D]'>Starting from</span>
                <h2 className='text-3xl md:text-4xl text-cyan-500 font-bold font-playFair'>${price}</h2>
                <span className='text-sm text-[#6C696D]'>per person</span>
            </div>

            <DateField

                onChange={setDepartureDate}
                className="w-full rounded-none shadow-none"
                name="date">
                <Label className='text-[#6C696D]'>Departure date</Label>
                <DateField.Group className={'rounded-none shadow-none bg-gray-50 border border-gray-200 py-5'}>
                    <DateField.Input >{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                </DateField.Group>
            </DateField>

            <Separator />

            <Button onClick={handleBooking} className={'w-full rounded-none bg-cyan-500 py-5'}>
                Book Now <FaArrowRight />
            </Button>

            <ul className='space-y-2 text-[#6C696D]'>
                <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500' />Free cancellation up to 7 days</li>
                <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500' />24/7 customer support</li>
                <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500' />Travel insurance included</li>
            </ul>
        </div>
    );
};

export default BookingCard;