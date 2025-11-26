import React from "react";

export default function Led_datasci() {
  return (
    <div className="container justify-between items-center p-8">
      <div className="flex flex-col-reverse">
        <div className="w-[60%] mx-6 px-4 space-y-4">
          <div className="space-y-4">
            <h1 className="font-bold font-sans text-4xl">Data Science</h1>
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
                  In-Demand Skills: Gain expertise in data science, one of the most sought-after skills in the job market. Career Opportunities: Unlock diverse career paths, including Data Scientist, Data Analyst, Machine Learning Engineer, and Business Intelligence Analyst. Hands-On Experience: Work on real-world projects and case studies to apply theoretical knowledge to practical scenarios. Certification: Earn a recognized certificate that enhances your resume and showcases your expertise. Comprehensive Curriculum: Learn everything from data analysis and visualization to machine learning and big data tools. Expert Guidance: Receive mentorship and insights from industry experts with years of experience. Flexible Learning Options: Choose from live or self-paced sessions to fit your schedule. Networking Opportunities: Connect with peers, mentors, and industry professionals to expand your professional network. Problem-Solving Skills: Develop analytical thinking and data-driven decision-making skills. Job Readiness: Be industry-ready with the knowledge, tools, and confidence to tackle real-world challenges.
                </li>
              </div>
            </ul>
          </div>

          <div className="my-4">
            <div className="my-10 space-y-4">
              <h2 className="font-bold text-2xl">What are the prerequisites for this course?</h2>
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
                    This course is designed to be beginner-friendly, but having the following foundational knowledge will help you grasp concepts more effectively: Basic Programming Knowledge (Preferred): Familiarity with programming concepts in languages like Python, R, or any other language is a plus. Mathematics and Statistics: Basic understanding of algebra, probability, and statistics will be helpful for data analysis and machine learning topics. Logical Thinking and Problem-Solving Skills: A keen interest in analyzing data and solving problems is essential. Familiarity with Excel (Optional): Basic knowledge of Excel for data manipulation and visualization is an added advantage. Eagerness to Learn: A willingness to learn new tools and techniques is crucial.
                  </li>
                </div>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold text-2xl">Course Overview</h2>
            <ul>
              <li>Data Science</li>
              <li>1 Lessons</li>
            </ul>
            <hr className="border-gray-300" />
          </div>

          <div>
            <div className="space-y-8 my-14">
              <h2 className="font-bold text-2xl">Course Details</h2>
              <p>Master Data Science with Real-World Projects</p>
              <p>
                Unlock the power of data with our comprehensive Data Science Course designed for beginners and professionals alike. Learn to analyze, visualize, and derive actionable insights from data using cutting-edge tools and techniques. This course offers hands-on learning with expert guidance, ensuring you're industry-ready.
              </p>
            </div>
          </div>
        </div>

        <div className="fixed w-[35%] right-10 top-25">
          <div className="mr-4 justify-between items-center">
            <div className="p-4">
              <img
                src="https://res.cloudinary.com/doelkoy5w/image/upload/v1736145124/courses/atzni6hzjs9f99wdhfdp.jpg"
                alt="Fundamentals image"
              />
            </div>

            <div className="flex gap-2 items-start p-4">
              <ul className="font-bold text-2xl">₹ 15000</ul>
              <ul>
                <span className="font-normal text-2xl line-through">₹ 30000</span>
              </ul>
              <ul>
                <span className="font-normal text-2xl">50% Off</span>
              </ul>
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