"use client"
import { authClient } from '@/lib/auth-client';
import { deleteDestination } from '@/lib/data';
import { AlertDialog, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';

const DeleteAlert = ({ destination }) => {

    const router = useRouter();

    const { _id, destinationName, } = destination;

    const handleBtn = async (id) => {

        const { data } = await authClient.token();
        const result = await deleteDestination(id, data?.token);

        if (result.deletedCount > 0) {
            toast.error(`Cancele a destination`, {
                autoClose: 2000,
                position: 'top-center'
            })
            router.push('/destinations');
            router.refresh();
        }
    }


    return (
        <div>
            <AlertDialog>
                <Button variant='outline' className={'rounded-none  border border-red-500 text-red-500 space-x-1'}>
                    <RiDeleteBin6Line />
                    Cancel
                </Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-100">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
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
                                <Button onClick={() => { handleBtn(_id) }} slot="close" variant="danger">
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

export default DeleteAlert;