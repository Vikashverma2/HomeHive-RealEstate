import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoIosStar } from "react-icons/io";
// import mukesh from "../assets/HomePages/Testimonials/mukesh-ambani.webp";
import mukesh from "/src/assets/Testimonials/mukesh-ambani.webp";
import akshay from "/src/assets/Testimonials/AkshayKumar.webp";
import anishka from "/src/assets/Testimonials/Anishka.webp";
import gautam from "/src/assets/Testimonials/Gautam-Adani.webp";
import sonu from "/src/assets/Testimonials/Sonu-Sharma.webp";
import juli from "/src/assets/Testimonials/juli.webp";
import rohit from "/src/assets/Testimonials/Rohit-Mehta.webp";
import Slider from "react-slick";

const testimonialsData = () => {
  return [
    {
      image: rohit,
      title: "Rohit Mehta",
      des: "I had an excellent experience working with HomeHive. They were professional, attentive, and knowledgeable, making the entire buying process smooth and stress-free. Their expertise in the local market helped me find the perfect home. I highly recommend them for anyone looking to buy or sell!",
    },
    {
      image: akshay,
      title: "Akshay kumar",
      des: "I had a wonderful experience with HomeHive. They were efficient, reliable, and always available to address my needs. Their deep understanding of the market helped me secure the ideal home. i am extremely satisfied with the service and would highly recommend them to anyone looking to buy or sell.",
    },
    {
      image: anishka,
      title: "Anishka Singh",
      des: "Working with HomeHive was a fantastic experience! They were professional, responsive, and guided me seamlessly through the buying process. Their in-depth market knowledge helped me find exactly what I wanted. I highly recommend them for anyone looking for reliable and efficient real estate services!",
    },
    {
      image: mukesh,
      title: "Mukesh Ambani",
      des: "I had an excellent experience working with HomeHive. They were professional, attentive, and knowledgeable, making the entire buying process smooth and stress-free. Their expertise in the local market helped me find the perfect home. I highly recommend them for anyone looking to buy or sell!",
    },
    {
      image: sonu,
      title: "Sonu Sharma",
      des: "Working with HomeHive was an exceptional experience. They were incredibly professional, approachable, and made the entire process seamless. Their expertise in the local real estate market was invaluable, and they truly understood my needs. I am thrilled with my new home and highly recommend their services to anyone!",
    },
    {
      image: juli,
      title: "Juli",
      des: "I had a wonderful experience with HomeHive. They were efficient, reliable, and always available to address my needs. Their deep understanding of the market helped me secure the ideal home. I’m extremely satisfied with the service and would highly recommend them to anyone looking to buy or sell.",
    },
    {
      image: gautam,
      title: "Gautam Adani",
      des: "I had an excellent experience working with HomeHive. They were professional, attentive, and knowledgeable, making the entire buying process smooth and stress-free. Their expertise in the local market helped me find the perfect home. I highly recommend them for anyone looking to buy or sell!",
    },
  ];
};

{
  /* Copyright © VikashVerma. */
}

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "flex",
        background: "blue",
        padding: "20px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "flex",
        background: "blue",
        padding: "20px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
      }}
      onClick={onClick}
    />
  );
}

export const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  {/* Copyright © VikashVerma. */}
  return (
    <div className="bg-gray-100 w-full h-auto flex flex-col justify-center items-center p-10">
      <div>
        <h1
          id="testimonials"
          className="text-4xl font-bold text-center max-[600px]:text-3xl"
        >
          Testimonials
        </h1>
        <p>What Our Client Say About HomeHive.</p>
      </div>
      <div className="w-[80%] h-auto m-20 max-[600px]:w-[100%] ">
        <Slider {...settings}>
          {testimonialsData().map((data, index) => (
            <div key={index} className=" m-5 ">
              <div className="w-90 h-140 flex flex-col justify-center items-center gap-2 p-8 bg-white rounded-2xl max-[600px]:w-70 ">
                <img
                  src={data.image}
                  alt=""
                  className="h-30 w-30 rounded-full bg-cover"
                />
                <h1 className="text-2xl font-medium">{data.title}</h1>
                <div className="flex">
                  <p className="text-red-500">
                    <IoIosStar />
                  </p>
                  <p className="text-red-500">
                    <IoIosStar />
                  </p>
                  <p className="text-red-500">
                    <IoIosStar />
                  </p>
                  <p className="text-red-500">
                    <IoIosStar />
                  </p>
                  <p className="text-red-500">
                    <IoIosStar />
                  </p>
                </div>
                <p className="text-center">{data.des}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Testimonials;
