import React from "react";
import productChainImg from '../assets/product-chain.png';
import softwareEngineerImg from '../assets/softwareengineer.png';
import teamLeaderImg from '../assets/team-leader.png';

import goLogo from "../assets/Techeminence/Go-Logo.png";
import reactLogo from "../assets/Techeminence/React.png";
import flutterLogo from "../assets/Techeminence/flutter.png";
import pythonLogo from "../assets/Techeminence/python-logo-master-v3-TM.png";
import djangoLogo from "../assets/Techeminence/django.png";
import dotNetLogo from "../assets/Techeminence/NET.png";
import swiftLogo from "../assets/Techeminence/Swift.png";
import nodejsLogo from "../assets/Techeminence/nodejsDark.png";
import kotlinLogo from "../assets/Techeminence/kotlin-logo.png";
import javaLogo from "../assets/Techeminence/Java.png";

const EmployeePage = () => {
  const techLogos = [
    goLogo, reactLogo, flutterLogo, pythonLogo, djangoLogo,
    dotNetLogo, swiftLogo, nodejsLogo, kotlinLogo, javaLogo,
    goLogo, reactLogo, flutterLogo, pythonLogo, djangoLogo,
    dotNetLogo, swiftLogo, nodejsLogo, kotlinLogo, javaLogo
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div
        className="relative py-30 bg-cover bg-center overflow-hidden"
        style={{
           backgroundImage:
            "url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Employee
          </h1>

          <div className="flex justify-center space-x-2 text-gray-200 text-sm">
            <span className="hover:text-white cursor-pointer transition">Home</span>
            <span className="text-orange-400">›</span>
            <span className="text-blue-500 font-semibold">Employee</span>
          </div>
        </div>
      </div>

      {/* Employee Description */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">Employee</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
Ervinsoft India Pvt Ltd provides talent to small, medium and large-scale businesses as well as Fortune 500 companies on a contract or contract-to-hire basis on short-term or specialized work requirements. We strive to understand our client’s business area and accordingly plan and execute training initiatives to put our resources at par with the business or project requirements. Our contractual staffing solutions are planned and deployed to serve the client long term with the best talent available in the market.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            Our demand-supply recruitment framework is supported by a robust 24/7 recruitment engine and an extensive database of industry requirements—ensuring you always stay ahead in the job market.
          </p>
        </div>
      </section>

      {/* Our Tech Eminence */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Our Tech Eminence
        </h2>

        <div className="overflow-hidden">
          <div className="marquee flex items-center space-x-8">
            {techLogos.map((logo, index) => (
              <img key={index} src={logo} alt="tech stack" className="h-16 w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 lg:max-w-[80%]">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6">
                  Our Engagement Models
                </h2>
      
                <p className="text-gray-500 text-center mb-12 max-w-3xl mx-auto">
                  We offer flexible engagement models tailored to your product lifecycle, resource needs, and budget.
                </p>
      
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:bg-blue-500 hover:text-white transition">
                    <img src={productChainImg} className="w-20 h-20 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Product Development</h3>
                    <p>We convert your ideas into full market-ready products.</p>
                  </div>
      
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:bg-blue-500 hover:text-white transition">
                    <img src={softwareEngineerImg} className="w-20 h-20 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Team Extension</h3>
                    <p>Extend your in-house team with our expert professionals.</p>
                  </div>
      
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:bg-blue-500 hover:text-white transition">
                    <img src={teamLeaderImg} className="w-20 h-20 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Dedicated Development Team</h3>
                    <p>A fully committed team working exclusively on your product.</p>
                  </div>
      
                </div>
              </div>
            </section>
      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-900 hover:bg-orange-500 text-white flex items-center justify-center rounded-lg shadow-lg transition z-50"
      >
        ↑
      </button>

    </div>
  );
};

export default EmployeePage;
