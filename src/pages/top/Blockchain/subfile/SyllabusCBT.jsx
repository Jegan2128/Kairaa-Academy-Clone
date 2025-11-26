import React, { useState, useRef, useEffect } from "react";

export default function SyllabusCBT() {
  const [openIndex, setOpenIndex] = useState(null);

  // kept your original lesson titles; added short topic lists so panels show content
  const lessons = [
    {
      title: "Lesson 1: Blockchain in Practice",
      topics: [
        "Real-world blockchain use cases",
        "Public vs private deployments",
        "Enterprise adoption examples"
      ]
    },
    {
      title: "Lesson 2: Regulatory and Legal Considerations",
      topics: [
        "Compliance basics and jurisdictional issues",
        "Data privacy implications",
        "Legal status of tokens"
      ]
    },
    {
      title: "Lesson 3: Blockchain Trends and Future Developments",
      topics: [
        "Layer-2s, rollups and scalability",
        "Interoperability efforts",
        "Emerging privacy tech"
      ]
    },
    {
      title: "Lesson 4: Training Methodologies and Curriculum Development",
      topics: [
        "Designing hands-on sessions",
        "Assessment planning",
        "Creating learning outcomes"
      ]
    },
    {
      title: "Lesson 5: Other Blockchain Platforms",
      topics: [
        "Comparing Ethereum, Solana, Hyperledger",
        "Platform strengths & tradeoffs",
        "Choosing a platform for a project"
      ]
    },
    {
      title: "Lesson 6: Assessments and Evaluation",
      topics: [
        "Designing quizzes and practical tests",
        "Rubrics for projects",
        "Continuous assessment strategies"
      ]
    },
    {
      title: "Lesson 7: Facilitation and Presentation Skills",
      topics: [
        "Effective demo techniques",
        "Communicating technical topics to non-technical audiences",
        "Live coding best practices"
      ]
    },
    {
      title: "Lesson 8: Teaching Blockchain",
      topics: [
        "Lesson planning and pacing",
        "Interactive exercises and labs",
        "Using simulators and testnets"
      ]
    },
    {
      title: "Lesson 9: Classroom Management",
      topics: [
        "Managing mixed-skill groups",
        "Timeboxing and activity flow",
        "Troubleshooting common student issues"
      ]
    },
    {
      title: "Lesson 10: Handling Questions and Challenges",
      topics: [
        "FAQ and common misconceptions",
        "De-escalation and redirect techniques",
        "Encouraging critical thinking"
      ]
    },
    {
      title: "Lesson 11: Practical Training Exercises",
      topics: [
        "Lab setup and automation",
        "Guided exercises with checkpoints",
        "Assessing hands-on competence"
      ]
    },
    {
      title: "Lesson 12: Case Study Delivery",
      topics: [
        "Selecting relevant case studies",
        "Structuring a case presentation",
        "Group vs individual case work"
      ]
    },
    {
      title: "Lesson 13: Training Assessment",
      topics: [
        "Summative vs formative assessment",
        "Feedback methods",
        "Certification readiness checklist"
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
