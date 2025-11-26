import { Link } from "react-router-dom";

export default function Internship(){
    return(

<>
  <div className="animate-fadeInUp container mx-auto mt-2 max-w-screen-2xl px-10 py-10">
    <div className="rounded-xl rounded-br-[40px] bg-[#F7F4FD]">
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
        <div className="p-10 md:w-3/5">
          <h2 className="font-headingFont xs:text-3xl mb-5 font-bold text-black sm:text-4xl md:text-5xl">
            Internship Program
          </h2>
          <div className="xs:py-1 md:py-3">
            
             <Link to="/pages/Courses/Course_Registration"> <button className="animate-shake rounded-2xl bg-gradient-to-r from-cyan-500 to-[#CB77F7] p-3 text-lg text-black shadow-2xl shadow-black hover:bg-blue-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="xs:p-10 md:w-1/4 md:p-1">
          <img
            className="rounded-2xl"
            src="https://kairaablockchainacademy.com/static/media/blockchainview.e8edc27269c5e2d5e5d9.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>

  <div className="container mx-auto mt-2 max-w-screen-2xl px-10 py-10">
    <div className="grid md:grid-cols-2">
      <div className="mx-2">
        <h1 className="font-bold font-headingFont text-2xl mb-2">About The Program</h1>
        <p className="leading-8 text-xl">
          Kairaa Blockchain Academy is inviting applications for the Blockchain Development and Internship Program.This Internship Program and It's Availability Both Online and Offline Mode.
        </p>
        <h1 className="font-headingFont text-2xl font-bold pt-2">Details to know</h1>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640 " className="h-10">
            {/*<!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->*/}
            <path d="M535.6 85.7C513.7 63.8 478.3 63.8 456.4 85.7L432 110.1L529.9 208L554.3 183.6C576.2 161.7 576.2 126.3 554.3 104.4L535.6 85.7zM236.4 305.7C230.3 311.8 225.6 319.3 222.9 327.6L193.3 416.4C190.4 425 192.7 434.5 199.1 441C205.5 447.5 215 449.7 223.7 446.8L312.5 417.2C320.7 414.5 328.2 409.8 334.4 403.7L496 241.9L398.1 144L236.4 305.7zM160 128C107 128 64 171 64 224L64 480C64 533 107 576 160 576L416 576C469 576 512 533 512 480L512 384C512 366.3 497.7 352 480 352C462.3 352 448 366.3 448 384L448 480C448 497.7 433.7 512 416 512L160 512C142.3 512 128 497.7 128 480L128 224C128 206.3 142.3 192 160 192L256 192C273.7 192 288 177.7 288 160C288 142.3 273.7 128 256 128L160 128z" />
          </svg>
        </div>

        <div className="flex flex-row gap-3">
          <div>
            <h1 className="text-xl font-medium">Shareable certificate</h1>
            <p>Add to your LinkedIn profile</p>
          </div>
          <div>
            <h1 className="text-xl font-medium">Assessments</h1>
            <p>20 quizzes</p>
          </div>
        </div>
      </div>

      <div className="mx-2">
        <h1 className="font-headingFont font-bold text-2xl pt-2">Internship Online&Offline</h1>
        <p className="leading-8 text-xl pt-2">
          Blockchain technology can enhance the educational experience by providing secure, efficient, and accessible learning opportunities, while offering verifiable credentials and streamlined processes.
        </p>
        <h2 className="font-headingFont font-medium text-xl pt-2">✿ Beginner level</h2>
        <h2 className="font-headingFont font-medium text-xl pt-2">✿ Recommended experience</h2>
        <h2 className="font-headingFont font-medium text-xl pt-2">✿ Duration: 1 to 3 months.</h2>
      </div>

      <hr className="border-2 border-gray-100" />
    </div>
  </div>

  <div className="m-6 md:flex">
    <div className="m-4 space-y-5">
      <h1 className="text-2xl font-bold">Build your subject-matter expertise</h1>
      <p className="text-xl leading-relaxed">
        This course is part of the Blockchain Specialization When you enroll in this course, you'll also be enrolled in this Specialization.
      </p>

      <h2 className="text-xl leading-relaxed font-semibold">
        Learn new concepts from industry experts
        <br />
        Gain a foundational understanding of a subject or tool
        <br />
        Develop job-relevant skills with hands-on projects
        <br />
        Earn a shareable career certificate
      </h2>
    </div>

    <div className="my-8">
      <div className="mx-8">
        <img
          src="https://kairaablockchainacademy.com/static/media/skills.e1a40cd427e04e655b60.png"
          alt="Banner"
          className="rounded-3xl"
        />
      </div>
    </div>
  </div>

  <div className="m-6">
    <h1 className="text-2xl font-medium m-4">Skill's you'll gain</h1>
    <div className="m-4 flex space-x-5">
      <h4 className="rounded-lg border-2 p-2">Blockchain</h4>
      <h4 className="rounded-lg border-2 p-2">Ethereum</h4>
      <h4 className="rounded-lg border-2 p-2">Cryptography</h4>
      <h4 className="rounded-lg border-2 p-2">Bitcoin</h4>
    </div>
  </div>

  <div className="mx-16 my-12 md:flex items-center justify-between rounded-lg rounded-br-4xl border-2 border-sky-300">
    <div className="m-8">
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold">Earn a career certificate</h1>
        <p className="text-lg leading-relaxed">
          Add this credential to your LinkedIn profile, resume, or CV Share it on social media and in your performance review
        </p>
      </div>
    </div>

    <div>
      <div className="mx-8 p-8">
        <img
          src="https://kairaablockchainacademy.com/static/media/online-certification.3b08f4b912ff23f15a16.avif"
          alt="cv banner"
          className="w-fit"
        />
      </div>
    </div>
  </div>
</>
);
}
