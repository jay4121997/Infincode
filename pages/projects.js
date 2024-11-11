import { useState } from "react";
import Dropdown from "../components/ui/filterDropdown";
import ProjectCard from "../components/ui/ProjectCard";
import HeadingText from "../components/ui/HeadingText";

export default function Projects() {
  const projectList = [
    {
      title: "Project 1",
      text: "lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      tags: ["AI", "ML", "NLP"],
    },
    {
      title: "Project 2",
      text: "lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      tags: ["AI", "ML", "NLP"],
    },
    {
      title: "Project 3",
      text: "lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      tags: ["AI", "ML", "NLP"],
    },
    {
      title: "Project 4",
      text: "lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      tags: ["Finance"],
    },
    {
      title: "Project 5",
      text: "lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      tags: [""],
    },
  ];

  const allTags = [...new Set(projectList.flatMap((project) => project.tags))];
  const [selectedTags, setSelectedTags] = useState([]);
  const [projects, setProjects] = useState(projectList);

  const filteredProjects =
    selectedTags.length > 0
      ? projects.filter((project) =>
          project.tags.some((tag) => selectedTags.includes(tag))
        )
      : projects;

  return (
    <>
      <div className="px-5 md:px-32">
        <HeadingText
          text="Explore some of our projects"
          className="mb-10 mt-5"
        />

        <div className="flex mb-4 md:flex-row-reverse">
          <div className="md:ml-auto">
            <Dropdown
              label="Filter by tags"
              tags={allTags}
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project) => (
            <div key={project.title} className="cursor-pointer">
              <ProjectCard title={project.title} text={project.text} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
