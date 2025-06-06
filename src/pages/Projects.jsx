import React from "react";
import projectImage from "../assets/project1.jpg";

const projects = [
  {
    title: "POS System CI/CD",
    description: "Deployed a POS system with Jenkins, Docker, and Kubernetes on AWS.",
    image: projectImage,
    tags: ["AWS", "Docker", "K8s", "Jenkins"]
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-gray-800 rounded-lg p-5 shadow-md">
            <img src={proj.image} alt={proj.title} className="rounded mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-sm text-gray-400 mb-3">{proj.description}</p>
            <div className="flex gap-2 flex-wrap">
              {proj.tags.map((tag, i) => (
                <span key={i} className="bg-teal-600 px-3 py-1 text-xs rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
