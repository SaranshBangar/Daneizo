// components/Form.js
"use client";

import { LuUser2, LuMail, LuLock } from "react-icons/lu";
const Register: React.FC = () => {





  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-black py-16 px-6 sm:px-8 lg:px-16 flex  justify-center items-center flex-row-reverse">


      <form className='text-gray-800 flex flex-col border-2 px-10 py-10  gap-6 rounded-2xl text-center md:w-4/12 sm:w-1/2 font-outfit shadow-md shadow-blue-300 backdrop-blur-md backdrop-brightness-150'>
        <h1 className='text-white text-4xl font-semibold'>Sign Up</h1>
        <p className='text-white text-sm'>Register Yourself!</p>
        <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 bg-white">
          <LuUser2 className="text-gray-500 mr-2" />
          <input
            type="text"
            id="Username"
            name="Username"
            placeholder="Username"
            className="outline-none w-full text-black"
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
              className="pl-10 py-2 border border-gray-300 rounded-xl outline-none w-full text-black"
            />
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
          </div>


          <div className="relative w-full">
            <LuLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm Password"
              className="pl-10 py-2 border border-gray-300 rounded-xl outline-none w-full text-black"
            />
          </div>
        </div>




        <div className='mt-4'>
          <button type="submit" className='py-2 w-full rounded-2xl text-md bg-[#FEFFA7] border-2 border-[#FEFFA7] text-slate-700 font-semibold hover:text-[#FEFFA7] hover:bg-slate-700  transition-all duration-200 ' >
            Sign Up
          </button>
        </div>
        <h1 className='text-white text-sm'>Already have an account?<span className='hover:text-[#B7E0FF] font-semibold hover:cursor-pointer' > Login</span></h1>


      </form>
    </div>
  );

};

export default Register;
