import React from 'react';
import Project from './Project';
import './Portfolio.css'; // Make sure the path to the CSS file is correct

const Portfolio = () => {
  const projects = [
    {
      title: 'Code Refractor',
      image: 'Code_Refractor.jpg',
      deployedLink: 'https://juanfranciscogrillo.github.io/Code_Refractor/',
      githubLink: 'https://github.com/JuanFranciscoGrillo/Code_Refractor',
    },
    {
      title: 'Professional Portfolio',
      image: 'Professional_Portfolio.jpg',
      deployedLink: 'https://juanfranciscogrillo.github.io/Module-2-Challenge/',
      githubLink: 'https://github.com/JuanFranciscoGrillo/Module-2-Challenge.git',
    },
    {
      title: 'Password Generator',
      image: 'Password_Generator.jpg',
      deployedLink: 'https://juanfranciscogrillo.github.io/Challenge_03-Javascript/',
      githubLink: 'https://github.com/JuanFranciscoGrillo/Challenge_03-Javascript.git',
    },
    {
      title: 'Code Quiz',
      image: 'Code_Quiz.jpg',
      deployedLink: 'https://juanfranciscogrillo.github.io/Challenge_04-WebAPIs',
      githubLink: 'https://github.com/JuanFranciscoGrillo/Challenge_04-WebAPIs.git',
    },
    {
      title: 'Work Day Scheduler',
      image: 'Work_Day_Scheduler.jpg',
      deployedLink: 'https://juanfranciscogrillo.github.io/Challenge_05-Third-Party-APIs/',
      githubLink: 'https://github.com/JuanFranciscoGrillo/Challenge_05-Third-Party-APIs.git%20%C2%A0%20%C2%A0%20%C2%A0',
    },
    {
      title: 'Weather Dashboard',
      image: 'Weather_Dashboard.jpg',
      deployedLink: 'https://juanfranciscogrillo.github.io/Module_06-Server-Side-APis/',
      githubLink: 'https://github.com/JuanFranciscoGrillo/Module_06-Server-Side-APis.git',
    },
    {
      title: 'Image Finder',
      image: 'Image_Finder.jpg',
      deployedLink: 'https://hellobisrat.github.io/Project1imagesearch/',
      githubLink: 'https://github.com/Hellobisrat/Project1imagesearch.git',
    },
    {
      title: 'Professional README Generator',
      image: 'Professional_README_Generator.jpg',
      githubLink: 'https://github.com/JuanFranciscoGrillo/Challenge_09-Node.js.git',
    },
    {
      title: 'SVG Logo Maker',
      image: 'SVG_Logo_Maker.jpg',
      githubLink: 'https://github.com/JuanFranciscoGrillo/Challenge_10-OOP.git',
    },
    {
      title: 'Note Taker',
      image: 'Note_Taker.jpg',
      deployedLink: 'https://juanfranciscogrillo.github.io/Challenge_11-Express.js/',
      githubLink: 'https://github.com/JuanFranciscoGrillo/Challenge_11-Express.js.git',
    },
    {
      title: 'Employee Tracker',
      image: 'Employee_Tracker.jpg',
      githubLink: 'https://github.com/JuanFranciscoGrillo/Challenge_12-SQL.git',
    },
    {
      title: 'Tech Blog',
      image: 'Tech_Blog.jpg',
      githubLink: 'https://github.com/JuanFranciscoGrillo/E-commerce-Back-End/tree/main',
    },
    {
      title: 'Build Link',
      image: 'Build_Link.jpg',
      githubLink: 'https://github.com/Kyndallmae/Build-Link.git',
      herokuLink: 'https://herokuapp.com/project3',
    },
    {
      title: 'Regex Tutorial',
      image: 'Regex_Tutorial.jpg',
      githubLink: 'https://gist.github.com/JuanFranciscoGrillo/56edacf1c81e943e593df6cb593e152e',
    },
    {
      title: 'Social Network API',
      image: 'Social_Network_API.jpg',
      deployedLink: '',
      githubLink: 'https://github.com/JuanFranciscoGrillo/social-network_API',
      herokuLink: '',
    },
    {
      title: 'Text Editor PWA',
      image: 'Text_Editor_PWA.jpg',
      deployedLink: '',
      githubLink: 'https://github.com/JuanFranciscoGrillo/Text-Editor-PWA.git',
      herokuLink: '',
    },
    {
      title: 'React Portfolio',
      image: 'React_Portfolio.jpg',
      deployedLink: '',
      githubLink: 'https://github.com/JuanFranciscoGrillo/my-portfolio',
      herokuLink: '',
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section">
        <h2 className="portfolio-title">Portfolio</h2>
        <div className="portfolio-content">
            {projects.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    image={project.image}
                    deployedLink={project.deployedLink}
                    githubLink={project.githubLink}
                />
            ))}
        </div>
    </section>
);
};

export default Portfolio;