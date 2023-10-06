import React from "react";

const Button = ({ label, icon, url }) => {
  return (
    <a
      href={url}
      className=" flex items-center gap-3 px-5 py-3 border text-sm rounded-full border-gray-600 duration-300 hover:bg-black hover:text-white font-montserrat uppercase "
    >
      {icon} {label}
    </a>
  );
};

export default Button;
