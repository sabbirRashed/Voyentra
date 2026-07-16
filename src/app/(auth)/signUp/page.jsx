"use client"
import { authClient } from "@/lib/auth-client";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const SignUpPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newUser = Object.fromEntries(formData.entries());
        console.log('new user:', newUser,);
        const { name, email, imageUrl, password } = newUser;
        console.log(imageUrl);

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            image: imageUrl,
            password
        })

        if (data) {
            toast.success(`SignUp successfull!`, {
                autoClose: 2000,
            })
            redirect('/')
        }
        else if (error) {
            toast.error(`${error.message}`, {
                autoClose: 2000,
            })
        }


    };


    return (
        <div className='min-h-[80vh] w-11/12 max-w-360 mx-auto my-30'>
            <h2 className='text-center text-2xl md:text-3xl font-semibold font-playFair tracking-wide'>Create Account</h2>
            <p className='text-center text-base  text-[#6C696D] mt-2'>Start your adventure with Voyentra</p>
            <Card className="border border-gray-200 max-w-120 mx-auto rounded-none p-10 mt-6">

                <Form
                    onSubmit={onSubmit}
                    className="flex w-full flex-col gap-4" >
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label>Name</Label>
                        <Input
                            className={"rounded-none bg-gray-50 border border-gray-200 shadow-none"}
                            placeholder="Enter your full name" />
                        <FieldError />
                    </TextField>

                    <TextField
                        name="imageUrl"
                        type="url"
                    >
                        <Label>Image URL</Label>
                        <Input
                            className={"rounded-none bg-gray-50 border border-gray-200 shadow-none"}
                            placeholder="Enter your image link" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}

                    >
                        <Label>Email</Label>
                        <Input
                            className={"rounded-none bg-gray-50 border border-gray-200 shadow-none"}
                            placeholder="Enter your email" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input
                            className={"rounded-none bg-gray-50 border border-gray-200 shadow-none"}
                            placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>

                    <Button
                        type="submit"
                        className={'w-full rounded-none bg-cyan-500'}>
                        Create Account
                    </Button>

                </Form>
            </Card>
        </div>
    );
};

export default SignUpPage;