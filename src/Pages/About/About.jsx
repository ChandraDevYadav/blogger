import React from "react";
import ImageGallery from "../../Components/About/ImageGallery";
import { FaRegCommentDots } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Welcome to [Your Blogger App Name], your go-to platform for sharing stories, insights, and experiences.
          </p>
        </div>

        {/* Mission Section */}
        <div>
          <ImageGallery/>
        </div>

        {/* Team Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", role: "Founder", img: "/sp3.jpg" },
              { name: "Jane Smith", role: "Editor", img: "/high4.jpg" },
              { name: "Sam Wilson", role: "Developer", img: "/high5.jpg" },
            ].map((member, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 bg-blue-600 text-white py-8 px-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-6">
            Become a part of our blogging community. Share your story and inspire others.
          </p>
          <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-lg hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
