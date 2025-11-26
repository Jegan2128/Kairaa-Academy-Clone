import React from "react";

export default function Led_php() {
  return (
    <div className="container justify-between items-center p-8">
      <div className="flex flex-col-reverse">
        <div className="w-[60%] mx-6 px-4 space-y-4">

          <div className="space-y-4">
            <h1 className="font-bold font-sans text-4xl">PHP</h1>
            <h2 className="font-bold text-2xl">What you will learn from this course?</h2>

            <ul className="font-sans space-y-3">
              <div className="relative">
                <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                <li className="mx-8">Beginner-friendly with hands-on projects</li>
              </div>

              <div className="relative">
                <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                <li className="mx-8">Industry-relevant skills for high-demand roles.</li>
              </div>

              <div className="relative">
                <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                <li className="mx-8">Expert instructors and flexible learning options.</li>
              </div>
            </ul>
          </div>

          <div className="my-4">
            <div className="my-10 space-y-4">
              <h2 className="font-bold text-2xl">What are the prerequisites for this course?</h2>
              <ul className="space-y-3">

                <div className="relative">
                  <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                  <li className="mx-8">Basic knowledge of HTML and CSS (preferred).</li>
                </div>

                <div className="relative">
                  <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                  <li className="mx-8">Familiarity with programming fundamentals (optional).</li>
                </div>

                <div className="relative">
                  <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                  <li className="mx-8">Willingness to learn — no prior PHP experience required!</li>
                </div>

              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold text-2xl">Course Overview</h2>
            <ul>
              <li className="font-sans text-2xl">PHP</li>
              <li>1 Lessons</li>
              <hr className="border-gray-300 mt-8" />

              <li className="font-sans text-2xl">Introduction to PHP</li>
              <li>1 Lessons</li>
              <hr className="border-gray-300 mt-8" />

              <li className="font-sans text-2xl">Basics of PHP</li>
              <li>9 Lessons</li>
            </ul>
            <hr className="border-gray-300" />
          </div>

          <div>
            <div className="space-y-8 my-14">
              <h2 className="font-bold text-2xl">Course Details</h2>
              <p>
                Master the art of dynamic web development with our PHP Course! Learn to build robust, database-driven websites and applications using PHP, one of the most popular server-side scripting languages. This course is perfect for beginners and professionals looking to enhance their web development skills.
              </p>
            </div>
          </div>
        </div>

        <div className="fixed w-[35%] right-10 top-25">
          <div className="mr-4 justify-between items-center">
            <div className="p-4">
              <img src="https://res.cloudinary.com/doelkoy5w/image/upload/v1736145946/courses/p5u3bhpkxzpbie95coqk.jpg" alt="Fundamentals image" />
            </div>

            <div className="flex gap-2 items-start p-4">
              <ul className="font-bold text-2xl">₹ 15000</ul>
              <ul><span className="font-normal text-2xl line-through">₹ 28000</span></ul>
              <ul><span className="font-normal text-2xl">46% Off</span></ul>
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