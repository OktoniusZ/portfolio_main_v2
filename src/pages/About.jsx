import React from "react";
import { FiCode, FiDatabase, FiCloud } from "react-icons/fi"; // Import icons from react-icons

const About = () => {
  return (
    <section
      className="relative z-10 flex items-center justify-center min-h-screen p-4"
      id="about"
    >
      <div className="text-white flex flex-col md:flex-row items-center bg-[rgba(12,12,12,0.6)] rounded-2xl p-6 md:p-[73px] w-full max-w-7xl transition-colors duration-100 ease-in-out hover:transform">
        <ul className="flex flex-col gap-6 md:gap-[50px] w-full">
          <h2 className="text-4xl mb-12 font-bold text-white drop-shadow-md relative text-center">
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
          </h2>
          <li className="flex flex-col md:flex-row items-center rounded-2xl list-none p-4 md:p-[25px] bg-gradient-to-r from-[rgba(165,215,232,0.42)] to-transparent bg-[length:0_100%] bg-no-repeat transition-all duration-400 ease-in-out hover:bg-[length:100%_100%] hover:bg-gradient-to-r hover:from-[rgba(120,180,255,0.6)] hover:via-[rgba(180,120,255,0.5)] hover:to-transparent hover:scale-105">
            <FiCode className="text-3xl md:text-[2.5rem] text-[#4a90e2] mb-4 md:mb-0 md:mr-[10px] hover:text-[#357abd] hover:scale-110 transition-all duration-200 ease-in-out" />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-[25px] font-semibold">
                Fullstack Developer
              </h3>
              <p className="text-base md:text-[25px]">
                Specialize in ReactJS for building interactive UIs and Laravel
                for developing secure and scalable backends.
              </p>
            </div>
          </li>
          <li className="flex flex-col md:flex-row items-center rounded-2xl list-none p-4 md:p-[25px] bg-gradient-to-r from-[rgba(165,215,232,0.42)] to-transparent bg-[length:0_100%] bg-no-repeat transition-all duration-400 ease-in-out hover:bg-[length:100%_100%] hover:bg-gradient-to-r hover:from-[rgba(120,180,255,0.6)] hover:via-[rgba(180,120,255,0.5)] hover:to-transparent hover:scale-105">
            <FiDatabase className="text-3xl md:text-[2.5rem] text-[#4a90e2] mb-4 md:mb-0 md:mr-[10px] hover:text-[#357abd] hover:scale-110 transition-all duration-200 ease-in-out" />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-[25px] font-semibold">
                Database Administrator (DBA)
              </h3>
              <p className="text-base md:text-[25px]">
                Design and maintain SQL databases, focusing on performance,
                security, and scalability.
              </p>
            </div>
          </li>
          <li className="flex flex-col md:flex-row items-center rounded-2xl list-none p-4 md:p-[25px] bg-gradient-to-r from-[rgba(165,215,232,0.42)] to-transparent bg-[length:0_100%] bg-no-repeat transition-all duration-400 ease-in-out hover:bg-[length:100%_100%] hover:bg-gradient-to-r hover:from-[rgba(120,180,255,0.6)] hover:via-[rgba(180,120,255,0.5)] hover:to-transparent hover:scale-105">
            <FiCloud className="text-3xl md:text-[2.5rem] text-[#4a90e2] mb-4 md:mb-0 md:mr-[10px] hover:text-[#357abd] hover:scale-110 transition-all duration-200 ease-in-out" />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-[25px] font-semibold">
                Cloud Computing
              </h3>
              <p className="text-base md:text-[25px]">
                Experienced in Google Cloud Platform, I design and deploy
                scalable, secure, and efficient cloud systems.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
