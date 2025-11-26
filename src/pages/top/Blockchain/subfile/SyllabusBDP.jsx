import React, { useState, useRef, useEffect } from "react";

export default function SyllabusBDP() {
  const [openIndex, setOpenIndex] = useState(null);

  // kept your original lesson titles and layout; added short topic lists so panels show content
  const lessons = [
    {
      title: "Lesson 1: Review of Blockchain Basics",
      topics: [
        "Blockchain fundamentals recap",
        "Consensus mechanisms (PoW, PoS)",
        "Nodes, blocks and transactions"
      ]
    },
    {
      title: "Lesson 2: Advanced Smart Contract Development",
      topics: [
        "Solidity advanced patterns",
        "Security pitfalls and mitigations",
        "Testing and deployment workflows"
      ]
    },
    {
      title: "Lesson 3: Building Advanced DApps",
      topics: [
        "Off-chain indexing and subgraphs",
        "Designing scalable architectures",
        "Integrating wallets and providers"
      ]
    },
    {
      title: "Lesson 4: Non-Fungible Tokens (NFTs)",
      topics: [
        "ERC-721 vs ERC-1155",
        "Metadata and IPFS integration",
        "Minting and marketplace flows"
      ]
    },
    {
      title: "Lesson 5: Decentralized Finance (DeFi)",
      topics: [
        "AMMs and DEX basics",
        "Lending & borrowing primitives",
        "Yield strategies and risks"
      ]
    },
    {
      title: "Lesson 6: Advanced DeFi Projects",
      topics: [
        "Composability and protocol design",
        "Oracles and oracles security",
        "Audit patterns and testing"
      ]
    },
    {
      title: "Lesson 7: Final Projects and Presentations",
      topics: [
        "Project planning and milestones",
        "Submission and demo tips",
        "Evaluation criteria"
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
        "Exam format and sample Qs",
        "Revision checklist",
        "Project submission guidelines"
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
      <div className="border-2 border-b-gray-200 p-2">
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
            <ul className="pl-6 list-disc font-medium text-sm md:text-lg text-gray-800 mt-2">
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
