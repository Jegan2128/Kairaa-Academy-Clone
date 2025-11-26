import React, { useState, useRef, useEffect } from "react";

export default function Syllabusmysql() {
  const [openIndex, setOpenIndex] = useState(null);

  const lessons = [
    {
      title: "Lesson 1: Introduction to MySQL",
      topics: [
        "What is MySQL and where it's used",
        "Client-server model and architecture",
        "Installing MySQL and tools (WorkBench, CLI)",
        "Connecting to a MySQL server"
      ]
    },
    {
      title: "Lesson 2: MySQL RDBMS",
      topics: [
        "Relational model basics (tables, rows, columns)",
        "Primary keys and foreign keys",
        "Normalization basics (1NF,2NF,3NF)",
        "Overview of ACID properties"
      ]
    },
    {
      title: "Lesson 3: MySQL SQL",
      topics: [
        "SQL language categories (DDL, DML, DCL)",
        "Basic CRUD operations",
        "Using comments and formatting SQL",
        "Running SQL from CLI and GUI"
      ]
    },
    {
      title: "Lesson 4: MySQL SELECT Statement",
      topics: [
        "Basic SELECT syntax",
        "Selecting specific columns vs all columns",
        "Using aliases and expressions",
        "Limiting and offsetting results"
      ]
    },
    {
      title: "Lesson 5: MySQL WHERE Clause",
      topics: [
        "Filtering rows with WHERE",
        "Comparison and logical operators",
        "Using LIKE, IN, BETWEEN",
        "NULL handling in WHERE"
      ]
    },
    {
      title: "Lesson 6: MySQL AND, OR and NOT Operators",
      topics: [
        "Combining conditions with AND/OR",
        "Operator precedence and parentheses",
        "Negation with NOT",
        "Practical filter examples"
      ]
    },
    {
      title: "Lesson 7: MySQL ORDER BY Keyword",
      topics: [
        "Sorting results (ASC, DESC)",
        "Multiple column ordering",
        "Ordering by expressions and aliases",
        "Performance considerations"
      ]
    },
    {
      title: "Lesson-8 MySQL Comments",
      topics: [
        "Single-line and multi-line comments",
        "Using comments for documentation",
        "Commenting out queries during debugging",
        "Best practices"
      ]
    },
    {
      title: "Lesson-9 MySQL Joins",
      topics: [
        "INNER, LEFT, RIGHT and FULL joins",
        "Cross join and self join",
        "Join conditions and aliases",
        "When to use joins vs subqueries"
      ]
    },
    {
      title: "Lesson-10 MySQL GROUP BY Statement",
      topics: [
        "Grouping rows and aggregate functions",
        "HAVING vs WHERE",
        "Common grouping patterns",
        "Using GROUP BY with ORDER BY"
      ]
    },
    {
      title: "Lesson-11 MySQL Operators",
      topics: [
        "Arithmetic, comparison and logical operators",
        "Bitwise operators and use cases",
        "Operator precedence in expressions",
        "Using operators in WHERE and SELECT"
      ]
    },
    {
      title: "Lesson-12 MySQL Database",
      topics: [
        "Creating and dropping databases",
        "Using schemas and namespaces",
        "Backing up and restoring databases",
        "Basic database administration tasks"
      ]
    },
    {
      title: "Lesson-13 CONSTRAINTS",
      topics: [
        "NOT NULL, UNIQUE, CHECK constraints",
        "PRIMARY KEY and FOREIGN KEY constraints",
        "Defining and dropping constraints",
        "Enforcing data integrity"
      ]
    },
    {
      title: "Lesson-14 References",
      topics: [
        "Useful documentation and cheat-sheets",
        "Official MySQL docs and tutorials",
        "Community resources and forums",
        "Further learning paths"
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
        <p className="font-medium md:text-lg">12 lessons • 7 projects • 8 quizzes</p>
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
