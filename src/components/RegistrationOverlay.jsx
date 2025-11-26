
import React, { useEffect, useState } from 'react';

export default function RegistrationOverlay() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Detect navigation type (modern API preferred; fallback for older browsers)
    let navType = "navigate";
    try {
      const navEntries = performance.getEntriesByType?.("navigation") || [];
      if (navEntries && navEntries.length > 0 && navEntries[0].type) {
        navType = navEntries[0].type; // possible values: "navigate", "reload", "back_forward", "prerender"
      } else if (performance.navigation && typeof performance.navigation.type === "number") {
        // deprecated fallback: 1 === reload in some browsers
        const n = performance.navigation.type;
        navType = n === 1 ? "reload" : "navigate";
      }
    } catch (e) {
      // if anything goes wrong, treat as fresh navigation
      navType = "navigate";
    }

    // Only show the modal when not a reload
    if (navType === "reload") {
      setVisible(false);
    } else {
      setVisible(true);
    }

    // cleanup scroll lock on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    // lock body scroll while modal visible
    if (visible && !closing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [visible, closing]);

  const closeModal = () => {
    setClosing(true);
    // match exit animation duration (adjust if your animation timing differs)
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire your API call here if needed
    closeModal();
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        closing ? 'animate-fade-out1' : 'animate-fade-in1'
      }`}
      aria-modal="true"
      role="dialog"
    >
      {/* Dimmed background */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm ${
          closing ? 'animate-fade-out1' : 'animate-fade-in1'
        }`}
        onClick={closeModal}
      />

      {/* Centered form box: 60% of viewport height */}
      <div
        className={`relative bg-white rounded-[8px] shadow-2xl w-[60%] 800px:w-[450px] md:w-[40%] max-h-[90vh] p-5 overflow-auto z-10 flex flex-col justify-between ${
          closing ? 'animate-slide-down1' : 'animate-slide-up1'
        }`}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()} // prevent background click from closing when interacting with modal
      >
        <div className="w-full">
          <h1 className="800px:text-[25px] text-[20px] text-black font-semibold font-poppins text-center py-2">
            Register for a free demo lecture!
          </h1>

          <form className="py-3" onSubmit={handleSubmit}>
            <label className="text-[16px] font-poppins text-black" htmlFor="firstName">
              First Name
            </label>
            <br />
            <input
              className="w-full bg-transparent border border-[#0975DE] h-[40px] px-2 outline-none mt-[10px] font-poppins"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Your first name"
            />

            <br />
            <label className="text-[16px] font-poppins text-black" htmlFor="email">
              Email Address
            </label>
            <br />
            <input
              type="email"
              className="w-full bg-transparent border border-[#0975DE] h-[40px] px-2 outline-none mt-[10px] font-poppins"
              id="email"
              name="email"
              placeholder="you@example.com"
            />

            <br />
            <label className="text-[16px] font-poppins text-black" htmlFor="phoneNumber">
              Mobile No
            </label>
            <br />
            <input
              className="w-full bg-transparent border border-[#0975DE] h-[40px] px-2 outline-none mt-[10px] font-poppins"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone number"
            />

            <br />
            <label className="text-[16px] font-poppins text-black" htmlFor="course">
              Referred Course
            </label>
            <br />
            <select
              className="w-full bg-transparent border border-[#0975DE] h-[40px] px-2 outline-none mt-[10px] font-poppins"
              name="course"
              id="course"
              defaultValue=""
            >
              <option value="" disabled>
                Select
              </option>
              <option value="Blockchain Developer Fundamentals">Blockchain Developer Fundamentals</option>
              <option value="Blockchain Developer Professional">Blockchain Developer Professional</option>
              <option value="Blockchain Developer Expert">Blockchain Developer Expert</option>
              <option value="A Complete Solidity for Smart Programming">A Complete Solidity for Smart Programming</option>
              <option value="Certified Blockchain Trainer">Certified Blockchain Trainer</option>
              <option value="Other course">Other Courses</option>
            </select>

            <div className="text-center ">
              <div className="w-full justify-center items-center mt-5 ">
                <button
                  type="submit"
                  className=" py-3 px-6  rounded-full cursor-pointer bg-[#2190ff] min-h-[30px]  text-[16px] font-poppins font-semibold text-white"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
       </div>
    </div>
  );
}
