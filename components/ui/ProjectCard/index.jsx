import React from "react";

const ProjectCard = ({ title, text }) => {
  return (
    <div className="bg-white shadow-md rounded-lg border overflow-hidden hover:bg-gray-100 cursor-pointer">
      <div className="py-6 px-4">
        <h3 className="text-2xl font-semibold mb-3 capitalize">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
