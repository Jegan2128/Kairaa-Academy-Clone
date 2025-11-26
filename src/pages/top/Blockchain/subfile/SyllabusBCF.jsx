import React, { useState, useRef, useEffect } from "react";

export default function SyllabusBCF() {
  const [openIndex, setOpenIndex] = useState(null);

  // kept your original lesson titles and layout; added short topic lists so panels show content
  const lessons = [
    {
      title: "Lesson 1: Introduction to Blockchain Development",
      topics: [
        "What is blockchain?",
        "Types of blockchains (public/private)",
        "Use-cases and industry landscape"
      ]
    },
    {
      title: "Lesson 2: Ethereum and Smart Contracts",
      topics: [
        "Ethereum basics and accounts",
        "Solidity overview",
        "Writing and deploying a simple contract"
      ]
    },
    {
      title: "Lesson 3: Decentralized Application (DApp) Architecture",
      topics: [
        "Frontend–smart contract interactions",
        "Wallets and providers (MetaMask)",
        "Off-chain vs on-chain considerations"
      ]
    },
    {
      title: "Lesson 4: Building a Simple DApp",
      topics: [
        "Project layout and toolchain (Hardhat/Truffle)",
        "Connecting UI to contract",
        "Testing and local blockchain" 
      ]
    },
    {
      title: "Lesson 5: Advanced Topics",
      topics: [
        "Gas optimization techniques",
        "Security best practices (reentrancy, checks-effects-interactions)",
        "Upgradable contracts overview"
      ]
    },
    {
      title: "Lesson 6: Ethereum Development Ecosystem",
      topics: [
        "Popular libraries (ethers.js, web3.js)",
        "Test networks and explorers (Etherscan)",
        "Tooling: linters, formatters, dev plugins"
      ]
    },
    {
      title: "Lesson 7: Final DApp Project and Presentations",
      topics: [
        "Project scoping and milestones",
        "Submission and demo tips",
        "Peer review and evaluation criteria"
      ]
    },
    {
      title: "Lesson 8: Conclusion and Next Steps",
      topics: [
        "Career paths in blockchain",
        "Further learning resources",
        "Open-source contribution pointers"
      ]
    },
    {
      title: "Lesson 9: Final Test and Evaluation",
      topics: [
        "Exam format and weightage",
        "Sample questions and revision checklist",
        "How projects factor into grading"
      ]
    }
  ];

  // refs for each collapsible content to measure height for slide-down
  const contentRefs = useRef([]);
  const setRef = (el, i) => {
    contentRefs.current[i] = el;
  };

  const getPanelStyle = (i) => {
    if (openIndex === i && contentRefs.current[i]) {
      return {
        maxHeight: contentRefs.current[i].scrollHeight + "px",
        opacity: 1,
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem"
      };
    }
    return { maxHeight: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 };
  };

  useEffect(() => {
    const onResize = () => setOpenIndex((prev) => prev);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="container mx-auto border-2 border-gray-300 bg-gradient-to-t from-blue-400 to-blue-100  md:mt-8 md:mr-28 md:ml-2">
      <div className="border-2 border-gray-200 p-2">
        <h1 className="xs:text-xl font-headingFont py-2 font-bold md:text-3xl">Syllabus</h1>
        <p className="font-medium md:text-lg">15 lessons • 14 projects • 8 quizzes</p>
      </div>

      {lessons.map((lesson, idx) => (
        <div className="md:p-5" key={idx}>
          <div className="flex justify-between">
            <h1 className="xs:font-medium py-2 md:text-xl md:font-bold">{lesson.title}</h1>

            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="mx-20 font-bold md:text-xl select-none"
              aria-expanded={openIndex === idx}
              aria-controls={`panel-${idx}`}
            >
              {openIndex === idx ? "⊖" : "⊕"}
            </button>
          </div>

          <div
            id={`panel-${idx}`}
            ref={(el) => setRef(el, idx)}
            style={getPanelStyle(idx)}
            className="transition-[max-height,opacity,padding] duration-300 ease-in-out overflow-hidden"
          >
            <ul className="pl-10 list-disc font-medium text-sm md:text-lg text-gray-800 mt-2">
              {lesson.topics.map((t, i) => (
                <li key={i} className="py-1">{t}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

   </div>
  );
}
