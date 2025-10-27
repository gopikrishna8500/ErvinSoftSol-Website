import React, { useState } from "react";
import { Smartphone, Wrench, Globe, RefreshCw, Palette, CheckCircle, Search, Link2 } from "lucide-react";

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

const MobileAppDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div
        className="relative py-30 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Job Seeker
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-white text-sm sm:text-base">
            <span className="hover:text-orange-400 transition-colors cursor-pointer">Home</span>
            <span className="text-orange-400">›</span>
            <span className="text-blue-500"> Job Seeker</span>
          </div>
        </div>
      </div>

      {/* Job Seeker Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">Job Seeker</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Ervinsoft India Pvt Ltd provides job seekers with employment opportunities in small, medium, and large-scale IT companies, including Fortune 500 corporations.
            Our client-centric and dedicated recruitment team connects you with the latest job openings that align with your educational background, work experience, career aspirations, and long-term goals.
            We specialize in various IT sectors such as Application Development and Maintenance, Data Warehousing, QA Testing, ERP, Infrastructure Management, and more.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            Our demand-supply recruitment framework is supported by a robust 24/7 recruitment engine and an extensive database of industry requirements—ensuring you always stay ahead in the job market.
          </p>
        </div>
      </section>

      {/* Our Tech Eminence Section */}
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
              <h3 className="text-xl font-bold mb-2">Development Team</h3>
              <p>A fully committed team working exclusively on your product.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-900 hover:bg-orange-600 text-white rounded-lg shadow-lg flex items-center justify-center"
      >
        ↑
      </button>

    </div>
  );
};

export default MobileAppDevelopmentPage;
