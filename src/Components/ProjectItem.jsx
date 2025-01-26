import React from 'react';
import { Link } from 'react-router-dom';

const ProjectItem = ({ id, image, name }) => {
  return (
    <Link to={`/project/${id}`} className="projectItem w-72 h-72 m-10 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bgImage bg-cover bg-center w-full h-48 rounded-t-xl"
      />
      <h1 className="text-xl text-yellow-800 font-bold mt-2">{name}</h1>
    </Link>
  );
};

export default ProjectItem;
