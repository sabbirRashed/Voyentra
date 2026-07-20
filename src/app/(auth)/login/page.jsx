'use client'

import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newUser = Object.fromEntries(formData.entries());

        const { email, password } = newUser;
        const { data, error } = await authClient.signIn.email({
            email,
            password
        })

        if (data) {
            toast.success('Log In successfull', {
                autoClose: 2000,
                position: 'top-center'
            })
            router.push('/')
        }
        else if (error) {
            toast.error(`${error.message}`, {
                autoClose: 2000,
            })
        }


    };

    const handleGoogleBtn = async () => {
        await authClient.signIn.social({
            provider: "google",
        })
    }


    return (
        <div className='min-h-[80vh] w-11/12 max-w-360 mx-auto my-30'>
            <h2 className='text-center text-2xl md:text-3xl font-semibold font-playFair tracking-wide'>Welcome Back</h2>
            <p className='text-center text-sm  text-[#6C696D] mt-1'>Resume your adventure with Voyentra</p>
            <Card className="border border-gray-200 max-w-md mx-auto rounded-none p-10 mt-6">

                <Form
                    onSubmit={onSubmit}
                    className="flex w-full flex-col gap-6" >

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
                    >
                        <Label>Password</Label>
                        <Input
                            className={"rounded-none bg-gray-50 border border-gray-200 shadow-none"}
                            placeholder="Enter your password" />
                        
                        <FieldError />
                    </TextField>

                    <Button
                        type="submit"
                        className={'w-full rounded-none bg-cyan-500'}>
                        Login
                    </Button>

                </Form>

                <div className="flex justify-center items-center gap-1 w-full text-sm text-[#6C696D]">
                    <Separator className="flex-1" />
                    <p>Or continue with</p>
                    <Separator className="flex-1" />
                </div>

                <Button onClick={handleGoogleBtn} variant="outline" className="w-full rounded-none">
                    <FcGoogle />
                    Sign Up With Google
                </Button>

                <div className="text-center space-x-2">
                    <span className='text-sm text-[#6C696D]'>Don't have an account?</span>
                    <Link href={'/signUp'} className={'text-cyan-500 font-medium'}>Sign Up</Link>
                </div>
            </Card>
        </div>
    );
};

export default LoginPage;