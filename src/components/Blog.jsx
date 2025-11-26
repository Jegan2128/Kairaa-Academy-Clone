import React, { useState } from "react";

export default function BlogCard() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeBlog, setActiveBlog] = useState(null);

  // === MULTIPLE BLOG DATA ===
  const blogs = [
    {
      id: 1,
      title: "Decentralized Finance (DeFi) Revolution: Empowering Financial Inclusion",
      img: "https://res.cloudinary.com/doelkoy5w/image/upload/v1746523153/blogs/fk3mj7dju40qgyycjkwg.jpg",
      desc: "Decentralized Finance (DeFi) is revolutionizing the financial landscape by offering open, transparent, and borderless access to financial services without...",
      full: "Decentralized Finance (DeFi) is revolutionizing the financial landscape by offering open, transparent, and borderless access to financial services without traditional intermediaries. This empowerment fosters greater financial inclusion, enabling underserved populations to participate in lending, borrowing, and investment opportunities.",
      date: "Published on May 6, 2025",
    },
    {
      id: 2,
      title: "The Rise of Non-Fungible Tokens (NFTs): Opportunities and Challenges",
      img: "https://res.cloudinary.com/doelkoy5w/image/upload/v1746523124/blogs/ppo2kg3c4qinpnz9ke75.jpg",
      desc: "The rise of Non-Fungible Tokens (NFTs) has opened new opportunities for digital ownership, creativity, and monetization in art, gaming, and collectibles...",
      full: "The rise of Non-Fungible Tokens (NFTs) has opened new opportunities for digital ownership, creativity, and monetization in art, gaming, and collectibles. However, challenges such as environmental impact, market volatility, and intellectual property concerns continue to pose obstacles to widespread adoption.",
      date: "Published on May 6, 2025",
    },
    {
      id: 3,
      title: "Exploring the Intersection of Blockchain and Sustainable Development Goals",
      img: "https://res.cloudinary.com/doelkoy5w/image/upload/v1746523078/blogs/ct2z3owj2nvi6zae2oeh.jpg",
      desc: "Blockchain technology has the potential to drive progress towards Sustainable Development Goals (SDGs) by enhancing transparency, accountability...",
      full: "Blockchain technology has the potential to drive progress towards Sustainable Development Goals (SDGs) by enhancing transparency, accountability, and efficiency in global initiatives. By enabling decentralized solutions, blockchain can support areas such as clean energy, financial inclusion, and sustainable agriculture.",
      date: "Published on May 6, 2025",
    },
  ];

  const openPopup = (blog) => {
    setActiveBlog(blog);
    setShowPopup(true);
  };

  return (
    <>
          <div
          
        className="relative w-full h-[250px] bg-[#f7f4fd] bg-right bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://cdn3d.iconscout.com/3d/premium/thumb/multi-chain-block-7286415-6152106.png')",
           
        }}
      >
        <h2 className="font-bold absolute top-1/3 left-12 mx-auto md:text-[40px] text-2xl font-headingFont">
          Kairaa Blockchain Academy's Blog
        </h2>
      </div>
      

      {/* VERTICAL LAYOUT CARDS */}
      <div className="my-12 space-y-12">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="m-8 items-center justify-center"
          >
            <div className="border-3 border-gray-300 flex md:w-4/6 w-full h-64 m-auto">
              <div className="w-2/5">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="object-cover h-full w-full"
                />
              </div>

              <div className="md:p-8 p-2 w-3/5">
                <h2 className="font-bold font-headingFont md:text-xl text-lg my-2 line-clamp-2">
                  {blog.title}
                </h2>

                <p className="md:text-lg text-md line-clamp-3">{blog.desc}</p>

                <button
                  onClick={() => openPopup(blog)}
                  className="mt-4 text-xl p-4 rounded-md underline text-[#1c2a59] font-paraFont font-bold inline-block"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* POPUP MODAL */}
      {showPopup && activeBlog && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] md:w-[60%] max-h-[90vh] overflow-y-auto rounded-lg shadow-lg relative">
            <div className="relative z-10 max-w-3xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="flex justify-between items-start p-6 border-b">
                <h3 className="text-xl font-semibold">{activeBlog.title}</h3>
              </div>

              <div className="p-6">
                <img
                  src={activeBlog.img}
                  alt={activeBlog.title}
                  className="w-full h-56 object-cover rounded-md mb-4"
                />

                <p className="text-gray-700 text-lg leading-relaxed">
                  {activeBlog.full}
                </p>

                <div className="mt-6 text-sm text-gray-500 border-t pt-4">
                 {activeBlog.date}
                </div>
              </div>
            </div>

            {/* Close Popup */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 z-10"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
