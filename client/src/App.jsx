import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { CommandPaletteProvider } from './context/CommandPaletteContext';
import { AuthProvider } from './context/AuthContext';
import { LiveWorkProvider } from './context/LiveWorkContext';
import { AiAssistantProvider } from './context/AiAssistantContext';

import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CommandPalette } from './components/common/CommandPalette';
import { AiAssistantDrawer } from './components/ai/AiAssistantDrawer';
import { ScrollToHashElement } from './components/common/ScrollToHashElement';
import { CustomCursor } from './components/common/CustomCursor';

import { Home } from './pages/Home';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetail } from './pages/ProjectDetail';
import { BlogPage } from './pages/BlogPage';
import { BlogDetail } from './pages/BlogDetail';
import { AdminLogin } from './pages/AdminLogin';
import { AdminDashboard } from './pages/AdminDashboard';
import { ResumePage } from './pages/ResumePage';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <AuthProvider>
          <LiveWorkProvider>
            <AiAssistantProvider>
              <CommandPaletteProvider>
                <Router>
                  <CustomCursor />
                  <ScrollToHashElement />
                  <div className="flex flex-col min-h-screen bg-[#0a0e17] text-slate-100 transition-colors duration-300">
                    <Navbar />
                    <CommandPalette />
                    <AiAssistantDrawer />
                    <div className="flex-grow">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/resume" element={<ResumePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/projects/:slug" element={<ProjectDetail />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/blog/:slug" element={<BlogDetail />} />
                        <Route path="/admin/login" element={<AdminLogin />} />
                        <Route path="/admin/dashboard" element={<AdminDashboard />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </div>
                    <Footer />
                  </div>
                </Router>
              </CommandPaletteProvider>
            </AiAssistantProvider>
          </LiveWorkProvider>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
