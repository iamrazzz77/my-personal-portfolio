import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, Printer, RefreshCw, FileText, ArrowLeft, CheckCircle2, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import { A4ResumeSheet } from '../components/resume/A4ResumeSheet';
import { useLiveWork } from '../context/LiveWorkContext';

export const ResumePage = () => {
  const resumeRef = useRef(null);
  const [resumeVersion, setResumeVersion] = useState('1page'); // '1page' | '2page'
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const { refreshGithub } = useLiveWork();

  const handleDownloadPDF = () => {
    if (!resumeRef.current) return;
    setDownloading(true);

    const element = resumeRef.current;
    const filename = resumeVersion === '1page' ? 'Faishal_Saif_Resume_Compact_1Page.pdf' : 'Faishal_Saif_Resume_Detailed_2Page.pdf';

    const opt = {
      margin:       0,
      filename:     filename,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, logging: false },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .then(() => {
        setDownloading(false);
        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 4000);
      })
      .catch((err) => {
        console.error('PDF generation error:', err);
        setDownloading(false);
        window.print();
      });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>Software Engineer | IT Engineer | Logistics Tech Resume — Faishal Saif</title>
        <meta name="description" content="Dynamic A4 Resume Generator with 1-Page Compact and 2-Page Detailed options, synced with centralized portfolio data." />
      </Helmet>

      <div className="min-h-screen pt-28 pb-20 bg-[#070c18] text-slate-100 print:bg-white print:pt-0 print:pb-0">
        
        {/* Top Floating Control Bar (Hidden when Printing) */}
        <div className="max-w-5xl mx-auto px-4 mb-8 print:hidden">
          <div className="glass-card p-4 border border-slate-800 bg-[#0c1427]/90 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl">
            
            <div className="flex items-center gap-3">
              <Link to="/" className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400">
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <div>
                <h1 className="text-base font-bold text-slate-100 font-mono flex items-center gap-2">
                  <FileText className="w-4 h-4 text-sky-400" />
                  Dynamic A4 Resume Generator
                </h1>
                <p className="text-xs text-slate-400 font-mono">
                  Software Engineer | IT Engineer | Logistics Technology & Systems
                </p>
              </div>
            </div>

            {/* Version Switcher Tabs */}
            <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setResumeVersion('1page')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  resumeVersion === '1page'
                    ? 'bg-sky-500 text-white font-bold shadow-md shadow-sky-500/20'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>1-Page Compact</span>
              </button>

              <button
                onClick={() => setResumeVersion('2page')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  resumeVersion === '2page'
                    ? 'bg-sky-500 text-white font-bold shadow-md shadow-sky-500/20'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>2-Page Detailed</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={refreshGithub}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 text-xs font-mono flex items-center gap-1.5"
                title="Sync Latest Portfolio & GitHub Data"
              >
                <RefreshCw className="w-4 h-4" />
                <span className="hidden lg:inline">Sync Data</span>
              </button>

              <button
                onClick={handlePrint}
                className="px-3.5 py-2.5 rounded-xl glass-card text-slate-200 hover:text-sky-400 border border-slate-700 text-xs font-mono flex items-center gap-1.5 transition-all"
              >
                <Printer className="w-4 h-4 text-sky-400" />
                <span>Print</span>
              </button>

              <button
                onClick={handleDownloadPDF}
                disabled={downloading}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-mono font-bold text-xs shadow-lg shadow-sky-500/20 transition-all flex items-center gap-1.5 disabled:opacity-50"
              >
                <Download className={`w-4 h-4 ${downloading ? 'animate-bounce' : ''}`} />
                <span>{downloading ? 'Generating PDF...' : 'Download PDF'}</span>
              </button>
            </div>

          </div>

          {/* Success Banner */}
          {downloadSuccess && (
            <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4" />
              <span>{resumeVersion === '1page' ? '1-Page Compact' : '2-Page Detailed'} PDF downloaded successfully! Generated directly from centralized portfolio data.</span>
            </div>
          )}
        </div>

        {/* Workspace Canvas Container holding selected A4 Sheet */}
        <div className="max-w-5xl mx-auto px-4 print:px-0 print:max-w-none">
          <div className="bg-slate-950/60 p-4 sm:p-8 rounded-3xl border border-slate-800/80 shadow-2xl flex justify-center print:bg-white print:border-none print:p-0">
            <A4ResumeSheet ref={resumeRef} version={resumeVersion} />
          </div>
        </div>

      </div>
    </>
  );
};
