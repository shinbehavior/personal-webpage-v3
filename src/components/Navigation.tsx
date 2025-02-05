import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Navigation() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  
  return (
    <nav className="py-8 transition-colors duration-200 dark:bg-[#1a1a1a]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-serif text-2xl dark:text-white">Physical Intelligence (π)</Link>
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className="text-[13px] font-medium relative group dark:text-gray-300"
            >
              Home
              <span className={`absolute -bottom-1 left-0 w-full h-[1.5px] bg-current transform transition-transform duration-200 ${location.pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
            <Link 
              to="/blog" 
              className="text-[13px] font-medium relative group dark:text-gray-300"
            >
              Blog
              <span className={`absolute -bottom-1 left-0 w-full h-[1.5px] bg-current transform transition-transform duration-200 ${location.pathname === '/blog' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
            <Link 
              to="/projects" 
              className="text-[13px] font-medium relative group dark:text-gray-300"
            >
              Projects
              <span className={`absolute -bottom-1 left-0 w-full h-[1.5px] bg-current transform transition-transform duration-200 ${location.pathname === '/projects' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-gray-300" />
              ) : (
                <Moon size={18} />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}