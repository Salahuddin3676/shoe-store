import React from "react";
import shoe1 from "../assets/images/sports-shoe4.png";
import Button from "../assets/item-components/Button";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="w-full h-screen lg:h-auto flex justify-center lg:pt-20 items-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-poppins mb-10 lg:-mb-5 text-white font-bold text-5xl lg:text-[150px] drop-shadow-lg ">
          AirPro X3
        </h1>
        <img className=" w-80 md:w-[700px] mb-10" src={shoe1} alt="" />
        <Button label="shop collection" icon={<BsArrowRight />} />
      </div>
    </section>
  );
};

export default Hero;
