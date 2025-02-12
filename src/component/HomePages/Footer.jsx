import React from "react";
import logo from "/src/assets/logo.png";

export const Footer = () => {
  return (
    <div className="w-full h-auto bg-gray-800 px-[8%] py-5">
      <div className="grid grid-cols-3 py-10 justify-between max-[600px]:flex flex-col gap-10">
        <div className="flex flex-col gap-5 ">
          <a href="#home">
            <img src={logo} alt="" className="h-15 w-50 " />
          </a>
          <p className="text-gray-300">
            We specialize in selling houses, apartments, and villas, providing
            expert guidance throughout the process. Our personalized approach
            ensures a smooth, efficient sale, maximizing value and meeting your
            real estate goals.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center max-[600px]:flex max-[600px]:items-start ">
          <h1 className="text-white text-2xl">Company</h1>
          <ul className="flex flex-col gap-2 text-gray-300 ">
            <li>
              <a className="hover:text-red-500" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-red-500" href="#forsale">
                Property
              </a>
            </li>
            <li>
              <a className="hover:text-red-500" href="#about">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-red-500" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a className="hover:text-red-500" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-white text-2xl">Subscribe to our newsletter</h1>
          <p className="text-gray-300">
            Subscribe for weekly updates on the latest news, articles, and
            resources, delivered directly to your inbox every week.
          </p>
          <div className="flex gap-5 max-[600px]:gap-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-70 h-12 border-2 px-5 rounded-lg border-gray-100 text-gray-300"
            />
            <button className="text-lg text-white bg-blue-400 px-5 py-2 rounded-lg cursor-pointer hover:bg-red-300 max-[600px]:text-sm ">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="py-5">
        <hr className="text-gray-600 " />
      </div>

      <div className="flex justify-center">
        <p className="text-gray-400 max-[600px]:text-sm">
          Copyright 2025 ©{" "}
          <a
            className="text-white hover:text-red-300"
            href="https://github.com/Vikashverma2/"
            target="_blank"
          >
            Vikash Verma
          </a>
          . All Right Reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
