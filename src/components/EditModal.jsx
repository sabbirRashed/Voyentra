'use client'
import { updateDestinaiton } from "@/lib/data";
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaRegEdit } from "react-icons/fa";


const EditModal = ({ destination }) => {

    const router = useRouter();

    const { _id,
        destinationName,
        country, category,
        price, duration,
        departureDate,
        imageUrl,
        description

    } = destination;

    const onSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const updatedData = Object.fromEntries(formData.entries());
        const result = await updateDestinaiton(_id, updatedData);

        if (result.modifiedCount > 0) {
            router.refresh()
        }
    }


    return (
        <div>
            <Modal>
                <Button variant='outline' className={'rounded-none  space-x-1'}>
                    <FaRegEdit />
                    Edit
                </Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-xl">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading>Update Travel Package</Modal.Heading>
                                <p className="mt-1.5 text-sm leading-5 text-muted">
                                    Make changes to the travel package details below.
                                </p>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form
                                        onSubmit={onSubmit}
                                        className="p-6 space-y-8 "
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {/* Destination Name */}
                                            <div className="md:col-span-2">
                                                <TextField defaultValue={destinationName} name="destinationName" isRequired>
                                                    <Label>Destination Name</Label>
                                                    <Input placeholder="Bali Paradise" className="rounded-none bg-gray-100 py-4 mt-1" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Country */}
                                            <TextField defaultValue={country} name="country" isRequired>
                                                <Label>Country</Label>
                                                <Input placeholder="Indonesia" className="rounded-none bg-gray-100 py-4 mt-1" />
                                                <FieldError />
                                            </TextField>

                                            {/* Category - Updated Select Component */}
                                            <div>
                                                <Select
                                                defaultValue={category}
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
                                            <TextField defaultValue={price} name="price" type="number" isRequired>
                                                <Label>Price (USD)</Label>
                                                <Input
                                                    type="number"
                                                    placeholder="1299"
                                                    className="rounded-none bg-gray-100 py-4 mt-1"
                                                />
                                                <FieldError />
                                            </TextField>

                                            {/* Duration */}
                                            <TextField defaultValue={duration} name="duration" isRequired>
                                                <Label>Duration</Label>
                                                <Input
                                                    placeholder="7 Days / 6 Nights"
                                                    className="rounded-none bg-gray-100 py-4 mt-1"
                                                />
                                                <FieldError />
                                            </TextField>

                                            {/* Departure Date */}
                                            <div className="md:col-span-2">
                                                <TextField defaultValue={departureDate} name="departureDate" type="date" isRequired>
                                                    <Label>Departure Date</Label>
                                                    <Input type="date" className="rounded-none bg-gray-100 py-4 mt-1" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Image URL - Removed preview */}
                                            <div className="md:col-span-2">
                                                <TextField defaultValue={imageUrl} name="imageUrl" isRequired>
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
                                                <TextField defaultValue={description} name="description" isRequired>
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
                                        <Modal.Footer>
                                            <Button
                                                type="submit"
                                                variant="outline"
                                                slot="close"
                                                // isLoading={isPending}
                                                className=" rounded-none bg-cyan-500 text-white py-5 px-8"
                                            >
                                                {/* {isPending ? "Adding Package..." : "Add Travel Package"} */}
                                                Save
                                            </Button>
                                        </Modal.Footer>

                                    </form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default EditModal;