import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Code2, Heart, ArrowUp } from 'lucide-react';

const footerLinks = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="relative py-8 border-t"
      style={{
        background: 'rgba(8,18,32,0.98)',
        borderColor: 'rgba(0,212,180,0.1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Link to="hero" smooth duration={600} className="flex items-center gap-2 cursor-pointer">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(0,212,180,0.1)', border: '1px solid rgba(0,212,180,0.25)' }}
            >
              <Code2 size={18} className="text-accent" />
            </div>
            <span className="font-bold text-base">
              <span className="accent-text">&lt;</span>
              <span className="text-text-primary">Oussama Balti</span>
              <span className="accent-text">/&gt;</span>
            </span>
          </Link>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-2">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                offset={-64}
                className="px-4 py-1.5 rounded-full text-xs font-medium text-text-secondary hover:text-accent hover:bg-accent/5 cursor-pointer transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full max-w-sm h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,180,0.3), transparent)' }} />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3 text-xs text-text-muted">
            <p className="flex items-center gap-1.5">
              © {new Date().getFullYear()} Oussama Balti. Made with{' '}
              <Heart size={11} className="text-red-400 fill-red-400" />{' '}
              using React & Tailwind CSS
            </p>
            <p>Full-Stack Developer · Tunisia</p>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.95 }}
        className="absolute right-6 bottom-1/2 translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
        style={{
          background: 'rgba(0,212,180,0.1)',
          border: '1px solid rgba(0,212,180,0.25)',
          color: '#00d4b4',
        }}
        aria-label="Back to top"
      >
        <ArrowUp size={16} />
      </motion.button>
    </footer>
  );
}
