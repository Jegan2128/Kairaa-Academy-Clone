import React, { useState, useRef, useEffect } from "react";

export default function Syllabusphp() {
  const [openIndex, setOpenIndex] = useState(null);

  // Keeping your original lesson titles (C/C++ ones) per your request (Option B).
  // I attached sensible placeholder topics so the panels show useful content.
  const lessons = [
    {
      title: 'Lesson-1 Introduction to “ C ” Language',
      topics: [
        'History and evolution of C',
        'Why use C — systems & embedded',
        'Basic program structure',
        'Hello World example'
      ]
    },
    {
      title: 'Lesson-2 Functions',
      topics: [
        'Function declaration & definition',
        'Passing arguments (by value)',
        'Return types and scope',
        'Recursion basics'
      ]
    },
    {
      title: 'Lesson-3 Pointers',
      topics: [
        'Memory concept & addresses',
        'Pointer declaration and dereference',
        'Pointer arithmetic',
        'Pointers to pointers'
      ]
    },
    {
      title: 'Lesson-4 Arrays',
      topics: [
        'Declaring and initializing arrays',
        'Multidimensional arrays',
        'Arrays vs pointers',
        'Common array algorithms'
      ]
    },
    {
      title: 'Lesson-5 Strings',
      topics: [
        'C string representation (char arrays)',
        'Standard functions: strlen, strcpy, strcat',
        'Buffer overflow pitfalls',
        'Formatting and parsing strings'
      ]
    },
    {
      title: 'Lesson-6 Structures, Unions, Enum and typedef',
      topics: [
        'Defining structs and accessing members',
        'Nested structs and arrays in struct',
        'Unions and memory sharing',
        'Using typedef and enums'
      ]
    },
    {
      title: 'Lesson-7 Graphics Programming',
      topics: [
        'Intro to simple graphics libraries',
        'Drawing primitives and shapes',
        'Basic animation loop',
        'Using graphics for demos'
      ]
    },
    {
      title: 'Lesson-8 File Operations',
      topics: [
        'Opening/closing files (fopen, fclose)',
        'Reading/writing text and binary',
        'File error handling',
        'Practical file examples'
      ]
    },
    {
      title: 'Lesson-9 Dynamic memory allocation ( DS )',
      topics: [
        'malloc, calloc, realloc, free',
        'Avoiding memory leaks',
        'Dynamic arrays and linked lists',
        'Good allocation patterns'
      ]
    },
    {
      title: 'Lesson-10 Introduction to “ C++ ” Programming',
      topics: [
        'C vs C++ - key differences',
        'Basic C++ program structure',
        'Namespaces and iostream',
        'Simple class example'
      ]
    },
    {
      title: 'Lesson-11 Functions',
      topics: [
        'Function overloading',
        'Default arguments',
        'Inline functions',
        'Intro to templates'
      ]
    },
    {
      title: 'Lesson-12 Classes in C++',
      topics: [
        'Class declaration and members',
        'Constructors and destructors',
        'Access specifiers (public/private)',
        'this pointer'
      ]
    },
    {
      title: 'Lesson-13 Miscellaneous Class Issues',
      topics: [
        'Copy constructor & assignment operator',
        'Rule of three/five',
        'Object lifetime and RAII'
      ]
    },
    {
      title: 'Lesson-14 Overloading operators',
      topics: [
        'Operator overloading syntax',
        'Member vs non-member overloads',
        'Common operators to overload'
      ]
    },
    {
      title: 'Lesson-15 Inheritance',
      topics: [
        'Base and derived classes',
        'Access control in inheritance',
        'Virtual functions and polymorphism'
      ]
    },
    {
      title: 'Lesson-16 Advanced Features',
      topics: [
        'Templates deeper dive',
        'Exception handling basics',
        'STL overview (vector, string, map)'
      ]
    },
    {
      title: 'Lesson-17 AInput / Output In C++ (File operations)',
      topics: [
        'fstream, ifstream, ofstream',
        'Binary file I/O in C++',
        'Formatted I/O',
        'Error handling with files'
      ]
    },
    {
      title: 'Lesson-18 New Advanced Features',
      topics: [
        'Move semantics and rvalue refs',
        'Smart pointers: unique_ptr/shared_ptr',
        'Lambda expressions'
      ]
    },
    {
      title: 'Lesson-19 Advanced Features',
      topics: [
        'Concurrency basics (std::thread)',
        'Memory model overview',
        'Performance tips and profiling'
      ]
    }
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
        paddingBottom: "0.5rem"
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
        <h1 className="xs:text-xl font-headingFont py-2 font-bold md:text-3xl">Syllabus</h1>
        <p className="font-medium md:text-lg">19 lessons • 11 projects • 8 quizzes</p>
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
            <ul className="pl-6 list-disc text-sm md:text-lg text-gray-800 mt-2">
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
