import { FiCode, FiGlobe, FiSearch, FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations/animations";
import SectionHeading from "../components/SectionHeading";

const services = [
  {
    number: "01",
    icon: FiCode,
    title: "Frontend Development",
    description:
      "I build responsive and interactive user interfaces using modern frontend technologies, with a focus on clean code, usability, and performance.",
  },
  {
    number: "02",
    icon: FiGlobe,
    title: "Website Development",
    description:
      "I create modern business websites, landing pages, and e-commerce experiences that work smoothly across desktop, tablet, and mobile devices.",
  },
  {
    number: "03",
    icon: FiSearch,
    title: "SEO & Optimization",
    description:
      "I build websites with search visibility in mind, focusing on technical SEO, performance, structure, and content foundations that help search engines understand your site.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-[#F4F4F4] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <SectionHeading
          title="Services"
          subtitle="How I can help"
          description="I build digital experiences that combine modern development, performance, and search visibility."
        />

        {/* Services */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                variants={fadeUp}
                key={service.number}
                className="group rounded-lg border border-[#3A4F66]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Top */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#7F41EE]">
                    {service.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#F4F4F4] text-[#7F41EE] transition-colors group-hover:bg-[#7F41EE] group-hover:text-white">
                    <Icon size={21} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-8 text-2xl font-normal text-[#3A4F66]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#3A4F66]/70">
                  {service.description}
                </p>

                {/* Arrow */}
                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#7F41EE] transition-colors hover:text-[#3A4F66]"
                >
                  Discuss a project
                  <FiArrowUpRight size={17} />
                </a>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
