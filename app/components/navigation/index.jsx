"use client";

import React, { useState } from "react";

import NavDesktop from "./desktop/DesktopNav.jsx";
import NavMobile from "./mobile/MobileNav.jsx";
import MobileDrawer from "./mobile/MobileDrawer.jsx";

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* Destop Navbar */}
      <NavDesktop />
      {/* Mobile Navbar */}
      <NavMobile onClick={handleDrawerToggle} />
      <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
    </>
  );
};

export default Navigation;
