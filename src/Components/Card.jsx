import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="flex flex-col items-center px-4 py-7 hover:bg-white drop-shadow-lg hover:cursor-pointer">
      <div className="text-[#626fe3]">{item.logo}</div>
      <h3 className="pb-4 text-xl font-normal">{item.heading}</h3>
      <p className="font-light">{item.disc}</p>
      <Link className="text-[#626fe3] ">{item.link.title}</Link>
    </div>
  );
}

export default Card;
