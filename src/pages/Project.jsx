import React from "react";
import projects from "../data/projects.json"; // Ensure this path is correct
import { ProjectCard } from "../components/ProjectCard";

const Project = () => {
  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center px-8 py-16 text-center text-white"
      id="projects"
    >
      <h2 className="mb-8 text-4xl font-bold text-white shadow-md sm:text-3xl">
        Projects
      </h2>
      <div className="grid w-full max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
