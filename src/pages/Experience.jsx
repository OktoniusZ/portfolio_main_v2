import React from "react";
import skills from "../data/skills.json";
import history from "../data/history.json";
import { getImageUrl } from "../utils";

const Experience = () => {
  return (
    <section
      className="py-16 px-8 text-white text-center min-h-screen flex flex-col items-center justify-center bg-transparent"
      id="experiences"
    >
      <h2 className="text-4xl mb-12 font-bold text-white drop-shadow-md relative">
        <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          My Experiences
        </span>
        <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
      </h2>
      <div className="flex flex-col gap-8 w-full max-w-5xl">
        {/* Skills Section */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          {skills.map((skill, id) => (
            <div
            key={id}
            className="flex flex-col items-center p-3 sm:p-4 md:p-6 bg-[#2a2346] rounded-lg shadow-md 
            transition-all duration-500 ease-in-out transform hover:scale-105 
            hover:bg-gradient-to-r from-[#2a2346] to-[#3c2a64] hover:shadow-xl 
            w-32 sm:w-36 md:w-40 min-w-[128px] sm:min-w-[144px] md:min-w-[160px] text-center"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
              <img
                src={getImageUrl(skill.imageSrc)}
                alt={skill.title}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm sm:text-base md:text-lg font-semibold">{skill.title}</p>
          </div>
          ))}
        </div>

        {/* Experience History Section */}
        <ul className="flex flex-col gap-6 list-none p-0">
          {history.map((historyItem, id) => (
            <li
              key={id}
              className="flex flex-col sm:flex-row sm:items-center bg-[#2a2346] p-4 sm:p-6 rounded-lg shadow-md 
              transition-all duration-500 ease-in-out transform hover:scale-105 
              hover:bg-gradient-to-r from-[#2a2346] to-[#3c2a64] hover:shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center w-full">
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                  className="w-16 h-16 sm:w-20 md:w-24 sm:h-20 md:h-24 mx-auto sm:mx-0 sm:mr-4 md:mr-6 mb-4 sm:mb-0 rounded-full transition-all duration-500 hover:scale-110 flex-shrink-0"
                />
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p className="my-2 opacity-80 text-sm sm:text-base">{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul className="list-disc pl-4 sm:pl-6 text-left">
                    {historyItem.experiences.map((experience, id) => (
                      <li key={id} className="mb-2 opacity-90 text-sm sm:text-base">
                        {experience}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;