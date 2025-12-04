import CPPtabs from "./Tabs/CPPtabs";
import { Link } from "react-router-dom";

export default function CPP (){
    return(
        <>
        <div className="animate-fadeInUp mx-auto mt-4 max-w-screen-2xl p-4 md:px-12">
      <div className="rounded-xl rounded-br-[80px] bg-gradient-to-r from-[#3d7ce9] to-[#031e4d] px-4 py-9 md:p-9">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="md:w-3/4">
            <h2 className="font-sans font-bold text-white text-4xl py-3">
                Learn about the programming language of C and CPP.
            </h2>

            <p className="py-3 text-lg text-white font-bold">
C and C++ is one of the foundational programming languages used in the development of compilers, operating systems, and embedded systems where speed and efficiency matter.
            </p>

            <div className="py-3">
              <Link to="/pages/Courses/Course_Registration">
                <button className="animate-hanging rounded-md bg-white p-2 py-3 text-center text-lg hover:cursor-pointer hover:text-blue-500 active:bg-blue-500">
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CPPtabs/>
    </>
    );
}