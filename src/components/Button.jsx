import React from "react";

const Button = ({title, family}) => {
  return (
    <>
      <a href="#join-us">
        <button className={`bg-[tomato] px-2 py-0.5 rounded-xl border-2 border-red-500 text-white font-bold ${family}`}>
        {title}
      </button>
      </a>
    </>
  );
};

export default Button;
