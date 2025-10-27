import React from 'react';
import aboutImg1 from '../assets/about-img1.png';
import googleMap from '../assets/google-map.png';
import { ChevronRight } from 'lucide-react';
import appDevelopmentImg from '../assets/Techeminence/app-development.png';
import webDevelopmentImg from '../assets/Techeminence/development.svg';
import staffManagementImg from '../assets/Techeminence/staff-management.svg';
import { Link } from "react-router-dom";
import TestimonialSection from './TestimonialSection';

const AboutUsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div
                className="relative py-20 bg-cover bg-center overflow-hidden"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1521790361543-f645cf042ec4?auto=format&fit=crop&w=1600&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-gray-900/80 to-slate-900/90"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
                        Welcome to Ervinsoft India Pvt Ltd
                    </h1>
                    <p className="text-xl text-white mb-4">IT Staffing & Recruitment Services</p>
                    <div className="flex items-center justify-center text-white">
                        <span className="hover:text-blue-400 transition-colors cursor-pointer">Home</span>
                        <ChevronRight className="h-4 w-4 mx-2 text-blue-400" />
                        <span className="text-blue-600 font-semibold">About Us</span>
                    </div>
                </div>
            </div>

            {/* Hero Illustration */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center relative">
                    <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                        <h2 className="text-4xl font-bold text-slate-800 mb-2">
                            About Ervinsoft India Pvt Ltd
                        </h2>
                        <p className="text-xl text-gray-500 mb-8">
                            Founded in early 2016, Ervinsoft India Pvt Ltd is one of the fastest-growing IT recruitment companies located in New York, USA.
                        </p>
                    </div>

                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 pointer-events-none select-none">
                        <img
                            src={googleMap}
                            alt="World map background"
                            className="w-full max-w-3xl mx-auto opacity-60"
                            style={{ zIndex: 0 }}
                        />
                    </div>

                    <div className="relative mt-24 mb-12 z-10">
                        <img
                            src={aboutImg1}
                            alt="Professional team illustration"
                            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
                        />
                    </div>

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
                                <Link to="/jobseeker">Read More</Link>
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

            {/* About Content Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <img
                                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop"
                                alt="Person working on laptop"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-800 mb-6">About Us</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Founded in early 2016, Ervinsoft India Pvt Ltd is one of the fastest-growing IT recruitment companies located in New York, USA. The organization is backed by IT experts with nearly 20 years of experience in web technologies, data management, software development lifecycles, and enterprise architecture.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Our professional services extend to fresh job seekers, experienced personnel, and small to large-scale IT companies. We provide resources on contractual and permanent employment basis to big corporate giants such as Microsoft, Dell, IBM, Accenture, and more.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                At Ervinsoft India Pvt Ltd, we are more than just manpower suppliers. We partner the best resources with the most rewarding talent seekers, building long-term relationships through efficient services, budgeted engagement models, and dedicated teams.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vision & Purpose Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-800 mb-5">Our Vision & Purpose</h2>
                    <div className="space-y-12">
                        <p className="text-gray-600 leading-relaxed">
                            At Ervinsoft India Pvt Ltd, we are committed to building the best IT careers possible by creating the perfect match between a job seeker’s expertise and client requirements, guaranteeing a long and fruitful association for all.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            To elevate the recruiting industry by changing the rules of the game. We're building a company made up of profoundly talented people who leverage data to deliver the top passive technology talent.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            By following our values to achieve significant growth and success, we aim to make a meaningful change in the way our industry partners with and is regarded by candidates and clients.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our purpose is to connect technology’s greatest minds with the world’s top companies while cultivating a work environment that reflects our values: Be Amazing, Have Fun, Do the Essential, Adapt, and Have Purpose.
                        </p>
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

export default AboutUsPage;
