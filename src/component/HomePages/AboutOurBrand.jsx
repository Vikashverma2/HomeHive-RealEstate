import React from "react";
import brand from "/src/assets/brand.webp";

export const AboutOurBrand = () => {
  return (
    <section
      id="about"
      className="h-auto w-full flex flex-col bg-white py-20 max-[600px]:py-10"
    >
      <div className=" grid text-center gap-5">
        <h1 className="font-black text-4xl max-[600px]:text-3xl">
          About Our Brand
        </h1>
        <p>Passionate About Properties, Dedicated to Your Vision</p>
      </div>
      <div className="grid grid-cols-2 justify-center items-start gap-20 px-70 py-20 max-[600px]:flex flex-col max-[600px]:p-10">
        <div className="flex">
          <img src={brand} alt="" className="w-110 h-130 max-[600px]:h-120" />
        </div>
        <div>
          <div className="grid grid-cols-2 justify-center my-10 gap-5">
            <div>
              <h1 className="text-4xl font-bold">5+</h1>
              <p>Years of Excellence</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold">8+</h1>
              <p>Projects Completed</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold">12+</h1>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold">18+</h1>
              <p>Ongoing Projects</p>
            </div>
          </div>

          <p className="py-5">
            "Passionate About Properties, Dedicated to Your Vision" reflects our
            commitment to helping you find real estate that matches your goals.
            We provide expert guidance and personalized service every step of
            the way, ensuring a smooth and informed process. With in-depth
            market knowledge, we focus on delivering the perfect property
            tailored to your unique needs and vision.
          </p>

          <button className="bg-blue-400 px-12 py-3 text-white rounded-lg cursor-pointer hover:bg-red-300 ">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
export default AboutOurBrand;
