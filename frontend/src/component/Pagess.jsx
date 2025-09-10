import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBars, FaTimes, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaReact, FaNodeJs, FaJs, FaGithubSquare } from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss, SiGit } from "react-icons/si";
import { Briefcase } from "lucide-react";


// Using inline SVGs to avoid dependencies for a single-file setup.
// const MenuIcon = (props) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//   </svg>
// );

// const CloseIcon = (props) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//   </svg>
// );

// const MailIcon = (props) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//   </svg>
// );

// const PhoneIcon = (props) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//     </svg>
// );

// const LinkedInIcon = (props) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//     </svg>
// );

// const GitHubIcon = (props) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//     </svg>
// );

// // -- SKILL ICONS --
// const ReactIcon = (props) => (
//     <svg {...props} viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
//         <g stroke="currentColor" strokeWidth="1" fill="none">
//             <ellipse rx="10" ry="4.5"></ellipse>
//             <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
//             <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
//         </g>
//     </svg>
// );
// const NodeIcon = (props) => (
//     <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M11.43.43a2 2 0 00-1.07.33L3.8 4.41a2 2 0 00-1.07 1.76v11.65a2 2 0 001.07 1.76l6.56 3.65a2 2 0 001.99 0l6.56-3.65a2 2 0 001.07-1.76V6.17a2 2 0 00-1.07-1.76l-6.56-3.65a2 2 0 00-.92-.33zm-.86 7.5l-3.41-1.9 4.3-2.43 3.42 1.9-4.31 2.43zm-4.48 4.47l3.42 1.9v3.8l-4.3-2.38v-3.32zm1.07.6l3.41-1.9 3.42 1.9-3.42 1.9-3.41-1.9zm7.8-2.5l-3.41 1.9v4.8l4.3-2.43V9.97z" fill="currentColor"/>
//     </svg>
// );
// const JsIcon = (props) => (
//     <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M21 23h-3.66l-2.93-3.72a2.33 2.33 0 01-.4-1.2v-6.32h5.08v2.1H16.2v4.11l2.58 3.32H21zm-8.85-2.51c-1.38.9-2.92 1.41-4.62 1.41a6.44 6.44 0 01-6.44-6.44A6.44 6.44 0 0112.1 8.52V10.7c-1.14-.6-2.48-.95-3.89-.95-2.6 0-4.71 2.11-4.71 4.71s2.1 4.72 4.7 4.72c1.33 0 2.57-.56 3.44-1.46l.73.98z" fill="currentColor"/>
//     </svg>
// );
// const TailwindIcon = (props) => (
//     <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M12.001 4.8c-3.149 0-5.699 2.55-5.699 5.7 0 2.22 1.25 4.14 3.05 5.02.43.21.65.69.54 1.14-.12.45-.55.74-1.02.74-.29 0-.57-.12-.78-.33a.998.998 0 00-1.4.15 1.001 1.001 0 00-.14 1.41c1.13 1.13 2.78 1.83 4.58 1.83 3.149 0 5.699-2.55 5.699-5.7s-2.55-5.7-5.7-5.7zm0-2.4c4.468 0 8.099 3.63 8.099 8.1 0 4.47-3.63 8.1-8.1 8.1s-8.099-3.63-8.099-8.1c0-4.47 3.63-8.1 8.1-8.1zM4.801 12c0-3.15 2.55-5.7 5.7-5.7s5.699 2.55 5.699 5.7c0 2.22-1.25 4.14-3.05 5.02-.43.21-.65.69-.54 1.14.12.45.55.74 1.02.74.29 0 .57-.12.78-.33a.998.998 0 001.4-.15c.34-.34.34-.9 0-1.24-1.13-1.13-2.78-1.83-4.58-1.83-3.149 0-5.699-2.55-5.699-5.7z" fill="currentColor"/>
//     </svg>
// );
// -- ICONS --
const MenuIcon = (props) => <FaBars {...props} />;
const CloseIcon = (props) => <FaTimes {...props} />;
const MailIcon = (props) => <FaEnvelope {...props} />;
const PhoneIcon = (props) => <FaPhone {...props} />;
const LinkedInIcon = (props) => <FaLinkedin {...props} />;
const GitHubIcon = (props) => <FaGithub {...props} />;

