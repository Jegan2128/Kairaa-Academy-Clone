import React, { useState, useRef, useEffect } from "react";

export default function SyllabusWebdev() {
  const [openIndex, setOpenIndex] = useState(null);

  const lessons = [
    {
      title: "Lesson-1 Introduction",
      topics: [
        "What is web development (frontend vs backend)",
        "Web fundamentals: client-server model",
        "Tools & workflow (browsers, devtools, editors)",
      ],
    },
    {
      title: "Lesson-2 HTML Tags",
      topics: [
        "Core HTML tags (headings, paragraphs, lists)",
        "Semantic HTML (header, nav, main, footer)",
        "Structure of an HTML document",
      ],
    },
    {
      title: "Lesson-3 Attributes",
      topics: [
        "Common attributes (id, class, src, href)",
        "Boolean attributes and accessibility attributes",
        "Using data-* attributes",
      ],
    },
    {
      title: "Lesson-4 Events",
      topics: [
        "DOM events overview (click, input, submit)",
        "Event listeners and event object",
        "Event delegation and performance",
      ],
    },
    {
      title: "Lesson-5 Styling",
      topics: [
        "Inline, internal, and external CSS",
        "Selectors, specificity and inheritance",
        "Box model, margin, padding, border",
      ],
    },
    {
      title: "Lesson-6 Advanced HTML",
      topics: [
        "Forms and input types",
        "Audio, video and semantic media tags",
        "Accessibility basics (aria attributes)",
      ],
    },
    {
      title: "Lesson-7 CASCADING STYLE SHEETS",
      topics: [
        "Cascading rules and origin of styles",
        "Specificity and !important",
        "Organizing stylesheets for projects",
      ],
    },
    {
      title: "Lesson-8 Types of Stylesheets",
      topics: [
        "External vs inline vs embedded",
        "Preprocessors overview (Sass, Less)",
        "CSS-in-JS approaches",
      ],
    },
    {
      title: "Lesson-9 Types of Selectors",
      topics: [
        "Element, class, id selectors",
        "Attribute and pseudo-class selectors",
        "Combinators and chaining selectors",
      ],
    },
    {
      title: "Lesson-10 Div’s & Span tags",
      topics: [
        "When to use div vs semantic tags",
        "Inline vs block-level elements",
        "Grouping and layout patterns",
      ],
    },
    {
      title: "Lesson-11 Fonts",
      topics: [
        "Font families and fallback stacks",
        "Web fonts (Google Fonts, @font-face)",
        "Font loading performance tips",
      ],
    },
    {
      title: "Lesson-12 Text",
      topics: [
        "Text formatting and typographic properties",
        "Line-height, letter-spacing, text-wrap",
        "Responsive typography techniques",
      ],
    },
    {
      title: "Lesson-13 Introduction to javascript",
      topics: [
        "JS basics: variables, types, operators",
        "Control flow and functions",
        "Console & simple debugging",
      ],
    },
    {
      title: "Lesson-14 Document object model",
      topics: [
        "DOM tree and nodes",
        "Selecting & manipulating elements",
        "Creating and removing DOM nodes",
      ],
    },
    {
      title: "Lesson-15 Conditional statements",
      topics: [
        "if/else, switch statements",
        "Ternary operator and truthy/falsy values",
        "Practical conditional patterns",
      ],
    },
    {
      title: "Lesson-16 Loops",
      topics: [
        "for, while, do-while loops",
        "Array iteration (forEach, map, for..of)",
        "Avoiding infinite loops and performance tips",
      ],
    },
    {
      title:
        "Lesson-17 HTML TagsWindow object Document object Arrays",
      topics: [
        "Window vs Document objects (global scope)",
        "Browser APIs (localStorage, fetch)",
        "Arrays and common array methods",
      ],
    },
    {
      title: "Lesson-18 Advanced JavaScript",
      topics: [
        "Closures, scope and hoisting",
        "Promises, async/await and fetch",
        "Modules (ESM) and bundling basics",
      ],
    },
  ];

  // refs for each collapsible content to measure height for slide-down
  const contentRefs = useRef([]);
  const setRef = (el, i) => {
    contentRefs.current[i] = el;
  };

  // compute and set inline style for animation
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

  // ensure panel height updates if window resizes
  useEffect(() => {
    const onResize = () => setOpenIndex((prev) => prev);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="container mx-auto border-2 border-gray-300 bg-gradient-to-t from-blue-400 to-blue-100  md:mt-8 md:mr-28 md:ml-2">
      <div className="border-2 border-b-gray-200 p-2">
        <h1 className="xs:text-xl font-headingFont py-2 font-bold md:text-3xl">
          Syllabus
        </h1>
        <p className="font-medium md:text-lg">19 lessons • 11 projects • 8 quizzes</p>
      </div>

      {lessons.map((lesson, idx) => (
        <div className="md:p-5" key={idx}>
          <div className="flex justify-between">
            <h1 className="xs:font-medium py-2 md:text-xl md:font-bold">
              {lesson.title}
            </h1>

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
            <ul className="pl-6 list-disc text-sm md:text-lg text-gray-800 mt-2">
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
