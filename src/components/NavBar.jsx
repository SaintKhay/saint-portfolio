import { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="bg-white">
      <nav className="mx-auto max-w-7xl px-6 py-5 md:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-extrabold tracking-tight text-[#3A4F66]"
          >
            SAINT.DEV
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-sm font-semibold text-[#3A4F66] transition-colors hover:text-[#7F41EE]"
            >
              About
            </a>

            {/* Services */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className="flex items-center gap-1 text-sm font-semibold text-[#3A4F66] transition-colors hover:text-[#7F41EE]"
              >
                Services
                <FiChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 rounded-md border border-[#3A4F66]/10 bg-white p-2 shadow-lg">
                  <a
                    href="#services"
                    onClick={() => setServicesOpen(false)}
                    className="block rounded-md px-4 py-3 text-sm font-medium text-[#3A4F66] transition-colors hover:bg-[#F4F4F4] hover:text-[#7F41EE]"
                  >
                    Frontend Development
                  </a>

                  <a
                    href="#services"
                    onClick={() => setServicesOpen(false)}
                    className="block rounded-md px-4 py-3 text-sm font-medium text-[#3A4F66] transition-colors hover:bg-[#F4F4F4] hover:text-[#7F41EE]"
                  >
                    Website Development
                  </a>

                  <a
                    href="#services"
                    onClick={() => setServicesOpen(false)}
                    className="block rounded-md px-4 py-3 text-sm font-medium text-[#3A4F66] transition-colors hover:bg-[#F4F4F4] hover:text-[#7F41EE]"
                  >
                    SEO & Optimization
                  </a>
                </div>
              )}
            </div>

            {/* Portfolio */}
            <a
              href="#portfolio"
              className="text-sm font-semibold text-[#3A4F66] transition-colors hover:text-[#7F41EE]"
            >
              Portfolio
            </a>
          </div>

          {/* Contact */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="rounded-md bg-[#7F41EE] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#3A4F66]"
            >
              Contact
            </a>
          </div>

          {/* Mobile Toggle */}
          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="relative flex h-10 w-10 items-center justify-center rounded-md text-[#3A4F66] transition-colors hover:bg-[#F4F4F4] md:hidden"
          >
            <motion.div
              animate={{
                rotate: mobileMenuOpen ? 90 : 0,
                scale: mobileMenuOpen ? 1.05 : 1,
              }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
              }}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {/* Mobile Navigation */}
        <AnimatePresence initial={false}>
          {mobileMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="mt-6 border-t border-gray-100 pt-5 md:hidden"
            >
              <div className="flex flex-col gap-2">
                <a
                  href="#about"
                  onClick={closeMobileMenu}
                  className="rounded-md px-3 py-3 font-semibold text-[#3A4F66] transition-colors hover:bg-[#F4F4F4] hover:text-[#7F41EE]"
                >
                  About
                </a>

                {/* Mobile Services */}
                <button
                  type="button"
                  onClick={() => setServicesOpen((prev) => !prev)}
                  aria-expanded={servicesOpen}
                  className="flex w-full items-center justify-between rounded-md px-3 py-3 font-semibold text-[#3A4F66] transition-colors hover:bg-[#F4F4F4] hover:text-[#7F41EE]"
                >
                  <span>Services</span>

                  <motion.div
                    animate={{
                      rotate: servicesOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <FiChevronDown size={18} />
                  </motion.div>
                </button>

                {/* Mobile Services Dropdown */}
                <AnimatePresence initial={false}>
                  {servicesOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeInOut",
                      }}
                      className="ml-4 overflow-hidden border-l border-[#3A4F66]/10 pl-4"
                    >
                      <a
                        href="#services"
                        onClick={closeMobileMenu}
                        className="block py-2 text-sm text-[#3A4F66]/70 transition-colors hover:text-[#7F41EE]"
                      >
                        Frontend Development
                      </a>

                      <a
                        href="#services"
                        onClick={closeMobileMenu}
                        className="block py-2 text-sm text-[#3A4F66]/70 transition-colors hover:text-[#7F41EE]"
                      >
                        Website Development
                      </a>

                      <a
                        href="#services"
                        onClick={closeMobileMenu}
                        className="block py-2 text-sm text-[#3A4F66]/70 transition-colors hover:text-[#7F41EE]"
                      >
                        SEO & Optimization
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>

                <a
                  href="#portfolio"
                  onClick={closeMobileMenu}
                  className="rounded-md px-3 py-3 font-semibold text-[#3A4F66] transition-colors hover:bg-[#F4F4F4] hover:text-[#7F41EE]"
                >
                  Portfolio
                </a>

                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="mt-3 rounded-md bg-[#7F41EE] px-5 py-3 text-center font-bold text-white transition-colors hover:bg-[#3A4F66]"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;
