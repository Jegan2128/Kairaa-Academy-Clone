import React from "react";
import BranchesWithWaves from "../pages/Courses/BranchesWithWaves";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function Aboutus() {

useEffect(() => {
    const styleId = "banner-rotation-style";
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = `
      @keyframes banner-rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      /* Apply only to the banner image */
      .banner-rot {
        transform-origin: 50% 50%;
        will-change: transform;
        animation-name: banner-rotate;
        animation-duration: 6s;         /* change to speed up/slow down */
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        /* optional: make rotation smoother on low-power devices */
        backface-visibility: hidden;
      }
      /* pause rotation on hover 
      .banner-rot:hover {
        animation-play-state: paused;
      }*/
      /* optionally make it less obtrusive on small screens */
      @media (max-width: 640px) {
        .banner-rot { animation-duration: 9s; } 
      }
    `;
    document.head.appendChild(style);

    // cleanup if component unmounts
    return () => {
      const el = document.getElementById(styleId);
      if (el) el.remove();
    };
  }, []);

  return (
    <>
      {/* About Us Page */}
      <div id="Aboutus" className="container mx-auto grid md:grid-cols-2 bg-gray-100 py-4">
        <div className="mx-10 w-fit">
          <img
            src="https://kairaablockchainacademy.com/static/media/blockchainbanner.6cb89936dd9002a11b62.png"
            alt="Banner"
          />
        </div>
        <div className="text-center">
          <h1 className="my-6 text-left text-3xl leading-10 font-bold text-[#15255f]">
            Kairaa Blockchain Academy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d839d] to-[#ba6aec]">Your Gateway to Blockchain Mastery</span>
          </h1>
          <p className="text-left text-lg leading-8 font-medium">
            Kairaa Blockchain is an Online Learning and Development Academy based in Coimbatore, Tamilnadu, founded in 2023. The company, led by a team of professionals, aims to empower college graduates and corporate employees with essential Technical, Communication, and Leadership skills to enhance employability and readiness for the industry. With a focus on practical, hands-on learning and mentorship from experienced professionals, we strive to not just educate, but to inspire and empower the leaders of tomorrow.
          </p>
          <p className="my-4 text-left text-lg font-medium">
            We guarantee to unlock the full potential of your skills, paving a path towards success.
          </p>
          <button className="rounded-lg border-2 bg-gradient-to-r from-[#4fd8f7] to-[#ba6aec] p-4 my-2 text-center text-xl font-bold text-white animate-hanging">
            Explore Courses
          </button>
        </div>
      </div>

      {/* Our Vision */}
      <div className="container mx-auto grid md:grid-cols-2 py-4">
        <div className="mx-10 px-8 text-center">
          <h1 className="my-6 text-left text-3xl leading-10 font-bold text-[#15255f]">OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d839d] to-[#ba6aec]">VISION</span></h1>
          <p className="text-left text-lg leading-8 font-medium">
            To be a leading force in shaping a blockchain-powered world through education and innovation. By fostering a deep understanding of blockchain technology and driving groundbreaking advancements, we aim to empower individuals and organizations to harness its full potential for transformative impact.
          </p>
        </div>
        <div className="mx-10 p-8">
          <img
            src="https://kairaablockchainacademy.com/static/media/vision2.091e21f550ee6847edab.png"
            alt="Banner"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Our Mission */}
      <div className="container mx-auto grid md:grid-cols-2 py-4">
        <div className="mx-10 p-8">
          <img
            src="https://kairaablockchainacademy.com/static/media/mission3.d0be00ad5e3b17495bf7.jpg"
            alt="Banner"
            className="rounded-lg"
          />
        </div>
        <div className="mx-10 px-8 text-center">
          <h1 className="my-6 text-left text-3xl leading-10 font-bold text-[#15255f]">OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d839d] to-[#ba6aec]"> MISSION</span></h1>
          <p className="text-left text-lg leading-8 font-medium">
            To bridge the knowledge gap in blockchain technology by offering high-quality, industry-relevant education to a global audience. Through innovative learning experiences and expert-led courses, we aim to equip individuals with the skills and insights needed to excel in the evolving blockchain landscape.
          </p>
        </div>
      </div>

      {/* Skill Page */}
      <div className="container mx-auto bg-gray-100 px-24 text-center">
        <div className="p-8">
          <h1 className="my-10 text-4xl font-bold text-[#15255f]">Learn in-demand <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d839d] to-[#ba6aec]">tech skills </span></h1>
          <p className="my-5 text-xl leading-10">
            At Kairaa Blockchain Academy, we believe in the power of technology and the importance of making it accessible to everyone. We are proud to offer a range of courses on programming languages, all taught in Tamil.
          </p>
          <p className="my-5 text-xl leading-10">
            Our mission is to break down language barriers in tech education and empower our students to gain the skills they need to succeed in the rapidly evolving tech industry. We understand that learning in one’s native language can make complex concepts more digestible and enjoyable.
          </p>
          <p className="my-5 text-xl leading-10">
            Our curriculum includes courses on popular programming languages such as Python, JavaScript, Java, and C++, among others. Each course is designed with a practical approach, allowing students to learn by doing.
          </p>
          <p className="my-5 text-xl leading-10">
            Whether you are a beginner looking to start your coding journey or an experienced programmer aiming to enhance your skills, our courses cater to all levels of expertise.
          </p>
          <p className="my-5 text-xl leading-10">
            Join us at Kairaa Blockchain Academy and take the first step towards a promising career in technology, all in the comfort of your mother tongue, Tamil. Let’s code தமிழில்!
          </p>
          <Link to="/Courses/Other_Courses"><button className="rounded-lg border-2 bg-gradient-to-r from-[#4fd8f7] to-[#ba6aec] p-4 my-2 text-center text-xl font-bold text-white">
            Explore Courses
          </button></Link>
        </div>
      </div>

      {/* Academy Part */}
      <div className="container grid md:grid-cols-2 items-center justify-between py-4">
      <div className="mx-10 w-fit p-20">
        <img
          // only change: added className "banner-rot" to enable rotation
          className="banner-rot"
          src="https://kairaablockchainacademy.com/static/media/backgroundimg.d3dd4c4b586e9b87b20e.png"
          alt="Banner"
        />
      </div>
      <div className="pr-24 text-center">
        <h1 className="my-6 text-center text-3xl leading-10 font-sans font-bold text-[#15255f]">
          What sets <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d839d] to-[#ba6aec]"> Kairaa Blockchain Academy apart?</span>
        </h1>

        {[
          {
            title: "Language Inclusivity :",
            text: "We offer courses in Tamil, breaking down language barriers and making tech education more accessible to a wider audience.",
          },
          {
            title: "Practical Learning Approach :",
            text: "Our curriculum is designed with a practical approach, allowing students to learn by doing and gain hands-on experience.",
          },
          {
            title: "Wide Range of Courses :",
            text: "We offer a variety of courses on popular programming languages such as Python, JavaScript, Java, and C++, catering to all levels of expertise.",
          },
          {
            title: "Experienced Instructors :",
            text: "Our instructors are industry professionals with years of experience, providing students with insights into real-world applications of their learning.",
          },
          {
            title: "Community Support :",
            text: "We foster a supportive and collaborative learning environment, encouraging students to learn from each other and grow together.",
          },
        ].map((item, i) => (
          <div key={i} className="flex gap-2">
            <img
              src="https://th.bing.com/th/id/OIP.OtDe74psShM3Bup1mjQi9wAAAA?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Star"
              className="my-5 h-7 w-7"
            />
            <p className="my-4 text-center md:text-left text-lg font-medium">
              <span className="text-transparent bg-clip-text bg-gradient-to-r text-xl font-sans from-[#0d839d] to-[#ba6aec] font-bold">
                {item.title}
              </span>
              {item.text}
            </p>
          </div>
        ))}

      <Link to="/Courses/Blockchain_D" ><button className="rounded-lg border-2 bg-gradient-to-r from-[#4fd8f7] to-[#ba6aec] hover:animate-swing p-4 my-2 text-center text-xl font-bold text-white">
          Know More
        </button></Link>
      </div>
    </div>
      {/* Branches */}
      <BranchesWithWaves/>
     
    </>
  );
}
