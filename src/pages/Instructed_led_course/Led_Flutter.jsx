import React from "react";

export default function Led_Flutter() {
  return (
    <div className="container justify-between items-center p-8">
      <div className="flex flex-col-reverse">
        <div className="w-[60%] mx-6 px-4 space-y-4">

          <div className="space-y-4">
            <h1 className="font-bold font-sans text-4xl">Flutter</h1>
            <h2 className="font-bold text-2xl">What you will learn from this course?</h2>

            <ul className="font-sans space-y-3">
              <div className="relative">
                <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                <li className="mx-8">Develop cross-platform mobile apps with a single codebase.</li>
              </div>

              <div className="relative">
                <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                <li className="mx-8">Learn to create highly responsive and attractive UI designs.</li>
              </div>

              <div className="relative">
                <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                <li className="mx-8">Save development time with Flutter's hot-reload feature.</li>
              </div>

              <div className="relative">
                <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                <li className="mx-8">Enhance career opportunities in mobile app development.</li>
              </div>
            </ul>
          </div>

          <div className="my-4">
            <div className="my-10 space-y-4">
              <h2 className="font-bold text-2xl">What are the prerequisites for this course?</h2>
              <ul className="space-y-3">
                <div className="relative">
                  <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                  <li className="mx-8">Basic programming knowledge (e.g., Dart, Java, or Kotlin).</li>
                </div>

                <div className="relative">
                  <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                  <li className="mx-8">Familiarity with object-oriented programming concepts is beneficial.</li>
                </div>

                <div className="relative">
                  <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                  <li className="mx-8">Understanding of mobile app development basics is helpful.</li>
                </div>

                <div className="relative">
                  <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                  <li className="mx-8">Experience with IDEs like Android Studio or Visual Studio Code is an added advantage.</li>
                </div>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold text-2xl">Course Overview</h2>
            <ul>
              <li className="font-sans text-2xl">Flutter</li>
              <li>6 Lessons</li>
            </ul>
            <hr className="border-gray-300" />
          </div>

          <div>
            <div className="space-y-8 my-14">
              <h2 className="font-bold text-2xl">Course Details</h2>
              <p>
                This Flutter course focuses on building natively compiled, cross-platform mobile applications using a single codebase. It covers the fundamentals of Flutter widgets, state management, navigation, and integrating APIs, enabling students to create visually appealing and high-performance apps for iOS and Android.
              </p>
            </div>
          </div>
        </div>

        <div className="fixed w-[35%] right-10 top-25">
          <div className="mr-4 justify-between items-center">
            <div className="p-4">
              <img src="https://res.cloudinary.com/doelkoy5w/image/upload/v1736248774/courses/kjqikwtlqzcwxirvzkc3.jpg" alt="Fundamentals image" />
            </div>

            <div className="flex gap-2 items-start p-4">
              <ul className="font-bold text-2xl">₹ 15000</ul>
              <ul><span className="font-normal text-2xl line-through">₹ 38000</span></ul>
              <ul><span className="font-normal text-2xl">61% Off</span></ul>
            </div>

            <div className="mx-4">
              <button className="rounded-2xl font-bold hover:cursor-pointer text-white bg-[#dc143b] p-3">Buy Now 15000 ₹</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}