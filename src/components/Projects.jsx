import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Trophy, FolderGit2, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaReact, FaNodeJs } from 'react-icons/fa';

const GAP = 24; // px gap between cards

const BankIcon = () => (
  <span className="flex gap-1.5 items-center">
    <FaReact size={14} style={{ color: '#61dafb' }} />
    <FaNodeJs size={14} style={{ color: '#339933' }} />
  </span>
);

const projects = [
  {
    id: 1,
    title: 'Smart Transport Tracker',
    badge: '🏆 1st Prize Winner',
    badgeColor: '#f59e0b',
    description:
      'Awarded 1st Prize in a Hackathon. A real-time transport management solution tracking live vehicle locations and seat availability for louages, trains, and cars.',
    tech: ['React.js', 'Node.js', 'Real-time', 'Maps API'],
    color: '#f59e0b',
    screenIcon: '🚌',
    screens: ['bg-gradient-to-br from-amber-900/20 to-bg-card'],
  },
  {
    id: 2,
    title: 'Academic Attendance & Live Management System',
    badge: '🎓 University Platform',
    badgeColor: '#00d4b4',
    description:
      'A university platform with a real-time administrative dashboard for live notes and instant reporting on attendance.',
    tech: ['React.js', 'GraphQL', 'Node.js', 'Dashboard'],
    color: '#00d4b4',
    screenIcon: '🎓',
    screens: [],
  },
  {
    id: 3,
    title: 'Ecoverse (S4S Hackathon)',
    badge: '🌱 Hackathon Project',
    badgeColor: '#68d391',
    description:
      'A React-based web app to calculate and reduce individual carbon footprints, focusing on front-end and UX.',
    tech: ['React.js', 'UX Design', 'Carbon API', 'Charts'],
    color: '#68d391',
    screenIcon: '🌱',
    screens: [],
  },
  {
    id: 4,
    title: 'Desktop Café Management System',
    badge: '🖥️ Desktop Application',
    badgeColor: '#a78bfa',
    description:
      'A professional desktop management system designed for café owners, featuring a local database for real-time inventory tracking and automated sales reporting.',
    tech: ['Python', 'Qt Designer', 'SQLite'],
    color: '#a78bfa',
    screenIcon: '🐍',
    screens: [],
  },
  {
    id: 5,
    title: 'Bank Check Management System',
    badge: '💼 Full-Stack Web App',
    badgeColor: '#4f8ef7',
    description:
      'A secure, automated system for managing and printing official bank checks, featuring a GraphQL-powered backend and a high-performance React frontend for administrative control. Built during my internship at ITDT.',
    tech: ['Node.js', 'GraphQL', 'React.js', 'Tailwind CSS'],
    color: '#4f8ef7',
    screenIcon: BankIcon,
    screens: [],
    role: 'Full-Stack Developer Intern',
  },
];

