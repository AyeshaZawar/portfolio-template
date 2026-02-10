"use client";
import { motion , AnimatePresence } from "framer-motion";
import {
  FiTwitter,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  // toggler menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  // contact form
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  const navLinks = (
    <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
      {["Home", "About", "Project", "experience", "Contact"].map(
        (item, index) => (
          <motion.a
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.7 + index * 0.2,
            }}
            className="relative text-[var(--secondary-color-3)] dark:text-[var(--primary-color-3)] hover:text-[var(--primary-color-4)] dark:hover:text-[var(--secondary-color-4)] font-medium 
            transition-colors duration-300 group"
            href="#"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--secondary-color-3)] dark:bg-[var(--primary-color-3)] group-hover:w-full transition-all duration-300"></span>
          </motion.a>
        )
      )}
    </div>
  );

  const icons = (
    <div className="flex space-x-4">
      {[FiTwitter, FiInstagram, FiFacebook, FiLinkedin].map((Icon, i) => (
        <motion.a
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.5,
            duration: 0.8,
          }}
          className="text-[var(--secondary-color-3)] dark:text-[var(--primary-color-3)] hover:text-[var(--primary-color-4)] dark:hover:text-[var(--secondary-color-4)] transition-colors duration-300"
          href="#"
        >
          <Icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  );

  const hireMe = (
    <motion.button
      onClick={openContactForm}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 1.6,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--secondary-color-4)] ] to-[var(--secondary-color-3)] bg-gradient-to-r dark:from-[var(--primary-color-4)] dark:to-[var(--primary-color-3)] flex items-center justify-center text-[var(--secondary-color-5)] dark:text-[var(--primary-color-5)] font-bold  hover:bg-gradient-to-r hover:from-[var(--secondary-color-2)]  hover:to-[var(--secondary-color-3)]  hover:text-[var(--secondary-color)] dark:hover:bg-gradient-to-r dark:hover:from-[var(--secondary-color-2)]  dark:hover:to-[var(--secondary-color-3)]  dark:hover:text-[var(--primary-color)] transition-all duration-500"
    >
      Hire Me
    </motion.button>
  );

  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-3xl bg-gradient-to-r from-[var(--secondary-color-4)] ] to-[var(--secondary-color-3)] bg-gradient-to-r dark:from-[var(--primary-color-4)] dark:to-[var(--primary-color-3)] flex items-center justify-center text-[var(--primary-color)] dark:text-[var(--secondary-color)] font-bold text-xl mr-3">
            M-Y
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-[var(--secondary-color-4)] ] to-[var(--secondary-color-3)] bg-gradient-to-r dark:from-[var(--primary-color-4)] dark:to-[var(--primary-color-3)] bg-clip-text text-transparent">
            FullName
          </span>
        </motion.div>

        {/* Large screens (Nav + Icons + HireMe) */}
        <div className="hidden  lg:flex items-center space-x-8">
          {navLinks}
          {icons}
          {hireMe}
        </div>

        {/* Tablet screens (Icons + HireMe + toggler for Nav only) */}
        <div className="hidden md:flex lg:hidden items-center space-x-4">
          {icons}
          {hireMe}
          <button onClick={toggleMenu} className="text-[#0FA4AF] ">
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile (toggler for Nav + Icons + HireMe) */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-[#0FA4AF]">
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-[var(--secondary-color-2)] text-[var(--secondary-color-4)] dark:bg-[var(--primary-color-5)] p-4 lg:hidden"
        >
          {/* Tablet content: Nav only */}
          <div className="hidden md:block">{navLinks}</div>

          {/* Mobile content: Nav + Icons + Hire Me */}
          <div className="block md:hidden space-y-4">
            {navLinks}
            <div className="pt-4 border-t border-[var(--primary-color-2)] dark:border-t dark:border-[var(--secondary-color-2)] ">{icons}</div>
            <div className="w-full flex items-center justify-center ">
              {hireMe}
            </div>
          </div>
        </motion.div>
      )}
             {/* contact form */}
    <AnimatePresence>  
      {contactFormOpen && (
        <motion.div
        initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4 "
        >
          <motion.div 
            initial={{scale: 0.8, opacity: 0, y: 30 }}
            animate={{scale: 1, opacity: 1, y: 0 }}
            exit={{scale: 0.8, opacity: 0, y: 30 }}
            transition={{ 
              type: "spring",
              damping: 30,
              stiffness: 200,
              duration: 0.8  
            }}
            className="bg-[var(--accent-color-2)] dark:bg-[var(--accent-color-3)] p-4 rounded-xl shadow-xl w-full max-w-md p-6 ">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--secondary-color-4)] ] to-[var(--secondary-color-3)] bg-gradient-to-r dark:from-[var(--primary-color-4)] dark:to-[var(--primary-color-3)] bg-clip-text text-transparent">
                Get In Touch
              </h1>
              <button onClick={closeContactForm}>
                <FiX className="w-6 h-6 text-[var(--primary-color-2)] dark:text-[var(--secondary-color-2)] font-extrabold " />
              </button>
            </div>
            {/* //  input form */}
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="Name"
                  className="Block text-sm font-medium text-[var(--accent-color-4)] dark:text-[var(--accent-color-2)] mb-1"
                  >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] focus:border-[var(--accent-color-3)]  bg-[var(--accent-color-2)] dark:bg-[var(--accent-color-3)] text-[var(--accent-color-3)] dark:text-[var(--accent-color)]  "
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="Block text-sm font-medium text-[var(--accent-color-4)] dark:text-[var(--accent-color-2)] mb-1"
                >
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] focus:border-[var(--accent-color-3)]  bg-[var(--accent-color-2)] dark:bg-[var(--accent-color-3)] text-[var(--accent-color-3)] dark:text-[var(--accent-color)]  "
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="Block text-sm font-medium text-[var(--accent-color-4)] dark:text-[var(--accent-color-2)] mb-1"
                >
                  Message:
                </label>
                <textarea
                  rows="4"
                  id="message"
                  placeholder="How can We help you?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] focus:border-[var(--accent-color-3)]  bg-[var(--accent-color-2)] dark:bg-[var(--accent-color-3)] text-[var(--accent-color-3)] dark:text-[var(--accent-color)] "
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--secondary-color-2)] to-[var(--secondary-color-3)] text-[var(--secondary-color-5)] font-bold  hover:bg-gradient-to-r hover:from-[var(--primary-color-2)] hover:to-[var(--secondary-color)] hover:text-[var(--secondary-color)] 
                dark:bg-gradient-to-r dark:from-[var(--primary-color-2)] dark:to-[var(--secondary-color)] dark:text-[var(--primary-color)]
                dark:hover:bg-gradient-to-r dark:hover:from-[var(--secondary-color-2)] dark:hover:to-[var(--secondary-color-3)] dark:hover:text-[var(--primary-color-5)]
                transition-all duration-500 ">
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </header>
  );
};

export default Header;
