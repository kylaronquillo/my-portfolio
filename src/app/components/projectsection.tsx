import React, { useState } from 'react';
import ProjectCard from './projectcards'; // Adjust the import as needed

const projectData = [
  {
    imgUrl: "/path/to/image1.jpg",
    title: "Project 1",
    description: "Description for project 1.",
    skills: [
      { name: "React", url: "https://reactjs.org/" },
      { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
    ],
    gitUrl: "https://github.com/your-repo/project1",
    previewUrl: "https://yourproject1.com",
    category: "Web"
  },
  {
    imgUrl: "/path/to/image2.jpg",
    title: "Project 2",
    description: "Description for project 2.",
    skills: [
      { name: "Node.js", url: "https://nodejs.org/" },
      { name: "Express", url: "https://expressjs.com/" }
    ],
    gitUrl: "https://github.com/your-repo/project2",
    previewUrl: "https://yourproject2.com",
    category: "Web"
  },
  {
    imgUrl: "/path/to/image1.jpg",
    title: "Project 3",
    description: "Description for project 3.",
    skills: [
      { name: "Python", url: "https://www.python.org/" },
      { name: "Machine Learning", url: "https://www.coursera.org/learn/machine-learning" }
    ],
    gitUrl: "https://github.com/your-repo/project3",
    previewUrl: "https://yourproject3.com",
    category: "Machine Learning"
  },
  {
    imgUrl: "/path/to/image1.jpg",
    title: "Project 4",
    description: "Description for project 4.",
    skills: [
      { name: "Unity", url: "https://unity.com/" },
      { name: "C#", url: "https://docs.microsoft.com/en-us/dotnet/csharp/" }
    ],
    gitUrl: "https://github.com/your-repo/project4",
    previewUrl: "https://yourproject4.com",
    category: "Game Development"
  },
  {
    imgUrl: "/path/to/image1.jpg",
    title: "Project 5",
    description: "Description for project 5.",
    skills: [
      { name: "Agile", url: "https://www.agilealliance.org/agile101/" },
      { name: "Scrum", url: "https://www.scrum.org/resources/what-is-scrum" }
    ],
    gitUrl: "https://github.com/your-repo/project5",
    previewUrl: "https://yourproject5.com",
    category: "Project Management"
  },
  {
    imgUrl: "/path/to/image1.jpg",
    title: "Project 5",
    description: "Description for project 5.",
    skills: [
      { name: "Agile", url: "https://www.agilealliance.org/agile101/" },
      { name: "Scrum", url: "https://www.scrum.org/resources/what-is-scrum" }
    ],
    gitUrl: "https://github.com/your-repo/project5",
    previewUrl: "https://yourproject5.com",
    category: "Web"
  },
];

// ProjectTag component for filtering tags
const ProjectTag = ({ onClick, tag, isSelected }) => (
  <button
    className={`mx-2 mb-2 px-4 py-2 rounded-full text-sm md:text-base ${isSelected ? "bg-[#6EA0BA] text-white" : "bg-gray-200 text-black"}`}
    onClick={() => onClick(tag)}
  >
    {tag}
  </button>
);

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <section id="projects" className="projects pt-10">
      <h1 className="text-2xl md:text-4xl font-medium text-[#6EA0BA] mb-6 text-center">/Projects</h1>
      <div className="flex flex-wrap justify-center">
        <ProjectTag 
          onClick={handleTagChange} 
          tag="All" 
          isSelected={tag === "All"}
        />
        <ProjectTag 
          onClick={handleTagChange} 
          tag="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag 
          onClick={handleTagChange} 
          tag="Game Development"
          isSelected={tag === "Game Development"}
        />
        <ProjectTag 
          onClick={handleTagChange} 
          tag="Project Management"
          isSelected={tag === "Project Management"}
        />
        <ProjectTag 
          onClick={handleTagChange} 
          tag="Machine Learning"
          isSelected={tag === "Machine Learning"}
        />
        {/* Add more tags if necessary */}
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectData
          .filter((project) => tag === "All" || project.category === tag)
          .map((project, index) => (
            <div className="w-full sm:w-1/2 lg:w-1/4 p-1" key={index}>
              <ProjectCard
                imgUrl={project.imgUrl}
                title={project.title}
                description={project.description}
                skills={project.skills}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default ProjectSection;
