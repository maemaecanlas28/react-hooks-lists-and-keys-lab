import React from "react";

function ProjectItem({ name, about, technologies }) {

  const techSpan = technologies.map(technology => {
    return <span key={technology.id}> { technology } </span>
  })

  return (
    <div className="project-item">
      <h3 key={name.id}>{name}</h3>
      <p key={about.id}>{about}</p>
      <div className="technologies" key={technologies.id}>
        { techSpan }
      </div>
    </div>
  );
}

export default ProjectItem;
