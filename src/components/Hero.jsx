import React from "react";
import shoe1 from "../assets/images/sports-shoe4.png";
import Button from "../assets/item-components/Button";
import { BsArrowRight } from "react-icons/bs";
import { shoes } from "../data";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";

const Hero = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="flex items-center justify-center w-full h-screen hero-bg md:h-auto md:pt-28 md:pb-24 lg:py-40">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className=" flex flex-col items-center justify-center w-[400px] md:w-[800px]">
            <h1 className="font-poppins mb-10 lg:-mb-5 text-white font-bold text-6xl md:text-8xl lg:text-[150px] drop-shadow-lg ">
              AirPro X3
            </h1>
            <img
              className=" w-64 md:w-[500px] lg:w-[700px]"
              src={shoe1}
              alt=""
            />
          </div>
          <Button label="shop collection" url="#shop" icon={<BsArrowRight />} />
        </div>
      </div>

      <div className="w-full text-[#3a3a3a] px-6 md:px-16 lg:px-20 bg-[#fafafa] h-auto py-5 lg:py-24 flex flex-col items-center">
        <h2 className="font-bold font-poppins text-4xl lg:text-[110px] lg:mb-10 uppercase italic">
          unbelievable
        </h2>
        <h4 className="text-2xl italic font-bold uppercase font-poppins lg:text-5xl">
          speed. comfort
        </h4>

        <div className="flex flex-wrap items-center w-full h-auto gap-5 p-5 mt-5 md:mt-20 ">
          {shoes.map((shoe) => {
            const { id, img, title, rating, shoeType, price } = shoe;
            return (
              <div className="w-90% max-w-xs md:max-w-none mx-auto md:w-64 lg:w-[260px] cursor-pointer hover:shadow-lg ">
                <div>
                  <img className="rounded-t-md" src={img} alt={title} />
                </div>
                <div className="flex rounded-b-md flex-col items-center justify-center gap-1.5 py-10 text-center bg-teal-300 ">
                  <p className="text-xs font-montserrat">{shoeType}</p>
                  <h4 className="font-bold font-poppins">{title}</h4>
                  <div className="flex items-center justify-center gap-0.5 font-bold font-montserrat">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>
                  <p className="font-semibold font-montserrat">{price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-screen bg-white"></div>
    </section>
  );
};

export default Hero;