function MonitorMockup({ project }) {
  return (
    <div className="relative flex justify-center items-end">
      {/* Monitor */}
      <div
        className="relative w-full max-w-sm rounded-2xl overflow-hidden"
        style={{
          background: '#0a0f1a',
          border: '2px solid rgba(0,212,180,0.2)',
          boxShadow: '0 0 40px rgba(0,0,0,0.6), 0 0 20px rgba(0,212,180,0.05)',
        }}
      >
        {/* Top bar */}
        <div
          className="flex items-center gap-1.5 px-4 py-2.5"
          style={{ background: 'rgba(0,212,180,0.06)', borderBottom: '1px solid rgba(0,212,180,0.1)' }}
        >
          {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
            <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
          ))}
          <div
            className="flex-1 mx-3 h-5 rounded-full flex items-center px-3"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            <span className="text-[9px] text-text-muted truncate">localhost:3000 · {project.title}</span>
          </div>
        </div>

        {/* Screen content */}
        <div
          className="h-44 relative overflow-hidden flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #0f1f38, #0a1628)' }}
        >
          {/* Simulated UI */}
          <div className="absolute inset-0 p-4 flex flex-col gap-2">
            {/* Simulated navbar */}
            <div className="flex items-center justify-between px-3 py-1.5 rounded-lg" style={{ background: 'rgba(0,212,180,0.06)' }}>
              <div className="w-12 h-1.5 rounded-full" style={{ background: 'rgba(0,212,180,0.4)' }} />
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-6 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
                ))}
              </div>
            </div>
            {/* Content rows */}
            <div className="flex gap-2 mt-1">
              <div className="flex-1 flex flex-col gap-1.5">
                <div className="h-2 rounded" style={{ background: 'rgba(0,212,180,0.25)', width: '70%' }} />
                <div className="h-1.5 rounded" style={{ background: 'rgba(255,255,255,0.06)', width: '90%' }} />
                <div className="h-1.5 rounded" style={{ background: 'rgba(255,255,255,0.06)', width: '75%' }} />
                <div className="h-1.5 rounded" style={{ background: 'rgba(255,255,255,0.06)', width: '55%' }} />
                <div
                  className="mt-2 px-3 py-1 rounded-full text-[8px] font-bold w-fit"
                  style={{ background: 'rgba(0,212,180,0.15)', color: '#00d4b4', border: '1px solid rgba(0,212,180,0.3)' }}
                >
                  View Live
                </div>
              </div>
              <div
                className="w-16 h-20 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: `rgba(${project.color === '#f59e0b' ? '245,158,11' : project.color === '#00d4b4' ? '0,212,180' : project.color === '#68d391' ? '104,211,145' : project.color === '#4f8ef7' ? '79,142,247' : '167,139,250'},0.08)`, border: `1px solid ${project.color}20` }}
              >
                {typeof project.screenIcon === 'function' ? <project.screenIcon /> : project.screenIcon}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Monitor stand */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-4 rounded-b-xl"
        style={{ background: 'rgba(0,212,180,0.1)', border: '1px solid rgba(0,212,180,0.15)' }} />
    </div>
  );
}

