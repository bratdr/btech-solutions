import React from "react";

import { AiOutlineMenu } from "react-icons/ai";

import Logo from "../ButtonLogo.jsx";

const NavMobile = ({ onClick }) => {
  return (
    <div className="fixed flex h-16 w-full flex-row items-center justify-between bg-white px-6 shadow-sm xl:hidden">
      <Logo />
      <button onClick={onClick}>
        <AiOutlineMenu size={24} />
      </button>
    </div>
  );
};

export default NavMobile;
