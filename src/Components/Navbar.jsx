import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-950 p-10 flex justify-between items-center w-full h-16 fixed top-0 left-0 z-50">
      <div className="text-white text-2xl font-bold">My Portfolio</div>
      <div className="md:hidden toggleButton">
        <button onClick={handleToggle}>
          <ReorderIcon />
        </button>
      </div>
      <div className={`flex-col md:flex-row md:flex items-center ${isOpen ? 'flex' : 'hidden'} w-full md:w-auto space-y-4 md:space-y-0 md:space-x-4`}>        <Link className="text-white text-xl items-center hover:text-gray-300" to="/">Home</Link>
        <Link className="text-white text-xl items-center hover:text-gray-300" to="/projects">Projects</Link>
        <Link className="text-white text-xl items-center hover:text-gray-300" to="/experience">Experience</Link>
      </div>
    </nav>
  );
}

export default Navbar;