// -- SKILL ICONS --
const ReactIcon = (props) => <FaReact {...props} />;
const NodeIcon = (props) => <FaNodeJs {...props} />;
const JsIcon = (props) => <FaJs {...props} />;
const TailwindIcon = (props) => <SiTailwindcss {...props} />;
const ExpressIcon = (props) => <SiExpress {...props} />;
const MongoIcon = (props) => <SiMongodb {...props} />;
const NextIcon = (props) => <SiNextdotjs {...props} />;
const GitIcon = (props) => <SiGit {...props} />;
// -- Reusable Animated Section Component --
const AnimatedSection = ({ children, id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      className="py-20 md:py-28"
    >
      {children}
    </motion.section>
  );
};


// -- Header Component --
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Experiance', id: 'experience' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ];

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuVariants = {
        closed: { opacity: 0, y: -20 },
        open: { opacity: 1, y: 0 },
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <motion.div 
                  className="text-2xl font-bold text-white tracking-wider"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                    <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Mahir.dev</a>
                </motion.div>
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            {link.name}
                        </motion.button>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white z-50">
                        {isOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <motion.div
                    className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-sm"
                    initial="closed"
                    animate="open"
                    variants={menuVariants}
                    transition={{ duration: 0.3 }}
                >
                    <nav className="flex flex-col items-center py-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-gray-300 hover:text-cyan-400 py-3 transition-colors duration-300"
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>
                </motion.div>
            )}
        </header>
    );
};


// -- Hero Component --
const Hero = () => {
    const skills = ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Next.js"];
    const [currentSkill, setCurrentSkill] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSkill((prev) => (prev + 1) % skills.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [skills.length]);

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.2,
            duration: 0.5,
          },
        }),
    };
    
    const skillVariants = {
        exit: { opacity: 0, y: -20, transition: { ease: 'easeInOut' } },
        enter: { opacity: 1, y: 0, transition: { ease: 'easeInOut' } },
    };

    return (
        <section id="home" className="min-h-screen flex items-center bg-gray-900 text-white">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                {/* Text Content */}
                <motion.div 
                    className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                >
                    <motion.h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4" variants={textVariants} custom={0}>
                        Mahir Hayaat
                    </motion.h1>
                    <motion.p className="text-xl md:text-2xl text-gray-300 mb-6" variants={textVariants} custom={1}>
                        Full Stack Developer
                    </motion.p>
                    <motion.div className="h-10 text-2xl md:text-3xl font-semibold text-cyan-400 mb-8" variants={textVariants} custom={2}>
                        <motion.span
                            key={currentSkill}
                            variants={skillVariants}
                            initial="exit"
                            animate="enter"
                            exit="exit"
                        >
                            {skills[currentSkill]}
                        </motion.span>
                    </motion.div>
                    <motion.div className="flex justify-center md:justify-start space-x-4" variants={textVariants} custom={3}>
                        <motion.a 
                            href="https://drive.google.com/file/d/1GedO2exz_ebPqWbVuGIuOdqUEvPQxOiZ/view?usp=sharing" // Placeholder link
                            download
                            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download Resume
                        </motion.a>
                        <motion.a 
                            href="#contact"
                            onClick={(e) => {e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });}}
                            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>
                </motion.div>
                {/* Profile Picture */}
                <motion.div 
                    className="md:w-1/3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-60 blur-2xl"
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 90, 0],
                                borderRadius: ["50%", "40% 60%", "50%"],
                            }}
                            transition={{
                                duration: 10,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "mirror",
                            }}
                        />
                        <motion.div 
                             className="absolute inset-4 bg-gradient-to-l from-purple-500 to-teal-500 rounded-full opacity-50 blur-2xl"
                             animate={{
                                 scale: [1, 1.05, 1],
                                 rotate: [90, 0, 90],
                                 borderRadius: ["50%", "60% 40%", "50%"],
                             }}
                             transition={{
                                 duration: 8,
                                 ease: "easeInOut",
                                 repeat: Infinity,
                                 repeatType: "mirror",
                                 delay: 2,
                             }}
                        />
                      <img 
                          src="https://media.licdn.com/dms/image/v2/D4E03AQF--BEKiCKjJw/profile-displayphoto-crop_800_800/B4EZkuDk2wGoAQ-/0/1757414318439?e=1760572800&v=beta&t=EugncUZM4T7Q-drxixoRuVF_RcfJN2Yoz2niJ46qKSQ"
                          alt="Mahir Hayaat" 
                          className="relative w-full h-full object-cover rounded-full border-4 border-gray-700 shadow-2xl z-10"
                      />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// -- About Component --
