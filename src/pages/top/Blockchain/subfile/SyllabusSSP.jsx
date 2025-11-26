import React, { useState, useRef, useEffect } from "react";

export default function SyllabusSSP() {
  const [openIndex, setOpenIndex] = useState(null);

  const lessons = [
    {
      title: "Lesson 1: Solidity Fundamentals",
      topics: [
        "Solidity syntax and file structure",
        "State variables, functions and visibility",
        "Data types and events",
      ],
    },
    {
      title: "Lesson 2: Intermediate Solidity",
      topics: [
        "Mappings and structs",
        "Function modifiers and gas optimization",
        "Error handling and require/assert",
      ],
    },
    {
      title: "Lesson 3: Advanced Solidity",
      topics: [
        "Inheritance and interfaces",
        "Libraries and assembly",
        "Design patterns (pull vs push payments)",
      ],
    },
    {
      title: "Lesson 4: Solidity Security Best Practices",
      topics: [
        "Reentrancy, overflow/underflow issues",
        "Checks-effects-interactions pattern",
        "Testing and auditing basics",
      ],
    },
    {
      title: "Lesson 5: Handling Ether and Transactions",
      topics: [
        "Receiving and sending Ether",
        "Payable functions and fallback/receive",
        "Transaction lifecycle and gas management",
      ],
    },
    {
      title: "Lesson 6: Oracles and External Data",
      topics: [
        "What oracles provide and when to use them",
        "Integrating Chainlink (or similar) feeds",
        "Considerations: trust, latency and cost",
      ],
    },
    {
      title: "Lesson 7: Building Decentralized Applications (DApps)",
      topics: [
        "DApp architecture overview",
        "Frontend–contract interaction patterns",
        "State management and UX considerations",
      ],
    },
    {
      title: "Lesson 8: Developing Complex Smart Contracts",
      topics: [
        "Upgradable contracts patterns",
        "Proxy patterns and storage layout",
        "Advanced testing strategies",
      ],
    },
    {
      title: "Lesson 9: DApp Development and Capstone Project",
      topics: [
        "Project planning and tool choices",
        "End-to-end integration and deployment",
        "Demo and evaluation checklist",
      ],
    },
    {
      title: "Lesson 10: Setting Up a Development Environment for DApps",
      topics: [
        "Hardhat/Truffle/Foundry overview",
        "Local chains (Ganache, Hardhat Network)",
        "Test wallets and deployment scripts",
      ],
    },
    {
      title: "Lesson 11: Interfacing Smart Contracts with Web3.js",
      topics: [
        "Connecting with providers (MetaMask)",
        "Using ethers.js vs web3.js",
        "Listening to events and handling responses",
      ],
    },
    {
      title: "Lesson 12: Building a Simple DApp",
      topics: [
        "Wireframe, UI and smart contract planning",
        "Implementing a basic flow (mint/vote/store)",
        "Deploying to testnet",
      ],
    },
    {
      title: "Lesson 13: Developing a More Complex DApp",
      topics: [
        "Composability with external services",
        "Optimizing UX and gas costs",
        "Security review and test coverage",
      ],
    },
    {
      title: "Lesson 14: Capstone Project and Presentations",
      topics: [
        "Final project delivery guidelines",
        "Presentation tips and demo checklist",
        "Peer feedback and grading criteria",
      ],
    },
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
        paddingBottom: "0.5rem",
      };
    }
    return { maxHeight: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 };
  };

  useEffect(() => {
    const onResize = () => setOpenIndex((prev) => prev); // force style recalculation
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="container mx-auto border-2 border-gray-300 bg-gradient-to-t from-blue-400 to-blue-100  md:mt-8 md:mr-28 md:ml-2">
      <div className="border-2 border-b-gray-200 p-2">
        <h1 className="xs:text-xl font-headingFont py-2 font-bold md:text-3xl">
          Syllabus
        </h1>
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
            <ul className="pl-6 list-disc font-medium text-sm md:text-lg text-gray-800 mt-2">
              {lesson.topics.map((t, i) => (
                <li key={i} className="py-1">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
