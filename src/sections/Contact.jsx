import { FiArrowUpRight, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/animations";
import SectionHeading from "../components/SectionHeading";

function Contact() {
  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <SectionHeading
          title="Contact"
          subtitle="Let's work together."
          description="Have a project in mind? Tell me a little about it and let's talk about how I can help."
        />

        {/* Contact Content */}
        <div className="mt-14 flex flex-col gap-14 lg:flex-row lg:gap-24">
          {/* Form */}
          <form
            action="https://formspree.io/f/xkjwzone"
            method="POST"
            className="w-full lg:w-2/3"
          >
            <input
              type="hidden"
              name="_subject"
              value="New project inquiry from Saint.dev"
            />

            <input
              type="text"
              name="_gotcha"
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#3A4F66]"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-md border border-[#3A4F66]/15 bg-[#F4F4F4] px-4 py-3 text-sm text-[#3A4F66] outline-none transition focus:border-[#7F41EE]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#3A4F66]"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-md border border-[#3A4F66]/15 bg-[#F4F4F4] px-4 py-3 text-sm text-[#3A4F66] outline-none transition focus:border-[#7F41EE]"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-[#3A4F66]"
              >
                Tell me about your project
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="What are you looking to build?"
                required
                className="w-full resize-none rounded-md border border-[#3A4F66]/15 bg-[#F4F4F4] px-4 py-3 text-sm text-[#3A4F66] outline-none transition focus:border-[#7F41EE]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#7F41EE] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#3A4F66]"
            >
              Send Message
              <FiArrowUpRight size={18} />
            </button>
          </form>

          {/* Contact Details */}
          <div className="w-full lg:w-1/3">
            <div className="space-y-8">
              {/* Email */}
              <div>
                <div className="flex items-center gap-3">
                  <FiMail className="text-[#7F41EE]" size={20} />

                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#3A4F66]">
                    Email
                  </h3>
                </div>

                <a
                  href="mailto:hello@saint.dev"
                  className="mt-2 block text-sm text-[#3A4F66]/70 transition-colors hover:text-[#7F41EE]"
                >
                  adesidakorede2019@gmail.com
                </a>
              </div>

              {/* GitHub */}
              <div>
                <div className="flex items-center gap-3">
                  <FiGithub className="text-[#7F41EE]" size={20} />

                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#3A4F66]">
                    GitHub
                  </h3>
                </div>

                <a
                  href="#"
                  className="mt-2 block text-sm text-[#3A4F66]/70 transition-colors hover:text-[#7F41EE]"
                >
                  SaintKhay
                </a>
              </div>

              {/* LinkedIn */}
              <div>
                <div className="flex items-center gap-3">
                  <FiLinkedin className="text-[#7F41EE]" size={20} />

                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#3A4F66]">
                    LinkedIn
                  </h3>
                </div>

                <a
                  href="#"
                  className="mt-2 block text-sm text-[#3A4F66]/70 transition-colors hover:text-[#7F41EE]"
                >
                  Connect with me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
