
import React from 'react';
import ProjectItem from '../Components/ProjectItem';
import pro1 from '../assets/pro1.webp';
import pro2 from '../assets/pro2.webp';
import pro3 from "../assets/pro3.png"
import pro4 from "../assets/PIZZARIA.png"
import pro5 from "../assets/pro5.png"
import pro8 from "../assets/image.png"
import { ProjectData } from '/src/helpers/ProjectData.jsx';


function Projects() {
  return (
    <div className="projects w-full flex flex-col items-center p-6 bg-[#C0C0C0] min-h-screen">
      <h1 className="projectTitle text-center text-yellow-800 text-5xl font-bold mb-8">My Personal Projects</h1>
      <div className="projectList w-[70vw] grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {ProjectData.map(project => (
          <ProjectItem key={project.id} id={project.id} name={project.name} image={project.image} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
