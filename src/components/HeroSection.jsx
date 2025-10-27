import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; 

const HeroSection = () => {
  const navigate = useNavigate(); 

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=60",
      title: "Welcome To Ervinsoft India Pvt Ltd",
      subtitle: "Leading IT Staffing & Consulting Partner",
      description: "We connect top-tier IT talent with organizations to accelerate innovation and business growth.",
      button: "READ MORE",
      link: "/about" 
    },
    {
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=60",
      title: "Ervinsoft - Your Technology Workforce Partner",
      subtitle: "Trusted IT Staffing & Resourcing Solutions",
      description: "Delivering skilled professionals who power digital transformation across industries.",
      button: "READ MORE",
      link: "/about" 
    },
    {
      image: "https://stssoftware.com/wp-content/uploads/contact-us-1.webp?auto=format&fit=crop&w=1600&q=60",
      title: "Ervinsoft Software Solutions",
      subtitle: "We Build, Scale, and Transform Businesses",
      description: "From web apps to enterprise solutions — we design and deliver future-ready technology.",
      button: "GET STARTED",
      link: "/about" 
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[800px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image} alt="" className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4">
            <div className="text-white max-w-2xl">
              <h1 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h1>
              <h2 className="text-lg md:text-2xl font-semibold mb-2">{slide.subtitle}</h2>
              <p className="text-sm md:text-base mb-4">{slide.description}</p>

              <button
                className="px-5 py-2 bg-blue-900 hover:bg-blue-700 transition rounded-md text-sm font-medium uppercase"
                onClick={() => navigate(slide.link)} 
              >
                {slide.button}
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default HeroSection;
