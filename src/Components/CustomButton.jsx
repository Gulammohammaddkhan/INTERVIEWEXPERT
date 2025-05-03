import React from "react";
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
//       className="flex gap-2 rounded items-center font-medium cursor-pointer transition-all"
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
  text,
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
        className="flex gap-2 items-center rounded "
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
