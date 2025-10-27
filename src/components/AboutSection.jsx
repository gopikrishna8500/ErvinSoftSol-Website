import React from 'react';
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      {/* col-lg-8 equivalent container */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* About Section */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">About Us</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Founded in early 2016, Ervinsoft India Pvt Ltd is one of the fastest-growing IT recruitment companies located in New York, USA. The organization is backed by the IT experts, who have been key players in the sectors of web technologies, data warehousing initiatives, data management systems, application lifecycle management, software development lifecycles, and enterprise architecture for close to 20 years in both US and Indian markets
            </p>
            <Link to="/about">
              <button className="bg-blue-900 hover:bg-blue-600 text-white px-8 py-4 rounded-md font-semibold transition-colors">
                Checkout More
              </button>
            </Link>
          </div>

          {/* Vision Section */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Vision</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
             We believe that to truly serve job seekers and job makers, our core focus should be on ideas and innovation. Our vision is to continually strive to develop better means of seamless processes, procedures, systems, and methodologies that will help us bring together the best talents and the best talent-seekers in the industry.
            </p>
            <Link to="/about">
              <button className="bg-blue-900 hover:bg-blue-600 text-white px-8 py-4 rounded-md font-semibold transition-colors">
                Checkout More
              </button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="http://www.ervinsoft.com/images/news-img5.jpg"
              alt="Team collaboration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center space-y-6 w-full">
            <Link to="/jobseeker" className="w-full">
              <button className="bg-blue-900 hover:bg-blue-600 text-white py-8 rounded-md w-full text-center font-semibold transition-colors">
                Job Seeker
              </button>
            </Link>

            <Link to="/employee" className="w-full">
              <button className="bg-blue-900 hover:bg-blue-600 text-white py-8 rounded-md w-full text-center font-semibold transition-colors">
                Employee
              </button>
            </Link>

            <Link to="/client" className="w-full">
              <button className="bg-blue-900 hover:bg-blue-600 text-white py-8 rounded-md w-full text-center font-semibold transition-colors">
                Client
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
