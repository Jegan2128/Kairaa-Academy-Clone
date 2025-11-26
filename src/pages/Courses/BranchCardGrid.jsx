// src/components/BranchCardsGrid.jsx
import React from "react";

export default function BranchCardsGrid() {
  return (
    <div className="flex items-center xs:mx-20 justify-center text-center mt-2 xs:mb-40 md:mb-10 px-10 py-10">
      <div className="grid md:grid-cols-3 gap-8 md:w-[1400px] md:h-[900px] xs:grid-cols-2 grid-cols-1">
        <div className="border-2 border-gray-300 bg-gradient-to-t relative transition-transform duration-1000 ease-in-out hover:scale-110 hover: overflow-hidden from-cyan-500 to-[#CB77F7] rounded-s-3xl group">
          <div className="flex items-center justify-center text-center text-5xl p-3">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z"></path>
            </svg>
          </div>

          <h2 className="text-xl p-3 bg-[whitesmoke] font-bold">Chennai</h2>
          <p className="text-lg p-2 my-5 text-[#f8f8f8]">
            No.10 Eshwari Nagar Gowrivakkam, Chennai - 600 073
          </p>

          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-75" />
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-100" />
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-150" />
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-200" />
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out delay-150 group-hover:delay-300" />
        </div>

        <div className="border-2 border-gray-300 bg-gradient-to-t relative transition-transform duration-1000 ease-in-out hover:scale-110 hover: overflow-hidden from-cyan-500 to-[#CB77F7] rounded-s-3xl group">
          <div className="flex items-center justify-center text-center text-5xl p-3">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z"></path>
            </svg>
          </div>

          <h2 className="text-xl p-3 bg-[whitesmoke] font-bold">Trichy</h2>
          <p className="text-lg p-2 my-5 text-[#f8f8f8]">
            76-O, Sri Jothi Complex, 3rd Floor, N.E.E. Road, (Near Medical
            Association) Thillainagar, Trichy-620 018
          </p>

          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-75" />
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-100" />
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-150" />
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-200" />
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out delay-150 group-hover:delay-300" />
        </div>

        <div className="border-2 border-gray-300 bg-gradient-to-t relative transition-transform duration-1000 ease-in-out hover:scale-110 hover: overflow-hidden from-cyan-500 to-[#CB77F7] rounded-s-3xl group">
          <div className="flex items-center justify-center text-center text-5xl p-3">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z"></path>
            </svg>
          </div>

          <h2 className="text-xl p-3 bg-[whitesmoke] font-bold">Madurai</h2>
          <p className="text-lg p-2 my-5 text-[#f8f8f8]">
            No. 34, TM Nagar, Nearby Mattuthavani Bus Stand, Madurai – 625 107
          </p>

          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-75" />
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-100" />
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-150" />
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-200" />
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out delay-150 group-hover:delay-300" />
        </div>

        <div className="border-2 border-gray-300 bg-gradient-to-t relative transition-transform duration-1000 ease-in-out hover:scale-110 hover: overflow-hidden from-cyan-500 to-[#CB77F7] rounded-s-3xl group">
          <div className="flex items-center justify-center text-center text-5xl p-3">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z"></path>
            </svg>
          </div>

          <h2 className="text-xl p-3 bg-[whitesmoke] font-bold">Tirunelveli</h2>
          <p className="text-lg p-2 my-5 text-[#f8f8f8]">
            No.12/1, Vasantha Nagar, Palayankottai circle, Tirunelveli - 627 002
          </p>

          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-75" />
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-100" />
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-150" />
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-200" />
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out delay-150 group-hover:delay-300" />
        </div>

        <div className="border-2 border-gray-300 bg-gradient-to-t relative transition-transform duration-1000 ease-in-out hover:scale-110 hover: overflow-hidden from-cyan-500 to-[#CB77F7] rounded-s-3xl group">
          <div className="flex items-center justify-center text-center text-5xl p-3">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z"></path>
            </svg>
          </div>

          <h2 className="text-xl p-3 bg-[whitesmoke] font-bold">Vellore</h2>
          <p className="text-lg p-2 my-5 text-[#f8f8f8]">
            Plot no.4 first floor, Thendral Nagar Extn, Chathuvachari, Vellore -
            632 009
          </p>

          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-75" />
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-100" />
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-150" />
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-200" />
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out delay-150 group-hover:delay-300" />
        </div>

        <div className="border-2 border-gray-300 bg-gradient-to-t relative transition-transform duration-1000 ease-in-out hover:scale-110 hover: overflow-hidden from-cyan-500 to-[#CB77F7] rounded-s-3xl group">
          <div className="flex items-center justify-center text-center text-5xl p-3">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z"></path>
            </svg>
          </div>

          <h2 className="text-xl p-3 bg-[whitesmoke] font-bold">Salem</h2>
          <p className="text-lg p-2 my-5 text-[#f8f8f8]">
            No,2/3, Manimegalay Street, Advatha Asram Road, Balaji Nagar, Salem -
            636 004
          </p>

          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-75" />
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-100" />
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-150" />
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-200" />
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out delay-150 group-hover:delay-300" />
        </div>

        <div className="border-2 border-gray-300 bg-gradient-to-t relative transition-transform duration-1000 ease-in-out hover:scale-110 hover: overflow-hidden from-cyan-500 to-[#CB77F7] rounded-s-3xl group">
          <div className="flex items-center justify-center text-center text-5xl p-3">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z"></path>
            </svg>
          </div>

          <h2 className="text-xl p-3 bg-[whitesmoke] font-bold">Thrissur</h2>
          <p className="text-lg p-2 my-5 text-[#f8f8f8]">
            No. 29/164/71, Suharsha tower, Shornur road, Thrissur -680001
          </p>

          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-75" />
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-100" />
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-150" />
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-200" />
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out delay-150 group-hover:delay-300" />
        </div>

        <div className="border-2 border-gray-300 bg-gradient-to-t relative transition-transform duration-1000 ease-in-out hover:scale-110 hover: overflow-hidden from-cyan-500 to-[#CB77F7] rounded-s-3xl group">
          <div className="flex items-center justify-center text-center text-5xl p-3">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z"></path>
            </svg>
          </div>

          <h2 className="text-xl p-3 bg-[whitesmoke] font-bold">Coimbatore</h2>
          <p className="text-lg p-2 my-5 text-[#f8f8f8]">
            131, DB Road, 2nd Floor, (Near Ramraj Cotton Show room) RS Puram,
            Coimbatore - 641 002
          </p>

          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-75" />
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-100" />
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-150" />
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-200" />
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out delay-150 group-hover:delay-300" />
        </div>

        <div className="border-2 border-gray-300 bg-gradient-to-t relative transition-transform duration-1000 ease-in-out hover:scale-110 hover: overflow-hidden from-cyan-500 to-[#CB77F7] rounded-s-3xl group">
          <div className="flex items-center justify-center text-center text-5xl p-3">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z"></path>
            </svg>
          </div>

          <h2 className="text-xl p-3 bg-[whitesmoke] font-bold">Chittoor</h2>
          <p className="text-lg p-2 my-5 text-[#f8f8f8]">
            No.4-2044/B, Near Savithriamma College, Vellore road, Chittoor - 517
            002
          </p>

          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-75" />
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-100" />
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-150" />
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-[#CB77F7] delay-150 group-hover:delay-200" />
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-120 transition-all duration-500 ease-in-out delay-150 group-hover:delay-300" />
        </div>
      </div>
    </div>
  );
}
