import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Background and images
import heroBg from "../assets/hero-bg.jpg";
import projectPreview from "../assets/project1.jpg";
import blogPreview from "../assets/blog1.jpg";

// Tool Icons
import awsIcon from "../assets/skills/aws.png";
import dockerIcon from "../assets/skills/docker.png";
import jenkinsIcon from "../assets/skills/jenkins.png";
import k8sIcon from "../assets/skills/kubernetes.png";
import terraformIcon from "../assets/skills/terraform.png";

export default function Home() {
  return (
    <div className="text-white">

      {/* 🔷 Hero Section */}
      <section
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <motion.h1 className="text-5xl font-bold text-teal-400 mb-4" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Hi, I'm Asifali Shaik
        </motion.h1>
        <p className="text-xl text-gray-200 max-w-2xl">
          Senior DevOps Engineer with 5+ years in AWS, Kubernetes, Terraform, Jenkins & CI/CD.
        </p>
        <div className="flex gap-4 mt-6">
          <Link to="/projects" className="bg-teal-500 px-5 py-2 rounded hover:bg-teal-400">Projects</Link>
          <Link to="/blog" className="bg-indigo-500 px-5 py-2 rounded hover:bg-indigo-400">Blog</Link>
        </div>
      </section>

      {/* 🛠 Skills Section */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-teal-400 mb-10">Tools I Use</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
          {[awsIcon, dockerIcon, jenkinsIcon, k8sIcon, terraformIcon].map((icon, index) => (
            <img key={index} src={icon} alt="tool" className="w-16 h-16 hover:scale-110 transition" />
          ))}
        </div>
      </section>

      {/* 🚀 Projects Preview */}
      <section className="py-16 px-6 bg-gray-800">
        <h2 className="text-3xl font-bold text-center text-teal-400 mb-8">Featured Project</h2>
        <div className="bg-gray-700 p-6 rounded-lg max-w-4xl mx-auto">
          <img src={projectPreview} alt="project" className="w-full h-56 object-cover rounded mb-4" />
          <h3 className="text-xl font-semibold">POS System CI/CD</h3>
          <p className="text-gray-300 text-sm">
            Complete CI/CD pipeline using Jenkins, Docker, Kubernetes on AWS.
          </p>
          <Link to="/projects" className="text-teal-400 mt-2 inline-block hover:underline">View more →</Link>
        </div>
      </section>

      {/* ✍️ Blog Preview */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-teal-400 mb-8">Latest Blog</h2>
        <div className="bg-gray-800 p-6 rounded-lg max-w-4xl mx-auto">
          <img src={blogPreview} alt="blog" className="w-full h-56 object-cover rounded mb-4" />
          <h3 className="text-xl font-semibold">CI/CD with GitHub Actions</h3>
          <p className="text-gray-300 text-sm">
            Learn how to deploy containerized apps to Kubernetes using GitHub Actions.
          </p>
          <Link to="/blog" className="text-teal-400 mt-2 inline-block hover:underline">Read more →</Link>
        </div>
      </section>

      {/* 📄 Resume Section */}
      <section className="py-16 px-6 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold text-teal-400 mb-4">Download My Resume</h2>
        <a href="/assets/resume.pdf" download className="bg-teal-500 px-6 py-3 rounded text-white hover:bg-teal-400 transition">
          Download Resume
        </a>
      </section>

      {/* 📬 Contact CTA */}
      <section className="py-16 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold text-teal-400 mb-4">Let’s Connect</h2>
        <p className="text-gray-300 mb-4">Got a DevOps project or role? Let’s work together.</p>
        <Link to="/contact" className="bg-indigo-500 px-6 py-3 text-white rounded hover:bg-indigo-400">
          Contact Me
        </Link>
      </section>
    </div>
  );
}
