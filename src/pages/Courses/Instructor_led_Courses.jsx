import { Link } from "react-router-dom"


export default function Instructor_led_Courses() {
  return (
    <>
      <div className="xs:mx-10 px-5 py-5 md:mx-20">
        <div className="sm:grid-col-2 mt-10 grid justify-center gap-5 text-center md:grid-cols-3">
          <div className="min-w-[15rem] rounded-md bg-slate-100 p-2 shadow-lg transition-transform duration-1000 ease-in-out group-hover:filter hover:scale-110">
            <div className="overflow-hidden p-2">
              <Link to="/Led_Funtamental">
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/doelkoy5w/image/upload/v1721386264/courses/hx6ylchqmvcranzjv4sa.jpg"
                  alt=""
                />
              </Link>
            </div>
            <h2 className="text-lg font-medium">Fundamentals Blockchain</h2>
            <Link to="/Led_Funtamental">
              <button className="rounded bg-gradient-to-r from-cyan-500 to-[#CB77F7] p-3 text-lg text-white hover:bg-blue-600">
                Learn Now
              </button>
            </Link>
          </div>

          <div className="min-w-[15rem] rounded-md bg-slate-100 p-2 shadow-lg transition-transform duration-1000 ease-in-out group-hover:filter hover:scale-110">
            <div className="overflow-hidden p-2">
              <Link to="/Led_sql">
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/doelkoy5w/image/upload/v1732278042/courses/ysissjrmdphp782iirvt.jpg"
                  alt=""
                />
              </Link>
            </div>
            <h2 className="text-lg font-medium">Advanced SQL</h2>
            <Link to="/Led_sql">
              <button className="rounded bg-gradient-to-r from-cyan-500 to-[#CB77F7] p-3 text-lg text-white hover:bg-blue-600">
                Learn Now
              </button>
            </Link>
          </div>

          <div className="min-w-[15rem] rounded-md bg-slate-100 p-2 shadow-lg transition-transform duration-1000 ease-in-out group-hover:filter hover:scale-110">
            <div className="overflow-hidden p-2">
              <Link to="/Led_IoT">
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/doelkoy5w/image/upload/v1736167029/courses/i70tuanfdk0q1k5jdjph.jpg"
                  alt=""
                />
              </Link>
            </div>
            <h2 className="text-lg font-medium">IoT Fundamentals</h2>
            <Link to="/Led_IoT">
              <button className="rounded bg-gradient-to-r from-cyan-500 to-[#CB77F7] p-3 text-lg text-white hover:bg-blue-600">
                Learn Now
              </button>
            </Link>
          </div>

          <div className="min-w-[15rem] rounded-md bg-slate-100 p-2 shadow-lg transition-transform duration-1000 ease-in-out group-hover:filter hover:scale-110">
            <div className="overflow-hidden p-2">
              <Link to="/Led_sql2">
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/doelkoy5w/image/upload/v1732356211/courses/ucylxevhu9fjcqsf3zvq.jpg"
                  alt=""
                />
              </Link>
            </div>
            <h2 className="text-lg font-medium">Strucured Query Language (SQL)</h2>
            <Link to="/Led_sql2">
              <button className="rounded bg-gradient-to-r from-cyan-500 to-[#CB77F7] p-3 text-lg text-white hover:bg-blue-600">
                Learn Now
              </button>
            </Link>
          </div>

          <div className="min-w-[15rem] rounded-md bg-slate-100 p-2 shadow-lg transition-transform duration-1000 ease-in-out group-hover:filter hover:scale-110">
            <div className="overflow-hidden p-2">
              <Link to="/Led_datasci">
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/doelkoy5w/image/upload/v1736145124/courses/atzni6hzjs9f99wdhfdp.jpg"
                  alt=""
                />
              </Link>
            </div>
            <h2 className="text-lg font-medium">Data Science</h2>
            <Link to="/Led_datasci">
              <button className="rounded bg-gradient-to-r from-cyan-500 to-[#CB77F7] p-3 text-lg text-white hover:bg-blue-600">
                Learn Now
              </button>
            </Link>
          </div>

          <div className="min-w-[15rem] rounded-md bg-slate-100 p-2 shadow-lg transition-transform duration-1000 ease-in-out group-hover:filter hover:scale-110">
            <div className="overflow-hidden p-2">
              <Link to="/Led_php">
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/doelkoy5w/image/upload/v1736145946/courses/p5u3bhpkxzpbie95coqk.jpg"
                  alt=""
                />
              </Link>
            </div>
            <h2 className="text-lg font-medium">PHP</h2>
            <Link to="/Led_php">
              <button className="rounded bg-gradient-to-r from-cyan-500 to-[#CB77F7] p-3 text-lg text-white hover:bg-blue-600">
                Learn Now
              </button>
            </Link>
          </div>

          <div className="min-w-[15rem] rounded-md bg-slate-100 p-2 shadow-lg transition-transform duration-1000 ease-in-out group-hover:filter hover:scale-110">
            <div className="overflow-hidden p-2">
              <Link to="/Led_C">
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/doelkoy5w/image/upload/v1736165130/courses/ard8ge3wen1jlyngfcdo.jpg"
                  alt=""
                />
              </Link>
            </div>
            <h2 className="text-lg font-medium">C#.NET</h2>
            <Link to="/Led_C">
              <button className="rounded bg-gradient-to-r from-cyan-500 to-[#CB77F7] p-3 text-lg text-white hover:bg-blue-600">
                Learn Now
              </button>
            </Link>
          </div>

          <div className="min-w-[15rem] rounded-md bg-slate-100 p-2 shadow-lg transition-transform duration-1000 ease-in-out group-hover:filter hover:scale-110">
            <div className="overflow-hidden p-2">
              <Link to="/Led_html">
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/doelkoy5w/image/upload/v1736166244/courses/a7htuwexj0qfreehs1cw.jpg"
                  alt=""
                />
              </Link>
            </div>
            <h2 className="text-lg font-medium">HTML</h2>
            <Link to="/Led_html">
              <button className="rounded bg-gradient-to-r from-cyan-500 to-[#CB77F7] p-3 text-lg text-white hover:bg-blue-600">
                Learn Now
              </button>
            </Link>
          </div>

          <div className="min-w-[15rem] rounded-md bg-slate-100 p-2 shadow-lg transition-transform duration-1000 ease-in-out group-hover:filter hover:scale-110">
            <div className="overflow-hidden p-2">
              <Link to="/Led_css">
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/doelkoy5w/image/upload/v1736166826/courses/txfryvowh43sj9ynxj3p.jpg"
                  alt=""
                />
              </Link>
            </div>
            <h2 className="text-lg font-medium">CSS</h2>
            <Link to="/Led_css">
              <button className="rounded bg-gradient-to-r from-cyan-500 to-[#CB77F7] p-3 text-lg text-white hover:bg-blue-600">
                Learn Now
              </button>
            </Link>
          </div>

          <div className="min-w-[15rem] rounded-md bg-slate-100 p-2 shadow-lg transition-transform duration-1000 ease-in-out group-hover:filter hover:scale-110">
            <div className="overflow-hidden p-2">
              <Link to="/Led_js">
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/doelkoy5w/image/upload/v1736246853/courses/jqxp2hxghp8tpb6kpnnh.jpg"
                  alt=""
                />
              </Link>
            </div>
            <h2 className="text-lg font-medium">Java Script</h2>
            <Link to="/Led_js">
              <button className="rounded bg-gradient-to-r from-cyan-500 to-[#CB77F7] p-3 text-lg text-white hover:bg-blue-600">
                Learn Now
              </button>
            </Link>
          </div>

          <div className="min-w-[15rem] rounded-md bg-slate-100 p-2 shadow-lg transition-transform duration-1000 ease-in-out group-hover:filter hover:scale-110">
            <div className="overflow-hidden p-2">
              <Link to="/Led_ajs">
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/doelkoy5w/image/upload/v1736247948/courses/eiuziqglboefjxw89t0y.jpg"
                  alt=""
                />
              </Link>
            </div>
            <h2 className="text-lg font-medium">Angular Javascript</h2>
            <Link to="/Led_ajs">
              <button className="rounded bg-gradient-to-r from-cyan-500 to-[#CB77F7] p-3 text-lg text-white hover:bg-blue-600">
                Learn Now
              </button>
            </Link>
          </div>

          <div className="min-w-[15rem] rounded-md bg-slate-100 p-2 shadow-lg transition-transform duration-1000 ease-in-out group-hover:filter hover:scale-110">
            <div className="overflow-hidden p-2">
              <Link to="/Led_Flutter">
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/doelkoy5w/image/upload/v1736248774/courses/kjqikwtlqzcwxirvzkc3.jpg"
                  alt=""
                />
              </Link>
            </div>
            <h2 className="text-lg font-medium">Flutter</h2>
            <Link to="/Led_Flutter">
              <button className="rounded bg-gradient-to-r from-cyan-500 to-[#CB77F7] p-3 text-lg text-white hover:bg-blue-600">
                Learn Now
              </button>
            </Link>
          </div>
        </div>
        
      </div>
     
    </>
  );
}
