import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { getImageUrl } from "../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <motion.div
      className="bg-[#2a2346] rounded-[15px] overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl flex flex-col"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
    >
      <div className="relative w-full h-[200px] overflow-hidden">
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2a2346]/80 transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-0" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl mb-4 text-[#f4f4f4]">{title}</h3>
        <p className="text-base mb-6 text-[#f4f4f4] flex-1">{description}</p>
        <div className="flex justify-center flex-wrap gap-2 mb-6">
          {skills.map((skill, id) => (
            <span
              key={id}
              className="bg-[#8a4fff] text-[#f4f4f4] px-4 py-2 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={demo}
            className="flex-1 text-center bg-[#8a4fff] text-[#f4f4f4] py-3 rounded-md transition-colors duration-300 hover:bg-[#b47aff]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <a
            href={source}
            className="flex-1 text-center bg-[#8a4fff] text-[#f4f4f4] py-3 rounded-md transition-colors duration-300 hover:bg-[#b47aff]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        </div>
      </div>
    </motion.div>
  );
};
