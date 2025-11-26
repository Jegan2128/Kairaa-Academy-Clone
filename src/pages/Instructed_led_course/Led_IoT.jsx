import React from "react";

export default function Led_IoT() {
  return (
    <div className="container  justify-between items-center p-8">
      <div className="flex flex-col-reverse ">
        <div className="w-[60%] mx-6 px-4 space-y-4">
          <div className="space-y-4 ">
            <h1 className="font-bold font-sans text-4xl">IoT Fundamentals</h1>
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
                  By learning IoT, students gain hands-on experience with cutting-edge technologies.
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
                <li className="mx-8">
                  They develop interdisciplinary skills in programming, electronics, networking, and data analytics
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
                <li className="mx-8">IoT being a rapidly growing industry.</li>
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
                  <li className="mx-8">Foundational understanding of electronics and hardware components.</li>
                </div>
                <div className="relative">
                  <img
                    width="18"
                    height="18"
                    src="https://img.icons8.com/material-outlined/24/double-tick.png"
                    alt="double-tick"
                    className="absolute"
                  />
                  <li className="mx-8">Basic programming skills, particularly in languages like Python, C, or Java</li>
                </div>
              </ul>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="font-bold text-2xl ">Course Overview</h2>
            <ul>
              <li>Internet of Things (IoT) Fundamentals</li>
              <li>7 Lessons</li>
            </ul>
            <hr className="border-gray-300" />
          </div>
          <div className="">
            <div className=" space-y-8 my-14">
              <h2 className="font-bold text-2xl ">Course Details</h2>
              <p>
                IoT refers to a network of interconnected physical devices, sensors, and objects that collect and exchange data through the internet. These devices can range from simple household appliances to complex industrial machinery. The data collected by IoT devices provides valuable information about the environment, processes, and user behavior.
              </p>
            </div>
          </div>
        </div>
        <div className="fixed w-[35%] right-10 top-25 ">
          <div className="mr-4 justify-between items-center">
            <div className="p-4">
              <img
                src="https://res.cloudinary.com/doelkoy5w/image/upload/v1736167029/courses/i70tuanfdk0q1k5jdjph.jpg"
                alt="Fundamentals image"
                className=""
              />
            </div>
            <div className="flex gap-2 items-start p-4">
              <ul className="font-bold text-2xl">₹ 15000 </ul>
              <ul className=""><span className="font-normal text-2xl line-through">₹ 37000 </span> </ul>
              <ul><span className="font-normal text-2xl">59% Off</span></ul>
            </div>
            <div className="mx-4 ">
              <button className="rounded-2xl font-bold hover:cursor-pointer text-white bg-[#dc143b] p-3">Buy Now 15000 ₹</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
