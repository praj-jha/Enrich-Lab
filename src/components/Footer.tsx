
import { Link } from 'react-router-dom';
import enrichLogo from '../assets/enrich-lab-logo-white.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-lab-navy to-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="block mb-6 transition-transform duration-300 hover:scale-105">
              <img 
                src={enrichLogo} 
                alt="Enrich Logo" 
                className="h-16 w-auto object-contain" 
                style={{
                  filter: 'brightness(0) invert(1)',
                  maxWidth: '280px'
                }}
              />
            </Link>
            <p className="font-sans text-sm text-gray-300">
              Pushing the boundaries of innovation and research excellence in our field.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4 text-lab-teal">Quick Links</h3>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <Link to="/" className="hover:text-lab-teal transition-colors duration-200 flex items-center">
                  <span className="w-1 h-1 bg-lab-teal rounded-full mr-2"></span>
                  Home
                </Link>
              </li> 
              <li>
                <Link to="/research" className="hover:text-lab-teal transition-colors duration-200 flex items-center">
                  <span className="w-1 h-1 bg-lab-teal rounded-full mr-2"></span>
                  Research
                </Link>
              </li>
              <li>
                <Link to="/students" className="hover:text-lab-teal transition-colors duration-200 flex items-center">
                  <span className="w-1 h-1 bg-lab-teal rounded-full mr-2"></span>
                  Students
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4 text-lab-teal">Contact</h3>
            <address className="not-italic font-sans text-sm space-y-2 text-gray-300">
              <p className="flex items-center">
                <span className="w-1 h-1 bg-lab-teal rounded-full mr-2"></span>
                Science Building, Room 302
              </p>
              <p className="flex items-center">
                <span className="w-1 h-1 bg-lab-teal rounded-full mr-2"></span>
                University Campus
              </p>
              <p className="flex items-center">
                <span className="w-1 h-1 bg-lab-teal rounded-full mr-2"></span>
                City, State 12345
              </p>
              <p className="flex items-center mt-4">
                <span className="w-1 h-1 bg-lab-teal rounded-full mr-2"></span>
                Email: research@university.edu
              </p>
              <p className="flex items-center">
                <span className="w-1 h-1 bg-lab-teal rounded-full mr-2"></span>
                Phone: (123) 456-7890
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center font-sans text-sm text-gray-400">
          <p>&copy; {currentYear} Enrich+ Research Lab. All rights reserved.</p>
          <div className="mt-4">
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
