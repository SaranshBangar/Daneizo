
"use client";
import { useState } from 'react';
import { LuMail,LuLock } from 'react-icons/lu';
import Link from 'next/link';

  const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  
    // Validation function to check email and password
    const validateForm = () => {
      const newErrors: { email?: string; password?: string } = {};
  
      if (!email) {
        newErrors.email = 'Email is required';
      }
  
      if (!password) {
        newErrors.password = 'Password is required';
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault(); // Prevent page reload
  
      if (validateForm()) {
        console.log('Form submitted:');
      }
    };

    
    

    return (
        <div className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-black py-16 px-6 sm:px-8 lg:px-16 flex  justify-center items-center flex-row-reverse">
          

        <form onSubmit={handleSubmit}
        className='text-white flex flex-col border-2 px-10 py-10  gap-6 rounded-2xl text-center md:w-4/12 sm:w-1/2 font-outfit shadow-md shadow-blue-300 backdrop-blur-md backdrop-brightness-150'>
            <h1 className='text-4xl font-semibold'>Welcome Back</h1>
            <p className='text-sm'>Enter Your Credentials to Login</p>
           
            <div className="relative w-full">
    <LuMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Email"
      value={email}
       onChange={(e) => setEmail(e.target.value)}
      className="pl-10 py-2 border border-gray-300 rounded-xl outline-none w-full text-black"
    />
     {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
  </div>

  
  <div className="relative w-full">
    <LuLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
    <input
      type="password"
      id="password"
      name="password"
      placeholder="Password"
      className="pl-10 py-2 border border-gray-300 rounded-xl outline-none w-full text-black"
    />
    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
  </div>

  
           
           
           <div className='mt-4'>
           <button type="submit" className='py-2 w-full rounded-2xl text-md bg-[#B7E0FF] border-2 border-slate-700 text-slate-700 font-semibold hover:text-[#B7E0FF] hover:bg-slate-700 hover:border-[#B7E0FF] transition-all duration-200' >
                Log In
            </button>
           </div>
                <h1 className='text-sm'>Don't have an account?<span className='hover:text-[#B7E0FF] font-semibold hover:cursor-pointer' ><Link href="/signup">Sign up</Link></span></h1>
            
           
        </form>
        </div>
    );

};

export default Register;
