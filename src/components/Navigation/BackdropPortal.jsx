import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export const Backdrop = ({ showMenu, onClose }) => {
  useEffect(() => {
    if (showMenu) {
      document.documentElement.classList.add("overflow-y-hidden");
    } else {
      document.documentElement.classList.remove("overflow-y-hidden");
    }
  }, [showMenu]);

  return (
    <>
      {
        <div
          onClick={onClose}
          className={`fixed bottom-0 w-full h-[calc(100vh-200px)] bg-black bg-opacity-30 transition-opacity delay-150 duration-700 ${
            showMenu ? "opacity-100 z-40" : "opacity-0 -z-50"
          }`}
        ></div>
      }
    </>
  );
};

const BackdropPortal = ({ showMenu, onClose }) => {
  return (
    <>
      {createPortal(
        <Backdrop showMenu={showMenu} onClose={onClose} />,
        document.getElementById("backdrop-root")
      )}
    </>
  );
};

export default BackdropPortal;
