import React, { useState } from 'react';

const ModernCardSection = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const cards = [
    {
      title: "Premium Experience",
      description: "Elevate your digital presence with our premium tier that includes advanced analytics and priority support.",
      image: "/api/placeholder/400/240",
      primaryButton: "Get Started",
      secondaryButton: "Learn More",
      tag: "Popular"
    },
    {
      title: "Creative Solutions",
      description: "Unlock your creative potential with tools designed for maximum impact and engagement.",
      image: "/api/placeholder/400/240",
      primaryButton: "Explore Features",
      secondaryButton: "View Demo",
      tag: "New"
    },
    {
      title: "Enterprise Suite",
      description: "Comprehensive solutions for organizations requiring scalable infrastructure and dedicated support.",
      image: "/api/placeholder/400/240",
      primaryButton: "Contact Sales",
      secondaryButton: "Schedule Demo",
      tag: "Enterprise"
    }
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-medium uppercase tracking-wider text-sm">Our Offerings</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Solutions Designed For You</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect solution tailored to your specific needs and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl group"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {/* Image container with overlay effect */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  {card.tag}
                </div>
              </div>
              
              {/* Card content with hover effects */}
              <div className="p-6 relative">
                {/* Animated accent line */}
                <div 
                  className={`h-1 bg-indigo-600 absolute top-0 left-0 transition-all duration-500 ease-out ${hoverIndex === index ? 'w-full' : 'w-12'}`}
                ></div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {card.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {card.description}
                </p>
                
                {/* Button container */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow transform hover:-translate-y-0.5">
                    {card.primaryButton}
                  </button>
                  
                  <button className="flex-none w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Optional view all button */}
        <div className="text-center mt-12">
          <button className="bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium py-2 px-6 rounded-lg transition-all duration-300">
            View All Solutions
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModernCardSection;