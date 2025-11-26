import React, { useState, useRef, useEffect } from "react";

export default function Syllabusflutter() {
  const [openIndex, setOpenIndex] = useState(null);

  const lessons = [
    {
      title: "Lesson-1 Introduction to Flutter",
      topics: [
        "What is Flutter and why use it",
        "Flutter architecture (widgets, render tree)",
        "Setting up environment (SDK, IDE)",
      ],
    },
    {
      title: "Lesson-2 Introduction To Dart",
      topics: [
        "Dart basics: variables, types, control flow",
        "Functions and classes in Dart",
        "Null-safety overview",
      ],
    },
    {
      title: "Lesson-3 Dart Functions",
      topics: [
        "Top-level and nested functions",
        "Arrow functions, optional & named params",
        "Closures and higher-order functions",
      ],
    },
    {
      title: "Lesson-4 First Flutter App",
      topics: [
        "Creating a new Flutter project",
        "Understanding main(), runApp() and MaterialApp",
        "Hot reload & debugging basics",
      ],
    },
    {
      title: "Lesson-5 Flutter Framework",
      topics: [
        "Widget types: Stateless vs Stateful",
        "Widget lifecycle",
        "Layouts: Row, Column, Stack",
      ],
    },
    {
      title: "Lesson-6 Flutter Widgets",
      topics: [
        "Common UI widgets (Text, Button, Image)",
        "Input widgets (TextField, Form)",
        "Custom widgets and composition",
      ],
    },
    {
      title: "Lesson-7 Navigation & Routing",
      topics: [
        "Navigator API (push/pop)",
        "Named routes & passing arguments",
        "Nested navigation patterns",
      ],
    },
    {
      title: "Lesson-8 Widgets Implementation",
      topics: [
        "Building responsive UIs",
        "Using LayoutBuilder & MediaQuery",
        "Adaptive and platform-specific widgets",
      ],
    },
    {
      title: "Lesson-9 Firebase",
      topics: [
        "Integrating Firebase in Flutter",
        "Auth (email / social) basics",
        "Realtime DB / Firestore read & write",
      ],
    },
    {
      title: "Lesson-10 Location Aware Apps",
      topics: [
        "Permissions and platform setup",
        "Using geolocation packages",
        "Displaying maps and markers",
      ],
    },
    {
      title: "Lesson-11 User Interface",
      topics: [
        "Material vs Cupertino design",
        "Theming and typography",
        "Animations: implicit & explicit",
      ],
    },
    {
      title: "Lesson-12 Asynchronous Functions",
      topics: [
        "Futures, async/await, Streams",
        "Handling async data in widgets",
        "Isolates for heavy work",
      ],
    },
    {
      title: "Lesson-13 Working With Remote Data",
      topics: [
        "HTTP requests (http package)",
        "Parsing JSON and error handling",
        "Caching & pagination basics",
      ],
    },
    {
      title: "Lesson-14 Using 3rd Party Packages",
      topics: [
        "pub.dev and package selection",
        "Integrating native plugins",
        "Keeping dependencies up to date",
      ],
    },
    {
      title: "Lesson-15 Other Useful Widgets",
      topics: [
        "Lists (ListView, GridView)",
        "Slivers and custom scroll behavior",
        "Dialogs, Snackbars, and BottomSheets",
      ],
    },
    {
      title: "Lesson-16 User Interface",
      topics: [
        "Advanced layouts & composition",
        "Accessibility & semantics",
        "Performance optimization",
      ],
    },
    {
      title: "Lesson-17 Publishing and App Testing",
      topics: [
        "Writing widget/unit/integration tests",
        "Preparing app for Play Store / App Store",
        "CI/CD basics for Flutter",
      ],
    },
  ];

  // refs for each collapsible content to measure height for slide-down
  const contentRefs = useRef([]);
  const setRef = (el, i) => {
    contentRefs.current[i] = el;
  };

  // compute style for slide-down
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

  // recalc on resize so maxHeight remains correct
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
        <p className="font-medium md:text-lg">
          17 lessons • 14 projects • 8 quizzes
        </p>
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

          {/* slide-down panel */}
          <div
            id={`panel-${idx}`}
            ref={(el) => setRef(el, idx)}
            style={getPanelStyle(idx)}
            className="transition-[max-height,opacity,padding] duration-300 ease-in-out overflow-hidden"
          >
            <ul className="pl-10 list-disc font-medium text-sm md:text-lg text-gray-800 mt-2">
              {lesson.topics.map((t, i) => (
                <li key={i} className="py-1">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* optional: show your uploaded screenshot (local path) */}
      <div className="max-w-5xl mx-auto mt-6 p-3 bg-white/10 border border-blue-100 rounded">
        <p className="text-sm">Screenshot (local):</p>
        <img
          src={"/mnt/data/7a9df346-03c2-4a12-aafb-20f03c04b57b.png"}
          alt="screenshot"
          className="mt-2 w-full object-contain rounded"
        />
      </div>
    </div>
  );
}
