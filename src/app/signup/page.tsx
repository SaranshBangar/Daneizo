"use client";

import { useState } from "react";
import { z } from "zod";
import { LuUser2, LuMail, LuLock } from "react-icons/lu";
import { useRouter } from "next/navigation";

const registerSchema = z
  .object({
    username: z.string().min(1, "Username is required."),
    email: z.string().email("Invalid email address."),
    password: z.string().min(6, "Password must be at least 6 characters long."),
    confirmPassword: z.string().min(6, "Confirm Password is required."),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match.",
        path: ["confirmPassword"],
      });
    }
  });

const Register: React.FC = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrors({ username: "", email: "", password: "", confirmPassword: "" });

    const formData = { username, email, password, confirmPassword };
    const validationResult = registerSchema.safeParse(formData);

    if (!validationResult.success) {
      const zodErrors = validationResult.error.format();
      setErrors({
        username: zodErrors.username?._errors[0] || "",
        email: zodErrors.email?._errors[0] || "",
        password: zodErrors.password?._errors[0] || "",
        confirmPassword: zodErrors.confirmPassword?._errors[0] || "",
      });
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Registration successful!");
      } else {
        console.error("Registration failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleRedirect = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-black py-16 px-6 sm:px-8 lg:px-16 flex justify-center items-center flex-row-reverse">
      <form
      noValidate
        onSubmit={handleSubmit}
        className="text-gray-800 flex flex-col border-2 px-10 py-10 gap-6 rounded-2xl text-center md:w-4/12 sm:w-1/2 font-outfit shadow-md shadow-blue-300 backdrop-blur-md backdrop-brightness-150"
      >
        <h1 className="text-white text-4xl font-semibold">Sign Up</h1>
        <p className="text-white text-sm">Register Yourself!</p>

        <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 bg-white">
          <LuUser2 className="text-gray-400 mr-2" />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            className="outline-none w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username}</p>
        )}

        <div className="flex flex-col gap-4">
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
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

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
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}

          <div className="relative w-full">
            <LuLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm Password"
              className="pl-10 py-2 border border-gray-300 rounded-xl outline-none w-full"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="py-2 w-full rounded-2xl text-md bg-[#FEFFA7] border-2 border-[#FEFFA7] text-slate-700 font-semibold hover:text-[#FEFFA7] hover:bg-slate-700 transition-all duration-200"
          >
            Sign Up
          </button>
        </div>
        <h1 className="text-white text-sm">
          Already have an account?
          <span
            className="hover:text-[#B7E0FF] font-semibold hover:cursor-pointer"
            onClick={handleRedirect}
          >
            {" "}
            Login
          </span>
        </h1>
      </form>
    </div>
  );
};

export default Register;
