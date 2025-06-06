import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <motion.h1
        className="text-5xl font-extrabold text-teal-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m Asifali Shaik
      </motion.h1>

      <motion.p
        className="text-xl text-gray-300 mt-4 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Senior DevOps Engineer skilled in Kubernetes, Terraform, Jenkins, and AWS. I build scalable, secure, and automated infrastructure systems.
      </motion.p>

      <motion.div
        className="flex gap-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a href="#/projects" className="bg-teal-500 text-white px-6 py-3 rounded hover:bg-teal-400">Projects</a>
        <a href="#/blog" className="bg-indigo-500 text-white px-6 py-3 rounded hover:bg-indigo-400">Blogs</a>
      </motion.div>
    </div>
  );
}
