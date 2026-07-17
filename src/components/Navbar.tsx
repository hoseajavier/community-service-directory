import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Landmark, Search } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group" aria-label="Community Connect Network Home">
              <div className="bg-blue-600 p-2.5 rounded-xl shadow-md shadow-blue-600/10 group-hover:bg-blue-700 transition-colors">
                <Landmark className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#1E293B] font-extrabold text-lg tracking-wide uppercase leading-none">Community Connect</span>
                <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase mt-1">Network</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-sm font-semibold px-1 py-2 ${isActive('/') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>Home</Link>
            <Link to="/directory" className={`text-sm font-medium px-1 py-2 ${isActive('/directory') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>Browse Directory</Link>
            <Link to="/contact" className={`text-sm font-medium px-1 py-2 ${isActive('/contact') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>Request Info</Link>
            <Link to="/directory" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all duration-200">
              <Search className="w-4 h-4 mr-2 stroke-[2.5]" /> Find Services
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white border-t border-slate-100 shadow-inner">
          <Link to="/" onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-xl text-base font-semibold ${isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-slate-600'}`}>Home</Link>
          <Link to="/directory" onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-xl text-base font-medium ${isActive('/directory') ? 'text-blue-600 bg-blue-50' : 'text-slate-600'}`}>Browse Directory</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-xl text-base font-medium ${isActive('/contact') ? 'text-blue-600 bg-blue-50' : 'text-slate-600'}`}>Request Info</Link>
        </div>
      </div>
    </nav>
  );
};