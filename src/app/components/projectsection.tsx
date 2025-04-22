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
    description: "PRITS is a medical charting app designed to help ease the workload of our Filipino nurses. I led a team of six during AppCon 2024, where I also conducted user research and handled project documentation.",
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
    imgUrl: "/images/project-imgs/merchtrack.png",
    title: "MerchTrack",
    description: "MerchTrack is your solution for efficient merchandise management. I led a team of four into launching this platform for the College of Computer Studies' merchandise ordering last April 2025. Through enhanced user experience, we successfully improved revenue by 18% during the campaign.",
    skills: [
      { name: "Kanban"},
      { name: "User Experience"},
      { name: "Operations"},
      { name: "Functional Testing"},
    ],
    gitUrl: "https://github.com/gab-cat/merchtrack.git",
    previewUrl: "https://merchtrack.tech/",
    category: "Project Management"
  },
  // {
  //   imgUrl: "/images/project-imgs/ProjectSMILE-design.png",
  //   title: "Project SMILE",
  //   description: "Redesigning the Project SMILE website to improve user experience, update content, and enhance visual appeal.",
  //   skills: [
  //     { name: "Figma"},
  //   ],
  //   gitUrl: "https://www.figma.com/design/aMugVSaMthWDCiwMqEvqlB/Project-SMILE-Redesign?node-id=0-1&t=SOKqkXRwhvMXsztD-1",
  //   previewUrl: "",
  //   category: "UI/UX"
  // },
  {
    imgUrl: "/images/project-imgs/TapUp.png",
    title: "TapUp",
    description: "TapUp is a project I led during my internship at Codebility, where I successfully maintained 88% milestone adherence.",
    skills: [
      { name: "Product Design"},
      { name: "Kanban"},
      { name: "ClickUp"},
    ],
    gitUrl: "",
    previewUrl: "https://tapup.tech/",
    category: "Project Management"
  },
  {
    imgUrl: "/images/project-imgs/storymap-image.png",
    title: "Where the Roots Run Deep",
    description: "This is a StoryMap project I worked on during my externship at NGS and TNC, where we incorporated geospatial data and mapping to tell the story of the Mangrove Forests in Del Gallego. The project emphasized teamwork, data analysis, and public presentation.",
    skills: [
      { name: "Data Analysis"},
      { name: "ArcGIS Tools"},
      { name: "Spatial Analysis"},
      {name: "Presentation"},
    ],
    gitUrl: "",
    previewUrl: "https://storymaps.arcgis.com/stories/b2838d632f6c48f4b457634c93d01217",
    category: "Data Science"
  },
  {
    imgUrl: "",
    title: "Data Scientist Track Projects in DataCamp",
    description: "This is a compilation of the data analysis projects I did in DataCamp using Python. This is an on-going endeavor.",
    skills: [
      { name: "Python"},
      { name: "Data Analysis"}
    ],
    gitUrl: "https://github.com/kylaronquillo/Data-Scientist-in-Python-Datacamp",
    previewUrl: "",
    category: "Data Science"
  },
  {
    imgUrl: "",
    title: "Spam Filter using Naive Bayes",
    description: "This is a mini project we made that filters spam and ham by implementing the logic behind Naive Bayes. This project also implemented the Precision and Recall metric. Check out the paper I made for this project!",
    skills: [
      { name: "Python"},
      { name: "Machine Learning"}
    ],
    gitUrl: "https://github.com/kylaronquillo/CSEC302-DataMining/tree/main/Problem%201%20-%20Spam%20Filtering",
    previewUrl: "https://github.com/kylaronquillo/CSEC302-DataMining/blob/main/Problem%201%20-%20Spam%20Filtering/Spam_Filtering%20Documentation.pdf",
    category: "Data Science"
  },
  {
    imgUrl: "/images/project-imgs/Maharlika-app.jpg",
    title: "Maharlika",
    description: "Maharlika is a 2.5D RTS game we made during our game development camp. It's about a datu on a journey from Borneo to the Philippines, managing resources, and shaping a thriving community.",
    skills: [
      { name: "Unreal Engine"},
      { name: "Jira"}
    ],
    gitUrl: "https://gitlab.com/teamc3314927/maharlika",
    previewUrl: "",
    category: "Game Development"
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
        {/* <ProjectTag onClick={handleTagChange} tag="Web" isSelected={tag === "Web"} /> */}
        <ProjectTag onClick={handleTagChange} tag="Project Management" isSelected={tag === "Project Management"} />
        <ProjectTag onClick={handleTagChange} tag="Data Science" isSelected={tag === "Data Science"} />
        {/* <ProjectTag onClick={handleTagChange} tag="UI/UX" isSelected={tag === "UI/UX"} /> */}
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-center items-start">
        {projectData
          .filter((project) => tag === "All" || project.category === tag)
          .map((project, index) => (
            <div className="card" key={index}>
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
