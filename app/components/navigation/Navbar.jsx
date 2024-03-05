"use client";

import React, { useState } from "react";

import NavDesktop from "./desktop/DesktopNav";
import NavMobile from "./mobile/MobileNav";
import MobileDrawer from "./mobile/MobileDrawer";

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* Destop Navbar */}
      <div className="w-full">
        <NavDesktop />
      </div>
      {/* Mobile Navbar */}
      <NavMobile onClick={handleDrawerToggle} />
      <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
    </>
  );
};

export default Navigation;
