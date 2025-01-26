
import React from 'react';
import '../index.css';
import GithubIcon from '@mui/icons-material/Github';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import myImage from '../assets/home6.jpg';  



function Home() {
  return (
    <div className="home">
      
      <div className="about  bg-[#C0C0C0] text-yellow-800 flex flex-col md:flex-row items-center justify-between min-h-screen p-6 pt-20">
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
        
          <h1 className="text-6xl font-bold mb-6">HI, My Name is Beamlak Tessema</h1>
          <div className="prompt text-center md:text-left">
            <h2 className=" text-4xl mb-4 font-semibold">I am an Information Scientist with a passion for Learning, Exploring and creating.</h2>
            <div className="flex space-x-4">
              <GithubIcon className="hover:text-gray-300 items-center" />
              <EmailIcon className="hover:text-gray-300 items-center" />
              <LinkedInIcon className="hover:text-gray-300 items-center" />
            </div>
          </div>
        </div>
        { <div className="w-full md:w-1/2 h-full flex justify-center md:justify-end mt-6 md:mt-0">
          <img src={myImage} alt="Beamlak Tessema" className="h-full w-auto object-cover md:w-auto md:max-h-screen" />
        </div> }
      </div>








      <div className="skills bg-white text-yellow-800 flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-5xl font-bold mb-6">Skills</h1>
        <ol className="list-none w-full max-w-3xl">
          <li className="item mb-6">
            <h2 className="text-4xl font-bold mb-2">Front-End</h2>
            <span className="text-2xl">ReactJS, HTML, CSS, BootStrap, TailwindCSS, MaterialUI, Angular, Yarn</span>
          </li>
          <li className="item mb-6">
            <h2 className="text-4xl font-bold mb-2">Back-End</h2>
            <span className="text-2xl">NodeJS, MySQL, Asp.NET, MongoDB, MS SQL</span>
          </li>
          <li className="item mb-6">
            <h2 className="text-4xl font-bold mb-2">Languages</h2>
            <span className="text-2xl">C++, C#, Java, JavaScript, C, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

// import React, { useEffect, useState } from 'react';
// import '../index.css';
// import GithubIcon from '@mui/icons-material/Github';
// import EmailIcon from '@mui/icons-material/Email';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import myImage from '../assets/home6.jpg';

// function Home() {
//   const [typedText, setTypedText] = useState('');
//   const fullText = "Information Scientist with a passion for Learning, Exploring and creating.";
//   const typingSpeed = 100; // Speed in milliseconds

//   useEffect(() => {
//     let index = 0;
//     const type = () => {
//       if (index < fullText.length) {
//         setTypedText((prev) => prev + fullText[index]);
//         index++;
//         setTimeout(type, typingSpeed);
//       }
//     };
//     type();
//   }, []);

//   return (
//     <div className="home">
//       <div className="about bg-[#C0C0C0] text-yellow-800 flex flex-col md:flex-row items-center justify-between min-h-screen p-6 pt-20">
//         <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
//           <h1 className="text-6xl font-bold mb-6">HI, My Name is Beamlak Tessema</h1>
//           <div className="prompt text-center md:text-left">
//             <h2 className="text-4xl mb-4 font-semibold">{typedText}</h2>
//             <div className="flex space-x-4">
//               <GithubIcon className="hover:text-gray-300 items-center" />
//               <EmailIcon className="hover:text-gray-300 items-center" />
//               <LinkedInIcon className="hover:text-gray-300 items-center" />
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 h-full flex justify-center md:justify-end mt-6 md:mt-0">
//           <img src={myImage} alt="Beamlak Tessema" className="h-full w-auto object-cover md:w-auto md:max-h-screen" />
//         </div>
//       </div>
//       <div className="skills bg-white text-yellow-800 flex flex-col items-center justify-center min-h-screen p-6">
//         <h1 className="text-5xl font-bold mb-6">Skills</h1>
//         <ol className="list-none w-full max-w-3xl">
//           <li className="item mb-6">
//             <h2 className="text-4xl font-bold mb-2">Front-End</h2>
//             <span className="text-2xl">ReactJS, HTML, CSS, BootStrap, TailwindCSS, MaterialUI, Angular, Yarn</span>
//           </li>
//           <li className="item mb-6">
//             <h2 className="text-4xl font-bold mb-2">Back-End</h2>
//             <span className="text-2xl">NodeJS, MySQL, Asp.NET, MongoDB, MS SQL</span>
//           </li>
//           <li className="item mb-6">
//             <h2 className="text-4xl font-bold mb-2">Languages</h2>
//             <span className="text-2xl">C++, C#, Java, JavaScript, C, Python</span>
//           </li>
//         </ol>
//       </div>
//     </div>
//   );
// }

// export default Home;