"use client";
import { useState } from "react";
import { z } from "zod";
import { LuMail, LuLock } from "react-icons/lu";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string().min(1, "Invalid password"),
});

const Register: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrors({ email: "", password: "" });

    const formData = { email, password };
    const validationResult = loginSchema.safeParse(formData);

    if (!validationResult.success) {
      const zodErrors = validationResult.error.format();
      setErrors({
        email: zodErrors.email?._errors[0] || "",
        password: zodErrors.password?._errors[0] || "",
      });
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Login successful!");
      } else {
        console.error("Login failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleRedirect = () => {
    router.push("/signup");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-black py-16 px-6 sm:px-8 lg:px-16 flex justify-center items-center flex-row-reverse">
      <form
      noValidate
        onSubmit={handleSubmit}
        className="text-white flex flex-col border-2 px-10 py-10 gap-6 rounded-2xl text-center md:w-4/12 sm:w-1/2 font-outfit shadow-md shadow-blue-300 backdrop-blur-md backdrop-brightness-150"
      >
        <h1 className="text-4xl font-semibold">Welcome Back</h1>
        <p className="text-sm">Enter Your Credentials to Login</p>

        <div className="relative w-full">
          <LuMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="pl-10 py-2 border border-gray-300 rounded-xl outline-none w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <div className="relative w-full">
          <LuLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="pl-10 py-2 border border-gray-300 rounded-xl outline-none w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

        <div className="mt-4">
          <button
            type="submit"
            className="py-2 w-full rounded-2xl text-md bg-[#B7E0FF] border-2 border-slate-700 text-slate-700 font-semibold hover:text-[#B7E0FF] hover:bg-slate-700 hover:border-[#B7E0FF] transition-all duration-200"
          >
            Log In
          </button>
        </div>
        <h1 className="text-sm">
          Don't have an account?
          <span className="hover:text-[#B7E0FF] font-semibold hover:cursor-pointer"
          onClick={handleRedirect}
          >
            {" "}
            Sign up
          </span>
        </h1>
      </form>
    </div>
  );
};

export default Register;
