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
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, id) => (
            <div
            key={id}
            className="flex flex-col items-center p-6 bg-[#2a2346] rounded-lg shadow-md 
            transition-all duration-500 ease-in-out transform hover:scale-105 
            hover:bg-gradient-to-r from-[#2a2346] to-[#3c2a64] hover:shadow-xl w-40 min-w-[160px] text-center"
          >
            <div className="w-20 h-20 flex items-center justify-center mb-4">
              <img
                src={getImageUrl(skill.imageSrc)}
                alt={skill.title}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-lg font-semibold">{skill.title}</p>
          </div>
          ))}
        </div>

        {/* Experience History Section */}
        <ul className="flex flex-col gap-6 list-none p-0">
          {history.map((historyItem, id) => (
            <li
              key={id}
              className="flex items-center bg-[#2a2346] p-6 rounded-lg shadow-md 
              transition-all duration-500 ease-in-out transform hover:scale-105 
              hover:bg-gradient-to-r from-[#2a2346] to-[#3c2a64] hover:shadow-xl"
            >
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
                className="w-24 h-24 mr-6 rounded-full transition-all duration-500 hover:scale-110"
              />
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-semibold">{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p className="my-2 opacity-80">{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul className="list-disc pl-6">
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id} className="mb-2 opacity-90">
                      {experience}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
