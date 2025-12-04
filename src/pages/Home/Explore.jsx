import React from "react";
import AnimatedButton from "./AnimatedButton";
import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <>
      {/* Explore Page */}
      <div className="text-center mt-8">
        <h1 className="font-bold text-4xl">Explore Our Courses</h1>
        <h3 className="py-4 text-lg">
          Choose the course that's right for your career goals.
        </h3>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-3 justify-center items-center md:mx-10 p-2">
        <div className="m-10 text-center rounded-2xl bg-[#f1f4f9] transform transition duration-800 hover:scale-105 hover:shadow-2xl shadow-[0_8px_8px_rgba(0,0,0,0.15)]">
          <img
            src="https://kairaablockchainacademy.com/static/media/HomeBlock1.19f49069582c30d0b5aa.png"
            alt=""
            className="border-2 rounded-t-xl"/>
          
          <h1 className="border-b-2 rounded-b-xl bg-sky-200 font-bold text-2xl text-center p-2">
            Blockchain Developer fundamental Course
          </h1>
          
          <Link to ="/pages/Home/Explore/blockdevfun"><AnimatedButton label="Learn more"/></Link>
                 
        </div>

        <div className="m-10 text-center rounded-2xl bg-[#f1f4f9]  transform transition duration-800 hover:scale-105 hover:shadow-2xl shadow-[0_8px_8px_rgba(0,0,0,0.15)]">
          <img
            src="https://kairaablockchainacademy.com/static/media/HomeProffessional.62dbdc254264c4d634e1.png"
            alt=""
            className="border-2 rounded-t-xl"
          />
          <h1 className="border-b-2 rounded-b-xl bg-sky-200 font-bold text-2xl text-center p-2">
            Blockchain Developer Professional Course
          </h1>
          <Link to ="/pages/Home/Explore/blockdevpro"><AnimatedButton label="Learn more"/></Link>
        </div>

        <div className="m-10 text-center rounded-2xl bg-[#f1f4f9]  transform transition duration-800 hover:scale-105 hover:shadow-2xl shadow-[0_8px_8px_rgba(0,0,0,0.15)]">
          <img
            src="https://kairaablockchainacademy.com/static/media/HomeExpert.c052e93f76fe570b804d.png"
            alt=""
            className="border-2 rounded-t-xl"
          />
          <h1 className="border-b-2 rounded-b-xl bg-sky-200 font-bold text-2xl text-center p-2">
            Blockchain Developer Expert Course
          </h1>
          <Link to ="/pages/Home/Explore/blockdevexp"><AnimatedButton label="Learn more"/></Link>
        </div>
      

      {/* Second Page Same Style */}
      
        <div className="m-10 text-center rounded-2xl bg-[#f1f4f9]  transform transition duration-800 hover:scale-105 hover:shadow-2xl shadow-[0_8px_8px_rgba(0,0,0,0.15)]">
          <img
            src="https://kairaablockchainacademy.com/static/media/HomeSolidity.1d31afd42ce62fff8c7e.png"
            alt=""
            className="border-2 rounded-t-xl"
          />
          <h1 className="border-b-2 rounded-b-xl bg-sky-200 font-bold text-2xl text-center p-2">
            Solidity for Smart Programming
          </h1>
          <AnimatedButton label="Learn more" link="/your-link" />
        </div>

        <div className="m-10 text-center rounded-2xl bg-[#f1f4f9]  transform transition duration-800 hover:scale-105 hover:shadow-2xl shadow-[0_8px_8px_rgba(0,0,0,0.15)]">
          <img
            src="https://kairaablockchainacademy.com/static/media/HomeTrainer.31fe77b053ee148c55ae.png"
            alt=""
            className="border-2 rounded-t-xl"
          />
          <h1 className="border-b-2 rounded-b-xl bg-sky-200 font-bold text-2xl text-center p-2">
            Certified Blockchain Trainer Online Course
          </h1>
          <AnimatedButton label="Learn more" link="/your-link" />
        </div>

        <div className="m-10 text-center rounded-2xl bg-[#f1f4f9]  transform transition duration-800 hover:scale-105 hover:shadow-2xl shadow-[0_8px_8px_rgba(0,0,0,0.15)]">
          <img
            src="https://kairaablockchainacademy.com/static/media/HomeC1.658fb88fd20fde472d8f.png"
            alt=""
            className="border-2 rounded-t-xl"
          />
          <h1 className="border-b-2 rounded-b-xl bg-sky-200 font-bold text-2xl text-center p-2">
            C programming Language Online Course
          </h1>
          <AnimatedButton label="Learn more" link="/your-link" />
        </div>
      </div>

      {/* Explore Section */}
      <div className="text-center mx-auto container   justify-center m-5 items-center flex">
  <Link to="/courses/self-paced">
  <button className="relative border-2 border-emerald-200  bg-gradient-to-r from-cyan-500 to-[#CB77F7] duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded rounded-bl-[90px] rounded-tr-[90px] hover:bg-sky-800 p-2 flex justify-center items-center font-extrabold">
  <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-75"></div>
  <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-100"></div>
  <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-150"></div>
  <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-200"></div>
  <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out  delay-150 group-hover:delay-300"></div>
  <p className="z-10">Explore More</p></button></Link></div>
          <h1 className="mt-10 font-bold text-4xl text-center">Why choose us?</h1>
      

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 justify-center items-center">
        <div className="m-10 text-center rounded-2xl bg-white">
          <img
            src="https://kairaablockchainacademy.com/static/media/whychoose2.f9c2ab0e5d386978f17d.png"
            alt=""
            className="border-2 rounded-t-xl"
          />
          <h1 className="border-b-2 rounded-b-xl bg-sky-200 font-bold text-lg text-center p-2">
            Live Project
          </h1>
        </div>

        <div className="m-10 text-center rounded-2xl bg-white">
          <img
            src="https://kairaablockchainacademy.com/static/media/whychoose3.4cd422d8cfd959cd799f.png"
            alt=""
            className="border-2 rounded-t-xl"
          />
          <h1 className="border-b-2 rounded-b-xl bg-sky-200 font-bold text-lg text-center p-2">
            Global Certification
          </h1>
        </div>

        <div className="m-10 text-center rounded-2xl bg-white">
          <img
            src="https://kairaablockchainacademy.com/static/media/whychoose5.8e1efa22a4a9e645d35d.webp"
            alt=""
            className="border-2 rounded-t-xl"
          />
          <h1 className="border-b-2 rounded-b-xl bg-sky-200 font-bold text-lg text-center p-2">
            Professional Grooming
          </h1>
        </div>

        <div className="sm:grid-cols-2 m-10 text-center rounded-2xl bg-white">
          <img
            src="https://kairaablockchainacademy.com/static/media/whychoose4.8b5427f4ab27757706c9.png"
            alt=""
            className="border-2 rounded-t-xl"
          />
          <h1 className="border-b-2 rounded-b-xl bg-sky-200 font-bold text-lg text-center p-2">
            100% Assured Job
          </h1>
        </div>
      </div>
    </>
  );
}
