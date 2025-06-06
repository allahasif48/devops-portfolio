import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Background and images
import heroBg from "../assets/hero-bg.jpg";
import projectPreview from "../assets/project1.jpg";
import blogPreview from "../assets/blog1.jpg";

// Tool Icons
import {
  SiAmazonaws,
  SiDocker,
  SiJenkins,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiGithub,
  SiPrometheus,
  SiGrafana
} from "react-icons/si";

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
          Senior DevOps Engineer with 5+ years of experience in AWS, Kubernetes, Terraform, Jenkins & CI/CD.
        </p>
        <div className="flex gap-4 mt-6">
          <Link to="/projects" className="bg-teal-500 px-5 py-2 rounded hover:bg-teal-400">Projects</Link>
          <Link to="/blog" className="bg-indigo-500 px-5 py-2 rounded hover:bg-indigo-400">Blog</Link>
        </div>
      </section>

      {/* 🛠 Skills Section */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-teal-400 mb-10">Tools I Use</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center text-white text-center">
          {[ 
            { icon: SiAmazonaws, label: "AWS", color: "text-yellow-400" },
            { icon: SiDocker, label: "Docker", color: "text-blue-400" },
            { icon: SiJenkins, label: "Jenkins", color: "text-red-500" },
            { icon: SiKubernetes, label: "Kubernetes", color: "text-blue-300" },
            { icon: SiTerraform, label: "Terraform", color: "text-purple-400" },
            { icon: SiAnsible, label: "Ansible", color: "text-orange-400" },
            { icon: SiGithub, label: "GitHub", color: "text-gray-300" },
            { icon: SiPrometheus, label: "Prometheus", color: "text-orange-300" },
            { icon: SiGrafana, label: "Grafana", color: "text-orange-200" }
          ].map(({ icon: Icon, label, color }, index) => (
            <div key={index} className="flex flex-col items-center">
              <Icon size={48} className={`hover:scale-110 transition ${color}`} />
              <span className="mt-2 text-sm">{label}</span>
            </div>
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
            Production-grade pipeline using Jenkins, Docker, Kubernetes and GitHub Actions on AWS.
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
            Learn how to build secure CI/CD workflows and deploy to Kubernetes using GitHub Actions.
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
        <p className="text-gray-300 mb-4">Got a DevOps challenge or collaboration? I’d love to hear from you.</p>
        <Link to="/contact" className="bg-indigo-500 px-6 py-3 text-white rounded hover:bg-indigo-400">
          Contact Me
        </Link>
      </section>
    </div>
  );
}
