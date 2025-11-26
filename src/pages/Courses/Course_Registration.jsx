import React from "react";

export default function Course_Registration() {
  return (
    <div>
      <div className="md:px-12 p-2 max-w-screen-2xl md:mx-auto mt-10 animate-rotateAndSlideIn">
        <div className="bg-[#CADDFE] rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="md:w-3/5">
              <h2 className="sm:text-4xl md:text-5xl font-headingFont text-3xl text-black font-bold mb-5 ">Course Registration</h2>
            </div>
            <div className="md:w-1/4 w-1/2">
              <img className="rounded-2xl" src="https://kairaablockchainacademy.com/static/media/registration.862796cbecb0ca6a8b34.jpg" alt="Registration" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-10 py-10 text-center">
        <h2 className="md:text-4xl font-headingFont font-medium">Register Your Interest</h2>
        <p className="text-lg py-4 leading-7 ">Thank you for your interest in pursuing Blockchain Certification Programs from Kairaa Blockchain Academy. Please register your interest by filling out the following form and you will be notified through e-mail / call once we schedule a new batch for the course you have selected.</p>
      </div>

      <div className="container md:ml-20 md:px-20 px-4  py-10 gap-5  ">
        <p className="text-xl font-medium text-center">Please register your interest by filling the following form.</p>
        <form className="py-3 mx-auto md:!w-[60vw]">
          <label className="text-[16px] font-poppins text-black " htmlFor="firstName">First Name <span className="text-red-600">*</span></label>
          <br />
          <input className="w-full text-black  bg-transparent border border-[#0975DE] h-[40px] px-2 outline-none mt-[10px] font-poppins" type="text" id="firstName" name="firstName" required defaultValue="" />
          <br />

          <label className="text-[16px] font-poppins text-black " htmlFor="lastName">Last Name <span className="text-red-600">*</span></label>
          <br />
          <input className="w-full text-black  bg-transparent border border-[#0975DE] h-[40px] px-2 outline-none mt-[10px] font-poppins " type="text" id="lastName" name="lastName" required defaultValue="" />
          <br />

          <label className="text-[16px] font-poppins text-black " htmlFor="email">Email Address<span className="text-red-600">*</span></label>
          <br />
          <input type="email" className="w-full text-black  bg-transparent border border-[#0975DE] h-[40px] px-2 outline-none mt-[10px] font-poppins" id="email" required name="email" defaultValue="" />
          <br />

          <label className="text-[16px] font-poppins text-black " htmlFor="phoneNumber">Mobile No<span className="text-red-600">*</span></label>
          <br />
          <input className="w-full text-black  bg-transparent border border-[#0975DE] h-[40px] px-2 outline-none mt-[10px] font-poppins" type="tel" required id="phoneNumber" name="phoneNumber" defaultValue="" />
          <br />

          <label className="text-[16px] font-poppins text-black " htmlFor="course">Referred Course<span className="text-red-600">*</span></label>
          <br />
          <select className="w-full text-black  bg-transparent border border-[#0975DE] h-[40px] px-2 outline-none mt-[10px] font-poppins" name="course" id="course" required defaultValue="">
            <option value="">Select</option>
            <option value="Blockchain Developer Fundamentals">Blockchain Developer Fundamentals</option>
            <option value="Blockchain Developer Professional">Blockchain Developer Professional</option>
            <option value="Blockchain Developer Expert">Blockchain Developer Expert</option>
            <option value="A Complete Solidity for Smart Programming">A Complete Solidity for Smart Programming</option>
            <option value="Certified Blockchain Trainer">Certified Blockchain Trainer</option>
            <option value="Other course">Other Courses</option>
          </select>
          <br />

          <div className="text-center">
            <div className="w-full mt-5">
              <button type="submit" className="flex flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer bg-[#2190ff] min-h-[45px] text-[16px] font-poppins font-semibold !w-fit !mx-auto !text-white">Submit</button>
            </div>
          </div>
        </form>
      </div>

      <div style={{ position: "fixed", zIndex: 9999, top: 16, right: 16, bottom: 16, left: 16, pointerEvents: "none" }} />
    </div>
  );
}
