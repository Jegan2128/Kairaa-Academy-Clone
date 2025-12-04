import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* Footer Page */}
      <div className="container justify-between max-w-full items-center mx-auto text-blue-500 bg-[#ede5fc]">
        <div className="grid grid-cols-1 md:grid-cols-4 p-8">
          {/* Logo & Description */}
          <div className="leading-8 md:mx-8">
            <img
              src="https://kairaablockchainacademy.com/static/media/footerLogo2.17ae7cb1ddfdb89591c7.png"
              className="h-40 w-40"
              alt="Kairaa Logo"
            />
            <p className="font-medium">
              Kairaa Blockchain Academy is a top-notch online learning center that offers a wide range of courses.
            </p>

            <ul className="flex py-2 gap-4">
              <a href="https://www.linkedin.com/company/kairaa-blockchain-academy/">
                <img
                  src="https://w7.pngwing.com/pngs/887/616/png-transparent-linkedin-icon-linkedin-text-rectangle-logo-thumbnail.png"
                  className="h-10 w-10"
                  alt="LinkedIn"
                />
              </a>
              <a href="https://www.instagram.com/kairaaacademy/">
                <img
                  src="https://w7.pngwing.com/pngs/689/714/png-transparent-computer-icons-font-awesome-graphy-fashion-ig-miscellaneous-logo-symbol-thumbnail.png"
                  className="h-10 w-10"
                  alt="Instagram"
                />
              </a>
              <a href="https://twitter.com/Kairaa_academy">
                <img
                  src="https://tse1.mm.bing.net/th/id/OIP.k5WmkoPIDHynKU5Ol1EDxQHaHd?pid=ImgDet&w=206&h=207&c=7&o=7&rm=3"
                  className="w-10 h-10"
                  alt="Twitter"
                />
              </a>
              <a href="https://www.facebook.com/kairaaacademy">
                <img
                  src="https://w7.pngwing.com/pngs/909/934/png-transparent-font-awesome-computer-icons-facebook-inc-font-face-siluet-rectangle-logo-blog-thumbnail.png"
                  className="h-10 w-10"
                  alt="Facebook"
                />
              </a>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:m-12 md:leading-12 leading-8">
            <h1 className="text-2xl font-bold">Quick Links</h1>
            <ul className="font-medium">
              <Link to="/Aboutus">About Us</Link>
            </ul>
            <ul className="font-medium">
              <Link to="/Blog">Blog</Link>
            </ul>
            <ul className="font-medium">
              <Link to="/PaymentTerms">Terms & Conditions</Link>
            </ul>
            <ul className="font-medium">
              <Link to="/Privacy_Policy">Privacy Policy</Link>
            </ul>
          </div>

          {/* Branches */}
          <div className="md:m-12 md:leading-12 leading-8">
            <h1 className="text-2xl font-bold">Branches</h1>
            <div className="grid md:grid-cols-2 gap-x-20">
              <ul className="font-medium">Chennai</ul>
              <ul className="font-medium">Trichy</ul>
              <ul className="font-medium">Madurai</ul>
              <ul className="font-medium">Tirunelveli</ul>
              <ul className="font-medium">Salem</ul>
              <ul className="font-medium">Coimbatore</ul>
              <ul className="font-medium">Thrissur</ul>
              <ul className="font-medium">Chittoor</ul>
            </div>
          </div>

          {/* Contact */}
          <div className="md:m-12 md:leading-12 leading-8">
            <h1 className="text-2xl font-bold">Contact</h1>
            <ul className="font-medium">
              <a href="tel:+91 7092774077">+91 7092774077</a>
            </ul>
            <ul className="font-medium">
              <a href="mailto:support@kairaaacademy.com">support@kairaaacademy.com</a>
            </ul>
            <p className="leading-6 font-medium">
              131, 2nd floor, DB Road, RS Puram, Coimbatore - 641002
            </p>
          </div>
        </div>

        <div className="m-4">
          <hr className="border border-gray-200" />
          <p className="text-center my-2">
            ©2025. Kairaa Blockchain Academy. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}
