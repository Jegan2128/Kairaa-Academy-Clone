import React from "react";
import { Link } from "react-router-dom";

export default function Hero2() {
  
  return (
    <>
     <div className="container mx-auto bg-white p-6 md:p-24">
  {/* Grid for responsiveness */}
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-8">

    {/* CARD 1 */}
    <div className="border-2 border-blue-500 rounded-2xl p-4">
      <div className="flex justify-center md:justify-start mx-2 py-2">
        <img
          src="https://kairaablockchainacademy.com/static/media/001-blockchain.eca4235678cd8b827b85.png"
          alt="kairaa"
          className="h-24 w-24"
        />
      </div>

      <div className="text-left mx-2">
        <h1 className="text-2xl">Master Blockchain & Unlock Your Potential</h1>
        <hr className="border-t border-gray-300 my-2" />
        <p>
          Blockchain is rapidly changing the game. Get the skills you need
          with us to achieve your goals and stay ahead of the curve.
        </p>
        <Link to="/courses/Blockchain_D">
          <button className="text-gray-950 font-semibold underline decoration-sky-400 underline-offset-3 hover:decoration-2 hover:cursor-pointer">
            Learn More
          </button>
        </Link>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="border-2 border-blue-500 rounded-2xl p-4">
      <div className="flex justify-center md:justify-start mx-2 py-2">
        <img
          src="https://kairaablockchainacademy.com/static/media/002-blockchain-1.8337e19c9020b9756c5b.png"
          alt="kairaa"
          className="h-24 w-24"
        />
      </div>

      <div className="text-left mx-2">
        <h1 className="text-2xl">Internship Opportunities in Blockchain</h1>
        <hr className="border-t border-gray-300 my-2" />
        <p>
          Gain Blockchain Skills and expertise. Unlock the opportunities to
          work on live projects. Don't miss out on this valuable opportunity!
        </p>
        <Link to="/Internship">
          <button className="text-gray-950 font-semibold underline decoration-sky-400 underline-offset-3 hover:decoration-2 hover:cursor-pointer">
            Learn More
          </button>
        </Link>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="border-2 border-blue-500 rounded-2xl p-4">
      <div className="flex justify-center md:justify-start mx-2 py-2">
        <img
          src="https://kairaablockchainacademy.com/static/media/003-online-course.2c4994920a83e45ba234.png"
          alt="kairaa"
          className="h-24 w-24"
        />
      </div>

      <div className="text-left mx-2">
        <h1 className="text-2xl">
          Learn in-demand tech skills from industry experts
        </h1>
        <hr className="border-t border-gray-300 my-2" />
        <p>
          We provide comprehensive online courses on popular programming
          languages such as Python, JavaScript, Java, C++, etc.
        </p>
        <Link to="/courses/Other_Courses">
          <button className="text-gray-950 font-semibold underline decoration-sky-400 underline-offset-3 hover:decoration-2 hover:cursor-pointer">
            Learn More
          </button>
        </Link>
      </div>
    </div>

    {/* CARD 4 */}
    <div className="border-2 border-blue-500 rounded-2xl p-4">
      <div className="flex justify-center md:justify-start mx-2 py-2">
        <img
          src="https://kairaablockchainacademy.com/static/media/technology.582ef84576b7cff40fcd.png"
          alt="kairaa"
          className="h-24 w-24"
        />
      </div>

      <div className="text-left mx-2">
        <h1 className="text-2xl">Blockchain Developer Bootcamp</h1>
        <hr className="border-t border-gray-300 my-2" />
        <p>
          This intensive training program equips participants with skills and
          knowledge needed to become blockchain developer.
        </p>
        <Link to="/Bootcamp">
          <button className="text-gray-950 font-semibold underline decoration-sky-400 underline-offset-3 hover:decoration-2 hover:cursor-pointer">
            Learn More
          </button>
        </Link>
      </div>
    </div>

  </div>
</div>

    </>
  );
}
