import Mysqltab from "./Tabs/Mysqltab";
import { Link } from "react-router-dom";

export default function Mysql(){
    return(
        <>
        <div className="animate-fadeInUp mx-auto mt-4 max-w-screen-2xl p-4 md:px-12">
      <div className="rounded-xl rounded-br-[80px] bg-[#CADDFE] px-4 py-9 md:p-9">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="md:w-3/4">
            <h2 className="font-sans font-bold text-white text-4xl py-3">
MYSQL Database Management
            </h2>

            <p className="py-3 text-lg font-bold">
This course is eligible Basic understanding in MYSQL to become Database administrator.

            </p>

            <div className="py-3">
              <Link to="/pages/Courses/Course_Registration">
                <button className="animate-shake rounded-md bg-white p-2 py-3 text-center text-lg hover:cursor-pointer active:bg-blue-500">
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Mysqltab/>
    </>
    );
}