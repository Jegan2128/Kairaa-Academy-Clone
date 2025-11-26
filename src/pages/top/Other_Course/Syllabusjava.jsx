import React, { useState, useRef, useEffect } from "react";

export default function Syllabusjava() {
  const [openIndex, setOpenIndex] = useState(null);

  const lessons = [
    {
      title: "Lesson-1 Introduction",
      topics: [
        "What is Java — platform independence",
        "JVM, JRE, JDK explained",
        "History and versions",
        "Your first Java program (javac/java)"
      ]
    },
    {
      title: "Lesson-2 Persistence",
      topics: [
        "Object persistence concepts",
        "Serialization & transient keyword",
        "Introduction to persistence APIs",
        "Overview of ORM (Hibernate)"
      ]
    },
    {
      title: "Lesson-3 JDBC",
      topics: [
        "JDBC architecture and workflow",
        "JDBC drivers (types)",
        "Connecting to DB (DriverManager)",
        "Executing queries and handling results"
      ]
    },
    {
      title: "Lesson-4 JDBC API and JDBC Drivers",
      topics: [
        "Core JDBC interfaces (Connection, Statement, ResultSet)",
        "Driver loading and registration",
        "DriverManager vs DataSource",
        "Driver compatibility and classpath"
      ]
    },
    {
      title: "Lesson-5 JDBC API",
      topics: [
        "Statement, PreparedStatement, CallableStatement",
        "Batch updates and transactions",
        "ResultSet types and concurrency",
        "Best practices and resource cleanup"
      ]
    },
    {
      title: "Lesson-6 Introduction to SQL",
      topics: [
        "Basic SQL (SELECT, INSERT, UPDATE, DELETE)",
        "Filtering, sorting and joins",
        "Group by, aggregate functions",
        "Indexes and simple query optimization"
      ]
    },
    {
      title: "Lesson-7 Establishing Connection to Database",
      topics: [
        "Connection strings and credentials",
        "Connection pooling overview",
        "Using DataSource and JNDI",
        "Handling exceptions and retries"
      ]
    },
    {
      title: "Lesson-8 Introduction",
      topics: [
        "Recap: Java core essentials",
        "Java Editions: SE vs EE",
        "Tools and IDEs for Java development",
        "Project structure (Maven/Gradle basics)"
      ]
    },
    {
      title: "Lesson-9 Statement interface",
      topics: [
        "Statement vs PreparedStatement differences",
        "When to use Statement",
        "SQL injection risks and prevention",
        "Streaming large result sets"
      ]
    },
    {
      title: "Lesson-10 PreparedStatement interface",
      topics: [
        "Parameter binding and types",
        "Performance benefits of PreparedStatement",
        "Reusing statements and batching",
        "Handling generated keys"
      ]
    },
    {
      title: "Lesson-11 Resultset Interface",
      topics: [
        "ResultSet navigation and cursors",
        "Retrieving typed values from columns",
        "Updatable ResultSets",
        "Closing resources properly"
      ]
    },
    {
      title: "Lesson-12 SQL 99 Datatypes",
      topics: [
        "Numeric, character and date/time types",
        "BLOB/CLOB handling",
        "Choosing appropriate DB types",
        "Mapping SQL types to Java types"
      ]
    },
    {
      title: "Lesson-13 Metadata",
      topics: [
        "DatabaseMetaData and ResultSetMetaData",
        "Reading schema info programmatically",
        "Using metadata for generic tools",
        "Driver capabilities discovery"
      ]
    },
    {
      title: "Lesson-14 CallableStatement",
      topics: [
        "Calling stored procedures from Java",
        "In/Out/Return parameters",
        "Handling cursors and multiple result sets",
        "Error and transaction handling"
      ]
    },
    {
      title: "Lesson-15 Batch updates",
      topics: [
        "Batching queries for performance",
        "Batch size tuning and memory impact",
        "Handling partial failures",
        "Using addBatch/executeBatch"
      ]
    },
    {
      title: "Lesson-16 Transaction Management",
      topics: [
        "ACID properties and isolation levels",
        "Manual commit/rollback with JDBC",
        "Distributed transactions (2PC) overview",
        "Using transactions in frameworks (Spring)"
      ]
    },
    {
      title: "Lesson-17 Connection Pooling",
      topics: [
        "Why pooling matters",
        "Popular pool libraries (HikariCP, C3P0)",
        "Configuring pool size and timeouts",
        "Detecting and recovering leaked connections"
      ]
    },
    {
      title: "Lesson-18 RowSet",
      topics: [
        "RowSet interfaces and types (CachedRowSet)",
        "Disconnected RowSet usage",
        "Serializing RowSets",
        "When to use RowSet vs ResultSet"
      ]
    },
    {
      title: "Lesson-19 Communicating with different databases",
      topics: [
        "JDBC portability considerations",
        "Handling dialect differences",
        "Using ORM to abstract DB differences",
        "Testing against multiple DB engines"
      ]
    },
    {
      title: "Lesson-20 JDBC 4.0 Features",
      topics: [
        "Auto-loading drivers (Service Provider)",
        "Try-with-resources for JDBC",
        "Enhanced API additions",
        "Driver improvements and best practices"
      ]
    },
    {
      title: "Lesson-21 Working With Properties File",
      topics: [
        "Reading config via Properties",
        "Externalizing DB credentials securely",
        "Environment-specific config patterns",
        "Using properties with frameworks"
      ]
    },
    {
      title: "Lesson-22 JEE",
      topics: [
        "Overview of Java EE (Jakarta EE)",
        "Common APIs (JPA, EJB, JAX-RS, CDI)",
        "Application server vs servlet container",
        "Modern alternatives (Spring Boot)"
      ]
    },
    {
      title: "Lesson-23 Introduction",
      topics: [
        "Introduction to web apps in Java",
        "HTTP basics and request/response model",
        "Servlet lifecycle overview",
        "Setting up a simple web project"
      ]
    },
    {
      title: "Lesson-24 Servlet API",
      topics: [
        "HttpServlet methods (doGet/doPost)",
        "ServletConfig and ServletContext",
        "Filters and listeners",
        "Session management basics"
      ]
    },
    {
      title: "Lesson-25 HTTP Protocol",
      topics: [
        "HTTP methods and status codes",
        "Headers, cookies and caching",
        "REST principles and resource design",
        "Security basics: HTTPS, CORS, auth headers"
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
    const onResize = () => {
      setOpenIndex((prev) => prev); // force style recalculation
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="container mx-auto border-2 border-gray-300 bg-gradient-to-t from-blue-400 to-blue-100  md:mt-8 md:mr-28 md:ml-2">
      <div className="border-2 border-b-gray-200 p-2">
        <h1 className="xs:text-xl font-headingFont py-2 font-bold md:text-3xl">
          Syllabus
        </h1>
        <p className="font-medium md:text-lg">25 lessons • projects • quizzes</p>
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
