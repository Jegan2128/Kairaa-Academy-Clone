import React, { useState, useRef, useEffect } from "react";

export default function SyllabusC() {
  const [openIndex, setOpenIndex] = useState(null);

  // Real topics for each lesson
  const lessons = [
    {
      title: 'Lesson-1 Introduction to “ C ” Language',
      topics: [
        'Data types',
        'Indentation',
        'If else',
        'Operators',
        'The “WHILE” Loop',
        'The “For “ Loop',
        'Nested Loop Statements',
        'The “BREAK” & “CONTINUE” Statement',
        'Switch case default & break',
        'Bitwise operators'
      ]
    },
    {
      title: 'Lesson-2 Functions',
      topics: [
        'Function declaration & definition',
        'Passing arguments (by value)',
        'Return types',
        'Scope and lifetime of variables',
        'Recursion basics'
      ]
    },
    {
      title: 'Lesson-3 Pointers',
      topics: [
        'Memory concept & addresses',
        'Pointer variables and dereferencing',
        'Pointers to variables and arrays',
        'Pointer arithmetic',
        'Pointers to pointers'
      ]
    },
    {
      title: 'Lesson-4 Arrays',
      topics: [
        'Declaring and initializing arrays',
        'Multidimensional arrays',
        'Arrays and pointers relationship',
        'Common array algorithms'
      ]
    },
    {
      title: 'Lesson-5 Strings',
      topics: [
        'C string representation (char arrays)',
        'Standard string functions (strlen, strcpy, strcat)',
        'Common pitfalls and buffer overflow',
        'Formatting and parsing strings'
      ]
    },
    {
      title: 'Lesson-6 Structures, Unions, Enum and typedef',
      topics: [
        'Defining and using struct',
        'Nested structs and arrays in struct',
        'Unions and memory sharing',
        'Enums and typedef aliases'
      ]
    },
    {
      title: 'Lesson-7 Graphics Programming',
      topics: [
        'Intro to simple graphics libraries',
        'Drawing basic shapes',
        'Animation loop basics',
        'Using graphics for teaching algorithms'
      ]
    },
    {
      title: 'Lesson-8 File Operations',
      topics: [
        'Opening/closing files (fopen, fclose)',
        'Reading and writing (fread, fwrite, fprintf, fscanf)',
        'Binary vs text files',
        'File error handling'
      ]
    },
    {
      title: 'Lesson-9 Dynamic memory allocation ( DS )',
      topics: [
        'malloc, calloc, realloc, free',
        'Managing memory leaks',
        'Dynamic arrays and linked lists',
        'Good allocation patterns'
      ]
    },
    {
      title: 'Lesson-10 Introduction to “ C ” Programming',
      topics: [
        
        'Basic C program structure',
        'Namespaces and iostream',
        'First C class example'
      ]
    },
    {
      title: 'Lesson-11 Functions',
      topics: [
        'Function overloading',
        'Default arguments',
        'Inline functions',
        'Templates (intro)'
      ]
    },
    {
      title: 'Lesson-12 Classes in C',
      topics: [
        'Class declaration & members',
        'Constructors and destructors',
        'Access specifiers',
        'This pointer and member functions'
      ]
    },
    {
      title: 'Lesson-13 Miscellaneous Class Issues',
      topics: [
        'Copy constructor & assignment operator',
        'Rule of three/five',
        'Object lifetime and resource management'
      ]
    },
    {
      title: 'Lesson-14 Overloading operators',
      topics: [
        'Operator overloading syntax',
        'Member vs non-member overloads',
        'Common operators to overload',
        'Best practices & pitfalls'
      ]
    },
    {
      title: 'Lesson-15 Inheritance',
      topics: [
        'Base and derived classes',
        'Access control in inheritance',
        'Virtual functions and polymorphism',
        'Abstract classes'
      ]
    },
    {
      title: 'Lesson-16 Advanced Features',
      topics: [
        'Templates deep dive',
        'Exception handling',
        'STL overview (vector, string, map)'
      ]
    },
    {
      title: 'Lesson-17 A Input / Output In C (File operations)',
      topics: [
        'fstream, ifstream, ofstream',
        'Binary file I/O in C++',
        'Formatted I/O',
        'File error handling'
      ]
    },
    {
      title: 'Lesson-18 New Advanced Features',
      topics: [
        'Move semantics',
        'Smart pointers (unique_ptr, shared_ptr)',
        'Lambda expressions'
      ]
    },
    {
      title: 'Lesson-19 Advanced Features',
      topics: [
        'Concurrency basics (threads)',
        'Memory model overview',
        'Performance tips and profiling'
      ]
    }
  ];

  // refs for each collapsible content to measure height for slide-down
  const contentRefs = useRef([]);
  // DO NOT reassign contentRefs.current = [] on each render (that was the bug).
  const setRef = (el, i) => {
    contentRefs.current[i] = el;
  };

  // compute and set inline style for animation
  const getPanelStyle = (i) => {
    if (openIndex === i && contentRefs.current[i]) {
      return { maxHeight: contentRefs.current[i].scrollHeight + "px", opacity: 1, paddingTop: '0.5rem', paddingBottom: '0.5rem' };
    }
    return { maxHeight: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 };
  };

  // ensure panel height updates if window resizes
  useEffect(() => {
    const onResize = () => {
      // force re-render by setting same openIndex (no-op) so style recalculates
      setOpenIndex((prev) => prev);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="container mx-auto border-2 border-gray-300 bg-gradient-to-t from-blue-400 to-blue-100  md:mt-8 md:mr-28 md:ml-2">
      <div className="border-2 border-b-gray-200 p-2">
        <h1 className="xs:text-xl font-headingFont py-2 font-bold md:text-3xl">Syllabus</h1>
        <p className="font-medium md:text-lg">19 lessons • 11 projects • 8 quizzes</p>
      </div>

      {lessons.map((lesson, idx) => (
        <div className="flex justify-between md:p-5" key={idx}>
          <div className="w-full">
            <div className="flex justify-between items-start">
              <h1 className="xs:font-medium py-2 md:text-xl md:font-bold">{lesson.title}</h1>

              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="mx-20 font-bold md:text-xl select-none"
                aria-expanded={openIndex === idx}
                aria-controls={`panel-${idx}`}
              >
                {openIndex === idx ? '⊖' : '⊕'}
              </button>
            </div>

            {/* Slide-down animated panel (keeps your original layout and style) */}
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
        </div>
      ))}
    </div>
  );
}
