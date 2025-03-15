import React, { useState, useEffect, useRef } from "react";

const ParticleBackground = ({ isDarkMode }) => {
  const [particles, setParticles] = useState([]);
  const animationFrameId = useRef(null);
  const canvasRef = useRef(null);

  // Particle class for more complex behavior
  class Particle {
    constructor(canvas) {
      this.canvas = canvas;
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 0.5;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
      this.maxConnections = 5;
      this.connectDistance = 100;

      // Create dynamic colors based on theme
      if (isDarkMode) {
        const hue = Math.random() * 60 + 240; // Blue to purple range
        const sat = Math.random() * 30 + 70;
        const light = Math.random() * 20 + 50;
        this.color = `hsla(${hue}, ${sat}%, ${light}%, ${
          Math.random() * 0.5 + 0.2
        })`;
      } else {
        const hue = Math.random() * 60 + 180; // Cyan to blue range
        const sat = Math.random() * 40 + 60;
        const light = Math.random() * 30 + 60;
        this.color = `hsla(${hue}, ${sat}%, ${light}%, ${
          Math.random() * 0.5 + 0.2
        })`;
      }
    }

    update() {
      // Bounce off edges
      if (this.x > this.canvas.width || this.x < 0) {
        this.speedX = -this.speedX;
      }
      if (this.y > this.canvas.height || this.y < 0) {
        this.speedY = -this.speedY;
      }

      // Add some randomness to movement
      if (Math.random() < 0.02) {
        this.speedX += (Math.random() - 0.5) * 0.1;
        this.speedY += (Math.random() - 0.5) * 0.1;
      }

      // Limit max speed
      this.speedX = Math.max(Math.min(this.speedX, 0.7), -0.7);
      this.speedY = Math.max(Math.min(this.speedY, 0.7), -0.7);

      // Update position
      this.x += this.speedX;
      this.y += this.speedY;
    }

    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Initialize particles
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Recreate particles when resizing
      const particleCount = Math.min(
        Math.floor((canvas.width * canvas.height) / 15000),
        150
      );
      const newParticles = [];

      for (let i = 0; i < particleCount; i++) {
        newParticles.push(new Particle(canvas));
      }

      setParticles(newParticles);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isDarkMode]);

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || particles.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connection lines first (behind particles)
      ctx.lineWidth = 0.2;
      particles.forEach((particle) => {
        let connectionCount = 0;
        for (let j = 0; j < particles.length; j++) {
          const otherParticle = particles[j];
          if (
            particle !== otherParticle &&
            connectionCount < particle.maxConnections
          ) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < particle.connectDistance) {
              connectionCount++;
              // Calculate opacity based on distance
              const opacity = 1 - distance / particle.connectDistance;
              ctx.strokeStyle = isDarkMode
                ? `rgba(150, 120, 255, ${opacity * 0.2})`
                : `rgba(100, 180, 255, ${opacity * 0.15})`;

              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        }
      });

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [particles, isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-70 z-0"
    />
  );
};

