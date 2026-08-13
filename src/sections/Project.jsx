import projects from "../data/project";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/animations";
import SectionHeading from "../components/SectionHeading";

function Projects() {
  return (
    <section id="portfolio" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <SectionHeading
          title="Portfolio"
          subtitle="Selected projects"
          description="A selection of websites and applications I've designed and developed."
        />

        {/* Projects */}
        <div className="mt-16 space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
