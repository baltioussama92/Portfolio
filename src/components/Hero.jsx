import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import profileImg from '../assets/Profile.jpeg';
import { ArrowDown, Trophy, Briefcase, Languages, ChevronDown } from 'lucide-react';

const stats = [
  { icon: Trophy, label: '1st Prize', sub: 'Hackathon Winner', color: '#f59e0b' },
  { icon: Briefcase, label: '3+ Projects', sub: 'Major Projects', color: '#00d4b4' },
  { icon: Languages, label: 'Trilingual', sub: 'FR / EN / AR', color: '#a78bfa' },
];

const roles = ['Full-Stack Developer', 'Software Eng. Student', 'UI/UX Enthusiast'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,212,180,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">

          {/* === LEFT: Profile Card === */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-3 flex justify-center lg:justify-start"
          >
            <div
              className="relative w-56 rounded-3xl p-5 flex flex-col items-center gap-4"
              style={{
                background: 'rgba(15,31,56,0.85)',
                border: '1px solid rgba(0,212,180,0.2)',
                boxShadow: '0 0 40px rgba(0,212,180,0.08)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-2xl relative overflow-hidden"
                style={{
                  border: '2px solid rgba(0,212,180,0.35)',
                }}
              >
                <img
                  src={profileImg}
                  alt="Oussama Balti"
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* Animated ring */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{ border: '2px solid rgba(0,212,180,0.3)' }}
                  animate={{ scale: [1, 1.08, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>

              <div className="text-center">
                <p className="font-bold text-sm text-text-primary">Oussama Balti</p>
                <p className="text-xs text-text-secondary mt-0.5">Software Eng. Student</p>
              </div>

              {/* Mini stats */}
              <div className="w-full flex flex-col gap-2">
                {stats.map(({ icon: Icon, label, sub, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <Icon size={14} style={{ color }} />
                    <div>
                      <p className="text-xs font-semibold text-text-primary leading-none">{label}</p>
                      <p className="text-[10px] text-text-secondary mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Online indicator */}
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-text-secondary">Available for work</span>
              </div>
            </div>
          </motion.div>

          {/* === CENTER: Main Content === */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col gap-5 text-center lg:text-left"
          >
            <motion.div variants={itemVariants}>
              <span className="section-tag">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Hey, I'm Oussama 👋
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-black leading-none tracking-tight">
              <span
                className="block text-transparent"
                style={{
                  fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                  background: 'linear-gradient(135deg, #ffffff 30%, #00d4b4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Developer
              </span>
            </motion.h1>

            <motion.div variants={itemVariants}>
              <p className="text-lg sm:text-xl font-semibold text-text-primary">
                I'm Oussama Balti,{' '}
                <span className="accent-text">
                  {displayed}
                  <span className="animate-blink text-accent">|</span>
                </span>
              </p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-text-secondary leading-relaxed max-w-xl">
              Software Engineering student with hands-on experience in full-stack web development,
              UI/UX design, and a solid foundation in JavaScript (React/Node.js), Python, and SQL.
              Passionate about building user-friendly, efficient solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link to="contact" smooth duration={600} offset={-64}>
                <button className="btn-secondary flex items-center gap-2">
                  Let's Talk 🚀
                </button>
              </Link>
              <Link to="projects" smooth duration={600} offset={-64}>
                <button className="btn-primary flex items-center gap-2">
                  View Projects
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* === RIGHT: Floating Stats === */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-3 flex flex-row lg:flex-col gap-4 justify-center flex-wrap"
          >
            {[
              { num: '1st', label: 'Prize', sub: 'Hackathon' },
              { num: '3+', label: 'Projects', sub: 'Major' },
              { num: '3', label: 'Languages', sub: 'FR/EN/AR' },
            ].map(({ num, label, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                className="flex flex-col items-center justify-center p-4 rounded-2xl min-w-[90px]"
                style={{
                  background: 'rgba(15,31,56,0.8)',
                  border: '1px solid rgba(0,212,180,0.15)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <span className="text-2xl font-black text-gradient">{num}</span>
                <span className="text-xs font-semibold text-text-primary mt-0.5">{label}</span>
                <span className="text-[10px] text-text-secondary">{sub}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-muted tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
