import React, { useState } from 'react';
import ProjectCard from './projectcards'; // Adjust the import as needed
import Notification from './notificationerror'; // Adjust the import as needed

// Define the props interface for ProjectTag
interface ProjectTagProps {
  tag: string;
  onClick: (tag: string) => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ tag, onClick, isSelected }) => {
  return (
    <button
      className={`px-4 py-2 m-2 rounded-md ${isSelected ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'}`}
      onClick={() => onClick(tag)}
    >
      {tag}
    </button>
  );
};

const projectData = [
  {
    imgUrl: "/images/project-imgs/PRITS-app.jpg",
    title: "PRITS",
    description: "PRITS is a medical charting app designed to help ease the workload of our Filipino nurses, was a true team effort by O'lanz Studio.",
    skills: [
      { name: "Agile"},
      { name: "Research"},
      { name: "ClickUp"},
    ],
    gitUrl: "https://github.com/MaxineNicole2127/prits",
    previewUrl: "",
    category: "Project Management"
  },
  {
    imgUrl: "/images/project-imgs/MerchTrack.png",
    title: "MerchTrack",
    description: "MerchTrack is your solution for efficient merchandise management, simplifying order processing, inventory tracking, and payment handling.",
    skills: [
      { name: "NextJS"},
      { name: "Front-End"},
    ],
    gitUrl: "https://github.com/gab-cat/merchtrack.git",
    previewUrl: "https://merchtrack.tech/",
    category: "Web"
  },
  {
    imgUrl: "/images/project-imgs/MerchTrack.png",
    title: "MerchTrack",
    description: "MerchTrack is your solution for efficient merchandise management, simplifying order processing, inventory tracking, and payment handling.",
    skills: [
      { name: "Figma Design"},
      { name: "UI/UX"}
    ],
    gitUrl: "https://www.figma.com/design/Z8WqVbn8RrmbfkgpdbpbYe/MerchTrack?node-id=10-6&t=4WyxVyKdDhZzbPrb-1",
    previewUrl: "",
    category: "UI/UX"
  },
  {
    imgUrl: "/images/project-imgs/Maharlika-app.jpg",
    title: "Maharlika",
    description: "Maharlika is a 2.5D RTS game about a datu on a journey from Borneo to the Philippines, managing resources, and shaping a thriving community.",
    skills: [
      { name: "Unreal Engine"},
      { name: "Jira"}
    ],
    gitUrl: "https://gitlab.com/teamc3314927/maharlika",
    previewUrl: "",
    category: "Game Development"
  },
  {
    imgUrl: "/images/project-imgs/ProjectSMILE-design.png",
    title: "Project SMILE",
    description: "Redesigning the Project SMILE website to improve user experience, update content, and enhance visual appeal.",
    skills: [
      { name: "Figma"},
    ],
    gitUrl: "https://www.figma.com/design/aMugVSaMthWDCiwMqEvqlB/Project-SMILE-Redesign?node-id=0-1&t=SOKqkXRwhvMXsztD-1",
    previewUrl: "",
    category: "UI/UX"
  },
  {
    imgUrl: "/images/project-imgs/TapUp.png",
    title: "TapUp",
    description: "TapUp is an on-going project I am handling. Information regarding the app is yet to be disclosed.",
    skills: [
      { name: "Product Design"},
      { name: "Kanban"},
      { name: "ClickUp"},
    ],
    gitUrl: "",
    previewUrl: "https://tapup.tech/",
    category: "Project Management"
  },
];

// ProjectSection component
const ProjectSection: React.FC = () => {
  const [tag, setTag] = useState("All");
  const [notification, setNotification] = useState("");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const handleNotify = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(""); 
    }, 3000);
  };

  return (
    <section id="projects" className="projects pt-10">
      <h1 className="text-2xl md:text-4xl font-hagrid font-medium text-black mb-6 text-center">/Projects</h1>
      <div className="flex flex-wrap justify-center">
        <ProjectTag onClick={handleTagChange} tag="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} tag="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} tag="Game Development" isSelected={tag === "Game Development"} />
        <ProjectTag onClick={handleTagChange} tag="Project Management" isSelected={tag === "Project Management"} />
        <ProjectTag onClick={handleTagChange} tag="Machine Learning" isSelected={tag === "Machine Learning"} />
        <ProjectTag onClick={handleTagChange} tag="UI/UX" isSelected={tag === "UI/UX"} />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-center items-center">
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
                onNotify={handleNotify}
              />
            </div>
          ))}
      </div>
      {notification && (
        <Notification message={notification} onClose={() => setNotification("")} />
      )}
    </section>
  );
};

export default ProjectSection;
