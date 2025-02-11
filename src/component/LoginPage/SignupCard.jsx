import React from "react";
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TbLockPassword } from "react-icons/tb";

export const SignupCard = () => {
  return (
    <div className="flex flex-col justify-center text-center pb-10">
      <p className="text-xl pb-6 ">Create your account</p>
      <div className="flex flex-col gap-4 px-12">
        <div className="flex">
          <div className="absolute flex justify-center items-center w-10 h-12">
            <FaUser />
          </div>
          <input
            type="text"
            placeholder="Email"
            className="bg-transparent border-2 border-black w-full h-12 rounded-2xl pl-10"
          />
        </div>

        <div>
          <div className="absolute flex justify-center items-center w-10 h-12">
            <TbLockPassword />
          </div>
          <input
            type="password"
            placeholder="Create  Password"
            className="bg-transparent border-2 border-black w-full h-12 rounded-2xl pl-10"
          />
        </div>
        <div>
          <div className="absolute flex justify-center items-center w-10 h-12">
            <TbLockPassword />
          </div>
          <input
            type="password"
            placeholder="Confirm Password"
            className="bg-transparent border-2 border-black w-full h-12 rounded-2xl pl-10"
          />
        </div>

        <div className="flex justify-center items-center">
          <button className="bg-blue-400 text-white w-full h-12 rounded-2xl cursor-pointer hover:bg-red-300">
            Sign Up
          </button>
        </div>

        <p className="text-gray-400">OR</p>

        <div className="flex justify-center w-full h-12 border-2 items-center border-gray-600 rounded-2xl gap-2 cursor-pointer transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-98">
          <FcGoogle className="w-6 h-6" />
          <p className="">Sign Up with Google</p>
        </div>
      </div>
    </div>
  );
};
export default SignupCard;
