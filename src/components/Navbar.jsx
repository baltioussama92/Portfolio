import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/90 backdrop-blur-md shadow-lg border-b border-border-color'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="hero" smooth duration={600} className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-accent/40 group-hover:border-accent transition-colors duration-300"
              style={{ background: 'rgba(0,212,180,0.1)' }}>
              <Code2 size={16} className="text-accent" />
            </div>
            <span className="font-bold text-base tracking-tight">
              <span className="accent-text">&lt;</span>
              <span className="text-text-primary">Oussama</span>
              <span className="accent-text"> Balti</span>
              <span className="accent-text">/&gt;</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-64}
                  spy
                  activeClass="active-nav"
                  className="px-4 py-2 rounded-full text-sm font-medium text-text-secondary hover:text-accent cursor-pointer transition-all duration-200 hover:bg-accent/5 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-4/5" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Hire Me CTA */}
          <div className="hidden md:block">
            <Link to="contact" smooth duration={600} offset={-64}>
              <button className="btn-primary text-xs px-5 py-2">
                Hire Me
              </button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border-color overflow-hidden"
            style={{ background: 'rgba(10,22,40,0.97)', backdropFilter: 'blur(10px)' }}
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-64}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-text-secondary hover:text-accent hover:bg-accent/5 cursor-pointer transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link to="contact" smooth duration={600} onClick={() => setMobileOpen(false)}>
                  <button className="btn-primary w-full text-sm">Hire Me</button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
