import React from "react";

export default function Led_C() {
  return (
    <div className="container justify-between items-center p-8">
      <div className="flex flex-col-reverse">
        <div className="w-[60%] mx-6 px-4 space-y-4">

          <div className="space-y-4">
            <h1 className="font-bold font-sans text-4xl">C#.NET</h1>
            <h2 className="font-bold text-2xl">What you will learn from this course?</h2>

            <ul className="font-sans space-y-3">
              <div className="relative">
                <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                <li className="mx-8">Gain working knowledge of C# programming</li>
              </div>

              <div className="relative">
                <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                <li className="mx-8">Learn about the important relationships between C# and the .NET Framework.</li>
              </div>

              <div className="relative">
                <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                <li className="mx-8">
                  Understand implicit typing, object initializers, anonymous types, extension methods, lambda expressions, LINQ, and other new features in C#.
                </li>
              </div>
            </ul>
          </div>

          <div className="my-4">
            <div className="my-10 space-y-4">
              <h2 className="font-bold text-2xl">What are the prerequisites for this course?</h2>
              <ul className="space-y-3">
                <div className="relative">
                  <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                  <li className="mx-8">
                    Basic programming knowledge (e.g., C, C++, or Java) and understanding of OOP concepts are helpful but not mandatory. All you need is logical thinking and a willingness to learn!
                  </li>
                </div>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold text-2xl">Course Overview</h2>
            <ul>
              <li className="font-sans text-2xl">C#.Net</li>
              <li>8 Lessons</li>
            </ul>
            <hr className="border-gray-300" />
          </div>

          <div>
            <div className="space-y-8 my-14">
              <h2 className="font-bold text-2xl">Course Details</h2>
              <p>
                This course is designed for beginners to quickly learn the C# language. The latest version of Visual Studio and .NET includes new features including implicit typing and extension methods.
              </p>
              <p>Lambda expressions and LINQ.</p>
            </div>
          </div>
        </div>

        <div className="fixed w-[35%] right-10 top-25">
          <div className="mr-4 justify-between items-center">
            <div className="p-4">
              <img src="https://res.cloudinary.com/doelkoy5w/image/upload/v1736165130/courses/ard8ge3wen1jlyngfcdo.jpg" alt="Fundamentals image" />
            </div>

            <div className="flex gap-2 items-start p-4">
              <ul className="font-bold text-2xl">₹ 15000</ul>
              <ul><span className="font-normal text-2xl line-through">₹ 30000</span></ul>
              <ul><span className="font-normal text-2xl">50% Off</span></ul>
            </div>

            <div className="mx-4">
              <button className="rounded-2xl font-bold hover:cursor-pointer text-white bg-[#dc143b] p-3">
                Buy Now 15000 ₹
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}