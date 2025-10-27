import React from 'react';
import aboutImg1 from '../assets/about-img3.png';
import googleMap from '../assets/google-map.png';
import { ChevronRight, Smartphone, Monitor, Search } from 'lucide-react';
import appDevelopmentImg from '../assets/Techeminence/app-development.png';
import webDevelopmentImg from '../assets/Techeminence/development.svg';
import staffManagementImg from '../assets/Techeminence/staff-management.svg';
import { Link } from "react-router-dom";
import TestimonialSection  from './TestimonialSection';

const Services = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb Section */}
            <div
                className="relative py-20 bg-cover bg-center overflow-hidden"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80')",
                }}
            >
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl font-bold text-white mb-4">Services</h1>
                    <div className="flex items-center justify-center text-white">
                        <span className="hover:text-orange-400 transition-colors cursor-pointer">
                            Home
                        </span>
                        <ChevronRight className="h-4 w-4 mx-2 text-orange-400" />
                        <span className="text-blue-500">Services</span>
                    </div>
                </div>
            </div>


            {/* Hero Section with Team Image */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center relative">
                    {/* World Map Background */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 pointer-events-none select-none">
                        <img
                            src={googleMap}
                            alt="World map background"
                            className="w-full max-w-3xl mx-auto opacity-60"
                            style={{ zIndex: 0 }}
                        />
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold text-slate-800 mb-4">
                            Ervinsoft India Pvt Ltd is one of the fastest-growing IT recruitment companies located in New York, USA.


                        </h2>
                        <p className="text-xl text-gray-500 mb-12">
                            Engineering Tomorrow's Tech - Today!
                        </p>
                    </div>
                    {/* Team Illustration */}
                    <div className="relative mb-12">
                        <img
                            src={aboutImg1}
                            alt="Professional team illustration"
                            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
                        />
                    </div>
                    {/* Services Section */}
                    {/* Services Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {/* Job Seeker */}
                        <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group hover:bg-blue-600 hover:text-white">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                                    <img src={appDevelopmentImg} alt="Job Seeker" className="w-8 h-8" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-white">
                                Job Seeker
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white">
                                Ervinsoft India Pvt Ltd provides job seekers with employment opportunities to IT companies and Fortune 500 corporations, matching skills with top job openings.
                            </p>
                            <button className="bg-blue-900 hover:bg-blue-900 text-white px-6 py-2 rounded-lg transition-colors">
                                <Link to="/jobSeeker">Read More</Link>
                            </button>
                        </div>
                        {/* Employee */}
                        <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group hover:bg-blue-600 hover:text-white">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                                    <img src={staffManagementImg} alt="Employee" className="w-8 h-8" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-white">
                                Employee
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white">
                                We provide talent to companies on contract or contract-to-hire basis and execute training initiatives to meet client-specific project needs.
                            </p>
                            <button className="bg-blue-900 hover:bg-blue-900 text-white px-6 py-2 rounded-lg transition-colors">
                                <Link to="/employee">Read More</Link>
                            </button>
                        </div>

                        {/* Client */}
                        <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group hover:bg-blue-600 hover:text-white">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                                    <img src={webDevelopmentImg} alt="Client" className="w-8 h-8" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-white">
                                Client
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white">
                                We fulfil IT manpower requirements for companies including Fortune 500s, selecting the best global talent to meet permanent staffing needs.
                            </p>
                            <button className="bg-blue-900 hover:bg-blue-900 text-white px-6 py-2 rounded-lg transition-colors">
                                <Link to="/client">Read More</Link>
                            </button>
                        </div>


                    </div>
                </div>
            </div>
            <TestimonialSection/>
            <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-900 hover:bg-orange-600 text-white rounded-lg shadow-lg flex items-center justify-center"
      >
        ↑
      </button>
        </div>
    );
};

export default Services;