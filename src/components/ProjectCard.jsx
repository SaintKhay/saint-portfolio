import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/animations";

function ProjectCard({ project, reverse }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={`flex flex-col gap-10 md:flex-row md:items-center md:gap-16 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <div className="overflow-hidden rounded-lg bg-[#F4F4F4]">
          <img
            src={project.image}
            alt={`${project.title} project`}
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7F41EE]">
          {project.category}
        </p>

        <h3 className="mt-3 text-3xl font-normal text-[#3A4F66] sm:text-4xl">
          {project.title}
        </h3>

        <p className="mt-5 max-w-lg text-base leading-7 text-[#3A4F66]/70">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-[#F4F4F4] px-3 py-1.5 text-xs font-semibold text-[#3A4F66]"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-7 flex items-center gap-5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#7F41EE] transition-colors hover:text-[#3A4F66]"
          >
            Live Demo
            <FiArrowUpRight size={17} />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#3A4F66] transition-colors hover:text-[#7F41EE]"
          >
            GitHub
            <FiGithub size={17} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
