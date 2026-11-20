/**
 * Executive Resume Download & Professional PDF Generator Utility
 * Prepares and formats a high-end multi-section executive CV before triggering download/print.
 */
import { portfolioData } from '../data/portfolioData';

export const downloadResume = () => {
  // 1. Trigger direct file download
  const resumeUrl = '/Faishal_Saif_Resume.pdf';
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.setAttribute('download', 'Faishal_Saif_Resume.pdf');
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // 2. Also open high-resolution printable PDF window automatically
  setTimeout(() => {
    generatePrintableResume(false);
  }, 400);
};

export const generatePrintableResume = (autoPrint = true) => {
  const { profile, experience, projects, education, certifications, achievements, techStackCategories } = portfolioData;

  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Please allow popups to view the printable executive resume');
    return;
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${profile.name} — Executive Professional Resume</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: #1e293b;
          background-color: #f8fafc;
          line-height: 1.5;
          padding: 25px;
        }
        .cv-container {
          max-width: 900px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          overflow: hidden;
          border: 1px solid #e2e8f0;
        }

        /* Executive Header Banner */
        .header {
          background: linear-gradient(135deg, #0b1329 0%, #1e293b 60%, #0369a1 100%);
          color: #ffffff;
          padding: 35px 40px;
          position: relative;
        }
        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        }
        .name {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: #ffffff;
        }
        .title-badge {
          display: inline-block;
          margin-top: 6px;
          padding: 4px 14px;
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.4);
          color: #38bdf8;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          font-weight: 600;
          border-radius: 20px;
        }
        .contact-grid {
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 15px 25px;
          font-size: 12px;
          color: #cbd5e1;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 15px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .contact-item a { color: #38bdf8; text-decoration: none; }

        /* Main Body Columns */
        .content {
          padding: 35px 40px;
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 35px;
        }

        /* Section Headings */
        .section-header {
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: #0f172a;
          border-bottom: 2px solid #0284c7;
          padding-bottom: 6px;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .section-header::before {
          content: '';
          display: inline-block;
          width: 8px;
          height: 8px;
          background: #0284c7;
          border-radius: 2px;
        }

        /* Summary */
        .summary-text {
          font-size: 13px;
          color: #334155;
          line-height: 1.6;
          margin-bottom: 25px;
          background: #f1f5f9;
          padding: 14px;
          border-radius: 8px;
          border-left: 3px solid #0284c7;
        }

        /* Experience Cards */
        .item-card {
          margin-bottom: 20px;
        }
        .item-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        .role {
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
        }
        .company {
          color: #0284c7;
          font-weight: 600;
        }
        .period {
          font-size: 11px;
          font-family: 'JetBrains Mono', monospace;
          color: #64748b;
          background: #f1f5f9;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 600;
        }
        .location {
          font-size: 11px;
          color: #64748b;
          margin-bottom: 6px;
        }
        .desc-text {
          font-size: 12px;
          color: #334155;
          margin-bottom: 6px;
        }
        .bullet-list {
          padding-left: 18px;
          font-size: 12px;
          color: #334155;
        }
        .bullet-list li { margin-bottom: 4px; }

        /* Project Badge Cards */
        .project-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 14px;
          margin-bottom: 15px;
        }
        .project-title {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
        }
        .project-cat {
          font-size: 11px;
          color: #0284c7;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
          margin-bottom: 6px;
        }
        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: 8px;
        }
        .tag-chip {
          font-size: 10px;
          font-family: 'JetBrains Mono', monospace;
          background: #e2e8f0;
          color: #1e293b;
          padding: 2px 6px;
          border-radius: 4px;
        }

        /* Sidebar Skills & Certs */
        .skills-group {
          margin-bottom: 20px;
        }
        .skills-group-title {
          font-size: 12px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 6px;
          text-transform: uppercase;
        }
        .skills-list {
          font-size: 11px;
          color: #475569;
          line-height: 1.6;
        }

        .cert-item {
          margin-bottom: 10px;
          font-size: 11px;
        }
        .cert-name { font-weight: 700; color: #0f172a; }
        .cert-issuer { color: #0284c7; font-weight: 600; }

        .achieve-item {
          font-size: 11px;
          margin-bottom: 10px;
          padding-bottom: 8px;
          border-bottom: 1px dashed #e2e8f0;
        }
        .achieve-title { font-weight: 700; color: #0f172a; }

        /* Print Controls Bar */
        .no-print-bar {
          position: sticky;
          top: 0;
          background: #0f172a;
          color: white;
          padding: 12px 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        .btn-print {
          background: #0284c7;
          color: white;
          border: none;
          padding: 8px 18px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .btn-print:hover { background: #0369a1; }

        @media print {
          body { background: white; padding: 0; }
          .cv-container { box-shadow: none; border: none; max-width: 100%; }
          .no-print-bar { display: none !important; }
        }
      </style>
    </head>
    <body>

      <div class="no-print-bar">
        <div style="font-size: 13px; font-weight: 600;">📄 Faishal Saif — Official Executive Resume PDF Preview</div>
        <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF Document</button>
      </div>

      <div class="cv-container">
        
        <!-- Header Banner -->
        <div class="header">
          <div class="header-top">
            <div>
              <div class="name">${profile.name}</div>
              <div class="title-badge">${profile.title}</div>
            </div>
          </div>

          <div class="contact-grid">
            <div class="contact-item">📍 ${profile.location}</div>
            <div class="contact-item">📧 <a href="mailto:${profile.socials.email}">${profile.socials.email}</a></div>
            <div class="contact-item">📞 ${profile.socials.phoneCall}</div>
            <div class="contact-item">🌐 <a href="${profile.socials.github}" target="_blank">GitHub</a></div>
            <div class="contact-item">💼 <a href="${profile.socials.linkedin}" target="_blank">LinkedIn</a></div>
          </div>
        </div>

        <!-- Content Body Grid -->
        <div class="content">
          
          <!-- Left Column (Summary, Experience, Projects) -->
          <div>
            
            <div class="section-header">Executive Summary</div>
            <div class="summary-text">${profile.bio}</div>

            <div class="section-header">Key Engineering & Full-Stack Projects</div>
            ${projects.map(p => `
              <div class="project-card">
                <div class="item-head">
                  <div class="project-title">${p.title}</div>
                  <span class="period">${p.period}</span>
                </div>
                <div class="project-cat">${p.category} | Role: ${p.details?.role || 'Engineer'}</div>
                <div class="desc-text">${p.summary}</div>
                <ul class="bullet-list" style="margin-top: 6px;">
                  ${(p.details?.highlights || []).map(h => `<li>${h}</li>`).join('')}
                </ul>
                <div class="tags-container">
                  ${p.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}
                </div>
              </div>
            `).join('')}

            <div class="section-header">Professional Experience Timeline</div>
            ${experience.map(exp => `
              <div class="item-card">
                <div class="item-head">
                  <div class="role">${exp.role} <span class="company">@ ${exp.company}</span></div>
                  <span class="period">${exp.period}</span>
                </div>
                <div class="location">${exp.location} | ${exp.type}</div>
                <div class="desc-text">${exp.description}</div>
                <ul class="bullet-list">
                  ${exp.responsibilities.map(r => `<li>${r.replace(/\*\*/g, '')}</li>`).join('')}
                </ul>
              </div>
            `).join('')}

          </div>

          <!-- Right Column (Skills, Certifications, Education, Hackathons) -->
          <div>
            
            <div class="section-header">Technical Competencies</div>
            ${techStackCategories.map(cat => `
              <div class="skills-group">
                <div class="skills-group-title">${cat.name}</div>
                <div class="skills-list">
                  ${cat.skills.map(s => s.name).join(' • ')}
                </div>
              </div>
            `).join('')}

            <div class="section-header">Official Certifications</div>
            ${certifications.map(c => `
              <div class="cert-item">
                <div class="cert-name">${c.title}</div>
                <div class="cert-issuer">${c.issuer} (${c.date})</div>
              </div>
            `).join('')}

            <div class="section-header">Education</div>
            ${education.map(edu => `
              <div style="margin-bottom: 15px;">
                <div style="font-size: 13px; font-weight: 700; color: #0f172a;">${edu.degree}</div>
                <div style="font-size: 11px; color: #0284c7; font-weight: 600;">${edu.institution}</div>
              </div>
            `).join('')}

            <div class="section-header">Hackathons & Achievements</div>
            ${achievements.map(ach => `
              <div class="achieve-item">
                <div class="achieve-title">${ach.title}</div>
                <div style="color: #64748b; font-size: 10px;">${ach.organization} (${ach.date})</div>
                <div style="color: #334155; font-size: 11px; margin-top: 2px;">${ach.description}</div>
              </div>
            `).join('')}

          </div>

        </div>

      </div>

      <script>
        ${autoPrint ? 'window.onload = function() { setTimeout(function() { window.print(); }, 500); };' : ''}
      </script>

    </body>
    </html>
  `;

  printWindow.document.write(htmlContent);
  printWindow.document.close();
};
