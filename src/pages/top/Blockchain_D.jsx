import { Link } from "react-router-dom";

export default function Blockchain_D() {
  return (
    <div>
      <div className="container mx-6 items-center justify-between animate-fadeInUp">
        <div className="m-6 md:flex items-center justify-between rounded-lg rounded-br-4xl bg-sky-50 p-8">
          <h1 className="m-6 text-4xl font-bold">Courses Offered in Blockchain Development</h1>
          <img
            src="https://kairaablockchainacademy.com/static/media/topcourseBlockchain.3a4386aa642eac064127.jpg"
            alt="Top course"
            className="md:w-2/8 rounded-2xl"
          />
        </div>
      </div>

      <div>
        <div className="animate-fadeInUp">
          <h1 className="m-10 text-center text-4xl font-bold">Our Top Most Courses (Blockchain)</h1>
          <div className="mx-10 grid md:grid-cols-2 items-center justify-between">
            <div className="items-center">
              <img
                src="https://kairaablockchainacademy.com/static/media/blocktechnology.871e1ce5d0051c743832.webp"
                alt="banner"
                className="rounded-2xl"
              />
              <div>
                <h1 className="rounded-lg bg-blue-300 p-2 text-center text-lg font-semibold">Blockchain Developer Fundamental</h1>
              </div>
            </div>
              <div className="mx-10 mb-10 px-2 text-lg leading-relaxed">
                <p className="">Blockchain Fundamentals utilizes a hybrid learning approach to help you build and demonstrate an understanding of blockchain concepts, usage and considerations. Learn how to leverage yourin-demand knowledge and ability in blockchain to elevate your IT career.</p>
                <Link to="/pages/top/Blockchain/subfile/BCF"><button className="mt-4 ml-32 rounded-lg bg-gradient-to-r from-sky-400 to-pink-400 p-2 font-semibold text-white animate-bounce">View More</button></Link>
              </div>
          </div>
        </div>
        <hr className="mt-2 border-gray-400" />
      </div>

      <div className="container ">
        <div className="mx-10 grid md:grid-cols-2 items-center *:justify-between animate-fadeInUp">
          <div className="">
            <img
              src="https://kairaablockchainacademy.com/static/media/cryptocurrencies-and-blockchainTech.ce9f9e370321439def0d.jpg"
              alt="banner"
              className="rounded-2xl"
            />
            <div>
              <h1 className="rounded-lg bg-blue-300 p-2 text-center text-lg font-semibold">Blockchain Developer Professional</h1>
            </div>
          </div>
          <div className="mx-10 mb-10 px-2 text-lg leading-relaxed">
            <p className="">The objective of this Intermediate Level Blockchain Developer Course is to take participants to the next level of blockchain development.</p>
            <Link to="/pages/top/Blockchain/subfile/BDP"><button className="mt-4 ml-32 rounded-lg bg-gradient-to-r from-sky-400 to-pink-400 p-2 font-semibold text-white animate-bounce">View More</button></Link>
          </div>
        </div>
        <hr className="mt-2 border-gray-400" />
      </div>

      <div className="container">
        <div className="mx-10 grid md:grid-cols-2 items-center *:justify-between animate-fadeInUp">
          <div className="">
            <img
              src="https://kairaablockchainacademy.com/static/media/blockchaindevprofessional.185505bea1923dd5be2c.jpg"
              alt="banner"
              className="rounded-2xl"
            />
            <div>
              <h1 className="rounded-lg bg-blue-300 p-2 text-center text-lg font-semibold">Blockchain Developer Expert</h1>
            </div>
          </div>
          <div className="mx-10 mb-10 px-2 text-lg leading-relaxed">
            <p className="">The demand for blockchain expert skills keeps rising every single day. At present, many enterprise companies are looking for professionals with the blockchain knowledge base. More so, as there are only a handful of professionals who knows how to handle blockchain networks, the necessity of blockchain experts is at an all-time high.</p>
            <Link to="/pages/top/Blockchain/subfile/BDE"><button className="mt-4 ml-32 rounded-lg bg-gradient-to-r from-sky-400 to-pink-400 p-2 font-semibold text-white animate-bounce">View More</button></Link>
          </div>
        </div>

        <hr className="mt-2 border-gray-400" />
      </div>

      <div className="container">
        <div className="mx-10 grid md:grid-cols-2 items-center *:justify-between animate-fadeInUp">
          <div className="">
            <img
              src="https://kairaablockchainacademy.com/static/media/Solidity-Programming-Language.53bb67d11d229f04b6ef.jpg"
              alt="banner"
              className="rounded-2xl"
            />
            <div>
              <h1 className="rounded-lg bg-blue-300 p-2 text-center text-lg font-semibold">A Complete Solidity for Smart Programming</h1>
            </div>
          </div>
          <div className="mx-10 mb-10 px-2 text-lg leading-relaxed">
            <p className="">Solidity is the main programming language for writing smart contracts for the Ethereum blockchain. It is a contract-oriented language, which means that smart contracts are responsible for storing all of the programming logic that transacts with the blockchain. It's a high-level programming language that looks a lot like JavaScript, Python, and C++.</p>
            <Link to="/pages/top/Blockchain/subfile/SSP"><button className="mt-4 ml-32 rounded-lg bg-gradient-to-r from-sky-400 to-pink-400 p-2 font-semibold text-white animate-bounce">View More</button></Link>
          </div>
        </div>

        <hr className="mt-2 border-gray-400" />
      </div>

      <div className="container">
        <div className="mx-10 grid md:grid-cols-2 items-center justify-between animate-fadeInUp">
          <div className="">
            <img
              src="https://kairaablockchainacademy.com/static/media/blockchain-trainer.06b6cd57f348516731b7.png"
              alt="banner"
              className="rounded-2xl"
            />
            <div>
              <h1 className="rounded-lg bg-blue-300 p-2 text-center text-lg font-semibold">Certified Blockchain Trainer</h1>
            </div>
          </div>
          <div className="mx-10 mb-10 px-2 text-lg leading-relaxed">
            <p className="">Many misunderstand blockchains—even those with a strong grasp of technological concepts. For this reason, entering or transitioning into blockchain development might seem challenging. However, blockchain technology is less mysterious than its reputation suggests. .</p>
            <Link to="/pages/top/Blockchain/subfile/CBT"><button className="mt-4 ml-32 rounded-lg bg-gradient-to-r from-sky-400 to-pink-400 p-2 font-semibold text-white animate-bounce">View More</button></Link>
          </div>
        </div>
      </div>
      
    </div>
  );
}
