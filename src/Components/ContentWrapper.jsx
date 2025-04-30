import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 flex justify-center items-center flex-col">
      {children}
    </div>
  );
};

export default ContentWrapper;
