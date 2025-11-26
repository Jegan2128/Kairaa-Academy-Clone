import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      title: (
        <>
          Discover Blockchain Technology with{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0d839d] to-[#ba6aec]">Kairaa Blockchain Academy's</span> Online Course
        </>
      ),
      desc: "Kairaa Blockchain Academy is a leading online platform specializing in blockchain education",
      img: "https://kairaablockchainacademy.com/static/media/newblock.048c56ab400bfec52d3a.png",
    },
    {
      id: 2,
      title: (
        <>
          Enroll in <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0d839d] to-[#ba6aec]">Kairaa Blockchain Academy's</span> Internship Program and Advance Your Career
        </>
      ),
      desc: "Kairaa Blockchain Academy is a leading online platform specializing in blockchain education",
      img: "https://kairaablockchainacademy.com/static/media/layer.0ad95d091e0f0c2fc5a8.png",
    },
    {
      id: 3,
      title: (
        <>
          Learn in-demand tech skills and tap into the{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0d839d] to-[#ba6aec]">power of the latest technologies.</span>
        </>
      ),
      desc: "Kairaa Blockchain Academy is a leading online platform specializing in blockchain education",
      img: "https://kairaablockchainacademy.com/static/media/third.cc5be4aac05850d59f60.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // ✅ Auto slide
    autoplaySpeed: 3000, // 3 seconds delay
    arrows: false, // ❌ no arrows
    pauseOnHover: true,
  };

  return (
    <div className="bg-[#f7f4fd] py-2 ">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div className="flex justify-center items-center w-full mx-auto px-6">
              <div className="w-1/2 text-center px-4">
                <h1 className="text-5xl text-[#1c167a] font-bold leading-snug">
                  {slide.title}
                </h1>
                <h3 className="text-[#1c167a] text-2xl font-medium my-4 leading-10">
                  {slide.desc}
                </h3>
                <Link to="/courses/self-paced">
  <button className="my-2 p-4 rounded-lg font-bold text-xl transition-transform duration-300 hover:scale-105 hover:animate-[pulse-scale_1s_ease-in-out_infinite] text-white bg-gradient-to-r from-cyan-500 to-[#CB77F7] hover:cursor-pointer hover:poiter">
    Get Started
  </button>
</Link>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img src={slide.img} alt="banner" className=" p-6 max-h-[400px]" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    
  );
};

export default HeroSlider;