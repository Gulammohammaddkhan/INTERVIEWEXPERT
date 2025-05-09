import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

// function CustomButton({
//   img,
//   text,
//   bgColor,
//   hover,
//   border,
//   padding,
//   textColor,
// }) {
//   return (
//     <button
//       className="flex items-center gap-2 font-medium transition-all rounded cursor-pointer"
//       style={{
//         backgroundColor: bgColor,
// transition: "background-color 0.",
// border: border,
// padding: padding,
// color: textColor,
// }}
// onMouseEnter={(e) => (
//   (e.target.style.backgroundColor = hover),
//   (e.target.style.color = textColor)
// )}
// onMouseLeave={(e) => (
//   (e.target.style.backgroundColor = bgColor),
//   (e.target.style.color = hover)
// )}
//     >
//       {img}
//       {text}
//     </button>
//   );
// }

function CustomButton({
  img,
  text = <IoIosArrowBack />,
  bgColor,
  textColor,
  padding,
  border,
  fontWeight,
  hover,
  cursor,
  margin,
  style,
  path,
  onClick,
}) {
  return (
    <button onClick={onClick}>
      <Link
        to={path}
        className="flex items-center gap-2 rounded "
        style={{
          backgroundColor: bgColor,
          color: textColor,
          padding: padding,
          border: border,
          fontWeight: fontWeight,
          hover: hover,
          cursor: cursor,
          margin: margin,
          style: style,
        }}
      >
        {img}
        {text}
      </Link>
    </button>
  );
}

export default CustomButton;
