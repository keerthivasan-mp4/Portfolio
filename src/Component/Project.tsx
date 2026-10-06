import {projectsData} from "../data/Projects"

export default function Project(){
    return(
      // section is a overall container 
      <section id="projects" className="border-4 border-purple-700 mt-2">
      <h2 className="text-9xl">Projects</h2>
      
      {/* container for the cards */}
      <div className=" mx-1 my-1 border-4 grid grid-cols-3 gap-.5 border-yellow-500">
        {projectsData.map((project) => (
          <div key={project.id} className="border-2 border-red-600 mt-2 h-160 w-136">
            <img src={project.image} alt={project.title} className="project-image" />
            
            <div className="project-content">
              <h3 >{project.title}</h3>
              <p>{project.description}</p>
              
              {/* Tech stack tags */}
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>

              {/* Links to GitHub or Live Demo */}
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    )
}