import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'balti.oussama.business@gmail.com',
    href: 'mailto:balti.oussama.business@gmail.com',
    color: '#00d4b4',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+216 21 941 131',
    href: 'tel:+21621941131',
    color: '#a78bfa',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Cité Hadi Khlil, Boussalem, Jendouba, Tunisia',
    href: 'https://maps.google.com/?q=Boussalem,Jendouba,Tunisia',
    color: '#f472b6',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    // Simulate sending (replace with real API call)
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(null), 5000);
  };

  const inputCls = (field) =>
    `w-full px-4 py-3 rounded-xl text-sm text-text-primary placeholder-text-muted bg-transparent outline-none transition-all duration-200 ${
      errors[field]
        ? 'border border-red-500/60 focus:border-red-500'
        : 'border border-border-color focus:border-accent'
    }`;

  return (
    <section id="contact" className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,212,180,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag">
            <MessageSquare size={14} />
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-text-primary mt-2">
            Send Me A <span className="text-gradient">Message</span>
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* === Form (3 cols) === */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div
              className="p-6 sm:p-8 rounded-3xl"
              style={{
                background: 'rgba(15,31,56,0.8)',
                border: '1px solid rgba(0,212,180,0.15)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              }}
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Oussama Balti"
                      className={inputCls('name')}
                      style={{ background: 'rgba(255,255,255,0.03)' }}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className={inputCls('email')}
                      style={{ background: 'rgba(255,255,255,0.03)' }}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project or just say hello..."
                    className={`${inputCls('message')} resize-none`}
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Status & Submit */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium"
                    style={{ background: 'rgba(0,212,180,0.1)', border: '1px solid rgba(0,212,180,0.3)', color: '#00d4b4' }}
                  >
                    <CheckCircle size={16} />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300"
                  style={{
                    background: loading ? 'rgba(0,212,180,0.3)' : '#00d4b4',
                    color: '#0a1628',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    boxShadow: loading ? 'none' : '0 0 25px rgba(0,212,180,0.35)',
                  }}
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* === Contact Info (2 cols) === */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="mb-2">
              <h3 className="text-lg font-bold text-text-primary">Get In Touch</h3>
              <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                I'm currently available for freelance work and internships. Feel free to reach out!
              </p>
            </div>

            {contactDetails.map(({ icon: Icon, label, value, href, color }) => (
              <motion.a
                key={label}
                href={href}
                target={label === 'Location' ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 rounded-2xl group cursor-pointer transition-all duration-200"
                style={{
                  background: 'rgba(15,31,56,0.7)',
                  border: `1px solid ${color}18`,
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${color}40`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${color}18`)}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon size={17} style={{ color }} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">{label}</p>
                  <p className="text-sm text-text-primary font-medium mt-0.5 group-hover:text-accent transition-colors break-all">
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <div className="pt-2">
              <p className="text-xs text-text-muted uppercase tracking-wider mb-3 font-semibold">Follow Me</p>
              <div className="flex gap-3">
                {[
                  { label: 'GitHub', href: 'https://github.com/', icon: '🐙' },
                  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: '💼' },
                  { label: 'Twitter', href: 'https://twitter.com/', icon: '🐦' },
                ].map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-base transition-all duration-200 hover:-translate-y-1"
                    style={{
                      background: 'rgba(15,31,56,0.7)',
                      border: '1px solid rgba(0,212,180,0.15)',
                    }}
                    title={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
