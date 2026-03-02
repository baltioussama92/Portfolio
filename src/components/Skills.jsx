import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Layers } from 'lucide-react';

const categories = [
  {
    title: 'Front-End',
    icon: Code2,
    color: '#61dafb',
    skills: [
      { name: 'React.js', icon: '⚛️', level: 90 },
      { name: 'HTML5', icon: '🌐', level: 95 },
      { name: 'CSS3', icon: '🎨', level: 88 },
      { name: 'JavaScript', icon: '⚡', level: 85 },
      { name: 'Tailwind CSS', icon: '💨', level: 82 },
    ],
  },
  {
    title: 'Back-End & API',
    icon: Server,
    color: '#68d391',
    skills: [
      { name: 'Node.js', icon: '🟢', level: 80 },
      { name: 'GraphQL', icon: '🔷', level: 75 },
      { name: 'Python', icon: '🐍', level: 78 },
      { name: 'REST APIs', icon: '🔗', level: 82 },
      { name: 'Qt Designer', icon: '🖥️', level: 72 },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    color: '#f6ad55',
    skills: [
      { name: 'SQL', icon: '🗄️', level: 80 },
      { name: 'SQLite', icon: '💾', level: 78 },
      { name: 'Data Modeling', icon: '📊', level: 72 },
    ],
  },
  {
    title: 'Tools & Other',
    icon: Layers,
    color: '#a78bfa',
    skills: [
      { name: 'Git / GitHub', icon: '🐙', level: 85 },
      { name: 'UI/UX Design', icon: '🎭', level: 75 },
      { name: 'Figma', icon: '✏️', level: 70 },
      { name: 'Agile/Scrum', icon: '🔄', level: 68 },
    ],
  },
];

/* Variants for individual skill items */
const skillItemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

function SkillBar({ name, icon, level, index }) {
  return (
    <motion.div
      custom={index}
      variants={skillItemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="skill-icon-wrapper"
    >
      <div className="flex items-center justify-between w-full mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-sm font-medium text-text-primary">{name}</span>
        </div>
        <span className="text-xs text-accent font-semibold">{level}%</span>
      </div>
      <div className="w-full h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.07)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #00d4b4, #00ffdd)' }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, delay: index * 0.07 + 0.25, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {

  return (
    <section id="skills" className="relative min-h-screen flex flex-col justify-center py-20 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,212,180,0.03) 0%, transparent 70%)',
        }}
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
          {/* </> icon */}
          <div className="flex justify-center mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black"
              style={{
                background: 'rgba(0,212,180,0.08)',
                border: '1px solid rgba(0,212,180,0.25)',
                color: '#00d4b4',
                textShadow: '0 0 20px rgba(0,212,180,0.5)',
              }}
            >
              {'</>'}
            </div>
          </div>
          <span className="section-tag">
            <Code2 size={14} />
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-text-primary mt-2">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl mx-auto">
            Technologies and tools I work with to build modern, scalable applications.
          </p>
        </motion.div>

        {/* Categories grid — staggered card reveal */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {categories.map((cat, catIdx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="card-glass p-6"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}30` }}
                  >
                    <Icon size={18} style={{ color: cat.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary">{cat.title}</h3>
                    <p className="text-xs text-text-secondary">{cat.skills.length} technologies</p>
                  </div>
                </div>

                {/* Skills — one-by-one stagger */}
                <div className="flex flex-col gap-3">
                  {cat.skills.map((skill, skillIdx) => (
                    <SkillBar
                      key={skill.name}
                      {...skill}
                      index={catIdx * 6 + skillIdx}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech badges row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {['React.js', 'Node.js', 'GraphQL', 'Python', 'SQL', 'JavaScript', 'Tailwind', 'Git', 'SQLite', 'Qt'].map(
            (tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 hover:border-accent hover:text-accent"
                style={{
                  background: 'rgba(15,31,56,0.7)',
                  border: '1px solid rgba(0,212,180,0.15)',
                  color: '#8899aa',
                }}
              >
                {tech}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
