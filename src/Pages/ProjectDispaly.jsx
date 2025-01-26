import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectData } from '/src/helpers/ProjectData.jsx';
import GithubIcon from '@mui/icons-material/Github';

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectData.find(proj => proj.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <GithubIcon />
    </div>
  );
};

export default ProjectDisplay;
