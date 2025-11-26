import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const activeClass = "hover:text-blue-500";

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileTopCourseOpen, setMobileTopCourseOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-20 transition-all duration-200 ${
          scrolled ? "bg-white backdrop-blur-sm shadow-md" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-25">
            {/* Logo */}
            <div className="flex-shrink-0 ">
              <NavLink to="/" aria-label="Home">
                <img
                  src="https://kairaablockchainacademy.com/static/media/Blockchain-Academy-Logo.8e4bd1a0e2e740023866.png"
                  alt="Nav-logo"
                  className="h-26"
                />
              </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <ul className="flex items-center space-x-10 text-blue-950 font-bold text-lg">
                <li>
                  <NavLink to="/" end className={activeClass}>
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Aboutus" className={activeClass}>
                    ABOUT US
                  </NavLink>
                </li>

                {/* Courses Dropdown */}
                <li className="relative group cursor-pointer">
                  <span className="hover:text-blue-500">COURSES</span>

                  <div
                    className="dropdown absolute right-0 top-8 bg-white shadow-lg py-2 rounded-md 
                               opacity-0 invisible group-hover:opacity-100 group-hover:visible
                               transition-all duration-200 min-w-[300px]"
                  >
                    <NavLink
                      to="/courses"
                      className="block px-4 py-1 hover:text-blue-500"
                    >
                      Self-Paced Courses
                    </NavLink>

                    <NavLink
                      to="/courses/instructor-led"
                      className="block px-4 py-1 hover:text-blue-500"
                    >
                      Instructor-led Courses
                    </NavLink>

                    <div className="relative group-submenu px-4 py-1">
                      <div className="flex items-center justify-between hover:text-blue-500 cursor-pointer">
                        <span className="font-bold">Our Top Course</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor">
                          <path strokeWidth="2" d="M6 5l7 6-10 8" />
                        </svg>
                      </div>

                      <div
                        className="submenu absolute top-0 left-full bg-white shadow-lg rounded-md w-75
                                   opacity-0 invisible pointer-events-auto transform scale-100"
                      >
                        <NavLink
                          to="/Courses/Blockchain_D"
                          className="block px-4 py-1 hover:text-blue-500"
                        >
                          Blockchain Development
                        </NavLink>
                        <NavLink
                          to="/Courses/Other_Courses"
                          className="block px-4 py-1 hover:text-blue-500"
                        >
                          Other Courses
                        </NavLink>
                      </div>
                    </div>

                    <NavLink to="/Internship" className="block px-4 py-1 hover:text-blue-500">
                      Internship Program
                    </NavLink>
                    <NavLink to="/Certified" className="block px-4 py-1 hover:text-blue-500">
                      Certified Blockchain Architect
                    </NavLink>
                    <NavLink to="/Bootcamp" className="block px-4 py-1 hover:text-blue-500">
                      Bootcamp
                    </NavLink>
                  </div>
                </li>

                <li>
                  <NavLink to="/blog" className={activeClass}>
                    BLOG
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/gallery" className={activeClass}>
                    GALLERY
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/contact" className={activeClass}>
                    CONTACT US
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Right Icons */}
            <div className="flex items-center">
              {/* Login icon (desktop) */}
              <div className="hidden md:block mr-4">
                <Link to="/login">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/709/709610.png"
                    alt="Login"
                    className="h-6 w-6"
                  />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2"
              >
                {mobileOpen ? (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor">
                    <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor">
                    <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed top-25 right-0 h-fit w-1/2 bg-white transition-transform duration-300 z-50 ${
    mobileOpen ? "translate-x-0" : "translate-x-full"
  }`}

        >
          <div className="bg-white border rounded-2xl hover:text-blue-500">
            <ul className="flex flex-col px-4 py-4 space-y-1 font-semibold  text-blue-950">
              <li>
                <NavLink to="/" end className="hover:text-blue-500 block px-2 py-2" onClick={() => setMobileOpen(false)}>
                  HOME
                </NavLink>
              </li>

              <li>
                <NavLink to="/Aboutus" className="hover:text-blue-500 block px-2 py-2" onClick={() => setMobileOpen(false)}>
                  ABOUT US
                </NavLink>
              </li>

              {/* Mobile Courses Accordion */}
              <li>
                <button
                  onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                  className="w-full hover:text-blue-500 hover:cursor-pointer px-2 py-2 flex justify-between"
                >
                  COURSES
                  <svg className={`w-4 h-4 ${mobileCoursesOpen ? "rotate-90" : ""}`} fill="none" stroke="currentColor">
                    <path strokeWidth="2" d="M6 5l7 6-10 8" />
                  </svg>
                </button>

                <div className={`pl-4 overflow-hidden transition-all ${mobileCoursesOpen ? "max-h-[400px]" : "max-h-0"}`}>
                  <NavLink to="/courses" className="block hover:text-blue-500 px-2 py-2" onClick={() => setMobileOpen(false)}>
                    Self-Paced Courses
                  </NavLink>

                  <NavLink to="/courses/instructor-led" className="hover:text-blue-500 block px-2 py-2" onClick={() => setMobileOpen(false)}>
                    Instructor-led Courses
                  </NavLink>

                  {/* Inner Accordion */}
                  <div>
                    <button
                      onClick={() => setMobileTopCourseOpen(!mobileTopCourseOpen)}
                      className="w-full hover:text-blue-500 px-2 py-2 flex justify-between"
                    >
                      Our Top Course
                      <svg
                        className={`w-4 h-4 ${mobileTopCourseOpen ? "rotate-90" : ""}`}
                        fill="none"
                        stroke="currentColor"
                      >
                        <path strokeWidth="2" d="M6 5l7 6-10 8" />
                      </svg>
                    </button>

                    <div
                      className={`pl-4 overflow-hidden transition-all ${
                        mobileTopCourseOpen ? "max-h-[300px]" : "max-h-0"
                      }`}
                    >
                      <NavLink
                        to="/Courses/Blockchain_D"
                        className="block hover:text-blue-500 px-2 py-2"
                        onClick={() => setMobileOpen(false)}
                      >
                        Blockchain Development
                      </NavLink>

                      <NavLink
                        to="/Courses/Other_Courses"
                        className="block hover:text-blue-500 px-2 py-2"
                        onClick={() => setMobileOpen(false)}
                      >
                        Other Courses
                      </NavLink>
                    </div>
                  </div>

                  <NavLink to="/Internship" className="block hover:text-blue-500 px-2 py-2" onClick={() => setMobileOpen(false)}>
                    Internship Program
                  </NavLink>

                  <NavLink to="/Certified" className="block hover:text-blue-500 px-2 py-2" onClick={() => setMobileOpen(false)}>
                    Certified Blockchain Architect
                  </NavLink>

                  <NavLink to="/Bootcamp" className="block hover:text-blue-500 px-2 py-2" onClick={() => setMobileOpen(false)}>
                    Bootcamp
                  </NavLink>
                </div>
              </li>

              <li>
                <NavLink to="/blog" className="block hover:text-blue-500 px-2 py-2" onClick={() => setMobileOpen(false)}>
                  BLOG
                </NavLink>
              </li>

              <li>
                <NavLink to="/gallery" className="block hover:text-blue-500 px-2 py-2" onClick={() => setMobileOpen(false)}>
                  GALLERY
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className="block hover:text-blue-500 px-2 py-2" onClick={() => setMobileOpen(false)}>
                  CONTACT US
                </NavLink>
              </li>

              <li className="pt-2">
                <NavLink
                  to="/login"
                  className="block px-3 hover:text-blue-500 py-2 border text-center rounded"
                  onClick={() => setMobileOpen(false)}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <style>{`
        .group:hover > .dropdown {
          opacity: 1;
          visibility: visible;
        }

        .group-submenu:hover > .submenu {
          opacity: 1;
          visibility: visible;
          transform: scale(1);
          
        }
      `}</style>
    </>
  );
};

export default Navbar;
