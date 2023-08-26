function ProjectList({projects}) {

    return (
    <div className="project-list">
      {projects.map((project, i) => <img key={i} src={project.img} className="project-list-item" />)}
    </div>
  );
}
  
  export default ProjectList;