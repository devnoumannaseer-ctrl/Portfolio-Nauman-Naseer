import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Github,
  Linkedin,
  Instagram,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/portfolioData';
import confetti from 'canvas-confetti';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a message subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write your message.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide a little more detail (at least 15 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Simulate real asynchronous submission with validation
      await new Promise((resolve) => setTimeout(resolve, 1400));

      // Trigger Orange/White Confetti!
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#FF4D12', '#FFFFFF', '#FF6B35', '#FFA07A', '#D93800'],
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch {
      setErrorMessage(
        'An unexpected error occurred while transmitting your message. Please reach out directly at ' +
          portfolioData.personal.email
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="07. GET IN TOUCH"
          title="Let's Discuss a Project or"
          highlight="Opportunity"
          subtitle="Whether you have an internship role, an interesting project collaboration, or simply want to chat about C++, Python, or CS theory, my inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            {/* Status card */}
            <div className="p-6 rounded-3xl bg-[#111111] border border-[#292929] shadow-card-dark">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF4D12]/10 border border-[#FF4D12]/30 w-fit mb-4">
                <span className="w-2 h-2 rounded-full bg-[#FF4D12] animate-ping" />
                <span className="text-xs font-mono font-medium text-[#FF4D12]">
                  Active & Available
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Open for Opportunities
              </h3>
              <p className="text-[#B8B8B8] text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                Seeking computer science internships, software development apprenticeships, and challenging programming projects.
              </p>

              {/* Quick info list */}
              <div className="space-y-4 pt-4 border-t border-[#292929] font-mono text-xs">
                {/* Email with copy button */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-[#292929]">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-[#FF4D12] shrink-0" />
                    <span className="text-zinc-300 truncate">
                      {portfolioData.personal.email}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-[#B8B8B8] hover:text-white hover:bg-white/10 transition-colors shrink-0 ml-2"
                    title="Copy Email"
                    aria-label="Copy Email address"
                  >
                    {emailCopied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <a
                  href={portfolioData.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-emerald-950/40 border border-[#292929] hover:border-emerald-500/40 text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <FaWhatsapp className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-zinc-300">WhatsApp Web Contact</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    <span>Open Chat</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </a>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-[#292929] text-zinc-300">
                  <MapPin className="w-4 h-4 text-[#FF4D12] shrink-0" />
                  <span>{portfolioData.personal.location} (Remote / Global)</span>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-[#292929] text-zinc-300">
                  <Clock className="w-4 h-4 text-[#FF4D12] shrink-0" />
                  <span>Typical Response Time: &lt; 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Social channels card */}
            <div className="p-6 rounded-3xl bg-[#111111] border border-[#292929] shadow-card-dark">
              <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF4D12]" />
                Direct Profiles
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-white/5 hover:bg-[#FF4D12]/15 border border-[#292929] hover:border-[#FF4D12]/40 text-[#B8B8B8] hover:text-white transition-all group"
                >
                  <Github className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-mono">GitHub</span>
                </a>

                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-white/5 hover:bg-[#FF4D12]/15 border border-[#292929] hover:border-[#FF4D12]/40 text-[#B8B8B8] hover:text-white transition-all group"
                >
                  <Linkedin className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-mono">LinkedIn</span>
                </a>

                <a
                  href={portfolioData.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-white/5 hover:bg-emerald-950/40 border border-[#292929] hover:border-emerald-500/40 text-[#B8B8B8] hover:text-white transition-all group"
                >
                  <FaWhatsapp className="w-5 h-5 mb-1 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-mono">WhatsApp</span>
                </a>

                <a
                  href={portfolioData.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-white/5 hover:bg-[#FF4D12]/15 border border-[#292929] hover:border-[#FF4D12]/40 text-[#B8B8B8] hover:text-white transition-all group"
                >
                  <Instagram className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-mono">Instagram</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Functional Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-9 rounded-3xl bg-[#111111] border border-[#292929] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF4D12]/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-[#B8B8B8] text-xs sm:text-sm leading-relaxed mb-8">
                Fill out the form below. All inquiries trigger an instant priority notification.
              </p>

              {/* Success Banner */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 mb-6 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <p className="font-bold text-white">Message successfully received!</p>
                      <p className="text-emerald-300">
                        Thank you for reaching out. I have received your message and will respond to your email promptly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Banner */}
              {errorMessage && (
                <div className="p-4 rounded-2xl bg-red-950/60 border border-red-500/40 text-red-200 mb-6 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-zinc-300 mb-2">
                      Your Name <span className="text-[#FF4D12]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-all ${
                        errors.name
                          ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-[#292929] focus:border-[#FF4D12] focus:ring-1 focus:ring-[#FF4D12]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400 font-mono">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-zinc-300 mb-2">
                      Your Email <span className="text-[#FF4D12]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-all ${
                        errors.email
                          ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-[#292929] focus:border-[#FF4D12] focus:ring-1 focus:ring-[#FF4D12]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 font-mono">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono font-medium text-zinc-300 mb-2">
                    Subject <span className="text-[#FF4D12]">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Internship / Project Inquiry"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-all ${
                      errors.subject
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#292929] focus:border-[#FF4D12] focus:ring-1 focus:ring-[#FF4D12]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-400 font-mono">{errors.subject}</p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-zinc-300 mb-2">
                    Message <span className="text-[#FF4D12]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share the details of your project, opportunity, or questions..."
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-all resize-none ${
                      errors.message
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#292929] focus:border-[#FF4D12] focus:ring-1 focus:ring-[#FF4D12]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm text-white bg-gradient-to-r from-[#D93800] to-[#FF4D12] hover:from-[#FF4D12] hover:to-[#FF6B35] shadow-glow-orange hover:shadow-glow-orange-lg transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
