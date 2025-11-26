export default function Led_Funtamental(){
    return(
        <>
  <div className="container  justify-between items-center p-8 -z-10">
    <div className="flex flex-col-reverse ">
      <div className="w-[60%] mx-6 px-4 space-y-4">
        <div className="space-y-4 ">
          <h1 className="font-bold font-sans text-4xl">Fundamentals of Blockchain</h1>
          <h2 className="font-bold text-2xl">What you will learn from this course?</h2>
          <ul className="font-sans space-y-3">
            <div className="relative">
              <img
                width="18"
                height="18"
                src="https://img.icons8.com/material-outlined/24/double-tick.png"
                alt="double-tick"
                className="absolute"
              />
              <li className="mx-8">
                Understand the fundamental concepts and principles of Blockchain Technology.
              </li>
            </div>
            <div className="relative">
              <img
                width="18"
                height="18"
                src="https://img.icons8.com/material-outlined/24/double-tick.png"
                alt="double-tick"
                className="absolute"
              />
              <li className="mx-8">Analyze and make informed decisions about Blockchain Technology.</li>
            </div>
            <div className="relative">
              <img
                width="18"
                height="18"
                src="https://img.icons8.com/material-outlined/24/double-tick.png"
                alt="double-tick"
                className="absolute"
              />
              <li className="mx-8">Hands on industrial experience</li>
            </div>
          </ul>
        </div>

        <div className=" my-4">
          <div className="my-10 space-y-4">
            <h2 className="font-bold text-2xl ">What are the prerequisites for this course?</h2>
            <ul className="space-y-3">
              <div className="relative">
                <img
                  width="18"
                  height="18"
                  src="https://img.icons8.com/material-outlined/24/double-tick.png"
                  alt="double-tick"
                  className="absolute"
                />
                <li className="mx-8">
                  There are no requirements needed to enroll beyond having a business interest in learning how
                  blockchain and Bitcoin work.
                </li>
              </div>
              <div className="relative">
                <img
                  width="18"
                  height="18"
                  src="https://img.icons8.com/material-outlined/24/double-tick.png"
                  alt="double-tick"
                  className="absolute"
                />
                <li className="mx-8">Basic programming knowledge.</li>
              </div>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="font-bold text-2xl ">Course Overview</h2>
          <ul>
            <li>Introduction</li>
            <li>2 Lessons</li>
          </ul>
          <hr className="border-gray-300" />
        </div>

        <div className="">
          <div className=" space-y-8 my-14">
            <h2 className="font-bold text-2xl ">Course Details</h2>
            <p>
              Our Blockchain Course Syllabus covers the basics and applications of blockchain technology. It
              includes blockchain architecture, components, and principles. Students learn about various blockchain
              types like public, private, and consortium blockchains.
            </p>
          </div>
        </div>
      </div>

      <div className="fixed w-[35%] right-10 top-25 ">
        <div className="mr-4 justify-between items-center">
          <div className="p-4">
            <img
              src="https://res.cloudinary.com/doelkoy5w/image/upload/v1721386264/courses/hx6ylchqmvcranzjv4sa.jpg"
              alt="Fundamentals image"
            />
          </div>

          <div className="flex gap-2 items-start p-4">
            <ul className="font-bold text-2xl">₹ 15000 </ul>
            <ul className="">
              <span className="font-normal text-2xl line-through">₹ 35000 </span>
            </ul>
            <ul>
              <span className="font-normal text-2xl">57% Off</span>
            </ul>
          </div>

          <div className="mx-4 ">
            <button className="rounded-2xl font-bold hover:cursor-pointer text-white bg-[#dc143b] p-3">
              Buy Now 15000 ₹
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    );
}