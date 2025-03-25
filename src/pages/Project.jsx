import React from "react";
import projects from "../data/projects.json"; // Ensure this path is correct
import { ProjectCard } from "../components/ProjectCard";

const truncateText = (text, limit, byWords = true) => {
  if (byWords) {
    // Truncate by words
    const words = text.split(" ");
    return words.length > limit
      ? words.slice(0, limit).join(" ") + "..."
      : text;
  } else {
    // Truncate by characters
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  }
};
const Project = () => {
  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center px-8 py-16 text-center text-white"
      id="projects"
    >
      <h2 className="text-4xl mb-12 font-bold text-white drop-shadow-md relative">
        <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          My Projects
        </span>
        <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
      </h2>
      <div className="grid w-full max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, id) => {
          // Truncate the project description to 20 words
          const truncatedDescription = truncateText(
            project.description,
            20,
            true
          );

          // Pass the truncated description to the ProjectCard
          return (
            <ProjectCard
              key={id}
              project={{ ...project, description: truncatedDescription }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Project;
