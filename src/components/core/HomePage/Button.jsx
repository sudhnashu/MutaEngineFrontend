import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center  text-[13px] sm:text-[16px] px-6 py-3 rounded-2xl  font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${
          active ? "bg-blue-50 text-black " : "bg-richblack-800 px-8 border-2 border-blue-50 "
        } hover:shadow-none hover:scale-95 transition-all duration-200 `}
      >
        {children}
      </div>
    </Link>
  );
};


export default Button;