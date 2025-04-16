import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/enrich_logo.png'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <NavLink to="/" className="inline-flex items-center">
            <img 
              src={logo} 
              alt="Enrich Logo" 
              className="h-10 w-auto" 
            />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? "font-sans text-lab-burgundy border-b-2 border-lab-burgundy pb-1" 
                : "font-sans text-gray-700 hover:text-lab-burgundy transition-colors duration-200"
            }
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/research" 
            className={({ isActive }) => 
              isActive 
                ? "font-sans text-lab-burgundy border-b-2 border-lab-burgundy pb-1" 
                : "font-sans text-gray-700 hover:text-lab-burgundy transition-colors duration-200"
            }
          >
            Research
          </NavLink>
          <NavLink 
            to="/students" 
            className={({ isActive }) => 
              isActive 
                ? "font-sans text-lab-burgundy border-b-2 border-lab-burgundy pb-1" 
                : "font-sans text-gray-700 hover:text-lab-burgundy transition-colors duration-200"
            }
          >
            Students
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 shadow-inner animate-fade-in">
          <ul className="flex flex-col space-y-3">
            <li>
              <NavLink 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  isActive 
                    ? "block py-2 font-sans text-lab-burgundy border-l-4 border-lab-burgundy pl-3" 
                    : "block py-2 font-sans text-gray-700 hover:text-lab-burgundy hover:bg-lab-gray pl-3 transition-colors duration-200"
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/research" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  isActive 
                    ? "block py-2 font-sans text-lab-burgundy border-l-4 border-lab-burgundy pl-3" 
                    : "block py-2 font-sans text-gray-700 hover:text-lab-burgundy hover:bg-lab-gray pl-3 transition-colors duration-200"
                }
              >
                Research
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/students" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  isActive 
                    ? "block py-2 font-sans text-lab-burgundy border-l-4 border-lab-burgundy pl-3" 
                    : "block py-2 font-sans text-gray-700 hover:text-lab-burgundy hover:bg-lab-gray pl-3 transition-colors duration-200"
                }
              >
                Students
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
