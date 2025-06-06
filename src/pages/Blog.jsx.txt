import React from "react";
import blogImage from "../assets/blog1.jpg";

const blogs = [
  {
    title: "CI/CD with GitHub Actions",
    summary: "Step-by-step tutorial to set up a CI/CD pipeline using GitHub Actions with Kubernetes.",
    image: blogImage
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-10">Blog</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {blogs.map((blog, idx) => (
          <div key={idx} className="bg-gray-800 p-5 rounded-lg shadow-md">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded mb-3" />
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-400 text-sm">{blog.summary}</p>
            <a href="#" className="text-teal-400 text-sm mt-2 inline-block hover:underline">Read more →</a>
          </div>
        ))}
      </div>
    </div>
  );
}
