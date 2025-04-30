import React from "react";
import { Link } from "react-router-dom";

function  Card({ item }) {
  return (
    <div className="flex flex-col items-center py-7 px-4 hover:bg-white drop-shadow-lg hover:cursor-pointer">
      <div className="text-[#626fe3]">{item.logo}</div>
      <h3 className="font-normal text-xl pb-4">{item.heading}</h3>
      <p className="font-light">{item.disc}</p>
      <Link className="text-[#626fe3] ">{item.link.title}</Link>
    </div>
  );
}

export default Card;
