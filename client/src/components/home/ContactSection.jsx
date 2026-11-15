import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, Clock, PhoneCall, Copy, Check, ExternalLink } from 'lucide-react';
import axios from 'axios';
import { portfolioData } from '../../data/portfolioData';
import { Whatsapp, Github, Linkedin } from '../common/Icons';

export const ContactSection = () => {
  const { profile } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handlePhoneCopy = () => {
    navigator.clipboard.writeText(profile.socials.phoneCall);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleEmailCopy = () => {
    navigator.clipboard.writeText(profile.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter an inquiry subject.';
    if (!formData.message.trim()) errs.message = 'Please enter your message.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError(false);

    try {
      const res = await axios.post('/api/contact', formData);
      if (res.data?.success) {
        setSubmittedSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitError(true);
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-50/50 dark:bg-transparent transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-sky-100 dark:bg-sky-500/10 border border-sky-300 dark:border-sky-500/30 text-sky-800 dark:text-sky-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Have a technical project, logistics technology requirement, or professional inquiry? Send a message below or connect directly.
          </p>
        </div>

        {/* 50 / 50 Balanced Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Refined Contact Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="glass-card p-6 sm:p-7 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 rounded-3xl shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 font-mono">
                  <Mail className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  Contact Details
                </h3>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Riyadh • International</span>
              </div>

              <div className="space-y-3 font-sans text-xs">
                
                {/* 1. Direct Phone Card */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-3 shadow-sm hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30 shrink-0">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 space-y-1">
                      <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 font-mono font-bold uppercase tracking-wider">
                        <span>Direct Phone</span>
                        <span className="text-slate-400 dark:text-slate-600">•</span>
                        <span className="text-emerald-700 dark:text-emerald-400 font-bold">RIYADH, KSA</span>
                      </div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm tracking-normal font-sans leading-snug truncate">{profile.socials.phoneCall}</div>
                    </div>
                  </div>

                  <button
                    onClick={handlePhoneCopy}
                    className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950 text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-400 border border-slate-200 dark:border-slate-700 text-xs font-mono flex items-center gap-1.5 shrink-0 transition-all"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-700 dark:text-emerald-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 2. WhatsApp Card */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-3 shadow-sm hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30 shrink-0">
                      <Whatsapp className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 space-y-1">
                      <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 font-mono font-bold uppercase tracking-wider">
                        <span>WhatsApp</span>
                        <span className="text-slate-400 dark:text-slate-600">•</span>
                        <span className="text-emerald-700 dark:text-emerald-400 font-bold">INSTANT CHAT</span>
                      </div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm tracking-normal font-sans leading-snug truncate">{profile.socials.whatsapp}</div>
                    </div>
                  </div>

                  <a
                    href={profile.socials.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-emerald-600 dark:bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono flex items-center gap-1 shrink-0 font-bold shadow-sm transition-all"
                  >
                    <span>Open WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* 3. Official Email Card */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-3 shadow-sm hover:border-sky-500/40 transition-colors">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-sky-500/10 text-sky-800 dark:text-sky-400 border border-sky-300 dark:border-sky-500/30 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 space-y-1">
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono font-bold uppercase tracking-wider">Official Email</div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100 text-xs sm:text-sm tracking-normal font-sans leading-snug truncate">{profile.socials.email}</div>
                    </div>
                  </div>

                  <button
                    onClick={handleEmailCopy}
                    className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 text-slate-700 dark:text-slate-200 hover:text-sky-700 dark:hover:text-sky-400 border border-slate-200 dark:border-slate-700 text-xs font-mono flex items-center gap-1.5 shrink-0 transition-all"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                        <span className="text-sky-700 dark:text-sky-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 4. Base Location Card */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 flex items-center gap-3.5 shadow-sm">
                  <div className="p-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 shrink-0">
                    <MapPin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono font-bold uppercase tracking-wider">Base Location</div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm tracking-normal font-sans leading-snug truncate">{profile.location}</div>
                  </div>
                </div>

                {/* 5. Response Time Card */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 flex items-center gap-3 shadow-sm">
                  <Clock className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                  <div className="text-[11px] font-sans text-slate-600 dark:text-slate-400 leading-snug">
                    <span className="font-bold text-slate-900 dark:text-slate-200 font-mono mr-1">RESPONSE:</span> 
                    Usually responds as soon as possible.
                  </div>
                </div>

              </div>

              {/* Social Connections */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 dark:text-slate-400 font-bold">Verified Profiles:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 border border-slate-200 dark:border-slate-700 transition-all hover:scale-105"
                    title="LinkedIn Profile"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>

                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 border border-slate-200 dark:border-slate-700 transition-all hover:scale-105"
                    title="GitHub Profile"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  <a
                    href={profile.socials.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-200 dark:border-slate-700 transition-all hover:scale-105"
                    title="WhatsApp Direct"
                    aria-label="WhatsApp"
                  >
                    <Whatsapp className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Send a Message Form */}
          <div className="lg:col-span-6">
            <div className="glass-card p-6 sm:p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 rounded-3xl shadow-xl relative">
              
              <div className="mb-6 space-y-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 font-mono">
                  Send a Message
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans">
                  Tell me about your project, requirement or inquiry.
                </p>
              </div>

              {/* SUCCESS STATE */}
              {submittedSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center space-y-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 font-mono">
                    ✓ Message Sent
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-sm mx-auto">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmittedSuccess(false)}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold shadow-md transition-all mt-2"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : submitError ? (
                /* ERROR STATE */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center space-y-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800"
                >
                  <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-rose-500/20">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 font-mono">
                    Submission Failed
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-sm mx-auto">
                    Something went wrong while sending your message. Please try again or contact me directly.
                  </p>
                  <button
                    onClick={() => setSubmitError(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-mono text-xs font-bold shadow-md transition-all mt-2"
                  >
                    Try Again
                  </button>
                </motion.div>
              ) : (
                /* FORM */
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="block font-mono text-[11px] font-bold text-slate-700 dark:text-slate-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all font-sans ${
                        errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-sky-500 dark:focus:border-sky-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-500 font-mono">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block font-mono text-[11px] font-bold text-slate-700 dark:text-slate-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      placeholder="e.g. john@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all font-sans ${
                        errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-sky-500 dark:focus:border-sky-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-500 font-mono">{errors.email}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label className="block font-mono text-[11px] font-bold text-slate-700 dark:text-slate-300">
                      Subject / Inquiry Type *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: null });
                      }}
                      placeholder="e.g. Software Project / IT Support / Logistics Technology"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all font-sans ${
                        errors.subject ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-sky-500 dark:focus:border-sky-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-500 font-mono">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="block font-mono text-[11px] font-bold text-slate-700 dark:text-slate-300">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: null });
                      }}
                      placeholder="Describe your project, question, or inquiry..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all font-sans resize-none ${
                        errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-sky-500 dark:focus:border-sky-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 font-mono">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-500 dark:to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-mono text-xs font-bold shadow-lg shadow-sky-500/20 disabled:opacity-50 transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
