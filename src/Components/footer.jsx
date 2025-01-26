// 
import React from 'react';


import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GithubIcon from '@mui/icons-material/Github';
import EmailIcon from '@mui/icons-material/Email';





const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white p-6 flex flex-col items-center space-y-4">
      <div className="socialMedia flex space-x-4">
        <InstagramIcon className="hover:text-gray-300"/>
        <TwitterIcon className="hover:text-gray-300"/>
        <LinkedInIcon className="hover:text-gray-300"/>
        <FacebookIcon className="hover:text-gray-300"/>
        <GithubIcon className="hover:text-gray-300"/>
        <EmailIcon className="hover:text-gray-300"/>



      </div>
      <p className="text-center">&copy; 2024 Beamlak.com</p>
    </footer>
  );
}

export default Footer;
