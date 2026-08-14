import { FiArrowUpRight } from "react-icons/fi";
import AboutSaint from "../asset/image/About-saint.jpg";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/animations";

function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-24">
          {/* Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-1 w-full md:order-2 md:w-1/2"
            className="order-1 w-full md:order-2 md:w-1/2"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#7F41EE]">
              About Me
            </p>

            <h2 className="max-w-xl text-3xl font-normal leading-tight text-[#3A4F66] sm:text-4xl md:text-5xl">
              I create websites that are built to make an impact.
            </h2>

            <div className="mt-6 max-w-xl space-y-4 text-base leading-7 text-[#3A4F66]/70">
              <p>
                I'm Adesida Korede, a Frontend Developer and Website Developer
                focused on creating modern, responsive, and user-friendly
                websites.
              </p>

              <p>
                I combine clean frontend development with thoughtful design,
                performance, and SEO to build websites that don't just look good
                but help businesses establish a stronger online presence.
              </p>

              <p>
                From business websites and landing pages to custom web
                interfaces, I help businesses turn their ideas into effective
                digital experiences.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#7F41EE] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#3A4F66]"
            >
              Let's Work Together
              <FiArrowUpRight size={18} />
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-md overflow-hidden rounded-lg"
          >
            <div className="h-full w-full overflow-hidden rounded-md border border-[#3A4F66]/10">
              <img
                src={AboutSaint}
                alt="Adesida Korede, frontend and website developer"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
