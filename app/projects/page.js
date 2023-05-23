"use client";

import ProjectCard from "../components/ProjectCard";
import ToggleGroup from "../components/ToggleGroup";

function Projects() {
  return (
    <>
      <div className="flex justify-center">
        <ToggleGroup group={["All", "UI/UX", "Web App", "Mobile App"]} />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </>
  );
}

export default Projects;
