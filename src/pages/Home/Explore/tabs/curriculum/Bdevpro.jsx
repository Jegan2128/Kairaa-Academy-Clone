import React, { useState } from 'react';

export default function Bdevpro() {
  const [active, setActive] = useState('overview');

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex justify-around items-center">
        <div className="flex space-x-100 bg-transparent">
          <button
            className={`px-4 py-2 rounded-t-md font-semibold text-2xl focus:outline-none ${
              active === 'overview'
                ? 'text-blue-700 bg-white shadow'
                : 'text-gray-700 bg-gray-100'
            }`}
            onClick={() => setActive('overview')}
            role="tab"
            aria-selected={active === 'overview'}
            aria-controls="panel-overview"
            id="tab-overview"
          >
            Overview
          </button>

          <button
            className={`px-4 py-2 rounded-t-md font-semibold text-2xl focus:outline-none ${
              active === 'curriculum'
                ? 'text-blue-700 bg-white shadow'
                : 'text-gray-700 bg-gray-100'
            }`}
            onClick={() => setActive('curriculum')}
            role="tab"
            aria-selected={active === 'curriculum'}
            aria-controls="panel-curriculum"
            id="tab-curriculum"
          >
            Curriculum
          </button>
        </div>
      </div>

      {/* Panels container */}
      <div className="mt-4 container mx-auto px-4">
        {/* Overview panel */}
        <div
          id="panel-overview"
          role="tabpanel"
          aria-labelledby="tab-overview"
          hidden={active !== 'overview'}
        >
          <div className="flex flex-col md:flex-row mx-auto">
            <div className="md:w-3/4">
              <h2 className="text-xl md:text-2xl font-headingFont font-bold py-3 border-b-2 border-gray-300">Skill level: Beginner</h2>

              <h2 className="font-bold font-headingFont text-xl md:text-2xl py-3">About Blockchain Developer Professional</h2>

              <p className="py-3">The objective of this course is to provide novice candidates with a clear understanding of blockchain technology. By the end of the course, participants should be able to explain what blockchain is, how it works, and its potential applications. They will also gain insights into the impact of blockchain on various industries and its role in the future of technology.</p>

              <h2 className="text-2xl font-headingFont font-bold py-3">Who Should Enroll?</h2>

              <ul className="list-disc pl-6 leading-7">
                <li>Students Who have interest in Blockchain.</li>
                <li>If you are a software developer with an interest in blockchain technology and want to specialize in this field, a professional blockchain developer program can provide you with the necessary skills.</li>
                <li>Understanding blockchain can be beneficial for designing and managing distributed networks and systems.</li>
                <li>Financial Services Professionals.</li>
                <li>Entrepreneurs and Business Leaders.</li>
                <li>Academics and Researchers.</li>
              </ul>

              <h2 className="text-2xl font-headingFont font-bold py-4">Learning Outcomes</h2>

              <ul className="list-disc py-2 pl-6">
                <li>By enrolling in a blockchain developer professional program, individuals from various backgrounds can gain the knowledge and skills needed to excel in this transformative field.</li>
                <li>Skill Development: Gain hands-on experience with blockchain platforms and tools.</li>
                <li>Career Advancement: Open up new career opportunities in a fast-growing field.</li>
                <li>Networking: Connect with other professionals and experts in the industry.</li>
                <li>Innovation: Be at the forefront of technological innovation and application.</li>
              </ul>
            </div>

            <aside className="md:ml-6 rounded-lg h-auto md:mt-20 mt-5 p-3 w-full md:w-1/3">
              <div className="leading-7 rounded-xl bg-gradient-to-r from-blue-300 to-blue-50 p-4">
                <h2 className="text-xl text-center font-headingFont font-bold">Course Feature</h2>
                <p className="py-3 border-b-2 border-gray-100">📝Lessons - 17</p>
                <p className="py-3 border-b-2 border-gray-100">🎖 Quizzes - 8</p>
                <p className="py-3 border-b-2 border-gray-100">🕜 Duration - Lifetime</p>
                <p className="py-3 border-b-2 border-gray-100">⤴️ Skill Level - Beginner</p>
                <p className="py-3 border-b-2 border-gray-100">🏅 Certificate - Yes</p>
                <p className="py-3 border-b-2 border-gray-100">🗒 Assessments - Yes</p>
              </div>
            </aside>
          </div>
        </div>

        {/* Curriculum panel (empty for now) */}
        
        <div
          id="panel-curriculum"
          role="tabpanel"
          aria-labelledby="tab-curriculum"
          hidden={active !== 'curriculum'}
          className="min-h-[200px]"
        >
          {/* Place curriculum content here when available */}
          <div className="mx-auto container flex md:flex-row flex-col">
          <div className="md:w-3/4 gap-5 p-5 leading-10">
    <h2 className="md:text-2xl font-headingFont xs:text-xl font-bold mb-2">
      Getting Start With Blockchain Developer Professional.
    </h2>

    <p>
      This learning path introduces you to blockchain and development on the
      Ethereum platform. Discover what skills are necessary to learn to begin
      building your own blockchain networks at scale.
    </p>

    <h2 className="font-bold font-headingFont text-xl mb-2 py-2">
      In this learning path, you will:
    </h2>

    {/* Card Box */}
    <div
      className="my-3 p-4 border border-gray-300 rounded-md bg-white shadow-md transition-transform duration-300"
      style={{ transform: "scale(1)" }}
    >
      <ul className="p-4">
        <li>💫🌟 Learn the foundations of blockchain and how blockchain technology works.</li>
        <li>💫🌟 Gain an understanding of the tools to develop on the Ethereum blockchain.</li>
        <li>💫🌟 Create smart contracts and decentralized applications.</li>
        <li>💫🌟 Deploy to local and test Ethereum networks.</li>
      </ul>
    </div>
  </div>

  {/* Right Section */}
  <div className="md:w-1/4 p-3 mt-2">
    <div className="gap-1 leading-7 overflow-hidden">
      <h2 className="font-bold font-headingFont text-lg mb-2">
        Start Your Career now!
      </h2>

      <ul className="leading-10 border-2 border-gray-400 p-2 bg-blue-50">
        <li className="cursor-pointer hover:text-blue-600">
          ⚝𓇻 Introduction to Blockchain Technology
        </li>
        <li className="cursor-pointer hover:text-blue-600">
          ⚝𓇻 Cryptography and Security
        </li>
        <li className="cursor-pointer hover:text-blue-600">
          ⚝𓇻 Blockchain Platforms and Tools
        </li>
        <li className="cursor-pointer hover:text-blue-600">
          ⚝𓇻 Advanced Blockchain Concepts
        </li>
        <li className="cursor-pointer hover:text-blue-600">
          ⚝𓇻 Blockchain Governance
        </li>
        <li className="cursor-pointer hover:text-blue-600">
          ⚝𓇻 Summary
        </li>
      </ul>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}
