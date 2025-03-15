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
      <h2 className="text-4xl mb-8 text-white drop-shadow-md">Experience</h2>
      <div className="flex flex-col gap-8 w-full max-w-5xl">
        {/* Skills Section */}
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, id) => (
            <div
              key={id}
              className="flex flex-col items-center p-6 bg-[#2a2346] rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-20 h-20 flex items-center justify-center mb-4">
                <img
                  src={getImageUrl(skill.imageSrc)}
                  alt={skill.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        {/* Experience History Section */}
        <ul className="flex flex-col gap-6 list-none p-0">
          {history.map((historyItem, id) => (
            <li
              key={id}
              className="flex items-center bg-[#2a2346] p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
                className="w-24 h-24 mr-6 rounded-full"
              />
              <div className="flex-1 text-left">
                <h3 className="text-2xl">{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p className="my-2">{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul className="list-disc pl-6">
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id} className="mb-2">
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
