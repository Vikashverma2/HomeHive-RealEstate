import React from "react";
import { LuIndianRupee } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import home1 from "/src/assets/Projects/home-1.webp";
import home2 from "/src/assets/Projects/home2.webp";
import office1 from "/src/assets/Projects/office-1.webp";
import office2 from "/src/assets/Projects/office-2.webp";
import villa1 from "/src/assets/Projects/villa-1.webp";
import villa2 from "/src/assets/Projects/villa-2.webp";
import villa3 from "/src/assets/Projects/villa3.webp";
import apartment1 from "/src/assets/Projects/apartment-1.webp";
import apartment2 from "/src/assets/Projects/apartment-2.webp";
import apartment3 from "/src/assets/Projects/apartment-3.webp";

const projectData = () => {
  return [
    {
      id: 1,
      title: "Office",
      image: office1,
      prize: "16,000",
      for: "For Rent",
      bed: "2 Room",
      bath: "1 Hall",
      sqft: "1100 Sq.Ft",
      location: "Sector 140A, Noida",
      buy: "Book Now",
    },
    {
      id: 2,
      title: "Villa",
      image: villa1,
      prize: "2 Cr.",
      for: "For Sale",
      bed: "8 Bed",
      bath: "4 Bath",
      sqft: "4000 Sq.ft",
      location: "Sector 79, Gurgaon",
      buy: "Buy Now",
    },
    {
      id: 3,
      title: "Apartment",
      image: apartment1,
      prize: "25,000",
      for: "For Rent",
      bed: "3 Bed",
      bath: "2 Bath",
      sqft: "1400 Sq.Ft",
      location: "Sector 14A, Pune",
      buy: "Book Now",
    },

    {
      id: 4,
      title: "House",
      image: home1,
      prize: "24 Lac",
      for: "For Sale",
      bed: "4 Bed",
      bath: "2 Bath",
      sqft: "1100 Sq.Ft",
      location: "Sector 211B, Bhopal",
      buy: "Buy Now",
    },
    {
      id: 5,
      title: "Villa",
      image: villa2,
      prize: "1 Cr.",
      for: "For Sale",
      bed: "6 Bed",
      bath: "4 Bath",
      sqft: "2000 Sq.Ft",
      location: "Sector 10A, Noida",
      buy: "Buy Now",
    },
    {
      id: 6,
      title: "Apartment",
      image: apartment2,
      prize: "30,000",
      for: "For Rent",
      bed: "4 Bed",
      bath: "2 Bath",
      sqft: "1400 Sq.Ft",
      location: "Sector 20B, Bangalore",
      buy: "Book Now",
    },

    {
      id: 7,
      title: "House",
      image: home2,
      prize: "40 Lac",
      for: "For Sale",
      bed: "6 Bed",
      bath: "2 Bath",
      sqft: "1600 Sq.Ft",
      location: "Sector 40C, Noida",
      buy: "Buy Now",
    },

    {
      id: 8,
      title: "Villa",
      image: villa3,
      prize: "4 Cr.",
      for: "For Sale",
      bed: "20 Bed",
      bath: "5 Bath",
      sqft: "4 Acres",
      location: "Sector 140A, Mumbai",
      buy: "Buy Now",
    },
  ];
};

export const NewProjects = () => {
  return (
    <section
      id="forsale"
      className="w-full h-auto flex flex-col items-center py-20 bg-white"
    >
      <h1 className="text-4xl font-bold my-5 max-[600px]:text-3xl">
        Recent Property Listed
      </h1>
      <p className=" text-center max-[600px]:p-5 ">
        Stunning home, apartment, and villa available for sale and rent. Each
        property offers modern amenities, spacious layouts, and prime locations.
      </p>
      <div className="grid grid-cols-4 gap-10 my-10 max-[600px]:flex flex-col">
        {projectData().map((data, id) => (
          <div
            key={id}
            className=" w-80 h-100 flex flex-col bg-gray-100 rounded-2xl "
          >
            <div className="relative group cursor-pointer">
              <img
                src={data.image}
                alt=""
                className="w-full h-50 bg-cover rounded-t-lg"
              />
              <div className="absolute top-0 opacity-0 group-hover:opacity-100 group-hover: w-full h-full bg-black/40 backdrop-blur-[0.1] duration-500 ">
                <h1 className="text-b-lg font-semibold text-white flex p-5 justify-center ">
                  {data.title}
                </h1>
              </div>
            </div>

            <div className="grid gap-3 p-5  ">
              <div className="flex justify-between w-full">
                <div className="flex  item-center gap-1">
                  <p className="flex items-center text-xl">
                    <LuIndianRupee />
                  </p>
                  <h2 className="text-xl">{data.prize}</h2>
                  <p className="text-xs text-orange-400 font-bold bg-orange-100 py-1 px-3 rounded-xl flex items-center ">
                    {data.for}
                  </p>
                </div>
                <p className="text-xl cursor-pointer">
                  <MdFavoriteBorder />
                </p>
              </div>

              <div className="flex items-center gap-5 w-full">
                <p>{data.bed}</p>
                <p>{data.bath}</p>
                <p>{data.sqft}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-m ">
                  <IoLocationOutline />
                </p>
                <p>{data.location}</p>
              </div>
              <button className="px-6 py-3 shadow-m text-m font-semibold text-white bg-blue-400 rounded-4xl hover:bg-red-300 transition duration-400 ease-in-out cursor-pointer ">
                {data.buy}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default NewProjects;
