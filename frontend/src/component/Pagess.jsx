import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import edtechImg from "../../public/Screenshot_2025-11-22_144603.png";
import kindnessImg from "../../public/Screenshot_2025-11-22_144640.png";
import portfolioImg from "../../public/Screenshot 2025-11-22 144404.png";
import {
  FaBars,
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FaReact, FaNodeJs, FaJs, FaGithubSquare } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import { Briefcase } from "lucide-react";


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
      controls.start("visible");
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experiance", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-gray-900/80 backdrop-blur-sm shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold text-white tracking-wider"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            Mahir.dev
          </a>
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
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white z-50"
          >
            {isOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
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
  const skills = [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express",
    "Tailwind CSS",
    "Next.js",
  ];
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
    exit: { opacity: 0, y: -20, transition: { ease: "easeInOut" } },
    enter: { opacity: 1, y: 0, transition: { ease: "easeInOut" } },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-900 text-white"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
            variants={textVariants}
            custom={0}
          >
            Mahir Hayaat
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-6"
            variants={textVariants}
            custom={1}
          >
            Full Stack Developer
          </motion.p>
          <motion.div
            className="h-10 text-2xl md:text-3xl font-semibold text-cyan-400 mb-8"
            variants={textVariants}
            custom={2}
          >
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
          <motion.div
            className="flex justify-center md:justify-start space-x-4"
            variants={textVariants}
            custom={3}
          >
            <motion.a
              href="https://drive.google.com/file/d/1gM1xVtpmlG6NzOSzYKHecwzkrJTuabxp/view?usp=sharing" // Placeholder link
              download
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
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
              src="https://avatars.githubusercontent.com/u/89286205?v=4"
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
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        About Me
      </h2>
      <div className="max-w-3xl mx-auto bg-gray-800/50 p-8 rounded-xl shadow-lg">
        <p className="text-lg text-gray-300 leading-relaxed">
          I am a passionate and results-driven Full Stack Developer with
          expertise in the MERN stack. My journey in web development is fueled
          by a love for creating efficient, scalable, and user-friendly
          applications. I thrive on solving complex problems and am constantly
          learning new technologies to push the boundaries of what's possible.
          From front-end design with React and Tailwind CSS to back-end logic
          with Node.js and Express, I enjoy bringing ideas to life across the
          entire development spectrum.
        </p>
      </div>
    </div>
  </AnimatedSection>
);

