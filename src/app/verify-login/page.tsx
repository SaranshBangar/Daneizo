"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const VerificationPage: React.FC = () => {
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-between bg-cover bg-center" style={{ backgroundImage: 'url(/night.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 flex flex-col justify-center items-start p-8 text-white w-1/2">
        <div className="flex gap-4 items-center ml-64 mb-20">
          <a href="/" className="cursor-default">
            <Image
              src="/Logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="w-[3vw] h-auto mb-3 -mr-2"
            />
          </a>
          <a href="/" className="cursor-default">
            <h2 className="font-bold text-white text-[1rem] md:text-[1.5rem]">Daneízo</h2>
          </a>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-lg bg-white rounded-lg shadow-lg p-8 mr-64 mb-20">
        <h2 className="text-center text-2xl font-bold mt-4">Enter Verification Code</h2>
        <p className="text-center text-gray-500 mt-1">Step 2 of 3</p>

        <div className="mt-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Verification Code</label>
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
                placeholder="Enter code sent to email and phone"
                required
              />
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm mb-4">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Continue
            </button>
          </form>
        </div>

        <div className="text-center mt-6">
          <p>Didn't receive code? <a href="/login" className="text-blue-600">Resend code</a></p>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
