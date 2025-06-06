import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="DevOps Logo" className="w-8 h-8 rounded-full" />
          <span className="text-xl font-bold">Asiftechhub</span>
        </Link>
        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-teal-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-teal-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-teal-400">Projects</Link></li>
          <li><Link to="/blog" className="hover:text-teal-400">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-teal-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