// -- Skills Component --
const Skills = () => {
  const skillsData = [
    {
      name: "JavaScript",
      icon: <JsIcon className="w-12 h-12 mx-auto text-yellow-400" />,
    },
    {
      name: "React",
      icon: <ReactIcon className="w-12 h-12 mx-auto text-cyan-400" />,
    },
    {
      name: "Node.js",
      icon: <NodeIcon className="w-12 h-12 mx-auto text-green-500" />,
    },
    {
      name: "Express.js",
      icon: <ExpressIcon className="w-12 h-12 mx-auto text-gray-300" />,
    },
    {
      name: "MongoDB",
      icon: <MongoIcon className="w-12 h-12 mx-auto text-green-600" />,
    },
    {
      name: "Next.js",
      icon: (
        <NextIcon className="w-12 h-12 mx-auto text-black dark:text-white" />
      ),
    },
    {
      name: "Tailwind CSS",
      icon: <TailwindIcon className="w-12 h-12 mx-auto text-teal-400" />,
    },
    {
      name: "Git",
      icon: <GitIcon className="w-12 h-12 mx-auto text-red-500" />,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatedSection id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Technologies I Use
        </h2>
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
              whileHover={{
                y: -8,
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 255, 255, 0.1)",
              }}
            >
              <div className="flex items-center justify-center h-16 mb-4">
                {skill.icon}
              </div>
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
    company: "ByondxTech",
    duration: "Dec 2025 – Present",
    description:
      "Developing and maintaining a MERN-based eCommerce platform with authentication, cart, and order management. Built REST APIs, implemented JWT authentication, and integrated Razorpay for secure payments. Designed admin dashboard and optimized MongoDB queries for performance."
  },
  {
    title: "Frontend Developer Intern",
    company: "IBM SkillsBuild (in collaboration with CSRBOX)",
    duration: "June 2024 – Aug 2024",
    description:
      "Completed a 6-week internship focused on React.js and Tailwind CSS. Developed responsive UI components and improved frontend performance in a real-world project environment."
  },
  {
    title: "Full Stack MERN Developer Trainee",
    company: "Self-Learning / Personal Projects",
    duration: "June 2023 – Oct 2023",
    description:
      "Built full-stack applications using React, Node.js, Express, and MongoDB, including an EdTech platform and donation portal with authentication and responsive UI."
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
              className={`relative flex flex-col md:flex-row md:items-center mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              initial={{
                opacity: 0,
                x: isMobile ? 50 : index % 2 === 0 ? 80 : -80,
              }}
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
                className={`bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 w-full md:w-[46%] ${index % 2 === 0
                  ? "md:mr-auto md:text-right"
                  : "md:ml-auto md:text-left"
                  }`}
              >
                <h3 className="text-xl font-bold text-cyan-400">
                  {item.title}
                </h3>
                <p className="text-md font-semibold text-white">
                  {item.company}
                </p>
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
      title: "EdTech Platform",
      description:
        "A full-stack digital platform offering educational services to students, teachers, and institutions. Includes secure authentication, responsive UI, and dynamic content management.",
      stack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "bcrypt",
        "Tailwind CSS",
      ],
      github: "https://github.com/mahirhayaat4u",
      demo: "https://edtech-wbpo.vercel.app/",
      image: edtechImg,
    },
    {
      title: "Kindness for Well-Being",
      description:
        "A transparent donation platform connecting donors, NGOs, and people in need. Focused on reducing hunger and ensuring secure, efficient donation management.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/mahirhayaat4u",
      demo: "https://charity-wbsite.vercel.app/",

      image: kindnessImg,
    },
    {
      title: "Portfolio Website",
      description:
        "A dynamic and responsive personal portfolio to showcase my skills, experience, and projects. Built with modern web technologies and optimized for performance.",
      stack: ["React.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/mahirhayaat4u", // Replace with actual repository
      demo: "https://mahir-hayaat-portfolio.vercel.app/",
      image: portfolioImg,

    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatedSection id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          My Projects
        </h2>
        {/* <motion.div
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
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg w-full text-center transition-colors"
                  >
                    GitHub
                  </a>
                  {project.title === "EdTech Platform" ? (
                    <button
                      disabled
                      className="bg-gray-600 text-white font-bold py-2 px-4 rounded-lg w-full text-center cursor-not-allowed opacity-60"
                    >
                      Live Demo
                    </button>
                  ) : (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg w-full text-center transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div> */}
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
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col group" // Added 'group' for child hover effects
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              {/* --- New Image Section --- */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image} // Make sure your data has this property
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Optional: Gradient overlay to blend image into card slightly */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* ------------------------- */}

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg w-full text-center transition-colors"
                  >
                    GitHub
                  </a>
                  {(
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg w-full text-center transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
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
    {
      icon: <MailIcon className="w-6 h-6 mr-3 text-cyan-400" />,
      text: "mahirhayat44@gmail.com",
      href: "mailto:mahirhayat44@gmail.com",
    },
    {
      icon: <PhoneIcon className="w-6 h-6 mr-3 text-cyan-400" />,
      text: "+91 8287349853",
      href: "tel:+918287349853",
    },
    {
      icon: <LinkedInIcon className="w-6 h-6 mr-3 text-cyan-400" />,
      text: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/mahir-hayaat-98788b37a/",
    },
    {
      icon: <GitHubIcon className="w-6 h-6 mr-3 text-cyan-400" />,
      text: "GitHub Profile",
      href: "https://github.com/mahirhayaat4u",
    },
  ];

  return (
    <AnimatedSection id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Contact Me
        </h2>
        <div className="max-w-lg mx-auto text-center">
          {/* <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3> */}
          <p className="text-gray-400 mb-8">
            I'm currently open to new opportunities and collaborations. Feel
            free to reach out via email, phone, or connect with me on social
            media.
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
    <div className="bg-gray-900 text-white font-sans overflow-x-hidden antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* <ResumeEditor/> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
