import { motion } from 'framer-motion';
import aboutImage from '../assets/image-2.jpg';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Floating gradient orbs in background */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20 relative"
        >
          <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-textLight to-secondary bg-[length:200%_auto] animate-shine mb-4">
            About Me
          </h2>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary/50 blur-sm"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src={aboutImage}
                alt="About Me"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Animated overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 via-transparent to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[-100%] bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-45 transform translate-x-full animate-[shine_1.5s_ease-in-out]"></div>
              </div>
            </div>
            {/* Animated decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-secondary rounded-lg z-[-1] transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="bg-tertiary/80 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-secondary/20">
              <h3 className="text-xl font-bold text-secondary mb-4 animate-glow">Junior Developer</h3>
              <p className="text-textDark">
                I specialize in frontend development using JavaScript, CSS, React with Vite, 
                and Tailwind CSS. I also have some experience with backend development.
              </p>
            </div>

            <div className="bg-tertiary/80 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-secondary/20">
              <h3 className="text-xl font-bold text-secondary mb-4 animate-glow">Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-textLight mb-2">Frontend</h4>
                  <ul className="text-textDark space-y-2">
                    {['JavaScript', 'React + Vite', 'Tailwind CSS', 'CSS'].map((skill, index) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="flex items-center space-x-2"
                      >
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        <span>{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-textLight mb-2">Backend</h4>
                  <ul className="text-textDark space-y-2">
                    {['Node.js', 'Express.js', 'RESTful APIs'].map((skill, index) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                        className="flex items-center space-x-2"
                      >
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        <span>{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;