import { Link } from "react-router-dom";


export default function Certified() {
  return (
    <div className="animate-fadeInUp">
      {/* Certified Page */}
      <div className="relative container mx-6 items-center justify-between ">
        <div className="m-4 md:flex items-center justify-between rounded-lg rounded-br-4xl bg-sky-50 px-8">
          <div>
            <h1 className="text-5xl font-semibold">Certification of Blockchain Development.</h1>
          </div>
          <div className="my-2">
            <img
              src="https://kairaablockchainacademy.com/static/media/sideimageforcertificate.d448c65b7380f19525ed.png"
              alt="Banner"
              className="h-[200px] w-[270px] rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* ABOUT THE PROGRAM */}
      <div className="m-10 space-y-4">
        <h1 className="text-xl font-semibold">ABOUT THE PROGRAM</h1>
        <p className="font-sans leading-relaxed text-lg">
          Certification of Blockchain Development Program offers the blockchain developers an exciting opportunity to work with the Research & Development Engineers and Scientists of Kairaa Blockchain Academy on its live Blockchain projects. The program will help the Blockchain Developers to apply their theoretical and practical knowledge and gain real project exposure to all facets of Blockchain development activities.
        </p>
      </div>

      {/* WHO IS IT FOR ? */}
      <div>
        <div className="md:flex justify-between items-center">
          <div className="mx-10 space-y-4">
            <h1 className="font-semibold text-2xl">WHO IS IT FOR ?</h1>
            <p className="leading-relaxed text-lg">
              Certification of Blockchain Devlopment Program is open to candidates who’ve completed the Blockchain Development Online Courses(instructor-led/Self-paced) from Kairaa Blockchain Academy. The certification of Blockchain program will offer a platform for certified blockchain developers to apply their gained subject knowledge in making important decisions concerning the blockchain project they are working on.
            </p>
            <h1 className="font-semibold text-xl">WHAT YOU WILL LEARN...</h1>
            <ul className="list-disc marker:text-black leading-relaxed text-lg">
              <li>Conceptual view to frame high-level blockchain architecture.</li>
              <li>Knowledge of designing blockchain-based solutions with best practices.</li>
              <li>Knowledge of security considerations and risks for blockchain integration.</li>
              <li>Understanding of integrating external services with blockchain architecture.</li>
            </ul>
          </div>
          <div className="w-full mx-4">
            <img
              src="https://kairaablockchainacademy.com/static/media/blueblueblock.1f479d9c6a1d79a53857.png"
              alt=""
              className="w-[270px] h-[200px]"
            />
          </div>
        </div>

        <div className="md:flex justify-between items-center mt-8">
          <div className="w-full mx-4">
            <img
              src="https://kairaablockchainacademy.com/static/media/Success-factors.eed22f82c1ca121482d3.png"
              alt="Success factors"
            />
          </div>
          <div className="mx-10 space-y-4">
            <h1 className="font-semibold text-xl">DURATION, MODE OF DELIVERY</h1>
            <p className="leading-relaxed text-lg">
              After successfully finishing the Blockchain Development online courses, You will be awarded a certificate of completion. This certificate serves as tangible proof of Your dedication, commitment, and newly acquired skills in the specific subject matter covered by the course. It signifies the culmination of their efforts in engaging with course materials, completing assignments, and mastering the concepts presented. The candidates will be assigned to a mentor throughout the duration.
            </p>
          </div>
        </div>

        <div className="container mx-6 items-center justify-between mt-8">
          <div className="m-4 md:flex items-center justify-between rounded-lg rounded-br-4xl bg-sky-50 p-8">
            <div className="leading-relaxed">
              <h1 className="text-3xl font-semibold my-4">CERTIFICATION</h1>
              <p className="text-lg">
                Upon completing the live project training, The students are to submit an internship report to the mentor. The Blockchain Courses of certificate will be awarded based on the candidate’s performance during the internship.
              </p>
              <Link to="/pages/Courses/Course_Registration"><button className="text-white font-semibold bg-gradient-to-r from-sky-500 to-pink-500 p-2 rounded-2xl m-4">Get Started</button></Link>
            </div>
            <div className="my-2">
              <img
                src="https://kairaablockchainacademy.com/static/media/online-certification.3b08f4b912ff23f15a16.avif"
                alt="Banner"
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
