import React, { useState } from "react";
import Navbar from "./Navbar";
import Alert from "./Alert";
import { Outlet } from "react-router-dom";
export default function MainApp() {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  return (
    <>
      <Navbar />
      <Alert alert={alert} />
      <Outlet context={showalert} />
    </>
  );
}