const About = () => (
    <AnimatedSection id="about">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Me</h2>
            <div className="max-w-3xl mx-auto bg-gray-800/50 p-8 rounded-xl shadow-lg">
                <p className="text-lg text-gray-300 leading-relaxed">
                    I am a passionate and results-driven Full Stack Developer with expertise in the MERN stack. My journey in web development is fueled by a love for creating efficient, scalable, and user-friendly applications. I thrive on solving complex problems and am constantly learning new technologies to push the boundaries of what's possible. From front-end design with React and Tailwind CSS to back-end logic with Node.js and Express, I enjoy bringing ideas to life across the entire development spectrum.
                </p>
            </div>
        </div>
    </AnimatedSection>
);

// -- Skills Component --
const Skills = () => {
    const skillsData = [
       { name: "JavaScript", icon: <JsIcon className="w-12 h-12 mx-auto text-yellow-400" /> },
  { name: "React", icon: <ReactIcon className="w-12 h-12 mx-auto text-cyan-400" /> },
  { name: "Node.js", icon: <NodeIcon className="w-12 h-12 mx-auto text-green-500" /> },
  { name: "Express.js", icon: <ExpressIcon className="w-12 h-12 mx-auto text-gray-300" /> },
  { name: "MongoDB", icon: <MongoIcon className="w-12 h-12 mx-auto text-green-600" /> },
  { name: "Next.js", icon: <NextIcon className="w-12 h-12 mx-auto text-black dark:text-white" /> },
  { name: "Tailwind CSS", icon: <TailwindIcon className="w-12 h-12 mx-auto text-teal-400" /> },
  { name: "Git", icon: <GitIcon className="w-12 h-12 mx-auto text-red-500" /> },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <AnimatedSection id="skills">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Technologies I Use</h2>
                <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800 rounded-xl p-6 text-center shadow-lg transition-all duration-300"
                            variants={cardVariants}
                            whileHover={{ y: -8, scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 255, 255, 0.1)" }}
                        >
                            <div className="flex items-center justify-center h-16 mb-4">{skill.icon}</div>
                            <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </AnimatedSection>
    );
};
// -- Experience Component --
const Experience = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const experienceData = [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2023 - Present",
      description:
        "Built and maintained scalable MERN applications. Delivered responsive UIs with React + Tailwind, optimized performance, and collaborated across teams."
    },
    {
      title: "Junior Web Developer",
      company: "Web Innovators LLC",
      duration: "Jun 2021 - Dec 2022",
      description:
        "Developed client websites with HTML, CSS, and JS. Gained backend experience with Node.js & Express. Improved performance by 20%."
    },
    {
      title: "Web Development Intern",
      company: "CodeCrafters Co.",
      duration: "May 2020 - Aug 2020",
      description:
        "Learned fundamentals of web dev, fixed bugs, added minor features, and participated in standups & code reviews."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          My Experience
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800"></div>

          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col md:flex-row md:items-center mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: isMobile ? 50 : index % 2 === 0 ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-1/2 bg-cyan-400 w-6 h-6 rounded-full ring-4 ring-gray-950 shadow-lg shadow-cyan-500/30 z-10 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-gray-900" />
              </div>

              {/* Card */}
              <div
                className={`bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 w-full md:w-[46%] ${
                  index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                }`}
              >
                <h3 className="text-xl font-bold text-cyan-400">{item.title}</h3>
                <p className="text-md font-semibold text-white">{item.company}</p>
                <p className="text-sm text-gray-400 mb-3">{item.duration}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// -- Projects Component --
const Projects = () => {
    const projectData = [
        {
            title: 'E-commerce Platform',
            description: 'A feature-rich e-commerce website with product listings, user authentication, and a complete checkout process.',
            stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Task Management App',
            description: 'A collaborative task management tool that helps teams organize, track, and manage their work efficiently.',
            stack: ['Next.js', 'Firebase', 'Tailwind CSS'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Portfolio Website',
            description: 'A dynamic and responsive personal portfolio to showcase my skills and projects, built with modern web technologies.',
            stack: ['React', 'Framer Motion', 'Vite'],
            github: '#',
            demo: '#'
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <AnimatedSection id="projects">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">My Projects</h2>
                <motion.div 
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    {projectData.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col"
                            variants={cardVariants}
                            whileHover={{ y: -10, scale: 1.03 }}
                        >
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.stack.map(tech => (
                                        <span key={tech} className="bg-gray-700 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full">{tech}</span>
                                    ))}
                                </div>
                                <div className="mt-auto flex space-x-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg w-full text-center transition-colors">GitHub</a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg w-full text-center transition-colors">Live Demo</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </AnimatedSection>
    );
};


// -- Contact Component --
const Contact = () => {
    const contactInfo = [
      { icon: <MailIcon className="w-6 h-6 mr-3 text-cyan-400"/>, text: 'mahirhayat44@gmail.com', href: 'mailto:mahirhayat44@gmail.com' },
      { icon: <PhoneIcon className="w-6 h-6 mr-3 text-cyan-400"/>, text: '+91 8287349853', href: 'tel:+918287349853' },
      { icon: <LinkedInIcon className="w-6 h-6 mr-3 text-cyan-400"/>, text: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/mahir-hayaat-98788b37a/' },
      { icon: <GitHubIcon className="w-6 h-6 mr-3 text-cyan-400"/>, text: 'GitHub Profile', href: 'https://github.com/mahirhayaat4u' }
    ];

    return (
        <AnimatedSection id="contact">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Contact Me</h2>
                <div className="max-w-lg mx-auto text-center">
                    {/* <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3> */}
                    <p className="text-gray-400 mb-8">
                        I'm currently open to new opportunities and collaborations. Feel free to reach out via email, phone, or connect with me on social media.
                    </p>
                    <div className="space-y-6 inline-block text-left">
                        {contactInfo.map((info, index) => (
                          <motion.a 
                            key={index} 
                            href={info.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
                            whileHover={{ x: 5 }}
                          >
                              {info.icon}
                              <span>{info.text}</span>
                          </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};


// -- Footer Component --
const Footer = () => (
    <footer className="bg-gray-900 border-t border-gray-800 py-6">
        <div className="container mx-auto px-6 text-center text-gray-500">
            <p>&copy; 2025 Mahir Hayaat. All rights reserved.</p>
        </div>
    </footer>
);


// -- Main App Component --
export default function Pagess() {
  return (
    <div className="bg-gray-900 text-white font-sans antialiased">
        <Header />
        <main>
            <Hero />
            <About />
            <Skills />
            <Experience/>
            <Projects />
            <Contact />
        </main>
        <Footer />
    </div>
  );
}








