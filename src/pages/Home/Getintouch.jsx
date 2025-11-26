import React from "react";

export default function Getintouch() {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center px-8"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 w-full max-w-6xl items-center">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Blockchain Development Syllabus
          </h1>

          <a
            href="#"
            className="px-7 py-2 text-white font-medium rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition"
          >
            Download Syllabus
          </a>
        </div>

        {/* Right Form Card */}
        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl p-8 shadow-2xl w-full">
          <h2 className="text-white text-2xl font-semibold text-center mb-6">
            Get In Touch
          </h2>

          <form className="space-y-8">
            {/* Name */}
            <div className="relative w-full">
              <input
                type="text"
                id="name"
                required
                placeholder="Your Name"
                className="peer w-full bg-transparent border-b border-white text-white placeholder-transparent focus:outline-none py-2"
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-2 text-white transition-all duration-300
                peer-placeholder-shown:top-2 peer-placeholder-shown:text-base
                peer-focus:-top-4 peer-focus:text-sm"
              >
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative w-full">
              <input
                type="email"
                id="email"
                required
                placeholder="Your Email Address"
                className="peer w-full bg-transparent border-b border-white text-white placeholder-transparent focus:outline-none py-2"
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-2 text-white transition-all duration-300
                peer-placeholder-shown:top-2 peer-placeholder-shown:text-base
                peer-focus:-top-4 peer-focus:text-sm"
              >
                Your Email Address
              </label>
            </div>

            {/* Contact */}
            <div className="relative w-full">
              <input
                type="tel"
                id="phone"
                required
                placeholder="Your Contact Number"
                className="peer w-full bg-transparent border-b border-white text-white placeholder-transparent focus:outline-none py-2"
              />
              <label
                htmlFor="phone"
                className="absolute left-0 top-2 text-white transition-all duration-300
                peer-placeholder-shown:top-2 peer-placeholder-shown:text-base
                peer-focus:-top-4 peer-focus:text-sm"
              >
                Your Contact Number
              </label>
            </div>

            {/* Message */}
            <div className="relative w-full">
              <textarea
                id="message"
                rows="2"
                required
                placeholder="Your Message"
                className="peer w-full bg-transparent border-b border-white text-white placeholder-transparent focus:outline-none py-2"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 top-2 text-white transition-all duration-300
                peer-placeholder-shown:top-2 peer-placeholder-shown:text-base
                peer-focus:-top-4 peer-focus:text-sm"
              >
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 mx-auto
              bg-white text-blue-600 px-7 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              ✈ Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
