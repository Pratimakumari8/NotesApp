import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-10 w-full text-gray-500 bg-[#FFC6C6] border-t-4 border-[#644A07] ">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-[#644A07]/30 pb-6">
        <div className="md:max-w-96">
          {/* Update Logo and Name */}
          <Link to="/" className="flex items-center gap-2 ">
            <img className="h-9" src={assets.logo} alt="logo" />
            <span className="font-bold text-xl text-[#644A07]">NotesApp</span>
          </Link>
          <p className="mt-6 text-sm text-[#594100]">
            NotesApp helps you organize your thoughts and tasks with ease. Keep
            your notes safe, accessible, and well-organized.
          </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-[#594100]">Quick Links</h2>
            <ul className="text-sm space-y-2">
              {/* Replace with actual links */}
              <li>
                <Link
                  to="/"
                  className="text-[#594100]
 hover:text-[#231e10] transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-[#594100] hover:text-[#3b331d] transition"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/notes"
                  className="text-[#594100] hover:text-[#3b331d] transition"
                >
                  Notes
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-[#594100] hover:text-[#3b331d] transition"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-[#644A07]">Get in Touch</h2>
            <div className="text-sm space-y-2 text-[#594100]">
              <p>+1-212-456-7890</p>
              <p>contact@notesapp.com</p>{" "}
              {/* Replace with your actual contact email */}
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5 text-[#594100]">
        Copyright 2025 © Pratima Kumari. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
