import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div
        className="relative py-20 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <div className="flex items-center justify-center space-x-2 text-white">
            <span className="hover:text-sky-300 transition-colors cursor-pointer">Home</span>
            <span className="text-sky-300">›</span>
            <span className="text-sky-500 font-semibold">Contact us</span>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 justify-items-center  ">
            {[{
              icon: <Phone className="w-8 h-8  text-sky-500 " />,
              title: "Phone Number",
              content: "+1 (718) 715-0987"
            }, {
              icon: <Mail className="w-8 h-8 text-sky-500" />,
              title: "Email",
              content: "info@ervinsoft.com"
            }, {
              icon: <Clock className="w-8 h-8 text-sky-500" />,
              title: "Mon- Fri",
              content: "9AM to 5PM EST"
            }].map((card, idx) => (
              <div
                key={idx}
                className="text-center transition-shadow duration-200 hover:bg-blue-500 rounded-lg cursor-pointer flex flex-col justify-center items-center w-64 h-64 bg-gray-50"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center ">
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-700">{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Branches Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Branches</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {[
              {
                title: "United States",
                address: ["800 Third Avenue,", "FRNT A #1472 New York, NY 10022", "United States"]
              },
              {
                title: "United States",
                address: ["30 N Gould St Sheridan,", "WY 82801", "United States"]
              },
              {
                title: "New York",
                address: ["180 Gardiners Ave, PO BOX 7, Levittown, NY 11756"]
              }
            ].map((branch, idx) => (
              <div
                key={idx}
                className="text-center transition-shadow duration-200 hover:bg-blue-500 rounded-lg cursor-pointer flex flex-col justify-center items-center w-64 h-64 bg-gray-50"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-sky-500" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{branch.title}</h3>
                <div className="text-gray-700 space-y-1">
                  {branch.address.map((line, i) => <p key={i}>{line}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">We'd Love to Hear From You</h2>
            <p className="text-gray-600">If you have any questions regarding our services, please contact us below.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="fullName"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                required
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                required
              />
            </div>

            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Message"
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-vertical"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-900 hover:bg-sky-600 text-white px-8 py-3 rounded-md font-semibold transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-900 hover:bg-orange-600 text-white rounded-lg shadow-lg flex items-center justify-center"
      >
        ↑
      </button>
    </div>
  );
};

export default ContactUsPage;
