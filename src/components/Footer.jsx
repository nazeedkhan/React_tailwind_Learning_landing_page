import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-red-700">
        <div className=" flex justify-center items-center">
          <div className="grid grid-cols-5 p-4 text-xl mx-8 w-[70%]">
            <h1 className="text-4xl font-bold">
              <span className="text-white">B</span>
              <span className="text-black/80">rand</span>
            </h1>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold mb-2">Company</h1>
              <a href="#features">Features</a>
              <a href="#use-cases">Use Cases</a>
              <a href="#integrations">Integrations</a>
              <a href="#about-us">About Us</a>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold mb-2">About US</h1>
              <a href="#upcoming-event">Upcoming Event</a>
              <a href="#join-us">Join US</a>
              <a href="#insides">Insides</a>
              <a href="#employees">Employee</a>
              <a href="#lastest-blogs">Latest Blogs</a>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold mb-2">Products</h1>
              <a href="#new-products">New Products</a>
              <a href="#reviews">Reviews</a>
              <a href="#complaints">Complaints</a>
              <a href="#integrations">Integrations</a>
              <a href="#about-us">About Us</a>
              <a href="#inquiry">Inquiry</a>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold mb-2">Old Features</h1>
              <a href="#new-features">New Features</a>
              <a href="#last-patch-versions">Last Patch Version</a>
              <a href="#version-1">Version 1</a>
              <a href="#version-2">Version 2</a>
              <a href="#version-3">Version 3</a>
              <a href="#version-4">Version 4</a>
            </div>
          </div>
        </div>
        <div className="w-full bg-white h-0.5"></div>
        <div className="flex justify-between mx-16 items-center">
          <p className="font-semibold text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            provident?
          </p>
          <div className="font-bold p-4 bg-black text-red-700 rounded-4xl my-2">LOGO</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
