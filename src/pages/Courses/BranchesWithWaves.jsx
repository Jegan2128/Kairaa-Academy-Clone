import React, { useEffect } from "react";

export default function Branches() {
  useEffect(() => {
    const id = "multiwave-branches";
    if (document.getElementById(id)) return;

    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `
      @keyframes waveA {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes waveB {
        0% { transform: translateX(0); }
        100% { transform: translateX(-40%); }
      }
      @keyframes waveC {
        0% { transform: translateX(0); }
        100% { transform: translateX(-30%); }
      }
      .mw-wave { will-change: transform; }
    `;
    document.head.appendChild(style);
  }, []);

  const branches = [
    { city: "Chennai", address: "No.10 Eshwari Nagar Gowrivakkam, Chennai - 600 073" },
    { city: "Tirunelveli", address: "No.12/1, Vasantha Nagar, Palayankottai circle, Tirunelveli - 627 002" },
    { city: "Coimbatore", address: "131, DB Road, 2nd Floor, (Near Ramraj Cotton Show room) RS Puram, Coimbatore - 641 002" },
    { city: "Trichy", address: "76-O, Sri Jothi Complex, 3rd Floor, N.E.E. Road, Thillainagar, Trichy-620 018" },
    { city: "Vellore", address: "Plot no.4 first floor, Thendral Nagar Extn, Chathuvachari, Vellore - 632 009" },
    { city: "Thrissur", address: "No.29/164/71, Suharsha tower, Shornur road, Thrissur -680001" },
    { city: "Madurai", address: "No.34, TM Nagar, nearby Mattuthavani Bus Stand, Madurai – 625 107" },
    { city: "Salem", address: "No,2/3, Manimegalay Street, Advatha Asram Road, Balaji Nagar, Salem - 636 004" },
    { city: "Chittoor", address: "No.4-2044/B, Near Savithriamma College, Vellore road, Chittoor - 517 002" },
  ];

  return (
    <div className="container mx-auto max-w-full justify-between items-center">
      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-4 relative overflow-hidden rounded-lg">

        {/* ---- TITLE + GRID (your original code) ---- */}
        <div className="text-center m-3">
          <h1 className="font-bold text-4xl text-white">OUR BRANCHES AROUND INDIA</h1>
          <h3 className="font-semibold text-lg p-3 text-white">
            Embark on an exciting journey with Kairaa Blockchain Academy, nestled in dynamic cities across India!
          </h3>
        </div>

        <div className="grid md:grid-cols-3 m-7">
          {branches.map((branch, i) => (
            <div key={i} className="text-center space-y-3 my-8 p-4">
              <h2 className="font-bold text-4xl text-white">{branch.city}</h2>
              <p className="text-2xl font-medium text-black">{branch.address}</p>
            </div>
          ))}
        </div>

        {/* ---- MULTI-WAVE ADDED HERE ---- */}
        <div className="absolute left-0 bottom-0 w-full h-[120px] pointer-events-none">

          {/* Back Wave */}
          <div
            className="absolute bottom-0 w-[200%] h-full mw-wave"
            style={{ opacity: 0.35, animation: "waveA 10s linear infinite" }}
          >
            <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,20 C150,100 350,0 600,30 C850,60 1050,10 1200,30 L1200,120 L0,120 Z" fill="#ffffff" />
            </svg>
          </div>

          {/* Mid Wave */}
          <div
            className="absolute bottom-0 w-[200%] h-full mw-wave"
            style={{
              opacity: 0.45,
              transform: "translateY(20%)",
              animation: "waveB 8s linear infinite",
            }}
          >
            <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,30 C200,0 400,80 600,40 C800,0 1000,80 1200,30 L1200,120 L0,120 Z" fill="#ffffff" />
            </svg>
          </div>

          {/* Front Wave */}
          <div
            className="absolute bottom-0 w-[200%] h-full mw-wave"
            style={{
              opacity: 0.7,
              transform: "translateY(40%)",
              animation: "waveC 5s linear infinite",
            }}
          >
            <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,10 C120,80 360,0 600,50 C840,100 1080,30 1200,60 L1200,120 L0,120 Z" fill="#ffffff" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}
