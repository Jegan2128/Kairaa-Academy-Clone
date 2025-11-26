import React from "react";
import { Link } from "react-router-dom";

export default function Wellcome() {
  return (
  <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center">

  {/* IMAGE (bottom in mobile, left in desktop) */}
  <div className="w-full md:w-1/2 flex justify-center md:justify-start mx-0 md:mx-10 mt-6 md:mt-0">
    <div className="m-4">
      <img
        src="https://kairaablockchainacademy.com/static/media/newBanner1.04e4b6030a2032786c88.png"
        alt="welcome banner"
        className="w-72 h-auto md:w-110 md:h-110 md:ml-10 md:pl-10 animate-hanging"
      />
    </div>
  </div>

  {/* TEXT (top in mobile, right in desktop) */}
  <div className="w-full md:w-1/2 text-center md:text-left px-4">
    <h1 className="text-3xl md:text-4xl font-bold leading-snug">
      Welcome to{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d839d] to-[#ba6aec]">
        Kairaa Blockchain Academy
      </span>
    </h1>

    <p className="font-normal text-lg md:text-xl leading-8 md:leading-10 my-3">
      Kairaa Blockchain is an Online Learning and Development Academy based in
      Coimbatore, Tamilnadu, founded in 2023. The company, led by a team of
      professionals, aims to empower college graduates and corporate
      employees with essential Technical, Communication, and Leadership
      skills to enhance employability and readiness for the industry. With a
      focus on practical, hands-on learning and mentorship from experienced
      professionals, we strive to not just educate, but to inspire and empower
      the leaders of tomorrow.
    </p>

    <Link to="/Aboutus">
      <button className="font-semibold text-lg md:text-xl text-white p-4 bg-gradient-to-r from-cyan-500 to-[#CB77F7] rounded-lg mt-4 transition-transform duration-300 hover:animate-swing">
        Get More Details
      </button>
    </Link>
  </div>

</div>

  );
}
