import React from "react";

// Define the props interface
interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void; // Define the type of onClick function
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick }) => {
  return (
    <button
      className={`mt-10 bg-[#6EA0BA] text-white py-2 px-4 rounded-lg drop-shadow-xl hover:bg-white hover:text-[#6EA0BA] hover:border-[#6EA0BA] border-2 transition-all`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
