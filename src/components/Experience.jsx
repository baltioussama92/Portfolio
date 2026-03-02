import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Full-Stack Developer Intern',
    company: 'ITDT — Insane Team Distribution Technology',
    period: '08/2025 – 09/2025',
    location: 'Tunisia',
    description:
      'Designed and developed a full-stack web application for managing and printing official bank checks. Built a secure backend with Node.js/GraphQL and a dynamic frontend with React.js.',
    tech: ['Node.js', 'GraphQL', 'React.js', 'REST API'],
    color: '#00d4b4',
  },
  {
    type: 'work',
    title: 'Desktop Application Developer',
    company: 'Café Owner (Freelance)',
    period: '04/2024 – 05/2024',
    location: 'Tunisia',
    description:
      'Designed and built a complete desktop café management system. Handled orders, inventory, and billing using Python, Qt Designer, and SQLite as the local database.',
    tech: ['Python', 'Qt Designer', 'SQLite'],
    color: '#a78bfa',
  },
  {
    type: 'work',
    title: 'Media Creator',
    company: 'Tunivision Club',
    period: '01/2022 – 03/2023',
    location: 'Tunisia',
    description:
      'Created visual content including posters, social media graphics, and promotional videos to showcase and promote club events to a wider audience.',
    tech: ['Graphic Design', 'Video Editing', 'Social Media'],
    color: '#f472b6',
  },
  {
    type: 'edu',
    title: 'GLSI – Software Engineering',
    company: 'Institut Supérieur des Langues Appliquées et d\'Informatique de Béja',
    period: '2024 – Present',
    location: 'Béja, Tunisia',
    description:
      'Pursuing a degree in Applied Computer Science with a specialization in software engineering, covering full-stack development, algorithms, databases, and project management.',
    tech: ['Software Engineering', 'Algorithms', 'Full-Stack', 'DB'],
    color: '#00d4b4',
  },
  {
    type: 'edu',
    title: 'Bachelor of Science — Computer Science',
    company: 'Lycée Boulevard de l\'Environnement',
    period: '2023',
    location: 'Tunisia',
    description: 'Obtained Baccalauréat in Computer Science with a grade of 13.03.',
    tech: ['Computer Science', 'Mathematics'],
    color: '#68d391',
  },
];

function TimelineItem({ item, index }) {
  const isWork = item.type === 'work';

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
      className="relative flex gap-4 sm:gap-6"
    >
      {/* Timeline dot */}
      <div className="flex flex-col items-center">
        <motion.div
          whileInView={{ scale: [1, 1.3, 1] }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10"
          style={{
            background: `${item.color}18`,
            border: `2px solid ${item.color}`,
            boxShadow: `0 0 12px ${item.color}40`,
          }}
        >
          {isWork ? (
            <Briefcase size={16} style={{ color: item.color }} />
          ) : (
            <GraduationCap size={16} style={{ color: item.color }} />
          )}
        </motion.div>
        {index < experiences.length - 1 && (
          <div className="w-0.5 flex-1 mt-2" style={{ background: 'rgba(0,212,180,0.1)', minHeight: '2rem' }} />
        )}
      </div>

      {/* Card */}
      <div
        className="flex-1 mb-8 p-5 rounded-2xl"
        style={{
          background: 'rgba(15,31,56,0.7)',
          border: `1px solid ${item.color}18`,
          backdropFilter: 'blur(8px)',
          transition: 'border-color 0.3s, box-shadow 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${item.color}40`;
          e.currentTarget.style.boxShadow = `0 8px 30px ${item.color}10`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = `${item.color}18`;
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Badge */}
        <span
          className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold mb-3"
          style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}
        >
          {isWork ? '💼 Work' : '🎓 Education'}
        </span>

        <h3 className="font-bold text-text-primary leading-snug">{item.title}</h3>
        <p className="text-sm font-semibold mt-0.5" style={{ color: item.color }}>{item.company}</p>

        <div className="flex flex-wrap gap-3 mt-2 text-xs text-text-secondary">
          <span className="flex items-center gap-1">
            <Calendar size={11} /> {item.period}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={11} /> {item.location}
          </span>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed mt-3">{item.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {item.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 rounded-full text-[10px] font-medium"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#8899aa' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.05 });

  const workItems = experiences.filter((e) => e.type === 'work');
  const eduItems = experiences.filter((e) => e.type === 'edu');

  return (
    <section id="experience" className="relative min-h-screen flex flex-col justify-center py-20 overflow-hidden">
      <div
        className="absolute top-1/2 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,180,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="section-tag">
            <Briefcase size={14} />
            Experience & Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-text-primary mt-2">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl mx-auto">
            Professional experience and academic background that shaped my skills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Work Experience Column */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex items-center gap-2 text-lg font-bold text-text-primary mb-8"
            >
              <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(0,212,180,0.1)', border: '1px solid rgba(0,212,180,0.25)' }}>
                <Briefcase size={14} className="text-accent" />
              </div>
              Work Experience
            </motion.h3>
            <div>
              {workItems.map((item, i) => (
                <TimelineItem key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="flex items-center gap-2 text-lg font-bold text-text-primary mb-8"
            >
              <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(0,212,180,0.1)', border: '1px solid rgba(0,212,180,0.25)' }}>
                <GraduationCap size={14} className="text-accent" />
              </div>
              Education
            </motion.h3>
            <div>
              {eduItems.map((item, i) => (
                <TimelineItem key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
