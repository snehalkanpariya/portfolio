import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { personalDetails } from '../data/portfolioData';
import {
  Mail,
  MapPin,
  Clock,
  Phone,
  Send,
  Download,
  CheckCircle,
  FileText
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function LettersSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Live ticking clock for India Timezone (Ahmedabad, Gujarat, India - IST)
  useEffect(() => {
    const updateClock = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatted = new Intl.DateTimeFormat([], options).format(new Date());
      setCurrentTime(formatted);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Launch default email client pre-filled with Snehal Kanpariya's email
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:snehalkanpariya@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    // Fire confetti effect
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#E2CEB8', '#88A78F', '#F2EFEA']
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="relative w-full py-8 px-4 flex flex-col items-center">
      {/* Header matching LETTERS section in reference mockup */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-sand-muted block mb-1">
          Get in Touch
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-sand tracking-widest font-normal uppercase max-w-lg leading-tight">
          LET’S MAKE SOMETHING MEANINGFUL.
        </h2>
      </motion.div>

      {/* Main Container Card Grid (Matching layout in 4th mobile preview) */}
      <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Sidebar Branding & Info (4 cols on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 bg-sumi-card border border-sand-subtle rounded-3xl p-6 flex flex-col justify-between gap-6 shadow-xl"
        >
          {/* Top Badge (Matching MCA SCHOLAR origami logo card) */}
          <div className="flex flex-col items-start gap-3 border-b border-sand-subtle pb-5">
            <div className="w-12 h-12 rounded-2xl bg-[#141419] border border-sand-subtle flex items-center justify-center text-sand shadow-inner">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="12 3 2 9 12 15 22 9 12 3" fill="#E2CEB8" opacity="0.3" />
                <path d="M2 9l10 12 10-12" stroke="#88A78F" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-serif tracking-widest text-sand uppercase block">
                MCA SCHOLAR
              </span>
              <span className="text-[11px] font-mono-code text-matcha uppercase tracking-wider block">
                FRONT-END & FULL-STACK
              </span>
            </div>
          </div>

          {/* Timezone & Base Card (Matching Timezone & Base in mockup) */}
          <div className="bg-[#141419] rounded-2xl p-4 border border-sand-subtle/50 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs text-sand-muted">
              <span className="font-serif tracking-wider uppercase text-sand">Timezone & Base</span>
              <MapPin className="w-3.5 h-3.5 text-matcha" />
            </div>

            <div className="text-xs text-gray-300">
              <p className="font-medium text-sand">{personalDetails.location}</p>
            </div>

            <div className="flex items-center justify-between text-xs text-matcha pt-2 border-t border-sand-subtle/30 font-mono-code">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
                <span>IST Local Time</span>
              </div>
              <span className="text-sand font-bold">{currentTime || '12:00:00'}</span>
            </div>
          </div>

          {/* Social Hub Links */}
          <div className="space-y-2">
            <span className="text-xs font-serif uppercase tracking-widest text-sand-muted block mb-2">
              Social Hub
            </span>

            <a
              href={`mailto:${personalDetails.email}`}
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#141419] border border-sand-subtle/40 text-xs text-sand hover:border-matcha hover:text-matcha transition-all"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-matcha" />
                <span className="truncate max-w-[170px]">{personalDetails.email}</span>
              </div>
              <span className="text-[10px] font-mono-code text-sand-muted">Email</span>
            </a>

            <a
              href={`tel:${personalDetails.phone}`}
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#141419] border border-sand-subtle/40 text-xs text-sand hover:border-matcha hover:text-matcha transition-all"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-matcha" />
                <span>{personalDetails.phone}</span>
              </div>
              <span className="text-[10px] font-mono-code text-sand-muted">Call</span>
            </a>

            <div className="flex gap-2 pt-1">
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 rounded-xl bg-[#141419] border border-sand-subtle/40 text-xs text-sand hover:text-matcha hover:border-matcha flex items-center justify-center gap-1.5 transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 rounded-xl bg-[#141419] border border-sand-subtle/40 text-xs text-sand hover:text-matcha hover:border-matcha flex items-center justify-center gap-1.5 transition-all"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Contact Form (7 cols on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-7 bg-sumi-card border border-sand-subtle rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-xs uppercase font-serif tracking-widest text-sand-muted block mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Mercer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#141419] border border-sand-subtle text-sand text-sm focus:outline-none focus:border-sand transition-all placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="text-xs uppercase font-serif tracking-widest text-sand-muted block mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#141419] border border-sand-subtle text-sand text-sm focus:outline-none focus:border-sand transition-all placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="text-xs uppercase font-serif tracking-widest text-sand-muted block mb-1">
                  A Few Words...
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Share details about your project or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#141419] border border-sand-subtle text-sand text-sm focus:outline-none focus:border-sand transition-all placeholder:text-gray-600 resize-none"
                />
              </div>

              {/* Send Note Button (Matching beige pill button in mockup) */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3.5 rounded-full bg-sand text-[#111114] font-serif text-sm tracking-wider font-medium hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Note</span>
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-12 flex flex-col items-center justify-center text-center gap-3 my-auto"
            >
              <div className="w-14 h-14 rounded-full bg-matcha/20 text-matcha border border-matcha flex items-center justify-center shadow-lg">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif text-sand font-medium">
                Note Received!
              </h4>
              <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
                Thank you, <span className="text-sand font-medium">{formData.name}</span>. Snehal Kanpariya will get back to you shortly at <span className="text-matcha">{formData.email}</span>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', message: '' });
                }}
                className="mt-4 px-4 py-2 rounded-full bg-[#141419] border border-sand-subtle text-xs text-sand hover:border-sand transition-all"
              >
                Send Another Message
              </button>
            </motion.div>
          )}

          {/* Bottom Resume Download Feature */}
          <div className="mt-6 pt-4 border-t border-sand-subtle/50 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-sand-muted">
              <FileText className="w-4 h-4 text-matcha" />
              <span>Snehal_Kanpariya_Resume.pdf</span>
            </div>

            <a
              href="#download-resume"
              onClick={(e) => {
                e.preventDefault();
                alert("Downloading Snehal Kanpariya's official resume...");
              }}
              className="text-xs text-matcha hover:text-sand font-medium flex items-center gap-1 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
