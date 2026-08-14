import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#3A4F66] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <a href="#" className="text-xl font-extrabold tracking-tight">
              SAINT.DEV
            </a>

            <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
              Frontend Developer and Website Developer building modern,
              responsive, and SEO-friendly websites.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Adesida Korede on GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 transition-colors hover:bg-[#7F41EE]"
            >
              <FiGithub size={18} />
            </a>

            <a
              href="#"
              aria-label="Adesida Korede on LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 transition-colors hover:bg-[#7F41EE]"
            >
              <FiLinkedin size={18} />
            </a>

            <a
              href="mailto:hello@saint.dev"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 transition-colors hover:bg-[#7F41EE]"
            >
              <FiMail size={18} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 transition-colors hover:bg-[#7F41EE]"
            >
              <FiArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Saint.dev. All rights reserved.</p>

            <p>Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
