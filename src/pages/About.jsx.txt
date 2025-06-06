import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-8">About Me</h2>
      <p className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed">
        I’m a passionate DevOps Engineer with 5+ years of experience in building CI/CD pipelines,
        automating infrastructure with Terraform and Ansible, and deploying containerized apps
        on Kubernetes. I love solving real-world problems by integrating the right tools and
        automation strategies to streamline delivery and improve reliability.
      </p>
    </div>
  );
}
