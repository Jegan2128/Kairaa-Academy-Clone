import React, { useState } from "react";

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What courses does Kairaa Blockchain Academy offer?",
      answer:
        "Kairaa Blockchain Academy offers a wide range of courses covering blockchain technology, cryptocurrency, smart contracts, decentralized finance (DeFi), and more. Our courses are designed to cater to beginners as well as experienced professionals in the blockchain industry.",
    },
    {
      id: 2,
      question:
        "Are the courses at Kairaa Blockchain Academy suitable for beginners?",
      answer:
        "Yes, our courses are structured to accommodate learners at all levels, including beginners. We provide comprehensive introductory material, hands-on projects, and expert guidance to ensure that beginners can grasp blockchain concepts effectively.",
    },
    {
      id: 3,
      question:
        "Is financial aid available for Kairaa Blockchain Academy's courses?",
      answer:
        "Kairaa Blockchain Academy understands the importance of accessibility in education. We offer financial aid options, scholarships, and flexible payment plans to make our courses more accessible to deserving candidates. Contact us to learn more about our financial assistance programs.",
    },
    {
      id: 4,
      question: "Do you offer any mentorship or career guidance programs?",
      answer:
        "Currently we have career raodmap which cater to different goals. Coming soon we will include both mentorship and career guidance along with Mock interviews and much more. So stay tuned!,"
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto py-14 px-5">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        {faqs.map((item) => (
          <div key={item.id} className="mb-4">
            {/* Question Button */}
            <button
              onClick={() => toggleFAQ(item.id)}
              className="w-full text-left font-bold bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-lg px-5 py-4 border-3 border-gray-300 rounded-bl-xl rounded-tr-xl flex justify-between items-center transition-all duration-300"
            >
              {item.question}

              {/* Rotating Icon */}
              <span
                className={`text-xl font-bold transform transition-transform duration-300 ${
                  openId === item.id ? "rotate-180" : "rotate-0"
                }`}
              >
                {openId === item.id ? "➖" : "➕"}
              </span>
            </button>

            {/* Sliding Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openId === item.id
                  ? "max-h-40 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="bg-gray-100 p-6 rounded-lg font-semibold text-xl text-center text-gray-700">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
