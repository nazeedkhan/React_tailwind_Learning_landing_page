import React, { useState } from "react";
import Button from "./Button";
import { AiOutlineMenuFold } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  function mobileMenu() {
    setMenu(true);
    console.log(menu);
  }

  return (
    <>
      <header className="bg-red-300">
        <div className="flex justify-between py-4 items-center font-semibold mx-4 max-[845px]:mx-4 max-[845px]:py-2">
          <a href="#home">
            <h1 className="text-4xl font-bold max-[845px]:text-3xl">
              <span className="text-white">B</span>
              <span className="text-black/80">rand</span>
            </h1>
          </a>
          <div className="gap-12 flex max-[845px]:hidden ">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#use-cases">Use Cases</a>
            <a href="#integrations">Integrations</a>
            <a href="#about-us">About Us</a>
          </div>
          <div className="flex gap-3">
            <Button title="Join Us" />
            <div
              className="min-[845px]:hidden text-3xl font-bold"
              onClick={mobileMenu}
            >
              <AiOutlineMenuFold />
            </div>

            {/* mobile menu */}
            {menu && (
              <div
                className="absolute bg-gray-900 text-white flex flex-col top-0
              -left-8 w-[80%] h-full text-center rounded-2xl "
              >
                <span
                  className="absolute top-3 right-3"
                  onClick={()=>setMenu(false)}
                >
                  ❌
                </span>
                <div className="mt-12 flex flex-col gap-2 font-semibold text-xl">
                  <a href="#home">Home</a>
                  <a href="#features">Features</a>
                  <a href="#use-cases">Use Cases</a>
                  <a href="#integrations">Integrations</a>
                  <a href="#about-us">About Us</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
