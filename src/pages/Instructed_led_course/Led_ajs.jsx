import React from "react";

export default function Led_ajs() {
  return (
    <div className="container justify-between items-center p-8">
      <div className="flex flex-col-reverse">
        <div className="w-[60%] mx-6 px-4 space-y-4">

          <div className="space-y-4">
            <h1 className="font-bold font-sans text-4xl">Angular Javasript</h1>
            <h2 className="font-bold text-2xl">What you will learn from this course?</h2>

            <ul className="font-sans space-y-3">
              <div className="relative">
                <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                <li className="mx-8">Learn to develop modern, responsive web applications.</li>
              </div>

              <div className="relative">
                <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                <li className="mx-8">Gain expertise in the Angular framework for scalable and maintainable apps.</li>
              </div>

              <div className="relative">
                <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                <li className="mx-8">Understand advanced concepts like RxJS and state management.</li>
              </div>

              <div className="relative">
                <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                <li className="mx-8">Enhance career prospects in front-end development.</li>
              </div>
            </ul>
          </div>

          <div className="my-4">
            <div className="my-10 space-y-4">
              <h2 className="font-bold text-2xl">What are the prerequisites for this course?</h2>
              <ul className="space-y-3">
                <div className="relative">
                  <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                  <li className="mx-8">Basic knowledge of JavaScript, HTML, and CSS.</li>
                </div>

                <div className="relative">
                  <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/double-tick.png" alt="double-tick" className="absolute" />
                  <li className="mx-8">Familiarity with TypeScript is beneficial but not mandatory.</li>
                </div>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold text-2xl">Course Overview</h2>
            <ul>
              <li className="font-sans text-2xl">Angular JS</li>
              <li>7 Lessons</li>
            </ul>
            <hr className="border-gray-300" />
          </div>

          <div>
            <div className="space-y-8 my-14">
              <h2 className="font-bold text-2xl">Course Details</h2>
              <p>
                This Angular course dives into the popular framework built on TypeScript, enabling developers to create dynamic and scalable single-page web applications. The curriculum covers Angular components, modules, routing, services, and dependency injection, along with hands-on projects to build real-world applications.
              </p>
            </div>
          </div>
        </div>

        <div className="fixed w-[35%] right-10 top-25">
          <div className="mr-4 justify-between items-center">
            <div className="p-4">
              <img src="https://res.cloudinary.com/doelkoy5w/image/upload/v1736247948/courses/eiuziqglboefjxw89t0y.jpg" alt="Fundamentals image" />
            </div>

            <div className="flex gap-2 items-start p-4">
              <ul className="font-bold text-2xl">₹ 15000</ul>
              <ul><span className="font-normal text-2xl line-through">₹ 30000</span></ul>
              <ul><span className="font-normal text-2xl">50% Off</span></ul>
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