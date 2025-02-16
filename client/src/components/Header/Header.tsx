import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full mx-auto bg-cyan-800 h-10">
      <div className="flex-1 ml-3">
        <i className="fa-solid fa-house-chimney-window text-2xl"></i>
      </div>
      <div className="mr-10">Product Management System</div>
    </div>
  );
};

export default Header;
