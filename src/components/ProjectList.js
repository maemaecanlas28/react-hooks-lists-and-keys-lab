import React from "react";
import user from "../data/user";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  // console.log(projects);
  const projectsList = projects.map(project => {
    return (
    <div key={project.id}>
      <ProjectItem name={ project.name } about={ project.about } technologies={ project.technologies } />
    </div>
    )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list"> 
        {projectsList}
      </div>
    </div>
  );
}

export default ProjectList;
