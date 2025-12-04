import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

/* Layout components (non-lazy to keep nav/footer instant) */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Blockchain_D from "./pages/top/Blockchain_D";
import Other_Courses from "./pages/top/Other_Courses";
import Privacy_Policy from "./pages/Footer/Privacy_Policy";
import RegistrationOverlay from "./components/RegistrationOverlay";


/* Lazy load pages to speed dev/hot reload and production */
const Home = lazy(() => import("./components/Home"));
const Courses = lazy(() => import("./components/Courses"));
const Blog = lazy(() => import("./components/Blog"));
const Aboutus = lazy(() => import("./components/Aboutus"));
const Contact = lazy(() => import("./components/Contact"));
const Gallery = lazy(() => import("./components/Gallery"));
const Login = lazy(() => import("./components/login"));


/* pages/ folder */
const Explore = lazy(() => import("./pages/Home/Explore"));
const Getintouch = lazy(() => import("./pages/Home/Getintouch"));
const FAQ = lazy(() => import("./pages/Home/FAQ"));
const Feedback = lazy(() => import("./pages/Home/Feedback"));
const HeroSlider = lazy(() => import("./pages/Home/HeroSlider"));
const Internship = lazy(() => import("./pages/Courses/Internship"));
const InstructorLedCourses = lazy(() => import("./pages/Courses/Instructor_led_Courses"));
const SelfPacedCourses = lazy(() => import("./pages/Courses/Self_Paced_Courses"));
const Wellcome = lazy(() => import("./pages/Home/Wellcome"));
const Bootcamp = lazy(() => import("./pages/Courses/Bootcamp"));
const Certified = lazy(() => import("./pages/Courses/Certified"));
const Course_Registration = lazy(() => import("./pages/Courses/Course_Registration"));
const Led_Funtamental = lazy(() => import("./pages/Instructed_led_course/Led_Funtamental"))
const Led_sql = lazy (() => import("./pages/Instructed_led_course/Led_sql"))
const Led_IoT = lazy (() => import("./pages/Instructed_led_course/Led_IoT"))
const Led_sql2 = lazy (() => import("./pages/Instructed_led_course/Led_sql2"))
const Led_datasci = lazy (() => import("./pages/Instructed_led_course/Led_datasci"))
const Led_php = lazy (() => import("./pages/Instructed_led_course/Led_php"))
const Led_C = lazy (() => import("./pages/Instructed_led_course/Led_C"))
const Led_html = lazy (() => import("./pages/Instructed_led_course/Led_html"))
const Led_css = lazy (() => import("./pages/Instructed_led_course/Led_css"))
const Led_js = lazy (() => import("./pages/Instructed_led_course/Led_js"))
const Led_ajs = lazy (() => import("./pages/Instructed_led_course/Led_ajs"))
const Led_Flutter = lazy (() => import("./pages/Instructed_led_course/Led_Flutter"))
const PaymentTerms = lazy (() => import("./pages/Footer/PaymentTerms"))
const BCF = lazy (() => import("./pages/top/Blockchain/subfile/BCF"))
const BDP = lazy (() => import("./pages/top/Blockchain/subfile/BDP"))
const BDE = lazy (() => import("./pages/top/Blockchain/subfile/BDE"))
const CBT = lazy (() => import("./pages/top/Blockchain/subfile/CBT"))
const SSP = lazy (() => import("./pages/top/Blockchain/subfile/SSP"))
const CPP = lazy (() => import("./pages/top/Other_Course/CPP"))
const C = lazy (() => import("./pages/top/Other_Course/C"))
const Flutters = lazy (() => import("./pages/top/Other_Course/Flutters"))
const Java = lazy (() => import("./pages/top/Other_Course/Java"))
const Mysql = lazy (() => import("./pages/top/Other_Course/Mysql"))
const Php = lazy (() => import("./pages/top/Other_Course/Php"))
const Webdev = lazy (() => import("./pages/top/Other_Course/Webdev"))
const Blockdevfun = lazy (() => import("./pages/Home/Explore/blockdevfun"))
const Blockdevpro = lazy (() => import("./pages/Home/Explore/blockdevpro"))
const Blockdevexp = lazy (() => import("./pages/Home/Explore/blockdevexp"))





export default function App() {
  return (
    <>
    <RegistrationOverlay/>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop /> 
      <main className="flex-1 pt-24">
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/instructor-led" element={<InstructorLedCourses />} />
            <Route path="/courses/self-paced" element={<SelfPacedCourses />} />
            <Route path="/courses/Blockchain_D" element={<Blockchain_D />} />
            <Route path="/courses/Other_Courses" element={<Other_Courses />} />
            <Route path="/Internship" element={<Internship />} />
            <Route path="/Certified" element={<Certified />} />
            <Route path="/Bootcamp" element={<Bootcamp />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<Login />} />
            <Route path="/get-in-touch" element={<Getintouch />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/hero" element={<HeroSlider />} />
            <Route path="/welcome" element={<Wellcome />} />
            <Route path="/pages/Courses/Course_Registration" element={<Course_Registration />} />
            <Route path="/Led_Funtamental" element={<Led_Funtamental/>} />
            <Route path="/led_sql" element={<Led_sql/>} />
            <Route path="/Led_Iot" element={<Led_IoT/>} />
            <Route path="/Led_sql2" element={<Led_sql2/>} />
            <Route path="/Led_datasci" element={<Led_datasci/>} />
            <Route path="/Led_php" element={<Led_php/>} />
            <Route path="/Led_C" element={<Led_C/>} />
            <Route path="/Led_html" element={<Led_html/>} />
            <Route path="/Led_css" element={<Led_css/>} />
            <Route path="/Led_js" element={<Led_js/>} />
            <Route path="/Led_ajs" element={<Led_ajs/>} />
            <Route path="/Led_Flutter" element={<Led_Flutter/>} />
            <Route path="/PaymentTerms" element={<PaymentTerms/>} />
            <Route path="/Privacy_Policy" element={<Privacy_Policy/>} />
            <Route path="/pages/top/Blockchain/subfile/BCF" element={<BCF/>}/>
            <Route path="/pages/top/Blockchain/subfile/BDP" element={<BDP/>}/>
            <Route path="/pages/top/Blockchain/subfile/BDE" element={<BDE/>}/>
            <Route path="/pages/top/Blockchain/subfile/CBT" element={<CBT/>}/>
            <Route path="/pages/top/Blockchain/subfile/SSP" element={<SSP/>}/>
            <Route path="/pages/top/Other_Course/CPP" element={<CPP/>}/>
            <Route path="/pages/top/Other_Course/C" element={<C/>}/>
            <Route path="/pages/top/Other_Course/Java" element={<Java/>}/>
            <Route path="/pages/top/Other_Course/Flutters" element={<Flutters/>}/>
            <Route path="/pages/top/Other_Course/Mysql" element={<Mysql/>}/>
            <Route path="/pages/top/Other_Course/Php" element={<Php/>}/>
            <Route path="/pages/top/Other_Course/Webdev" element={<Webdev/>}/>
            <Route path="/pages/Home/Explore/blockdevfun" element={<Blockdevfun/>}/>
            <Route path="/pages/Home/Explore/blockdevpro" element={<Blockdevpro/>}/>
            <Route path="/pages/Home/Explore/blockdevexp" element={<Blockdevexp/>}/> 
          
            {/* Redirects and fallbacks */}
            <Route path="/" element={<Navigate to="/" />} />
            <Route path="/" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>

      <Footer/>
    </div>
    </>
  );
}
