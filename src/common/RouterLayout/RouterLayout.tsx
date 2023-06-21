import React from "react";
import { Navbar } from "../Navbar";
import { Outlet } from "react-router-dom";
export type RouterLayoutProps = {};

const RouterLayout: React.FC<RouterLayoutProps> = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RouterLayout;
