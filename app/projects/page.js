"use client";

import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ToggleGroup from "../components/ToggleGroup";
import { client } from "@/sanity/lib/client";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await client.fetch('*[_type == "post"]');
      setProjects(res);
    };
    fetchProjects();
  }, []);
  
  console.log("projects", projects)
  // console.log(data);
  return (
    <>
      <div className="flex justify-center">
        <ToggleGroup group={["All", "UI/UX", "Web App", "Mobile App"]} />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          {projects &&
            projects.map((i, key) => <ProjectCard key={key} project={i} />)}
        </div>
      </div>
    </>
  );
}

export default Projects;
