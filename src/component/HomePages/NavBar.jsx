import React from "react";
import { useState, useEffect } from "react";
import logo from "/src/assets/HomeHive.png";
import logo1 from "/src/assets/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiCloseLargeLine } from "react-icons/ri";

import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section
        id="home"
        className="w-full min-h-screen bg-cover bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(./assets/bg.webp)] max-[600px]:bg-center "
      >
        <nav className="flex justify-between px-10 py-4 max-[600px]:px-5  ">
          <img
            src={logo1}
            alt="#"
            className="h-15 w-50 max-[600px]:h-12 max-[600px]:w-40 "
          />

          <ul
            className={`flex justify-between items-center space-x-8 ${
              isMobile
                ? "flex-col absolute top-20 justify-center py-20 gap-4 m-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.9),rgba(0,0,0,0.9))] rounded-lg shadow-lg w-[90%]"
                : "hidden md:flex "
            }`}
          >
            <li className="text-white text-lg hover:text-red-500 ">
              <a href="#">Home</a>
            </li>
            <li className="text-white text-lg hover:text-red-500">
              <Link to="#about">About</Link>
            </li>

            <li className="text-white text-lg hover:text-red-500">
              <Link to="#ourproject">Our Project</Link>
            </li>
            <li className="text-white text-lg hover:text-red-500">
              <Link to="#forsale">For Sale</Link>
            </li>
            <li className="text-white text-lg hover:text-red-500 ">
              <Link to="#testimonials">Testimonials</Link>
            </li>
          
          <Link to="/signup" className=" hidden hover:bg-blue-400 hover:text-white bg-gray-200 my-10 px-20 rounded-2xl py-3 max-[600px]:flex">
            Sign Up
            </Link>
            </ul>
          <div className="flex justify-center items-center gap-5">
            <Link
              to="/signup"
              className="bg-red-400 px-8 py-4 rounded-b-full text-white cursor-pointer hover:bg-white hover:text-black max-[600px]:hidden inline-block text-center"
            >
              Sign Up
            </Link>

            <div
              onClick={() => setIsMobile(!isMobile)}
              className="text-2xl text-white p-5 cursor-pointer md:hidden"
            >
              {isMobile ? <RiCloseLargeLine /> : <FaBarsStaggered />}
            </div>
          </div>
        </nav>

        <div className="flex justify-center items-center h-120">
          <h1 className="text-6xl text-gray-200 font-medium max-[600px]:text-4xl">
            Find your Ideal <br />
            Real Estate now
          </h1>
        </div>
        {/* Copyright © VikashVerma. */}
      </section>
    </>
  );
};
export default NavBar;
