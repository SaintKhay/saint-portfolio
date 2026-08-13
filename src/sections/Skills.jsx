import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";

import { FiCode, FiGlobe, FiSearch, FiTrendingUp } from "react-icons/fi";

const skillGroups = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive interfaces with modern frontend technologies.",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: FiCode },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Website Development",
    description:
      "Creating modern websites focused on usability, responsiveness, and performance.",
    skills: [
      { name: "Responsive Websites", icon: FiGlobe },
      { name: "Landing Pages", icon: FiGlobe },
      { name: "Business Websites", icon: FiGlobe },
      { name: "E-commerce", icon: FiGlobe },
      { name: "Git & GitHub", icon: SiGithub },
    ],
  },
  {
    title: "SEO & Digital",
    description:
      "Building websites with search visibility, performance, and digital growth in mind.",
    skills: [
      { name: "On-page SEO", icon: FiSearch },
      { name: "Technical SEO", icon: FiSearch },
      { name: "SEO-friendly Websites", icon: FiSearch },
      { name: "Performance", icon: FiTrendingUp },
      { name: "Digital Marketing", icon: FiTrendingUp },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-[#F4F4F4] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#7F41EE]">
            Skills
          </p>

          <h2 className="text-3xl font-normal leading-tight text-[#3A4F66] sm:text-4xl md:text-5xl">
            What I work with
          </h2>

          <p className="mt-5 text-base leading-7 text-[#3A4F66]/70 sm:text-lg">
            A focused set of tools and technologies I use to build modern,
            responsive, and effective digital experiences.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-[#3A4F66]/10 bg-white p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-[#3A4F66]">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#3A4F66]/65">
                {group.description}
              </p>

              <div className="mt-6 space-y-3">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 rounded-md bg-[#F4F4F4] px-4 py-3"
                    >
                      <Icon size={20} className="shrink-0 text-[#7F41EE]" />

                      <span className="text-sm font-semibold text-[#3A4F66]">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
