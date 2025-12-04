import { Link } from "react-router-dom";

export default function Other_Courses() {
  return (
    <div className="animate-fadeInUp">
      <div className="container mx-6 items-center justify-between">
        <div className="m-6 md:flex  items-center justify-between rounded-lg rounded-br-4xl bg-sky-50 p-8">
          <h1 className="m-6 text-4xl font-bold">Courses Offered in Programming Languages.</h1>
          <img
            src="https://kairaablockchainacademy.com/static/media/TopCourses.ed88ed86e1efd963778b.jpg"
            alt="Top course"
            className="md:w-2/8 rounded-2xl sm:object-cover"
          />
        </div>
      </div>

      <div>
        <div>
          <h1 className="m-10 text-center text-4xl font-bold">Our Top Other Popular Courses</h1>
          <div className="mx-10 md:grid grid-cols-2 items-center justify-between">
            <div>
              <img
                src="https://kairaablockchainacademy.com/static/media/c_and_cpp_programming.eb1225216a94cf0fc9a8.jpeg"
                alt="C and CPP"
                className="rounded-2xl"
              />
              <div>
                <h1 className="rounded-lg bg-blue-300 p-2 text-center text-lg font-semibold">
                  C and CPP Programming Online Course
                </h1>
              </div>
            </div>
            <div className="md:mx-10 md:mb-10 md:px-2 text-lg leading-relaxed">
              <p>
                C and CPP both are powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on. C programming is an excellent language to learn to program for beginners. Our C tutorials will guide you to learn C programming one step at a time.
              </p>
              <Link to="/pages/top/Other_Course/CPP"><button className="mt-4 md:ml-32 ml-25 rounded-lg bg-gradient-to-r from-sky-400 to-pink-400 p-2 font-semibold text-white animate-swing">
                View More
              </button></Link>
            </div>
          </div>
        </div>
        <hr className="mt-2 border-gray-400" />
      </div>

      {/* Web Development */}
      <div className="container">
        <div className="mx-10 md:grid grid-cols-2 items-center justify-between">
          <div>
            <img
              src="https://kairaablockchainacademy.com/static/media/webdevelopmentTop.1d386e652d9e81d81119.png"
              alt="Web Development"
              className="rounded-2xl"
            />
            <div>
              <h1 className="rounded-lg bg-blue-300 p-2 text-center text-lg font-semibold">
                Web Development Online Course
              </h1>
            </div>
          </div>
          <div className="md:mx-10 md:mb-10 md:px-2 text-lg leading-relaxed">
            <p>
              Web development encompasses a broad range of tasks from coding, to technical design, to performance of a website or application running on the internet.
            </p>
            <Link to="/pages/top/Other_Course/Webdev"><button className="mt-4 md:ml-32 ml-25 rounded-lg bg-gradient-to-r from-sky-400 to-pink-400 p-2 font-semibold text-white animate-swing">View More</button>
          </Link></div>
        </div>
        <hr className="mt-2 border-gray-400" />
      </div>

      {/* Advanced Java */}
      <div className="container">
        <div className="mx-10 md:grid grid-cols-2 items-center justify-between">
          <div>
            <img
              src="https://kairaablockchainacademy.com/static/media/advancedjavaforTop.60c4a54d5f4e42508a3c.jpeg"
              alt="Advanced Java"
              className="rounded-2xl"
            />
            <div>
              <h1 className="rounded-lg bg-blue-300 p-2 text-center text-lg font-semibold">Advanced Java Online Course</h1>
            </div>
          </div>
          <div className="md:mx-10 md:mb-10 md:px-2 text-lg leading-relaxed">
            <p>
              The core Java part covers the fundamentals (data types, functions, operators, loops, thread, exception handling, etc.) of the Java programming language. It is used to develop general purpose applications.
            </p>
            <Link to="/pages/top/Other_Course/Java"><button className="mt-4 md:ml-32 ml-25 rounded-lg bg-gradient-to-r from-sky-400 to-pink-400 p-2 font-semibold text-white animate-swing">View More</button>
          </Link></div>
        </div>
        <hr className="mt-2 border-gray-400" />
      </div>

      {/* PHP */}
      <div className="container">
        <div className="mx-10 md:grid grid-cols-2 items-center justify-between">
          <div>
            <img
              src="https://kairaablockchainacademy.com/static/media/phpTop.7d56b0ec07bcd34bd9ad.jpg"
              alt="PHP"
              className="rounded-2xl"
            />
            <div>
              <h1 className="rounded-lg bg-blue-300 p-2 text-center text-lg font-semibold">PHP Online Course</h1>
            </div>
          </div>
          <div className="md:mx-10 md:mb-10 md:px-2 text-lg leading-relaxed">
            <p>
              PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages. PHP is a widely-used, free, and efficient alternative to competitors such as Microsoft's ASP.
            </p>
            <Link to="/pages/top/Other_Course/Php"><button className="mt-4 md:ml-32 ml-25 rounded-lg bg-gradient-to-r from-sky-400 to-pink-400 p-2 font-semibold text-white animate-swing">View More</button>
          </Link></div>
        </div>
        <hr className="mt-2 border-gray-400" />
      </div>

      {/* Flutter */}
      <div className="container">
        <div className="mx-10 md:grid grid-cols-2 items-center justify-between">
          <div>
            <img
              src="https://kairaablockchainacademy.com/static/media/flutterforTop.be402385bfe870b8ef98.jpg"
              alt="Flutter"
              className="rounded-2xl"
            />
            <div>
              <h1 className="rounded-lg bg-blue-300 p-2 text-center text-lg font-semibold">Flutter Online Course</h1>
            </div>
          </div>
          <div className="md:mx-10 md:mb-10 md:px-2 text-lg leading-relaxed">
            <p>
              Flutter is Google’s Mobile SDK to build native iOS and Android, Desktop (Windows, Linux, macOS), and Web apps from a single codebase. Hot Reloading refers to the injection of new versions of the files that you edited at runtime while keeping the app running.
            </p>
            <Link to="/pages/top/Other_Course/Flutters"><button className="mt-4 md:ml-32 ml-25 rounded-lg bg-gradient-to-r from-sky-400 to-pink-400 p-2 font-semibold text-white animate-swing">View More</button>
          </Link></div>
        </div>
        <hr className="mt-2 border-gray-400" />
      </div>

      {/* MySQL */}
      <div className="container">
        <div className="mx-10 md:grid grid-cols-2 items-center justify-between">
          <div>
            <img
              src="https://kairaablockchainacademy.com/static/media/MysqlTop.4cbc0718c3f9c0e0c068.jpg"
              alt="MySQL"
              className="rounded-2xl"
            />
            <div>
              <h1 className="rounded-lg bg-blue-300 p-2 text-center text-lg font-semibold">MySQL Database Management</h1>
            </div>
          </div>
          <div className="md:mx-10 md:mb-10 md:px-2 text-lg leading-relaxed">
            <p>
              MySQL is a widely used relational database management system (RDBMS). MySQL is free and open-source. MySQL is ideal for both small and large applications. MySQL is a very popular open-source relational database management system (RDBMS).
            </p>
            <Link to="/pages/top/Other_Course/Mysql"><button className="mt-4 md:ml-32 ml-25 rounded-lg bg-gradient-to-r from-sky-400 to-pink-400 p-2 font-semibold text-white animate-swing">View More</button>
            </Link></div>
        </div>
    </div>
    
    </div>
    );
}
