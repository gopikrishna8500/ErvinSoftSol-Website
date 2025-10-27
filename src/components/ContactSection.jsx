import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Briefcase, Users, Mail, Phone, MapPin, Clock } from "lucide-react";
import aptitpsLogo from "../assets/aptitps-logo.png";
const ContactSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

    return (
        <div className="w-full">

            {/* ================= Contact Section ================= */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Need Any Help Section */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">Need Any Help?</h2>
                        <p className="text-gray-600 text-lg">
                            It really comes down to understanding the steps in the process and then executing on those steps.
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {/* Email Us Card */}
                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Email Us</h3>
                            <p className="text-gray-600 mb-4">Email us if you have any question.</p>
                            <div className="flex items-center text-orange-500">
                                <Mail className="h-5 w-5 mr-2" />
                                <a href="mailto:info@aptips.com" className="text-orange-500 hover:underline">
                                    info@ervinsoft.com
                                </a>
                            </div>
                        </div>

                        {/* Call Us Card */}
                        <div className="bg-blue-900 text-white p-8 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Call us</h3>
                            <p className="mb-4">Our support agent will work with you to meet your lending needs.</p>
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 mr-2" />
                                <a href="tel:+17185324243" className="text-white hover:underline">
                                   +1 (718) 715-0987
                                </a>
                            </div>
                        </div>

                        {/* Address Card */}
                        <div className="bg-slate-800 text-white p-8 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Address</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <MapPin className="h-5 w-5 mr-2 mt-0.5 shrink-0" />
                                    <p>180 Gardiners Ave,
                                        PO BOX 7,
                                        Levittown, NY 11756</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Opening Time</p>
                                    <div className="flex items-center mt-1">
                                        <Clock className="h-4 w-4 mr-2" />
                                        <p className="text-sm">Mon- Fri: 9AM to 5PM EST</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ================= Stats/Action Box Section ================= */}
                    <section ref={ref} className="w-full bg-gray-100 py-12">
                        <div className="w-full max-w-7xl mx-auto px-4 lg:px-16">
                            <div className="flex flex-col lg:flex-row items-center justify-between w-full">

                                {/* Left: Logo + Text */}
                                <div className="flex flex-col lg:flex-row items-center lg:items-start mb-8 lg:mb-0 text-center lg:text-left lg:w-7/12">
                                    <div className="shrink-0 mb-4 lg:mb-0">
                                        <img
                                            src={aptitpsLogo}
                                            alt="APTITPS Logo"
                                            className="h-16 w-auto object-contain mx-auto lg:mx-0"
                                        />
                                    </div>
                                    <p className="text-gray-700 lg:ml-4">
                                        Create a free account to find thousands of Jobs, Employment & Career Opportunities around you!
                                    </p>
                                </div>

                                {/* Right: Counters */}
                                <div className="flex flex-col sm:flex-row justify-center lg:justify-end items-center lg:items-start space-y-4 sm:space-y-0 sm:space-x-12 lg:space-x-16 lg:w-5/12 text-center lg:text-left">
                                    {/* Jobs Posted */}
                                    <div className="flex flex-col items-center sm:items-start">
                                        <div className="flex items-center justify-center sm:justify-start mb-2">
                                            <Briefcase className="h-8 w-8 text-blue-900 mr-2" />
                                            <span className="text-3xl font-bold text-gray-800">
                                                {inView ? <CountUp start={0} end={1562} duration={3} separator="," /> : 0}
                                            </span>
                                        </div>
                                        <p className="text-gray-600">Jobs Posted</p>
                                    </div>

                                    {/* Companies */}
                                    <div className="flex flex-col items-center sm:items-start">
                                        <div className="flex items-center justify-center sm:justify-start mb-2">
                                            <Users className="h-8 w-8 text-orange-500 mr-2" />
                                            <span className="text-3xl font-bold text-gray-800">
                                                {inView ? <CountUp start={0} end={240} duration={3} separator="," /> : 0}
                                            </span>
                                        </div>
                                        <p className="text-gray-600">Companies</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                </div>
            </section>

        </div>
    );
};

export default ContactSection;
