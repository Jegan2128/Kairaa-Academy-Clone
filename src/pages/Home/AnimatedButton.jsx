import React from "react";
import "./AnimatedButton.css"; // we'll add animation here

export default function AnimatedButton({ label, link }) {
  return (
    <div className="my-5 mx-auto w-[150px] h-[60px] bg-white rounded-full shadow-[rgba(50,50,93,0.25)_0px_2px_5px_-1px,rgba(0,0,0,0.3)_0px_2px_5px_-1px] relative overflow-hidden">
      <div className="borderbutton"></div>
      <a href={link}>
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[50px] bg-white rounded-full text-lg font-bold">
          {label}
        </button>
      </a>
    </div>
  );
}
