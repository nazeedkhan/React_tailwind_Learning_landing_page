import React from "react";
import Button from "./Button";

const Content = () => {
  return (
    <>
      <div className="text-center my-16 max-[845px]:my-8 font-serif flex justify-center items-center flex-col">
        <h1 className="text-7xl text-center font-bold mb-12 w-[60%] leading-22 max-[845px]:text-5xl max-[845px]:leading-16 max-[845px]:mb-6
        
        ">The Best Way To <span className="bg-[tomato] rounded-3xl px-3 py-2">Review</span> Creative Assets</h1>
        <p className="text-[20px] font-mono mb-12 max-[845px]:mb-6 w-[70%] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus consequatur assumenda sed numquam veritatis aspernatur facere ipsum rem, corrupti voluptates obcaecati rerum nisi vitae eveniet.</p>
        <Button title="JOIN SUBSCRIBE" family="font-sans"/>
      </div>
    </>
  );
};

export default Content;
