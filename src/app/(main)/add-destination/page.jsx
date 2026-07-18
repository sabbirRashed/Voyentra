'use client'
import { authClient } from '@/lib/auth-client';
import { postDestination } from '@/lib/data';
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const AddDestinationPage = () => {
    const router = useRouter()
    const onSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const destinationData = Object.fromEntries(formData.entries());

        const { data } = await authClient.token();
        const result = await postDestination(destinationData, data?.token);

        if (result.acknowledged) {
            toast.success(`Successfully add a new destination`, {
                autoClose: 2000,
                position: 'top-center'
            })
            form.reset()
            router.refresh()
        }
    }
    return (
        <div className='w-11/12 max-w-360 mx-auto py-30'>

            <h2 className='text-4xl  text-[#0c0b0b]'>Add New Travel Package</h2>

            <Card className='border border-gray-200 shadow-xl rounded-sm max-w-4xl mx-auto mt-12'>
                <form
                    onSubmit={onSubmit}
                    className="p-10 space-y-8 "
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Destination Name */}
                        <div className="md:col-span-2">
                            <TextField name="destinationName" isRequired>
                                <Label>Destination Name</Label>
                                <Input placeholder="Bali Paradise" className="rounded-none bg-gray-100 py-4 mt-1" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Country */}
                        <TextField name="country" isRequired>
                            <Label>Country</Label>
                            <Input placeholder="Indonesia" className="rounded-none bg-gray-100 py-4 mt-1" />
                            <FieldError />
                        </TextField>

                        {/* Category - Updated Select Component */}
                        <div>
                            <Select
                                name="category"
                                isRequired
                                className="w-full"
                                placeholder="Select category"
                            >
                                <Label>Category</Label>
                                <Select.Trigger className="rounded-none bg-gray-100 py-4 mt-1">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="Beach" textValue="Beach">
                                            Beach
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Mountain" textValue="Mountain">
                                            Mountain
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="City" textValue="City">
                                            City
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Adventure" textValue="Adventure">
                                            Adventure
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Cultural" textValue="Cultural">
                                            Cultural
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Luxury" textValue="Luxury">
                                            Luxury
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Price */}
                        <TextField name="price" type="number" isRequired>
                            <Label>Price (USD)</Label>
                            <Input
                                type="number"
                                placeholder="1299"
                                className="rounded-none bg-gray-100 py-4 mt-1"
                            />
                            <FieldError />
                        </TextField>

                        {/* Duration */}
                        <TextField name="duration" isRequired>
                            <Label>Duration</Label>
                            <Input
                                placeholder="7 Days / 6 Nights"
                                className="rounded-none bg-gray-100 py-4 mt-1"
                            />
                            <FieldError />
                        </TextField>

                        {/* Departure Date */}
                        <div className="md:col-span-2">
                            <TextField name="departureDate" type="date" isRequired>
                                <Label>Departure Date</Label>
                                <Input type="date" className="rounded-none bg-gray-100 py-4 mt-1" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Image URL - Removed preview */}
                        <div className="md:col-span-2">
                            <TextField name="imageUrl" isRequired>
                                <Label>Image URL</Label>
                                <Input
                                    type="url"
                                    placeholder="https://example.com/bali-paradise.jpg"
                                    className="rounded-none bg-gray-100 py-4 mt-1"
                                />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <TextField name="description" isRequired>
                                <Label>Description</Label>
                                <TextArea
                                    placeholder="Describe the travel experience..."
                                    className="rounded-none bg-gray-100 py-4 mt-1"
                                />
                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    {/* Buttons */}

                    <Button
                        type="submit"
                        variant="outline"
                        // isLoading={isPending}
                        className=" rounded-none w-full bg-cyan-500 text-white p-6"
                    >
                        {/* {isPending ? "Adding Package..." : "Add Travel Package"} */}
                        Add Travel Package
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default AddDestinationPage;