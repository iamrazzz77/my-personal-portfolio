import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, MessageSquare, FolderGit2, Activity, LogOut, Plus, Trash2, RefreshCw, CheckCircle, Save, Sparkles } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useLiveWork } from '../context/LiveWorkContext';
import { portfolioData } from '../data/portfolioData';

export const AdminDashboard = () => {
  const { logout, admin } = useAuth();
  const { currentWork, updateCurrentWork, refreshGithub } = useLiveWork();

  const [activeTab, setActiveTab] = useState('liveWork');
  const [messages, setMessages] = useState([]);
  const [projectsList, setProjectsList] = useState(portfolioData.projects);
  const [loading, setLoading] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Form state for Current Work Manager
  const [workForm, setWorkForm] = useState({
    title: currentWork.title || '',
    subtitle: currentWork.subtitle || '',
    statusTag: currentWork.statusTag || '⚡ ACTIVE PRODUCTION / IN-DEVELOPMENT',
    progressPercent: currentWork.progressPercent || 85,
    tasksString: (currentWork.milestoneTasks || []).join('\n'),
    techString: (currentWork.techStack || []).join(', '),
    repoUrl: currentWork.repoUrl || 'https://github.com/iamrazzz77'
  });

  useEffect(() => {
    fetchContactMessages();
  }, []);

  const fetchContactMessages = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/api/admin/messages', { withCredentials: true });
      if (res.data?.success) {
        setMessages(res.data.messages);
      }
    } catch (err) {
      // Fallback for client-side demo if backend is offline
      setMessages([
        {
          _id: 'msg-1',
          name: 'Sarah Al-Otaibi',
          email: 'sarah.otaibi@techcorp.sa',
          subject: 'IT Infrastructure & Full-Stack Opportunity',
          message: 'Hi Faishal, we saw your portfolio and are interested in discussing your IT engineering background.',
          createdAt: new Date().toISOString(),
          read: false
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveCurrentWork = (e) => {
    e.preventDefault();
    const milestoneTasks = workForm.tasksString
      .split('\n')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const techStack = workForm.techString
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    updateCurrentWork({
      title: workForm.title,
      subtitle: workForm.subtitle,
      statusTag: workForm.statusTag,
      progressPercent: Number(workForm.progressPercent),
      milestoneTasks,
      techStack,
      repoUrl: workForm.repoUrl
    });

    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <>
      <Helmet>
        <title>Admin Panel — Faishal Saif</title>
      </Helmet>

      <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 glass-card p-6 border border-slate-800 bg-[#0c1322] rounded-3xl mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-mono font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-100 font-mono">Portfolio Admin Panel</h1>
              <p className="text-xs text-sky-400 font-mono">Single Admin: {admin?.email || 'faishalsaif.dev@gmail.com'}</p>
            </div>
          </div>

          <button
            onClick={logout}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-rose-400 hover:border-rose-500/50 text-xs font-mono transition-all flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" /> End Admin Session
          </button>
        </div>

        {/* Success Alert Banner */}
        {savedSuccess && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2 animate-fadeIn">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Success! Live "Currently Working On" status updated instantly across your entire portfolio.</span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 font-mono text-xs">
          <button
            onClick={() => setActiveTab('liveWork')}
            className={`px-4 py-2.5 rounded-xl border flex items-center gap-2 transition-all ${
              activeTab === 'liveWork'
                ? 'bg-emerald-500 text-white border-emerald-400 font-semibold shadow-lg shadow-emerald-500/20'
                : 'glass-card text-slate-300 border-slate-800 hover:border-slate-700'
            }`}
          >
            <Activity className="w-4 h-4 text-emerald-300" />
            <span>⚡ Live Current Work Manager</span>
          </button>

          <button
            onClick={() => setActiveTab('messages')}
            className={`px-4 py-2.5 rounded-xl border flex items-center gap-2 transition-all ${
              activeTab === 'messages'
                ? 'bg-sky-500 text-white border-sky-400 font-semibold'
                : 'glass-card text-slate-300 border-slate-800 hover:border-slate-700'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Inbox Messages ({messages.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2.5 rounded-xl border flex items-center gap-2 transition-all ${
              activeTab === 'projects'
                ? 'bg-sky-500 text-white border-sky-400 font-semibold'
                : 'glass-card text-slate-300 border-slate-800 hover:border-slate-700'
            }`}
          >
            <FolderGit2 className="w-4 h-4" />
            <span>Manage Projects ({projectsList.length})</span>
          </button>
        </div>

        {/* Tab 1: Live Current Work Manager */}
        {activeTab === 'liveWork' && (
          <div className="glass-card p-6 sm:p-8 border border-slate-800 bg-slate-900/60 rounded-3xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-bold text-slate-100 font-mono flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  Live "Currently Working On" Showcase Editor
                </h2>
                <p className="text-xs text-slate-400 font-sans mt-1">
                  Update your active project name, progress %, and sprint deliverables. Changes reflect live instantly across the website!
                </p>
              </div>

              <button
                onClick={refreshGithub}
                className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono flex items-center gap-1.5 hover:border-sky-500/40"
              >
                <RefreshCw className="w-4 h-4" /> Sync GitHub Commits
              </button>
            </div>

            <form onSubmit={handleSaveCurrentWork} className="space-y-6 font-sans text-xs">
              
              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Project Title */}
                <div className="space-y-2">
                  <label className="text-slate-300 font-mono font-semibold">Active Project Title</label>
                  <input
                    type="text"
                    required
                    value={workForm.title}
                    onChange={e => setWorkForm({ ...workForm, title: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 outline-none focus:border-sky-400"
                    placeholder="e.g. Reverse Vending Machine (RVM) Smart Recycling Platform"
                  />
                </div>

                {/* Subtitle / Focus */}
                <div className="space-y-2">
                  <label className="text-slate-300 font-mono font-semibold">Subtitle / Technical Focus</label>
                  <input
                    type="text"
                    required
                    value={workForm.subtitle}
                    onChange={e => setWorkForm({ ...workForm, subtitle: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 outline-none focus:border-sky-400"
                    placeholder="e.g. Hardware-to-Cloud Telemetry & Operational Analytics"
                  />
                </div>

                {/* Status Tag */}
                <div className="space-y-2">
                  <label className="text-slate-300 font-mono font-semibold">Status Tag Line</label>
                  <input
                    type="text"
                    required
                    value={workForm.statusTag}
                    onChange={e => setWorkForm({ ...workForm, statusTag: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 outline-none focus:border-sky-400"
                    placeholder="⚡ ACTIVE PRODUCTION / IN-DEVELOPMENT"
                  />
                </div>

                {/* Progress Percentage */}
                <div className="space-y-2">
                  <div className="flex justify-between font-mono">
                    <label className="text-slate-300 font-semibold">Completion Progress Stage</label>
                    <span className="text-emerald-400 font-bold">{workForm.progressPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={workForm.progressPercent}
                    onChange={e => setWorkForm({ ...workForm, progressPercent: e.target.value })}
                    className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                </div>

              </div>

              {/* Sprint Tasks (One per line) */}
              <div className="space-y-2">
                <label className="text-slate-300 font-mono font-semibold">Active Sprint Deliverables & Tasks (1 task per line)</label>
                <textarea
                  rows={4}
                  value={workForm.tasksString}
                  onChange={e => setWorkForm({ ...workForm, tasksString: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 outline-none focus:border-sky-400 font-mono text-xs"
                  placeholder="Task 1&#10;Task 2&#10;Task 3"
                ></textarea>
              </div>

              {/* Tech Stack (Comma separated) */}
              <div className="space-y-2">
                <label className="text-slate-300 font-mono font-semibold">Tech Stack Tags (Comma-separated)</label>
                <input
                  type="text"
                  value={workForm.techString}
                  onChange={e => setWorkForm({ ...workForm, techString: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 outline-none focus:border-sky-400 font-mono"
                  placeholder="React.js, Node.js, Express, SQL, IoT, Linux"
                />
              </div>

              {/* Repo URL */}
              <div className="space-y-2">
                <label className="text-slate-300 font-mono font-semibold">GitHub Repository Link</label>
                <input
                  type="text"
                  value={workForm.repoUrl}
                  onChange={e => setWorkForm({ ...workForm, repoUrl: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 outline-none focus:border-sky-400 font-mono"
                  placeholder="https://github.com/iamrazzz77"
                />
              </div>

              {/* Save Submit Button */}
              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-mono font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2"
                >
                  <Save className="w-4 h-4" /> Save & Publish Live Update
                </button>
              </div>

            </form>
          </div>
        )}

        {/* Tab 2: Messages */}
        {activeTab === 'messages' && (
          <div className="glass-card p-6 border border-slate-800 bg-slate-900/60 rounded-3xl space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-100 font-mono">Contact Form Messages</h2>
              <button onClick={fetchContactMessages} className="p-2 text-sky-400 hover:bg-slate-800 rounded-lg">
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>

            {messages.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-400 font-mono">No contact messages received yet.</div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div key={msg._id} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                      <div className="font-bold text-slate-100">{msg.name} ({msg.email})</div>
                      <div className="text-slate-500">{new Date(msg.createdAt).toLocaleDateString()}</div>
                    </div>
                    <div className="text-xs font-semibold text-sky-400 font-mono">{msg.subject}</div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">{msg.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Projects */}
        {activeTab === 'projects' && (
          <div className="glass-card p-6 border border-slate-800 bg-slate-900/60 rounded-3xl space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-100 font-mono">Portfolio Projects Manager</h2>
              <button className="px-3.5 py-1.5 rounded-xl bg-sky-500 text-white font-mono text-xs flex items-center gap-1.5">
                <Plus className="w-4 h-4" /> Add Project
              </button>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {projectsList.map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-bold text-slate-100">{p.title}</div>
                    <div className="text-slate-400 text-[11px]">{p.category}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-slate-900 text-sky-400 border border-slate-800">
                      {p.slug}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </>
  );
};
