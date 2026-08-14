import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F4F4]">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto flex min-h-[calc(100vh-81px)] max-w-5xl items-center justify-center px-6 py-20 text-center md:px-10 md:py-24 lg:px-16"
      >
        <div>
          {/* Role */}
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#7F41EE]">
            Frontend Developer & Website Developer
          </p>

          {/* Introduction */}
          <p className="text-lg font-normal text-[#3A4F66] sm:text-xl">
            Hi, I’m Adesida Korede.
          </p>

          {/* Main Heading */}
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-normal leading-tight tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-black">I build websites that</span>{" "}
            <span className="text-[#7F41EE]">help businesses grow.</span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="mx-auto mt-7 max-w-2xl text-base font-normal leading-7 text-[#3A4F66]/75 sm:text-lg"
          >
            <p>
              I create fast, responsive, and SEO-friendly websites that help
              businesses establish a stronger online presence and turn visitors
              into customers.
            </p>
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease: "easeOut",
            }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#portfolio"
              className="rounded-md bg-[#7F41EE] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#3A4F66]"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-md border border-[#3A4F66]/20 px-7 py-3 text-sm font-bold text-[#3A4F66] transition-colors hover:border-[#7F41EE] hover:text-[#7F41EE]"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Wavy Bottom */}
      <div className="relative h-16">
        <svg
          className="absolute bottom-0 left-0 h-full w-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 55C180 100 360 100 540 55C720 10 900 10 1080 55C1260 100 1350 100 1440 70V100H0V55Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
