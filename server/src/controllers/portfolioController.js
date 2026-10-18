import { Project } from '../models/Project.js';

let inMemoryCurrentWork = {
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

export const getProfile = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: {
      name: "Faishal Saif",
      title: "IT Engineer | Full-Stack Developer",
      tagline: "Keeping systems running and building the software that runs on them.",
      positioningStatement: "I work at the intersection of IT infrastructure and software development — managing servers, databases, and support systems day-to-day, while building full-stack web applications on the side.",
      location: "Riyadh, Saudi Arabia",
      education: "B.Tech in Computer Science & Engineering"
    }
  });
};

export const getCurrentWork = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: inMemoryCurrentWork
  });
};

export const updateCurrentWork = async (req, res) => {
  try {
    inMemoryCurrentWork = {
      ...inMemoryCurrentWork,
      ...req.body,
      lastUpdated: new Date().toISOString()
    };
    return res.status(200).json({
      success: true,
      message: 'Current work updated successfully',
      data: inMemoryCurrentWork
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: projects.length, data: projects });
  } catch (error) {
    return res.status(200).json({ success: true, count: 0, data: [], message: 'MongoDB not connected, fallback active' });
  }
};

export const getProjectBySlug = async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    return res.status(200).json({ success: true, data: project });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error retrieving project detail' });
  }
};

export const createProject = async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    return res.status(201).json({ success: true, data: newProject });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    return res.status(200).json({ success: true, message: 'Project deleted' });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
