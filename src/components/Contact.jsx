import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20 relative"
        >
          <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-textLight to-secondary bg-[length:200%_auto] animate-shine mb-4">
            Get In Touch
          </h2>
          <p className="text-textDark text-xl">I'd love to hear from you!</p>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary/50 blur-sm"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-primary/80 backdrop-blur-sm rounded-xl p-8 shadow-xl"
        >
          <form 
            action="https://formspree.io/f/mwplrjwl" 
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_subject" value="New message from portfolio!" />
            <div className="form-group">
              <label htmlFor="name" className="block text-textLight mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 bg-tertiary/50 border border-secondary/30 rounded-lg text-textLight focus:outline-none focus:border-secondary"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="block text-textLight mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-tertiary/50 border border-secondary/30 rounded-lg text-textLight focus:outline-none focus:border-secondary"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="block text-textLight mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                className="w-full px-4 py-2 bg-tertiary/50 border border-secondary/30 rounded-lg text-textLight focus:outline-none focus:border-secondary"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-secondary text-primary rounded-lg font-semibold
                       hover:bg-secondary/90 transition-all duration-300
                       shadow-[0_0_15px_rgba(100,255,218,0.2)] hover:shadow-[0_0_25px_rgba(100,255,218,0.3)]"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;