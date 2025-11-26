import React from 'react';


export default function Gallery() {
return (
   
<>
    <div className="container items-center justify-between">
        <div className="m-12 rounded-lg rounded-br-[100px] bg-[#caddfe] p-0.5">
            <h1 className="mx-4 my-8 p-3 text-5xl font-bold">Gallery</h1>
        </div>
    </div>


    <div className="m-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex w-full flex-col gap-4 rounded-lg bg-gray-50 p-4">
            <img className="h-[300px] rounded-lg object-cover" src="https://res.cloudinary.com/doelkoy5w/image/upload/v1735884505/gallery/qglwyz9kaceqhwpskzaa.jpg" alt="Gallery 1" />
                <p className="font-paraFont w-fit rounded-md bg-[#DC81A7] px-2 pt-1 text-sm font-bold text-white">Internship / Project /Training / Courses</p>
                <p className="font-headingFont text-lg font-medium">"Shaping Futures Through Real-World Learning" The VIT University interns at Kairaa Blockchain Academy's Vellore branch are gaining invaluable industry experience by working on the groundbreaking project Startup Connect. This initiative not only enhances their technical expertise but also fosters creativity and teamwork, preparing them to lead in the ever-evolving blockchain landscape. Their journey reflects our commitment to nurturing future innovators.</p>
        </div>
    

        <div className="flex w-full flex-col gap-4 rounded-lg bg-gray-50 p-4">
            <img className="h-[300px] rounded-lg object-cover" src="https://res.cloudinary.com/doelkoy5w/image/upload/v1735883528/gallery/sl5hihubz0qlpkimqg24.jpg" alt="Gallery 2" />
            <p className="font-paraFont w-fit rounded-md bg-[#DC81A7] px-2 pt-1 text-sm font-bold text-white">Internship / Project</p>
            <p className="font-headingFont text-lg font-medium">"Empowering Innovation with VIT University Interns" At Kairaa Blockchain Academy's Vellore branch, talented students from VIT University are showcasing their skills and dedication through a remarkable internship journey. Since July, they have been actively working on a real-time project, Startup Connect, which bridges innovative ideas with entrepreneurial opportunities. Their contributions exemplify the synergy between academic excellence and hands-on experience, driving impactful solutions in the blockchain space.</p>
        </div>


        <div className="flex w-full flex-col gap-4 rounded-lg bg-gray-50 p-4">
            <img className="h-[300px] rounded-lg object-cover" src="https://res.cloudinary.com/doelkoy5w/image/upload/v1731666952/gallery/dhijwm6eamcnolmxqftq.jpg" alt="Gallery 3" />
            <p className="font-paraFont w-fit rounded-md bg-[#DC81A7] px-2 pt-1 text-sm font-bold text-white">Blockchain Seminar</p>
            <p className="font-headingFont text-lg font-medium">An inspiring moment was captured during the Blockchain seminar hosted by Kairaa Blockchain Academy at Dr. G. U. Pope College of Engineering, Tuticorin. The event sparked thoughtful discussions and piqued the interest of students in exploring the vast potential of blockchain technology.</p>
        </div>


        <div className="flex w-full flex-col gap-4 rounded-lg bg-gray-50 p-4">
            <img className="h-[300px] rounded-lg object-cover" src="https://res.cloudinary.com/doelkoy5w/image/upload/v1731666025/gallery/v7wclatzfzrt4ojju50n.jpg" alt="Gallery 4" />
            <p className="font-paraFont w-fit rounded-md bg-[#DC81A7] px-2 pt-1 text-sm font-bold text-white">Blockchain Seminar</p>
            <p className="font-headingFont text-lg font-medium">A memorable event unfolded at Government Arts and Science College, Lalgudi, Trichy, as Kairaa Blockchain Academy hosted an enlightening seminar on blockchain technology.The session fostered a sense of innovation, encouraging students to explore how blockchain can revolutionize various industries and create endless possibilities.</p>
        </div>


        <div className="flex w-full flex-col gap-4 rounded-lg bg-gray-50 p-4">
            <img className="h-[300px] rounded-lg object-cover" src="https://res.cloudinary.com/doelkoy5w/image/upload/v1731665198/gallery/rpcb9okivorskichoavu.jpg" alt="Gallery 5" />
            <p className="font-paraFont w-fit rounded-md bg-[#DC81A7] px-2 pt-1 text-sm font-bold text-white">Blockchain Seminar</p>
            <p className="font-headingFont text-lg font-medium">Kairaa Blockchain Academy proudly conducted a dynamic seminar on "Empowering Women in Tech" at Kongunadu College of Engineering and Technology (Autonomous), Namakkal. The session celebrated the potential of women in technology, inspiring students to break barriers and embrace opportunities in blockchain and other cutting-edge fields. It was an empowering event that left a lasting impact on the future tech leaders in attendance.</p>
        </div>
    </div>
</>

);
}