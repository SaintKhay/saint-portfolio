import { motion } from "framer-motion";
import { fadeUp } from "../animations/animations";

function SectionHeading(props) {
  return (
    <>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-2xl"
      >
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#7F41EE]">
          {props.title}
        </p>

        <h2 className="text-3xl font-normal leading-tight text-[#3A4F66] sm:text-4xl md:text-5xl">
          {props.subtitle}
        </h2>

        <p className="mt-5 text-base leading-7 text-[#3A4F66]/70 sm:text-lg">
          {props.description}
        </p>
      </motion.div>
    </>
  );
}

export default SectionHeading;
