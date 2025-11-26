// src/components/ContactCard.jsx
import React from "react";

export default function ContactCard() {
  return (
    <div className="w-full">
      <div className="md:w-5/6 w-full p-8 shadow-lg rounded-lg items-center g-4 justify-center">
        <h2 className="text-3xl font-headingFont font-bold ">
          Say <span className="text-[#0874DD]">Hello !</span>
        </h2>

        <p className="py-4 text-xl font-semibold">Feel free to stop by and say hi !</p>

        <form className="flex flex-col text-lg">
          <label className="">Name</label>
          <input type="text" className="w-full border border-blue-200  px-6 rounded-md" />

          <label>E-mail Id</label>
          <input type="email" className="w-full border border-blue-200  px-6 rounded-md" />

          <label className="">Contact Number</label>
          <input type="tel" className="w-full border border-blue-200  px-6 rounded-md" />

          <label>Message</label>
          <textarea rows="4" cols="40" className="border border-blue-200 w-full" />

          <button className="text-white w-fit md:px-6 md:py-3 p-2 my-4 md:text-xl text-lg font-bold rounded-md bg-gradient-to-r from-cyan-500 to-[#CB77F7] cursor-pointer z-10 hover:scale-110 duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
