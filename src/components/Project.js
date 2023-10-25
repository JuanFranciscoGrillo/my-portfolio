import React from 'react';
import Project from './Project';

const App = () => {
  const projects = [
    {
      title: 'Code Refractor',
      image: 'project1.jpg',
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/project1',
    },
    {
      title: 'Professional Portfolio',
      image: 'project2.jpg',
      deployedLink: 'https://example.com/project2',
      githubLink: 'https://github.com/project2',
    },
    {
      title: 'Password Generator',
      image: 'project3.jpg',
      deployedLink: 'https://example.com/project3',
      githubLink: 'https://github.com/project3',
    },
    {
      title: 'Code Quiz',
      image: 'project3.jpg',
      deployedLink: 'https://example.com/project3',
      githubLink: 'https://github.com/project3',
    },
    {
      title: 'Work Day Scheduler',
      image: 'project3.jpg',
      deployedLink: 'https://example.com/project3',
      githubLink: 'https://github.com/project3',
    },
    {
      title: 'Weather Dashboard',
      image: 'project3.jpg',
      deployedLink: 'https://example.com/project3',
      githubLink: 'https://github.com/project3',
    },
    {
      title: 'Project 1',
      image: 'project3.jpg',
      deployedLink: 'https://example.com/project3',
      githubLink: 'https://github.com/project3',
    },
    {
      title: 'Professional README Generator',
      image: 'project3.jpg',
      deployedLink: 'https://example.com/project3',
      githubLink: 'https://github.com/project3',
    },
    {
      title: 'SVG Logo Maker',
      image: 'project3.jpg',
      deployedLink: 'https://example.com/project3',
      githubLink: 'https://github.com/project3',
    },
    {
      title: 'Note Taker',
      image: 'project3.jpg',
      deployedLink: 'https://example.com/project3',
      githubLink: 'https://github.com/project3',
    },
    {
      title: 'Employee Tracker',
      image: 'project3.jpg',
      deployedLink: 'https://example.com/project3',
      githubLink: 'https://github.com/project3',
    },
    {
      title: 'E-commerce Back End',
      image: 'project3.jpg',
      deployedLink: 'https://example.com/project3',
      githubLink: 'https://github.com/project3',
    },
    {
      title: 'Tech Blog',
      image: 'project3.jpg',
      deployedLink: 'https://example.com/project3',
      githubLink: 'https://github.com/project3',
    },
    {
      title: 'Build Link',
      image: 'project3.jpg',
      deployedLink: 'https://example.com/project3',
      githubLink: 'https://github.com/project3',
    },
    {
      title: 'Regex Tutorial',
      image: 'project3.jpg',
      deployedLink: 'https://example.com/project3',
      githubLink: 'https://github.com/project3',
    },
    {
      title: 'Social Network API',
      image: 'project3.jpg',
      deployedLink: 'https://example.com/project3',
      githubLink: 'https://github.com/project3',
    },
    {
      title: 'Challenge: Text Editor',
      image: 'project3.jpg',
      deployedLink: 'https://example.com/project3',
      githubLink: 'https://github.com/project3',
    },
    {
      title: 'React Portfolio',
      image: 'project3.jpg',
      deployedLink: 'https://example.com/project3',
      githubLink: 'https://github.com/project3',
    }
  ];

  return (
    <div className="app">
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
  );
};

export default App;


