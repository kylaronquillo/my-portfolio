import React from 'react';
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link"; // Ensure you import Link

const ProjectCard = ({ imgUrl, title, description, skills, gitUrl, previewUrl }) => {
  return (
    <div className="w-80 rounded-lg overflow-hidden shadow-lg bg-white m-4 hover:scale-110 transition-transform relative group">
      {/* Image with Overlay */}
      <div className="relative">
        <img className="w-full h-40 object-cover" src={imgUrl} alt={title} />
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {gitUrl && (
            <Link
              href={gitUrl}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
          {previewUrl && (
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>

      {/* Text Section */}
      <div className="px-6 py-4">
        <div className="font-mono text-xl mb-2">{title}</div>
        <p className="font-mono text-gray-700 text-base">{description}</p>
      </div>
      
      {/* Skills Section */}
      <div className="px-6 pt-4 pb-2">
        {skills.map((skill, index) => (
          <a
            key={index}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300"
          >
            #{skill.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
