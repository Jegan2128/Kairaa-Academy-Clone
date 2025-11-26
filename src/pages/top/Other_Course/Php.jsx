import Phptab from "./Tabs/Phptab";
import { Link } from "react-router-dom";

export default function Php(){
    return(
        <>
        <div className="animate-fadeInUp mx-auto mt-4 max-w-screen-2xl p-4 md:px-12">
      <div className="rounded-xl rounded-br-[80px] bg-[#CADDFE] px-4 py-9 md:p-9">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="md:w-3/4">
            <h2 className="font-sans font-bold text-white text-4xl py-3">
A Complete Mysql Programming Online Course.
            </h2>

            <p className="py-3 text-lg font-bold">
The objective of the Complete Java and Advanced java Programming course is to provide participants with a thorough understanding of Java, the smart contract in java programming language.

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
    <Phptab/>
    </>
    );
}