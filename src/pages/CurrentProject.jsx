import { currentProjects } from "../data/data"; // Ensure this import path is correct
import { getImageUrl } from "../utils";

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
const SpaceCards = () => {
  // Safeguard against undefined data
  const projects = currentProjects || [];
  return (
    <section className="min-h-screen py-16 px-4 sm:px-8">
      {/* Content */}
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-12 font-bold text-white drop-shadow-md relative">
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Currently Working On
            </span>
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            what I’m currently building, experimenting with, or improving. It’s
            a peek into my work-in-progress projects—stay tuned for{" "}
            <span className="text-yellow-300">updates!</span>.
          </p>
        </div>

        {/* Cards - With conditional rendering */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => {
              const truncatedDescription = truncateText(
                project.description,
                25,
                true
              );
              return (
                <div
                  key={project.id}
                  className="group bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-blue-400/50 transition-all duration-300"
                >
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={
                        getImageUrl(project.image) ||
                        "https://via.placeholder.com/600x400/1e293b/64748b?text=Space+Project"
                      }
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 text-justify">
                      {truncatedDescription}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(project.tags || []).map((tag) => (
                        <span
                          key={tag}
                          className="bg-black/40 text-blue-100 text-xs px-2.5 py-1 rounded-full border border-blue-400/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Progress */}
                    <div className="mb-2">
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Progress</span>
                        <span>{project.progress || 0}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-blue-400 to-purple-500 h-1.5 rounded-full"
                          style={{ width: `${project.progress || 0}%` }}
                        />
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="text-xs bg-black/50 hover:bg-blue-900/30 text-blue-300 px-4 py-2 rounded-lg border border-blue-400/20 transition-colors">
                          Source
                        </button>
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="text-xs bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all">
                          Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No active missions detected
          </p>
        )}
      </div>
    </section>
  );
};

export default SpaceCards;
