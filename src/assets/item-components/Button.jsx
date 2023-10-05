import React from "react";

const Button = ({ label, icon }) => {
  return (
    <button className=" flex items-center gap-3 px-5 py-3 border text-sm rounded-full border-gray-600 duration-300 hover:bg-black hover:text-white font-montserrat uppercase ">
      {icon} {label}
    </button>
  );
};

export default Button;
