import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, Bot, User, ArrowRight, RotateCcw, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAiAssistant } from '../../context/AiAssistantContext';
import { portfolioData } from '../../data/portfolioData';

export const AiAssistantDrawer = () => {
  const { isOpen, closeAiAssistant, messages, loading, sendMessage, clearChat, retryLastMessage } = useAiAssistant();
  const [inputQuery, setInputQuery] = useState('');
  const chatEndRef = useRef(null);
  const navigate = useNavigate();

  const quickQuestions = [
    "What does Faishal do?",
    "What is his current role?",
    "Tell me about his logistics experience.",
    "Tell me about the RVM project.",
    "What technologies does he work with?",
    "What is his software engineering experience?",
    "Why is his profile suitable for an IT Engineer role?",
    "Tell me about his career journey."
  ];

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, loading]);

  const handleSend = (e) => {
    e?.preventDefault();
    if (!inputQuery.trim() || loading) return;
    sendMessage(inputQuery);
    setInputQuery('');
  };

  const handleQuickSelect = (questionText) => {
    if (loading) return;
    sendMessage(questionText);
  };

  const handleActionClick = (actionUrl) => {
    closeAiAssistant();
    if (actionUrl.startsWith('/')) {
      navigate(actionUrl);
    } else if (actionUrl.startsWith('#')) {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(actionUrl.substring(1));
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeAiAssistant}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Sliding Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-md h-full glass-card bg-[#0b1120] border-l border-slate-800 shadow-2xl flex flex-col z-10"
        >
          {/* Header */}
          <div className="p-4 border-b border-slate-800/80 bg-slate-900/90 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl p-0.5 bg-gradient-to-tr from-sky-500 to-indigo-600 shadow-md flex-shrink-0 overflow-hidden">
                <img 
                  src={portfolioData.profile.profileImage || "/images/faishal-saif-profile.jpg"} 
                  alt={portfolioData.profile.name}
                  className="w-full h-full object-cover object-top rounded-[10px]"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-bold text-slate-100 font-mono">Ask About My Work</h2>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Portfolio AI
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-1 font-sans">
                  Explore my experience, projects, skills and logistics technology.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={clearChat}
                title="Clear Chat"
                className="p-2 rounded-xl glass-card text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800 transition-colors flex items-center gap-1 text-[11px] font-mono"
                aria-label="Clear chat history"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={closeAiAssistant}
                className="p-2 rounded-xl glass-card text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800 transition-colors"
                aria-label="Close AI Assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-xs">
            
            {/* Quick Question Suggestions */}
            {messages.length <= 1 && (
              <div className="space-y-2 mb-4">
                <div className="text-[11px] font-mono text-sky-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Suggested Questions:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {quickQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickSelect(q)}
                      className="px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-sky-500/10 hover:border-sky-500/40 text-slate-300 hover:text-sky-300 border border-slate-800 text-[11px] font-sans text-left transition-all"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages Feed */}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className={`w-7 h-7 rounded-lg border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    msg.isError 
                      ? 'bg-rose-500/10 border-rose-500/30 text-rose-400' 
                      : 'bg-sky-500/10 border-sky-500/30 text-sky-400'
                  }`}>
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[84%] p-3.5 rounded-2xl space-y-2 ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-br-none shadow-md'
                      : msg.isError
                        ? 'bg-rose-950/40 border border-rose-800/60 text-rose-200 rounded-bl-none'
                        : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>

                  {/* Retry Button if msg is an Error */}
                  {msg.isError && (
                    <div className="pt-2 border-t border-rose-800/40 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-rose-400">Request couldn't complete</span>
                      <button
                        onClick={retryLastMessage}
                        className="px-2.5 py-1 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-[10.5px] font-mono flex items-center gap-1 transition-all"
                      >
                        <RefreshCw className="w-3 h-3 animate-spin-once" />
                        <span>Try Again</span>
                      </button>
                    </div>
                  )}

                  {/* Action Buttons Below Response */}
                  {!msg.isError && msg.actions && msg.actions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80 mt-2">
                      {msg.actions.map((act, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleActionClick(act.url)}
                          className="px-2.5 py-1 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 text-[10.5px] font-mono flex items-center gap-1 transition-all"
                        >
                          <span>{act.label}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      ))}
                    </div>
                  )}

                  <div className={`text-[9.5px] font-mono text-right ${msg.sender === 'user' ? 'text-sky-100/70' : 'text-slate-500'}`}>
                    {msg.timestamp}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 flex-shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing / Thinking Indicator */}
            {loading && (
              <div className="flex gap-3 items-center text-slate-400 font-mono text-[11px]">
                <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse delay-100"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse delay-200"></span>
                  <span className="ml-1 text-[11px] font-mono text-slate-300">Thinking...</span>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Footer Input Form */}
          <form onSubmit={handleSend} className="p-4 border-t border-slate-800 bg-slate-950/80 space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Ask me anything about my work..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs outline-none focus:border-sky-500 transition-all font-sans"
              />
              <button
                type="submit"
                disabled={!inputQuery.trim() || loading}
                className="p-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-md shadow-sky-500/20 disabled:opacity-40 transition-all flex items-center justify-center"
                aria-label="Send query"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="text-[10px] text-slate-500 font-mono text-center flex items-center justify-center gap-2">
              <span>Powered by Real-Time Portfolio AI</span>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
