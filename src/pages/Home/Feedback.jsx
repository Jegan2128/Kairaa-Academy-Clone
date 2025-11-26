import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feedback = () => {
  const sliderRef = useRef(null);
  const [expanded, setExpanded] = useState(Array(4).fill(false));

  const feedbacks = [
    {
      text: `I had a great experience with the Blockchain Fundamental courses at Kairaa Blockchain Academy. I joined their training program, and it helped me develop a solid understanding of core blockchain concepts. My trainer and the faculty made it easy for me to grasp the fundamentals of blockchain technology. Thank you, Kairaa Blockchain Academy and their management team!`,
    },
    {
      text: `I am here for the Blockchain Professional course. The trainer is experienced and actively working on projects, which helped me gain both practical and theoretical knowledge. The institute offers affordable course fees, and I recommend newcomers to join here. Thanks to my trainer and Kairaa Blockchain Academy!`,
    },
    {
      text: `I attended the Java Programming training Course at Kairaa Blockchain Academy. The classes were good, and the explanation of all concepts was precise and to the point. Both theoretical and practical aspects, as well as the use of relevant tools, were thoroughly explained. The faculty is knowledgeable. Overall, it provides a good environment for learning.`,
    },
    {
      text: `The C course at Kairaa Blockchain Academy was good. The classes were well-organized, and the explanation of all concepts was precise and to the point. Both theoretical and practical aspects, as well as the use of tools, were thoroughly explained. The faculty is knowledgeable. Overall, it provides a good environment for learning at Kairaa Blockchain Academy.`,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
  };

  const toggleText = (index) => {
    setExpanded((prev) =>
      prev.map((v, i) => (i === index ? !v : v))
    );
  };

  const shortenText = (text, length = 120) =>
    text.length > length ? text.substring(0, length) + "..." : text;

  return (
    <div className="container mx-auto justify-center items-center">
      <h1 className="text-4xl text-center m-4 font-bold text-gray-800">
        What learners say about us
      </h1>

      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {feedbacks.map((f, index) => (
            <div key={index} className="p-4">
              <div className="border-8 border-sky-400 m-4 py-6 px-4 rounded-xl shadow-md bg-white">
                <div className="flex flex-col">
                  <img
                    src="https://kairaablockchainacademy.com/static/media/reading.1c2139787a0dbd890099.png"
                    alt="review"
                    className="border h-24 w-24 m-4 rounded-lg bg-gradient-to-r from-[#00eaff] to-[#b10bf3]"
                  />

                  {/* Review text */}
                  <p
                    className="mx-4 text-lg text-gray-700 transition-all duration-500 ease-in-out"
                  >
                    {expanded[index]
                      ? f.text
                      : shortenText(f.text, 160)}
                  </p>

                  {/* Show More / Less */}
                  <button
                    onClick={() => toggleText(index)}
                    className="text-sky-500 hover:text-sky-700 font-semibold transition"
                  >
                    {expanded[index] ? "Show Less" : "Show More"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Arrows */}
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="absolute left-1 top-1/2 -translate-y-1/2 text-red-400 p-3 rounded-full hover:bg-sky-200 transition"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={() => sliderRef.current.slickNext()}
          className="absolute right-1 top-1/2 -translate-y-1/2 text-red-400 p-3 rounded-full hover:bg-sky-200 transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Feedback;
