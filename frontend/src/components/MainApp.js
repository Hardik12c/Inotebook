import React from "react";
import Navbar from "./Navbar"
import Alert from "./Alert"
import { Outlet } from "react-router-dom";
export default function MainApp() {
  return (
    <>
      <Navbar/>
      <Alert message={"This is amazing app"}/>
      <Outlet/>
    </>
  );
}
