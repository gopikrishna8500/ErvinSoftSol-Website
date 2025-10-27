import React from 'react';
import { Link } from "react-router-dom";
import mobileAppImg from '../assets/services-1.jpg';
import webDevImg from '../assets/services-2.jpg';
import staffAugImg from '../assets/services-3.jpg';

const ServicesSection = () => {
   
  const services = [
    {
      title: "Job Seeker",
      description: "Are you looking to jump start your career or acquire more experience in the IT sectors of Application Development and Maintenance, Data Warehousing, QA Testing, ERP, or Infrastructure Management? Then you’ve come to the right place.",
      image: mobileAppImg,
      alt: "Job Seeker",
      link: "/jobseeker",
    },
    {
      title: "Employee",
      description: "Are you a business establishment who wants recruits on contract or contract-to-hire basis to realize your short-term or specialized work requirements? We can delegate the right candidate to suit your project needs.",
      image: webDevImg,
      alt: "employee",
      link: "/employee"
    },
    {
      title: "Client",
      description: "Are you an organization looking for manpower with the perfect blend of IT experience, knowledge and commitment to your business goals and ideals? Allow us to help you fulfill your needs.",
      image: staffAugImg,
      alt: "client",
      link: "/client",
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* ✅ Added Title Here */}
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-14">
          Services
        </h2>

        <div className="mx-auto w-full lg:w-10/12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 justify-center items-stretch">
            {services.map((service, index) => (
              <div key={index} className="group flex flex-col h-full items-center text-center">
                <div className="mb-6 overflow-hidden rounded-lg w-full">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 w-full">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed grow w-full">
                  {service.description}
                </p>
                <div className="mt-auto w-full flex justify-center">
                  <button className="border-2 border-blue-900 text-white bg-blue-900 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-md font-semibold transition-colors">
                    <Link to={service.link}>
                      More Info
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
