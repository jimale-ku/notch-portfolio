import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        > 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <div className="text-sm md:text-base text-secondary font-mono mb-4">
              Hi there, I'm
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-textLight mb-4">
              Jimale Abdi
            </h1>
            <div className="text-2xl md:text-3xl text-textDark font-bold">
              <span className="text-secondary">{`{ JA }`}</span> | The Creative Developer
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl text-textDark mb-8 max-w-2xl mx-auto"
          >
            Transforming ideas into elegant digital experiences through code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {[
              { name: 'JavaScript', description: 'ES6+, DOM Manipulation, Async Programming' },
              { name: 'React', description: 'Hooks, Context API, Component Architecture' },
              { name: 'Tailwind CSS', description: 'Responsive Design, Custom Animations, Utility-First' },
              { name: 'Node.js', description: 'Express, REST APIs, Server-Side Logic' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                className="relative group"
              >
                <motion.span
                  className="px-4 py-2 bg-tertiary rounded-full text-secondary border border-secondary
                           hover:bg-secondary hover:text-primary transition-all duration-300 cursor-default"
                >
                  {tech.name}
                </motion.span>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 
                              bg-primary/95 text-textLight text-sm rounded-lg opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 whitespace-nowrap pointer-events-none
                              border border-secondary/30 shadow-lg">
                  {tech.description}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-secondary text-secondary rounded-lg 
                     hover:bg-secondary hover:text-primary transition-all duration-300
                     shadow-[0_0_15px_rgba(100,255,218,0.1)] hover:shadow-[0_0_25px_rgba(100,255,218,0.2)]"
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              projectsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Check Out My Work
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-1 h-8 bg-secondary/20 rounded-full mb-2"></div>
        <div className="text-secondary/50 text-sm">Scroll Down</div>
      </div>
    </section>
  );
};

export default Hero;