export default function Projects() {
  const trackRef = useRef(null);

  // How many cards to show based on breakpoint
  const [visibleCount, setVisibleCount] = useState(3);
  // Pixel width of one card (computed from container)
  const [cardWidth, setCardWidth] = useState(360); // safe fallback

  useLayoutEffect(() => {
    const measure = () => {
      const vw = window.innerWidth;
      const count = vw >= 1024 ? 3 : vw >= 640 ? 2 : 1;
      setVisibleCount(count);
      if (trackRef.current) {
        const w = trackRef.current.offsetWidth;
        if (w > 0) setCardWidth((w - GAP * (count - 1)) / count);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const maxIndex = Math.max(0, projects.length - visibleCount);
  const [activeIndex, setActiveIndex] = useState(0);
  const clampedIndex = Math.min(activeIndex, maxIndex);

  const goPrev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const goNext = () => setActiveIndex((i) => Math.min(maxIndex, i + 1));

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -50) goNext();
    else if (info.offset.x > 50) goPrev();
  };

  // Mobile single-card carousel (< sm)
  const [mobileActive, setMobileActive] = useState(0);
  const mobilePrev = () => setMobileActive((a) => (a - 1 + projects.length) % projects.length);
  const mobileNext = () => setMobileActive((a) => (a + 1) % projects.length);
  const mobileProject = projects[mobileActive];

  const NavBtn = ({ onClick, disabled, children, side }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={side === 'left' ? 'Previous' : 'Next'}
      className="absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200"
      style={{
        [side === 'left' ? 'left' : 'right']: '-20px',
        background: disabled ? 'rgba(15,31,56,0.4)' : 'rgba(0,212,180,0.12)',
        border: disabled ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,212,180,0.5)',
        boxShadow: disabled ? 'none' : '0 0 20px rgba(0,212,180,0.3)',
        color: disabled ? '#3a4a5a' : '#00d4b4',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {children}
    </button>
  );

  return (
    <section id="projects" className="relative min-h-screen flex flex-col justify-center py-20 overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,180,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="section-tag">
            <FolderGit2 size={14} />
            Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-text-primary mt-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl mx-auto">
            Here are some of my most notable projects showcasing my skills in full-stack development.
          </p>
        </motion.div>

        {/* ─── Slider: sm+ (tablet=2 cards, desktop=3 cards) ─── */}
        <div className="hidden sm:block">
          <div className="relative px-7">
            <NavBtn onClick={goPrev} disabled={clampedIndex === 0} side="left">
              <ChevronLeft size={20} />
            </NavBtn>

            {/* Clipping window — overflow:hidden hides off-screen cards */}
            <div
              ref={trackRef}
              className="overflow-hidden"
              style={{ userSelect: 'none' }}
            >
              <motion.div
                className="flex"
                style={{ gap: GAP, cursor: 'grab' }}
                animate={{ x: -(clampedIndex * (cardWidth + GAP)) }}
                transition={{ type: 'spring', stiffness: 300, damping: 35, mass: 0.8 }}
                drag="x"
                dragConstraints={{
                  left: -(maxIndex * (cardWidth + GAP)),
                  right: 0,
                }}
                dragElastic={0.06}
                onDragEnd={handleDragEnd}
                whileDrag={{ cursor: 'grabbing' }}
              >
                {projects.map((p) => {
                  const isWinner = p.id === 1;
                  return (
                    <motion.div
                      key={p.id}
                      // Fixed card width — never shrinks
                      style={{ width: cardWidth, minWidth: cardWidth, maxWidth: cardWidth, flexShrink: 0 }}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                      className="flex flex-col gap-5 group relative"
                    >
                      {isWinner && (
                        <motion.div
                          className="absolute -inset-2 rounded-3xl pointer-events-none z-0"
                          animate={{ opacity: [0.3, 0.7, 0.3] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                          style={{
                            background: 'radial-gradient(ellipse at top, rgba(245,158,11,0.12) 0%, transparent 70%)',
                            border: '1px solid rgba(245,158,11,0.2)',
                            borderRadius: '1.5rem',
                          }}
                        />
                      )}

                      <div className="relative z-10 flex flex-col h-full">
                        <MonitorMockup project={p} />

                        <div
                          className="mt-5 p-5 rounded-2xl flex flex-col gap-3 flex-1"
                          style={{
                            background: isWinner ? 'rgba(20,22,30,0.85)' : 'rgba(15,31,56,0.7)',
                            border: isWinner ? '1px solid rgba(245,158,11,0.35)' : '1px solid rgba(0,212,180,0.1)',
                            transition: 'border-color 0.3s, box-shadow 0.3s',
                            boxShadow: isWinner ? '0 0 30px rgba(245,158,11,0.08)' : 'none',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = isWinner ? 'rgba(245,158,11,0.6)' : 'rgba(0,212,180,0.4)';
                            e.currentTarget.style.boxShadow = isWinner ? '0 8px 30px rgba(245,158,11,0.15)' : '0 8px 30px rgba(0,212,180,0.08)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = isWinner ? 'rgba(245,158,11,0.35)' : 'rgba(0,212,180,0.1)';
                            e.currentTarget.style.boxShadow = isWinner ? '0 0 30px rgba(245,158,11,0.08)' : 'none';
                          }}
                        >
                          {isWinner && (
                            <div
                              className="flex items-center gap-2 px-3 py-2 rounded-xl mb-1"
                              style={{
                                background: 'linear-gradient(90deg, rgba(245,158,11,0.15), rgba(245,158,11,0.05))',
                                border: '1px solid rgba(245,158,11,0.3)',
                              }}
                            >
                              <Trophy size={14} style={{ color: '#f59e0b' }} />
                              <span className="text-xs font-black tracking-wide" style={{ color: '#f59e0b' }}>
                                🥇 HACKATHON — 1ST PRIZE WINNER
                              </span>
                            </div>
                          )}
                          <span
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold w-fit"
                            style={{ background: `${p.badgeColor}18`, color: p.badgeColor, border: `1px solid ${p.badgeColor}30` }}
                          >
                            {p.badge}
                          </span>
                          <h3 className="font-bold text-text-primary leading-snug group-hover:text-accent transition-colors">
                            {p.title}
                          </h3>
                          {p.role && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full w-fit"
                              style={{ background: 'rgba(79,142,247,0.1)', color: '#4f8ef7', border: '1px solid rgba(79,142,247,0.25)' }}>
                              🏢 {p.role}
                            </span>
                          )}
                          <p className="text-sm text-text-secondary leading-relaxed flex-1">{p.description}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {p.tech.map((t) => (
                              <span
                                key={t}
                                className="px-2.5 py-0.5 rounded-full text-[11px] font-medium"
                                style={{ background: 'rgba(0,212,180,0.08)', color: '#00d4b4', border: '1px solid rgba(0,212,180,0.15)' }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-2 pt-1">
                            <button className="flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-accent transition-colors" aria-label="GitHub">
                              <Github size={14} /> Code
                            </button>
                            <button className="flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-accent transition-colors" aria-label="Live">
                              <ExternalLink size={14} /> Live
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            <NavBtn onClick={goNext} disabled={clampedIndex === maxIndex} side="right">
              <ChevronRight size={20} />
            </NavBtn>
          </div>

          {/* Slide dots */}
          <div className="flex justify-center gap-2.5 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === clampedIndex ? '24px' : '8px',
                  height: '8px',
                  background: i === clampedIndex ? '#00d4b4' : 'rgba(0,212,180,0.2)',
                  boxShadow: i === clampedIndex ? '0 0 8px rgba(0,212,180,0.5)' : 'none',
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ─── Mobile Carousel (< sm) ─── */}
        <div className="sm:hidden">
          <motion.div
            key={mobileActive}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-5"
          >
            <MonitorMockup project={mobileProject} />
            <div
              className="p-5 rounded-2xl flex flex-col gap-3"
              style={{
                background: mobileProject.id === 1 ? 'rgba(20,22,30,0.9)' : 'rgba(15,31,56,0.7)',
                border: mobileProject.id === 1 ? '1px solid rgba(245,158,11,0.35)' : `1px solid ${mobileProject.color}22`,
              }}
            >
              {mobileProject.id === 1 && (
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-xl"
                  style={{ background: 'linear-gradient(90deg, rgba(245,158,11,0.15), rgba(245,158,11,0.05))', border: '1px solid rgba(245,158,11,0.3)' }}
                >
                  <Trophy size={13} style={{ color: '#f59e0b' }} />
                  <span className="text-xs font-black" style={{ color: '#f59e0b' }}>🥇 HACKATHON — 1ST PRIZE WINNER</span>
                </div>
              )}
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold w-fit"
                style={{ background: `${mobileProject.badgeColor}18`, color: mobileProject.badgeColor, border: `1px solid ${mobileProject.badgeColor}30` }}
              >
                {mobileProject.badge}
              </span>
              <h3 className="font-bold text-text-primary">{mobileProject.title}</h3>
              {mobileProject.role && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full w-fit"
                  style={{ background: 'rgba(79,142,247,0.1)', color: '#4f8ef7', border: '1px solid rgba(79,142,247,0.25)' }}>
                  🏢 {mobileProject.role}
                </span>
              )}
              <p className="text-sm text-text-secondary leading-relaxed">{mobileProject.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {mobileProject.tech.map((t) => (
                  <span key={t} className="px-2.5 py-0.5 rounded-full text-[11px] font-medium"
                    style={{ background: 'rgba(0,212,180,0.08)', color: '#00d4b4', border: '1px solid rgba(0,212,180,0.15)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mobile controls */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={mobilePrev}
              className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
              style={{ background: 'rgba(0,212,180,0.1)', border: '1px solid rgba(0,212,180,0.35)', color: '#00d4b4' }}
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileActive(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === mobileActive ? '20px' : '8px',
                    height: '8px',
                    background: i === mobileActive ? '#00d4b4' : 'rgba(0,212,180,0.2)',
                    boxShadow: i === mobileActive ? '0 0 6px rgba(0,212,180,0.5)' : 'none',
                  }}
                  aria-label={`Project ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={mobileNext}
              className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
              style={{ background: 'rgba(0,212,180,0.1)', border: '1px solid rgba(0,212,180,0.35)', color: '#00d4b4' }}
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

