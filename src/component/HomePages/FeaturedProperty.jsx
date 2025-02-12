import React from "react";
import home from "/src/assets/icons/home.png";
import familyhome from "/src/assets/icons/family-home.png";
import apartment from "/src/assets/icons/apartments.png";
import villa from "/src/assets/icons/villa.png";
import office from "/src/assets/icons/work.png";
import construction from "/src/assets/icons/construction-site.png";

const featuredData = () => {
  return [
    {
      image: familyhome,
      title: "Family House",
      property: "88 Property",
    },
    {
      image: apartment,
      title: "Apartment",
      property: "200 Property",
    },
    {
      image: villa,
      title: "Villa & Condo",
      property: "50 Property",
    },

    {
      image: office,
      title: "Office & Studio",
      property: "120 Property",
    },
    // {
    //   image: villa,
    //   title: "Villa & Condo",
    //   property: 60,
    // },
    // Copyright © VikashVerma.
    // {
    //   image: construction,
    //   title: "Construction-Site",
    //   property: 30,
    // },
  ];
};

export const FeaturedProperty = () => {
  return (
    <section
      id="ourproject"
      className="w-full h-auto py-20 flex flex-col justify-center bg-gray-100 max-[600px]:  "
    >
      <div className=" flex flex-col items-center max-[600px]:my-5">
        <h1 className=" text-4xl font-bold max-[600px]:text-3xl">
          Featured Property Types
        </h1>
        <p className="">Explore various property categories</p>
      </div>

      <div className=" flex justify-center gap-5 my-10 max-[600px]:grid grid-cols-2 max-[600px]:p-5">
        {featuredData().map((data, index) => (
          <div
            key={index}
            className="w-60 h-60 bg-white rounded-2xl flex flex-col items-center gap-y-0.5 py-10 cursor-pointer shadow-lg hover:bg-red-100 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-104 max-[600px]:w-38 max-[600px]:h-38"
          >
            <img
              src={data.image}
              alt=""
              className="w-16 h-16 max-[600px]:w-14 max-[600px]:h-15 "
            />
            <h2 className="">{data.title}</h2>
            <p className="text-gray-600 text-sm">{data.property}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default FeaturedProperty;
