import React, { createContext, useContext, useState, useEffect } from 'react';

const LiveWorkContext = createContext();

const initialCurrentWork = {
  title: "Reverse Vending Machine (RVM) Smart Recycling Platform",
  subtitle: "Hardware-to-Cloud Telemetry & Real-Time Operational Analytics",
  statusTag: "⚡ ACTIVE PRODUCTION / IN-DEVELOPMENT",
  progressPercent: 88,
  currentTask: "Integrating IoT telemetry sensor logs, automated bin fill-level alerts, and SQL transactional ledger for Granada Mall, Riyadh.",
  milestoneTasks: [
    "Optical sensor payload validation & security token authentication",
    "Express backend REST API & SQL database transactional ledger",
    "Real-time React dashboard with Chart.js analytics for kiosk management",
    "Linux system service configuration & remote uptime monitoring"
  ],
  techStack: ["React.js", "Node.js", "Express", "SQL / MongoDB", "IoT Telemetry", "Tailwind CSS", "Linux"],
  repoUrl: "https://github.com/iamrazzz77",
  liveUrl: "#",
  lastUpdated: new Date().toISOString()
};

export const LiveWorkProvider = ({ children }) => {
  const [currentWork, setCurrentWork] = useState(() => {
    const saved = localStorage.getItem('fsk_current_work');
    return saved ? JSON.parse(saved) : initialCurrentWork;
  });

  const [githubCommits, setGithubCommits] = useState([]);
  const [githubLoading, setGithubLoading] = useState(false);
  const [githubUser, setGithubUser] = useState('iamrazzz77');

  // Fetch real-time public commits from GitHub API
  useEffect(() => {
    fetchGithubEvents();
  }, [githubUser]);

  const fetchGithubEvents = async () => {
    setGithubLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${githubUser}/events/public`);
      if (res.ok) {
        const events = await res.json();
        // Filter push events to get actual commit messages
        const pushEvents = events.filter(e => e.type === 'PushEvent');
        
        const formattedCommits = [];
        pushEvents.slice(0, 5).forEach(evt => {
          const repoName = evt.repo.name;
          const date = new Date(evt.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
          evt.payload.commits?.forEach(c => {
            formattedCommits.push({
              id: c.sha || Math.random().toString(),
              message: c.message,
              repo: repoName.split('/')[1] || repoName,
              date: date,
              url: `https://github.com/${repoName}/commit/${c.sha}`
            });
          });
        });

        if (formattedCommits.length > 0) {
          setGithubCommits(formattedCommits.slice(0, 5));
        } else {
          setFallbackCommits();
        }
      } else {
        setFallbackCommits();
      }
    } catch (err) {
      setFallbackCommits();
    } finally {
      setGithubLoading(false);
    }
  };

  const setFallbackCommits = () => {
    setGithubCommits([
      {
        id: 'c1',
        message: 'feat: add optical sensor telemetry validation endpoints',
        repo: 'rvm-recycling-platform',
        date: 'Today',
        url: 'https://github.com/iamrazzz77'
      },
      {
        id: 'c2',
        message: 'refactor: optimize SQL transaction queries & bin capacity alerts',
        repo: 'rvm-recycling-platform',
        date: 'Yesterday',
        url: 'https://github.com/iamrazzz77'
      },
      {
        id: 'c3',
        message: 'ui: implement real-time Chart.js deposit metrics dashboard',
        repo: 'fsk_portfolio',
        date: '2 days ago',
        url: 'https://github.com/iamrazzz77'
      }
    ]);
  };

  const updateCurrentWork = (updatedData) => {
    const newData = {
      ...currentWork,
      ...updatedData,
      lastUpdated: new Date().toISOString()
    };
    setCurrentWork(newData);
    localStorage.setItem('fsk_current_work', JSON.stringify(newData));

    // Optional sync to backend API
    fetch('/api/portfolio/current-work', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData)
    }).catch(() => {});
  };

  return (
    <LiveWorkContext.Provider value={{
      currentWork,
      updateCurrentWork,
      githubCommits,
      githubLoading,
      refreshGithub: fetchGithubEvents
    }}>
      {children}
    </LiveWorkContext.Provider>
  );
};

export const useLiveWork = () => useContext(LiveWorkContext);
