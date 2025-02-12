import React from "react";
import { useState } from "react";
import lLogo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
import LoginCard from "./loginCard";
import SignupCard from "./SignupCard";

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
      /* Copyright © VikashVerma. */
  return (
    <div className="flex flex-col min-h-screen w-full bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(./assets/loginBG.webp)] bg-cover bg-center">
      <div className="px-10 py-4">
        <Link to="/">
          <img
            src={lLogo}
            alt="Logo"
            className="h-15 w-50 max-[600px]:h-12 max-[600px]:w-40"
          />
        </Link>
      </div>
      <div className="flex justify-center items-center max-[600px]:p-5 ">
        <div className="w-110 h-auto rounded-4xl bg-gray-200 shadow-xl shadow-black max-[600px]:my-20 ">
          <div>
            <div className="flex justify-between p-10 max-[600px]:p-5">
              <div
                onClick={() => setIsLogin(true)}
                className={`flex justify-center items-center w-[48%] h-12 cursor-pointer rounded-3xl shadow-sm  transition-all ${
                  isLogin
                    ? "bg-[linear-gradient(to_right_bottom,#0A3D62,#1B6CA8)] shadow-md shadow-gray-500 text-white"
                    : "bg-white"
                }`}
              >
                <h1 className="">Login</h1>
              </div>

              <div
                onClick={() => setIsLogin(false)}
                className={`flex justify-center items-center w-[48%] h-12 cursor-pointer rounded-3xl shadow-sm ${
                  !isLogin
                    ? "bg-[linear-gradient(to_right_bottom,#0A3D62,#1B6CA8)] shadow-md shadow-gray-500 text-white"
                    : "bg-white"
                } `}
              >
                <h1>Sign Up</h1>
              </div>
            </div>
          </div>
          <div className="mt-4 w-full max-w-md">
            {isLogin ? <LoginCard /> : <SignupCard />}
          </div>
        </div>
      </div>

    
    </div>
  );
};
export default Login;
