import React from "react";
import shoe1 from "../assets/images/sports-shoe4.png";
import Button from "../assets/item-components/Button";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="flex flex-col items-center border border-blue-300">
      <div className="flex items-center justify-center w-full hero-bg md:h-auto md:pt-28 md:pb-24 lg:py-40">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className=" flex flex-col items-center justify-center w-[400px] md:w-[800px]">
            <h1 className="font-poppins mb-10 lg:-mb-5 text-white font-bold text-6xl md:text-8xl lg:text-[150px] drop-shadow-lg ">
              AirPro X3
            </h1>
            <img
              className=" w-80 md:w-[500px] lg:w-[700px]"
              src={shoe1}
              alt=""
            />
          </div>
          <Button label="shop collection" url="#shop" icon={<BsArrowRight />} />
        </div>
      </div>

      <div className="w-full text-[#3a3a3a] bg-[#fafafa] h-screen py-5 lg:py-24 flex flex-col items-center">
        <h2 className="font-bold font-poppins text-4xl lg:text-[110px] lg:mb-10 uppercase italic">
          unbelievable
        </h2>
        <h4 className="text-2xl italic font-bold uppercase font-poppins lg:text-5xl">
          speed. comfort
        </h4>
      </div>
      <div className="w-full h-screen bg-white"></div>
    </section>
  );
};

export default Hero;
