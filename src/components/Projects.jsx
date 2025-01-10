import { motion } from 'framer-motion';
import backgroundImage from '../assets/image-1.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Color Match Game",
      description: "An engaging color matching game where players test their visual perception and quick thinking abilities. Challenge yourself to identify and match colors correctly in this interactive web game.",
      tech: [
        "React: Used functional components like ColorGrid and ScoreBoard to manage the game's logic and display. Utilized hooks such as useState for managing game state and useEffect for handling side effects like updating the score.",
        "CSS: Implemented custom styles to create a visually appealing and responsive design, ensuring a consistent user experience across different devices.",
        "Netlify: Deployed the application for fast and reliable hosting, leveraging Netlify's continuous deployment features for seamless updates."
      ],
      liveDemo: "https://see-if-ur-colorblind.netlify.app"
    },
    {
      title: "Simon Game",
      description: "An interactive memory game built with modern web technologies. Test your memory by repeating the sequence of colors and sounds.",
      tech: [
        "JavaScript: Developed the core game logic using vanilla JavaScript, focusing on performance and simplicity.",
        "React: Created components like SimonButton and GameBoard to encapsulate game functionality. Used hooks like useState and useEffect to manage game state and lifecycle events.",
        "CSS: Styled the game interface with CSS, ensuring a clean and intuitive user experience.",
        "Netlify: Hosted the game on Netlify, taking advantage of its fast deployment and easy integration with version control systems."
      ],
      liveDemo: "https://memory-teaser-simongame.netlify.app"
    },
    {
      title: "Quran Reader",
      description: "A comprehensive Quran reading application with a user-friendly interface and advanced features.",
      tech: [
        "React: Utilized functional components such as SurahList, AyahDisplay, and AudioPlayer to create a modular and maintainable codebase. Implemented hooks like useState and useEffect for state management and side effects.",
        "Tailwind CSS: Styled the application with responsive design principles, ensuring a seamless experience across devices.",
        "Netlify: Deployed the application for fast and reliable hosting with continuous deployment capabilities."
      ],
      liveDemo: "https://an-nuur-site.netlify.app"
    },
    // Add more projects here
  ];

  return (
    <section 
      id="projects" 
      className="min-h-screen py-20 px-4 relative"
    >
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.95)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/50"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20 relative"
        >
          <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-textLight to-secondary bg-[length:200%_auto] animate-shine mb-4">
            My Projects
          </h2>
          <p className="text-textDark text-xl">Check out what I've been working on</p>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary/50 blur-sm"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group"
            >
              <div className="bg-primary/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl 
                             transform transition-all duration-300 
                             hover:translate-y-[-10px] hover:shadow-2xl hover:shadow-secondary/20"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-secondary mb-2 group-hover:animate-glow">{project.title}</h3>
                  <p className="text-textDark mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-tertiary/80 px-3 py-1 rounded-full text-sm text-secondary
                                 transform transition-all duration-300 hover:scale-105 hover:bg-tertiary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border border-secondary text-secondary rounded-lg font-semibold
                                       hover:bg-secondary/10 transition-colors relative overflow-hidden group"
                        >
                            <span className="relative z-10">Source Code</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/20 to-secondary/0
                                            transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000">
                            </div>
                        </a>
                    )}
                    {project.liveDemo && (
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border border-secondary text-secondary rounded-lg font-semibold
                                       hover:bg-secondary/10 transition-colors relative overflow-hidden group"
                        >
                            <span className="relative z-10">Live Demo</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/20 to-secondary/0
                                            transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000">
                            </div>
                        </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;