import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <h3 className="project-h3">Projects</h3>
      <div className="projectCard-wrapper">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
};

export default Projects;
