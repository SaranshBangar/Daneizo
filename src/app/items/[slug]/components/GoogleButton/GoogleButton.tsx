"use client";

import { signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from '../../../../../firebase';

const GoogleButton: React.FC = () => {
    const router = useRouter();

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            console.log("User signed in");
            router.push('/'); // Redirect to the home page after sign-in
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    };

    return (
        <button
            onClick={handleGoogleLogin}
            className='py-2 w-full rounded-2xl text-md bg-[#FEFFA7] border-2 border-[#FEFFA7] text-slate-700 font-semibold hover:text-[#FEFFA7] hover:bg-slate-700 transition-all duration-200 flex items-center justify-center'>
            <FcGoogle style={{ fontSize: '1.5rem', marginRight: '0.5rem' }} />
            Continue with Google
        </button>
    );
};

export default GoogleButton;
