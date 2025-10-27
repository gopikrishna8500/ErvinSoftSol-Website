import React from "react";
import { Link } from "react-router-dom"; // <-- Added this import
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

const ClientPage = () => {
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
            "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Client</h1>
          <div className="flex justify-center space-x-2 text-gray-200 text-sm">
            <span className="hover:text-white cursor-pointer transition">Home</span>
            <span className="text-orange-400">›</span>
            <span className="text-blue-500 font-semibold">Client</span>
          </div>
        </div>
      </div>

      {/* Client Description */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">Client</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Ervinsoft India Pvt Ltd fulfils the IT manpower requirements of small, medium and large-scale companies including the Fortune 500s across the American continent. We select the best of the lot from a global pool of candidates both locally and overseas to successfully meet the client’s permanent staffing needs. We keenly study all aspects of the organization, its short-term and long-term goals, to provide only the best resources we can. We assess each aspect of the candidate’s work and educational backgrounds, analyze the applicability of his or her skills through interviews and written tests, and perform background checks and verifications to ensure a hassle-free recruitment process for our clients.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            Our demand-supply recruitment framework is supported by a robust 24/7 recruitment engine and an extensive database of industry requirements—ensuring you always stay ahead in the job market.
          </p>
        </div>
      </section>

      {/* Tech Logos Scrolling */}
      <section className="py-16 bg-white">
             <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 text-center mb-10">
               Our Tech Eminence
             </h2>
     
             <div className="overflow-hidden relative mb-6">
               <div className="marquee flex animate-marquee space-x-8">
                 {[goLogo, reactLogo, flutterLogo, pythonLogo, djangoLogo, dotNetLogo, swiftLogo, nodejsLogo, kotlinLogo, javaLogo,
                   goLogo, reactLogo, flutterLogo, pythonLogo, djangoLogo, dotNetLogo, swiftLogo, nodejsLogo, kotlinLogo, javaLogo
                 ].map((logo, index) => (
                   <img key={index} src={logo} alt="Tech Logo" className="inline-block h-16" />
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
        {/* Call to Action */}
        <div className="bg-linear-to-b from-white to-gray-50 py-16 text-center mt-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Need some assistance in selecting what works best for you?
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-4 max-w-3xl mx-auto">
            At APT IT Professional Services, our tech team of managers and strategists are here to help you with a concrete roadmap and help you <span className="font-bold italic text-gray-600">Build Your Own Team</span>.
          </p>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-8">
            Talk to functional consultants and we will guide you to the smartest fit!
          </p>
          <Link
            to="/contact-us"
            className="bg-blue-900 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-base md:text-lg font-semibold transition-colors shadow-lg hover:shadow-xl inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-900 hover:bg-orange-500 text-white flex items-center justify-center rounded-lg shadow-lg transition z-50"
      >
        ↑
      </button>

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-scroll {
            display: inline-block;
            animation: scroll 20s linear infinite;
          }
        `}
      </style>

    </div>
  );
};

export default ClientPage;
