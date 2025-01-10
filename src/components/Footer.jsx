const Footer = () => {
    return (
      <footer className="bg-tertiary py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-textDark">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-textDark hover:text-secondary">
              GitHub
            </a>
            <a href="#" className="text-textDark hover:text-secondary">
              LinkedIn
            </a>
            <a href="#" className="text-textDark hover:text-secondary">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;