import projectImage1 from "../asset/image/About-saint.jpg";
import EdufyThumbnail from "../asset/image/Edufy-thumbnail.jpeg";
import ElmCraftThumbnail from "../asset/image/ElmCraft-thumbnail.jpeg";
import LoopstudiosThumbnail from "../asset/image/Loopstudios-thumbnail.jpeg";

const projects = [
  {
    id: 1,
    title: "Noire",
    category: "E-commerce",
    description:
      "A responsive e-commerce interface built with React, focused on product discovery, category navigation, and a smooth shopping experience across devices.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    image: projectImage1,
    liveUrl: "https://saintkhay.github.io/noire-store/",
    githubUrl: "https://github.com/SaintKhay/noire-store",
  },
  {
    id: 2,
    title: "Weather App",
    category: "Web Application",
    description:
      "A responsive React weather application that uses location and weather APIs to provide current conditions and forecast information through a clean, mobile-friendly interface..",
    technologies: ["React", "JavaScript", "Tailwind CSS", "API"],
    image: projectImage1,
    liveUrl: "https://saintkhay.github.io/Weather-App/",
    githubUrl: "https://github.com/SaintKhay/Weather-App",
  },
  {
    id: 3,
    title: "ElmCraft Website",
    category: "Business Website",
    description:
      "A modern responsive business website built with React, focusing on clear information architecture, usability, and a visually appealing design.",
    technologies: ["React", "JavaScript", "Local Storage"],
    image: ElmCraftThumbnail,
    liveUrl: "https://saintkhay.github.io/ElmCraft/",
    githubUrl: "https://github.com/SaintKhay/ElmCraft",
  },
  {
    id: 4,
    title: "Edufy",
    category: "Educational Website",
    description:
      "A responsive educational website focused on clear visual hierarchy, usability, and conversion.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: EdufyThumbnail,
    liveUrl: "https://saintkhay.github.io/Edufy-Project/",
    githubUrl: "https://github.com/SaintKhay/Edufy-Project",
  },
  {
    id: 5,
    title: "Loop-studios Landing Page",
    category: "Educational Website",
    description:
      "A modern responsive educational landing page focused on clear visual hierarchy, for a virtual reality company.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: LoopstudiosThumbnail,
    liveUrl: "https://saintkhay.github.io/Loop-Studios/",
    githubUrl: "https://github.com/SaintKhay/Loop-Studios",
  },
];

export default projects;
