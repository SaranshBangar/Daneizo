"use client";

import Link from "next/link";
import { useState } from 'react';
import { LuLock, LuMail, LuUser2 } from 'react-icons/lu';
import GoogleButton from '../items/[slug]/components/GoogleButton/GoogleButton';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Form submitted:", { username, email, password, confirmPassword });
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-black py-16 px-6 sm:px-8 lg:px-16 flex justify-center items-center flex-row-reverse">
            <form
                className='text-white flex flex-col border-2 px-10 py-10 gap-6 rounded-2xl text-center md:w-4/12 sm:w-1/2 font-outfit shadow-md shadow-blue-300 backdrop-blur-md backdrop-brightness-150'
                onSubmit={handleSubmit} // Add the onSubmit handler
            >
                <h1 className='text-4xl font-semibold'>Sign Up</h1>
                <p className='text-sm'>Register Yourself!</p>

                <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 bg-white">
                    <LuUser2 className="text-gray-400 mr-2" />
                    <input
                        type="text"
                        id="Username"
                        name="Username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Handle input change
                        className="outline-none w-full"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <div className="relative w-full">
                        <LuMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Handle input change
                            className="pl-10 py-2 border border-gray-300 rounded-xl outline-none w-full"
                        />
                    </div>

                    <div className="relative w-full">
                        <LuLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Handle input change
                            className="pl-10 py-2 border border-gray-300 rounded-xl outline-none w-full"
                        />
                    </div>

                    <div className="relative w-full">
                        <LuLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} // Handle input change
                            className="pl-10 py-2 border border-gray-300 rounded-xl outline-none w-full"
                        />
                    </div>
                </div>

                <div className='mt-4'>
                    <button
                        type="submit"
                        className='py-2 w-full rounded-2xl text-md bg-[#FEFFA7] border-2 border-[#FEFFA7] text-slate-700 font-semibold hover:text-[#FEFFA7] hover:bg-slate-700 transition-all duration-200'
                    >
                        Sign Up
                    </button>
                </div>
                <h1 className='text-sm'>Already have an account?
                    <Link href="/login">
                        <span className='hover:text-[#B7E0FF] font-semibold hover:cursor-pointer'> Login</span>
                    </Link>
                </h1>
                <GoogleButton /> {/* Include GoogleButton component */}
            </form>
        </div>
    );
};

export default Register;