// Modified HomeSection to incorporate the new particle system
const HomeSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  const typingIndex = useRef(0);
  const fullText = "HHello, I'm";

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Handle loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Typewriter effect implementation
  useEffect(() => {
    if (!isLoaded) return;

    const textTimer = setTimeout(() => {
      if (typingIndex.current < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(typingIndex.current));
        typingIndex.current += 1;
      }
    }, 50);

    return () => clearTimeout(textTimer);
  }, [isLoaded, typedText]);

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${
        isDarkMode ? "" : "bg-gray-50"
      }`}
      id="home"
    >
      {/* Enhanced Particle Background */}
      <ParticleBackground isDarkMode={isDarkMode} />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent pointer-events-none"></div>

      {/* Toggle Theme Button */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800 dark:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-105"
      >
        {isDarkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="5" fill="currentColor" />
            <line
              x1="12"
              y1="1"
              x2="12"
              y2="3"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="12"
              y1="21"
              x2="12"
              y2="23"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="4.22"
              y1="4.22"
              x2="5.64"
              y2="5.64"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="18.36"
              y1="18.36"
              x2="19.78"
              y2="19.78"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="1"
              y1="12"
              x2="3"
              y2="12"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="21"
              y1="12"
              x2="23"
              y2="12"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="4.22"
              y1="19.78"
              x2="5.64"
              y2="18.36"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="18.36"
              y1="5.64"
              x2="19.78"
              y2="4.22"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-indigo-900"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>

      {/* Hero Section */}
      <div className="container mx-auto min-h-screen flex justify-center items-center px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-8 py-12 items-center text-center lg:text-left">
          {/* Left Column - Text Content */}
          <div
            className={`order-2 lg:order-1 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } transition-all duration-1000`}
          >
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {typedText}
              <span
                className={`block mt-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent ${
                  isLoaded ? "opacity-100" : "opacity-0"
                } transition-opacity duration-1000 delay-700`}
              >
                Oktonius Zevanya S.
              </span>
            </h1>

            <p
              className={`text-lg mb-8 max-w-xl mx-auto lg:mx-0 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              } ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              } transition-all duration-1000 delay-300`}
            >
              Full-stack developer skilled in ReactJS & Laravel, currently
              exploring Google Cloud Platform!
            </p>

            <div
              className={`${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              } transition-all duration-1000 delay-500`}
            >
              <button className="group relative px-6 py-3 overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg hover:shadow-purple-500/40 transition-all duration-300 transform active:scale-95">
                <span className="relative z-10 flex items-center">
                  <a href="https://www.linkedin.com/in/oktonius-zevanya/">
                    {" "}
                    About Me
                  </a>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>

              <button
                className={`ml-4 px-6 py-3 rounded-full border-2 ${
                  isDarkMode
                    ? "border-gray-600 text-gray-300 hover:border-gray-400"
                    : "border-gray-300 text-gray-700 hover:border-gray-500"
                } font-medium transition-all duration-300`}
              >
                <a href="#experiences">Explore</a>
              </button>
            </div>
          </div>

          {/* Right Column - 3D Illustration */}
          <div
            className={`order-1 lg:order-2 flex justify-center items-center ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } transition-all duration-1000 delay-200`}
          >
            <div className="relative w-full max-w-lg h-64 md:h-96 animate-[float_6s_ease-in-out_infinite]">
              {/* 3D Futuristic Illustration using SVG */}
              <svg
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <defs>
                  <linearGradient
                    id="grad1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor={isDarkMode ? "#9C27B0" : "#7C4DFF"}
                    />
                    <stop
                      offset="100%"
                      stopColor={isDarkMode ? "#FF9800" : "#448AFF"}
                    />
                  </linearGradient>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop
                      offset="0%"
                      stopColor={isDarkMode ? "#9575CD" : "#64B5F6"}
                    />
                    <stop
                      offset="100%"
                      stopColor={isDarkMode ? "#7E57C2" : "#4FC3F7"}
                    />
                  </linearGradient>
                </defs>

                {/* Enhanced particle effects */}
                <ellipse
                  cx="250"
                  cy="350"
                  rx="150"
                  ry="40"
                  fill="url(#grad2)"
                  opacity="0.5"
                />
                {/* Floating Elements */}
                <g className="animate-[float_4s_ease-in-out_infinite]">
                  <polygon
                    points="250,100 300,200 200,200"
                    fill="url(#grad1)"
                  />
                  <circle cx="250" cy="180" r="30" fill="#fff" opacity="0.2" />
                </g>
                <g className="animate-[floatSlow_6s_ease-in-out_infinite]">
                  <rect
                    x="190"
                    y="220"
                    width="120"
                    height="120"
                    rx="20"
                    fill="url(#grad2)"
                    opacity="0.9"
                  />
                  <circle cx="280" cy="260" r="15" fill="#fff" opacity="0.6" />
                </g>
                {/* Connecting Lines */}
                <line
                  x1="250"
                  y1="130"
                  x2="250"
                  y2="220"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
                <line
                  x1="280"
                  y1="260"
                  x2="320"
                  y2="300"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
                {/* Floating Orbs */}
                <circle
                  cx="170"
                  cy="200"
                  r="12"
                  fill="#FF5722"
                  className="animate-pulse"
                  style={{ animationDuration: "3s" }}
                />
                <circle
                  cx="320"
                  cy="300"
                  r="18"
                  fill="#4CAF50"
                  className="animate-pulse"
                  style={{ animationDuration: "4s" }}
                />
                <circle
                  cx="230"
                  cy="350"
                  r="10"
                  fill="#2196F3"
                  className="animate-pulse"
                  style={{ animationDuration: "2.5s" }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes floatSlow {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(2deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        .animate-[float_4s_ease-in-out_infinite] {
          animation: float 4s ease-in-out infinite;
        }

        .animate-[float_6s_ease-in-out_infinite] {
          animation: float 6s ease-in-out infinite;
        }

        .animate-[floatSlow_6s_ease-in-out_infinite] {
          animation: floatSlow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HomeSection;
