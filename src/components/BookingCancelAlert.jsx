'use client'
import { authClient } from '@/lib/auth-client';
import { deleteBookingById } from '@/lib/data';
import { AlertDialog, Button, toastVariants } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';

const BookingCancelAlert = ({ booking }) => {
    const router = useRouter();

    const { _id, destinationName } = booking;

    
    const handleDelete = async () => {

        const {data} = await authClient.token();
        const result = await deleteBookingById(_id, data?.token);

        if (result.deletedCount > 0) {
            toast.error(`Booking #${_id.slice(-4).toUpperCase()} has been canceled.`, {
                autoClose: 2000,
                position: 'top-center'
            })
            router.refresh()
        }
    }

    return (
        <div>
            <AlertDialog>
                <Button
                    variant='outline'
                    className={'border border-red-500 rounded-none text-red-500 text-xs md:text-sm'}>
                    <RiDeleteBin6Line className='h-4 w-4' />
                    Cancel
                </Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-100">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete booking permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong>{destinationName}</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={() => { handleDelete() }} slot="close" variant="danger">
                                    Delete
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default BookingCancelAlert;