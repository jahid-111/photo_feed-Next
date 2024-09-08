import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className=" mt-1  shadow-lg  md:px-24 mb-10">
      <div className="container p-2 mx-auto flex items-center justify-between gap-x-6">
        <Logo />
      </div>
    </nav>
  );
};

export default Navbar;
