import {projectsData} from "../data/Projects"

export default function Project(){
    return(
      // section is a overall container 
      <section
      id="projects"
      className="min-h-screen bg-black px-3 py-16 text-white md:px-10 mt-6"
    >
      {/* Heading */}
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-5xl font-serif md:text-6xl lg:text-7xl">
          My Work
        </h2>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="rounded-xl border border-neutral-500 bg-[#020202] p-2 transition-transform duration-300 hover:-translate-y-1 h-128 w-88" 
            >
              {/* Project Image */}
              <div className="h-40 w-full overflow-hidden rounded-xl bg-[#303030]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="px-1 pb-2 pt-4">
                {/* Title + Date */}
                <div className="mb-2 flex items-center justify-between gap-3">
                  <h3 className="text-3xl font-medium">
                    {project.title}
                  </h3>

                  {/* <span className="shrink-0 text-xs text-white">
                    {project.date}
                  </span> */}
                </div>

                {/* Description */}
                <p className="mb-4 max-w-md text-xl leading-5.5 text-white font-light">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-neutral-400 px-3 py-1 text-xs text-white">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {/* Code */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white px-5 py-1.5 text-xs transition-colors duration-200 hover:bg-white hover:text-black"
                  >
                    CODE
                  </a>

                  {/* Live Demo */}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs text-black transition-transform duration-200 hover:scale-105"
                  >
                    Live demo
                    <span className="text-sm">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    )
}