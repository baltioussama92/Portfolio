import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, GraduationCap, Code } from 'lucide-react';

function SectionDivider() {
  return (
    <div className="section-divider">
      <span />
    </div>
  );
}

export { SectionDivider };

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center py-20 overflow-hidden">
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,180,0.04) 0%, transparent 70%)' }}
      />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="section-tag">
            <User size={14} />
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-text-primary">
            Who I <span className="text-gradient">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image placeholder */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative">
              {/* Main image card */}
              <div
                className="w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden relative"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,180,0.08), rgba(15,31,56,0.9))',
                  border: '1px solid rgba(0,212,180,0.2)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                }}
              >
                {/* Simulated developer image placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl font-black"
                    style={{ background: 'rgba(0,212,180,0.1)', border: '2px solid rgba(0,212,180,0.3)' }}
                  >
                    <span className="text-gradient">OB</span>
                  </div>
                  {/* Code lines decoration */}
                  <div className="flex flex-col gap-2 w-40">
                    {[70, 95, 55, 80, 45].map((w, i) => (
                      <motion.div
                        key={i}
                        className="h-1.5 rounded-full"
                        style={{ width: `${w}%`, background: i % 2 === 0 ? 'rgba(0,212,180,0.3)' : 'rgba(255,255,255,0.06)' }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                      />
                    ))}
                  </div>
                </div>

                {/* Corner decoration */}
                <div
                  className="absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(0,212,180,0.1)', border: '1px solid rgba(0,212,180,0.2)' }}
                >
                  <Code size={18} className="text-accent" />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -right-5 px-4 py-2 rounded-2xl flex items-center gap-2"
                style={{
                  background: 'rgba(15,31,56,0.95)',
                  border: '1px solid rgba(0,212,180,0.3)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
                }}
              >
                <GraduationCap size={16} className="text-accent" />
                <span className="text-xs font-semibold text-text-primary">Software Eng.</span>
              </motion.div>

              {/* Floating years */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-5 -left-5 px-4 py-2 rounded-2xl"
                style={{
                  background: 'rgba(15,31,56,0.95)',
                  border: '1px solid rgba(0,212,180,0.3)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
                }}
              >
                <p className="text-lg font-black text-gradient leading-none">2+</p>
                <p className="text-[10px] text-text-secondary">Years coding</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div>
              <p className="text-xl font-bold text-text-primary mb-4">
                Hello! <span className="text-gradient">👋</span>
              </p>
              <p className="text-text-secondary leading-relaxed text-base">
                I am a{' '}
                <span className="text-accent font-semibold">Software Engineering student</span>{' '}
                with hands-on experience in full-stack web development, UI/UX design, and a solid
                foundation in JavaScript (React/Node.js), Python, and SQL. Passionate about building
                user-friendly, efficient solutions and eager to keep learning and growing in the tech
                field.
              </p>
            </div>

            {/* Quick info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: 'Name', value: 'Oussama Balti' },
                { label: 'Location', value: 'Jendouba, Tunisia' },
                { label: 'Email', value: 'balti.oussama.business\n@gmail.com' },
                { label: 'Status', value: 'Available for work' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="px-4 py-3 rounded-xl"
                  style={{ background: 'rgba(15,31,56,0.7)', border: '1px solid rgba(0,212,180,0.1)' }}
                >
                  <p className="text-[11px] text-text-muted uppercase tracking-wider font-medium">{label}</p>
                  <p className="text-sm text-text-primary font-medium mt-0.5 break-all">{value}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div>
              <p className="text-sm text-text-secondary mb-2 font-medium">Languages</p>
              <div className="flex flex-wrap gap-2">
                {['French', 'English', 'Arabic'].map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: 'rgba(0,212,180,0.1)', border: '1px solid rgba(0,212,180,0.25)', color: '#00d4b4' }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
