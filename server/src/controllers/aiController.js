import dotenv from 'dotenv';
dotenv.config();

// Complete, verified portfolio knowledge base
const portfolioKnowledge = {
  profile: {
    name: "Faishal Saif",
    title: "Software Engineer | IT Engineer | Logistics Technology & Systems",
    tagline: "Bridging software engineering, IT infrastructure, and logistics technology platforms.",
    positioningStatement: "Systems & Software Engineer with a career story spanning Software Engineering → IT Engineering → Logistics Technology → Hardware/Software Integration → System Management → Technical Ownership & Leadership.",
    summary: "Systems & Software Engineer with hands-on experience in full-stack web development, enterprise IT infrastructure, and logistics technology platforms. Currently working as an IT Engineer at First Saudi Company in Riyadh, managing Reverse Vending Machine (RVM) smart recycling kiosks, REST API telemetry, SQL databases, and hardware-software integration.",
    location: "Riyadh, Saudi Arabia",
    education: "B.Tech in Computer Science & Engineering",
    availability: "Open for selective technical engineering & growth opportunities",
    socials: {
      email: "faishalsaif331@gmail.com",
      phone: "+966 53 864 0213",
      whatsapp: "+91 95703 81954",
      github: "https://github.com/iamrazzz77",
      linkedin: "https://www.linkedin.com/in/faishal-saif-3b13601b7/"
    }
  },

  currentRole: {
    role: "IT Engineer",
    company: "First Saudi Company",
    location: "Riyadh, Saudi Arabia",
    period: "May 2026 — Present",
    responsibilities: [
      "Manage Reverse Vending Machine (RVM) systems, operational platforms, and technical kiosk infrastructure across Riyadh public hubs, including Granada Mall.",
      "Oversee RVM Smart Recycling Kiosks deployed across major commercial hubs.",
      "Support software, hardware, touchscreen UI, optical sensors, and connectivity troubleshooting across deployed kiosk systems.",
      "Manage IT infrastructure, server administration, SQL transactional databases, networking, and security protocols.",
      "Develop and maintain web platforms and software automation systems for enterprise operations."
    ]
  },

  experienceTimeline: [
    {
      role: "IT Engineer",
      company: "First Saudi Company",
      location: "Riyadh, Saudi Arabia",
      period: "May 2026 — Present",
      description: "Leading RVM kiosk platform operations, hardware-software integration, REST API telemetry, SQL transactional ledgers, and IT infrastructure in Riyadh."
    },
    {
      role: "IT Administrative",
      company: "Akshar Consultancy Services (Client: GS Medical College & Hospital)",
      location: "Pilkhuwa, Hapur, India",
      period: "Sep 2024 — Mar 2026",
      description: "Managed enterprise IT infrastructure, network security, hospital management system database integration, user access controls, and technical support across medical hospital operations."
    },
    {
      role: "Full Stack Developer Intern",
      company: "Szoftver Telemechanics Private Limited",
      location: "Gurugram, India",
      period: "Feb 2024 — Jul 2024",
      description: "Engineered full-stack web applications using React.js, Node.js, Express, REST APIs, and SQL databases. Collaborated on frontend UI, backend microservices, and database optimization."
    }
  ],

  logisticsTechnology: {
    title: "LOGISTICS TECHNOLOGY & RVM SYSTEMS",
    subtitle: "Software + IT Infrastructure + Hardware + Logistics Operations",
    overview: "Engineering end-to-end smart recycling kiosk platforms and logistics telemetry pipelines connecting physical Reverse Vending Machine (RVM) optical sensors directly to Node.js backend REST APIs, SQL transactional ledgers, and real-time React analytics dashboards in Granada Mall, Riyadh.",
    keyHighlights: [
      "Deployed and maintaining RVM platform operations & hardware configuration in public spaces like Granada Mall, Riyadh.",
      "Optical sensor & barcode scanner telemetry payload validation over Node.js/Express REST API endpoints.",
      "SQL database transactional ledger for deposit tracking with zero double-counting.",
      "Hardware diagnostics, touchscreen interface support, network connectivity troubleshooting, and hardware maintenance."
    ]
  },

  projects: [
    {
      id: "rvm",
      title: "Reverse Vending Machine (RVM) Recycling Platform",
      category: "Logistics Technology / IoT + Full-Stack",
      role: "IT & Systems Engineer",
      period: "2024 — Present",
      overview: "Production smart recycling platform connecting physical vending machine sensors via REST APIs to a Node.js backend and React analytics dashboard deployed in Granada Mall, Riyadh.",
      tech: ["RVM Technology", "Logistics Tech", "React.js", "Node.js", "Express", "SQL", "IoT Sensors"],
      highlights: [
        "Deployed and maintaining RVM kiosks in Granada Mall, Riyadh.",
        "Integrated optical sensors and barcode scanners with Express REST endpoints and SQL database records.",
        "Built automated bin fill-level threshold alerts and real-time Chart.js analytics.",
        "Ensured zero double-counting of reward points via indexed SQL database transactions."
      ],
      caseStudyUrl: "/projects/reverse-vending-machine"
    },
    {
      id: "crypto",
      title: "Crypto Dashboard",
      category: "Full-Stack / React",
      role: "Lead Frontend Developer",
      period: "May 2023 — June 2023",
      overview: "A web-based application providing real-time data on the cryptocurrency market, including price charts, order books, news feeds, and social media sentiment analysis.",
      tech: ["React.js", "Redux", "Axios", "Chart.js", "JavaScript", "REST API"],
      highlights: [
        "Delivered real-time price charts, order books, news feeds, and sentiment analysis.",
        "Implemented customizable dashboard layouts.",
        "Achieved cross-device portability through responsive single-page web architecture."
      ],
      caseStudyUrl: "/projects/crypto-dashboard"
    },
    {
      id: "placement",
      title: "Placement Portal (Student / Teacher)",
      category: "Full-Stack / PHP & MySQL",
      role: "Full-Stack Developer",
      period: "Sept 2022 — Oct 2022",
      overview: "A comprehensive placement management portal accessed throughout the organization with role-based login credentials for students and faculty.",
      tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      highlights: [
        "Engineered role-based login authentication for Students and Teachers across the institution.",
        "Enabled students to register for placement drives and view announcement notices.",
        "Designed MySQL database schemas and PHP backend routing."
      ],
      caseStudyUrl: "/projects/placement-portal"
    }
  ],

  skills: {
    softwareEngineering: ["React.js", "Node.js", "Express.js", "JavaScript (ES6+)", "PHP", "C++", "REST APIs", "SQL", "MySQL", "MongoDB", "Data Structures & Algorithms"],
    itEngineering: ["IT Infrastructure", "Windows Server Admin", "Linux Administration", "Network Infrastructure & Firewalls", "Hardware Diagnostics & Troubleshooting", "Enterprise & Healthcare IT Security", "Microsoft Azure Cloud"],
    logisticsTechnology: ["Reverse Vending Machine (RVM) Systems", "Kiosk Systems & Touchscreen Units", "Hardware-to-Cloud Telemetry Integration", "Operational Systems Maintenance"],
    tools: ["Git / GitHub", "VS Code", "SQL Management Studio", "Postman", "Chart.js", "Tailwind CSS", "Bootstrap"]
  },

  certifications: [
    "Microsoft Azure Fundamentals: Describe Azure management and governance (Jan 2024)",
    "Microsoft Azure Fundamentals: Describe cloud concepts (Jan 2024)",
    "Certified In React JS — Coursera (Jul 2023)",
    "Certified In SQL — HackerRank (Jul 2023)",
    "Certified In GeeksforGeeks | Data Structures & Algorithms (Jul 2022)",
    "Certified In Introduction to Front End Development — Simplilearn (Jan 2023)"
  ],

  achievements: [
    "iNeuron Hackathon — 4th Prize Winner (Feb 2022)",
    "Flipkart GRIP Hackathon — Round 1 Qualifier (Jan 2022)"
  ]
};

// System prompt definition for Gemini/OpenAI
const SYSTEM_PROMPT = `You are "Faishal's Professional Portfolio Assistant", an AI assistant representing Faishal Saif's professional profile.

STRICT FACTUAL MANDATE:
- You MUST answer questions using ONLY the verified portfolio knowledge base provided below.
- You MUST NOT invent, hallucinate, or assume any companies, clients, projects, technologies, certifications, job titles, dates, metrics, achievements, or responsibilities.
- If the user asks about something NOT in the portfolio knowledge base (such as unlisted jobs, favorite hobbies, personal trivia, or topics completely unrelated to Faishal's portfolio), answer strictly:
"I don't have that information in the current portfolio."

TONE & STYLE:
- Professional, friendly, natural, concise, recruiter-friendly, and technically accurate.
- Do NOT repeatedly introduce yourself in every message.
- Use concise bullet points where helpful.
- Keep responses readable, focused, and directly addressing the user's question.

VERIFIED PORTFOLIO KNOWLEDGE BASE:
${JSON.stringify(portfolioKnowledge, null, 2)}
`;

/**
 * Call Google Gemini API (via REST API endpoint using fetch)
 */
async function callGeminiApi(apiKey, userQuestion, history = []) {
  const modelName = process.env.GEMINI_MODEL || 'gemini-1.5-flash';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

  const contents = [
    {
      role: 'user',
      parts: [{ text: `SYSTEM INSTRUCTION:\n${SYSTEM_PROMPT}\n\nPlease remember all system instructions and portfolio knowledge base.` }]
    },
    {
      role: 'model',
      parts: [{ text: "Understood. I am Faishal's Professional Portfolio Assistant. I will adhere strictly to the verified portfolio knowledge base without inventing any facts." }]
    }
  ];

  if (Array.isArray(history)) {
    history.slice(-6).forEach((msg) => {
      if (msg.text && msg.sender) {
        contents.push({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        });
      } else if (msg.content && msg.role) {
        contents.push({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        });
      }
    });
  }

  contents.push({
    role: 'user',
    parts: [{ text: userQuestion }]
  });

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents,
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 800
      }
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errorMessage = errorData.error?.message || response.statusText;
    const errorStatus = response.status;
    const err = new Error(`Gemini API Error (${errorStatus}): ${errorMessage}`);
    err.status = errorStatus;
    throw err;
  }

  const data = await response.json();
  const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!textResponse) {
    throw new Error('Gemini API returned an empty response.');
  }

  return textResponse.trim();
}

/**
 * Call OpenAI API (fallback option if OPENAI_API_KEY is provided)
 */
async function callOpenAiApi(apiKey, userQuestion, history = []) {
  const url = 'https://api.openai.com/v1/chat/completions';
  
  const messages = [
    { role: 'system', content: SYSTEM_PROMPT }
  ];

  if (Array.isArray(history)) {
    history.slice(-6).forEach((msg) => {
      const role = (msg.sender === 'user' || msg.role === 'user') ? 'user' : 'assistant';
      const content = msg.text || msg.content;
      if (content) {
        messages.push({ role, content });
      }
    });
  }

  messages.push({ role: 'user', content: userQuestion });

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages,
      temperature: 0.2,
      max_tokens: 800
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errorMessage = errorData.error?.message || response.statusText;
    const errorStatus = response.status;
    const err = new Error(`OpenAI API Error (${errorStatus}): ${errorMessage}`);
    err.status = errorStatus;
    throw err;
  }

  const data = await response.json();
  const textResponse = data.choices?.[0]?.message?.content;

  if (!textResponse) {
    throw new Error('OpenAI API returned an empty response.');
  }

  return textResponse.trim();
}

/**
 * Intelligent Fallback Portfolio Knowledge Engine
 * Used when no external API key is configured, ensuring the assistant ALWAYS works.
 */
function generateFallbackPortfolioResponse(question, history = []) {
  const qLower = question.toLowerCase().trim();

  if (qLower.includes('what does faishal do') || qLower.includes('who is faishal') || qLower.includes('about faishal') || qLower.includes('profile')) {
    return `Faishal Saif is a Systems & Software Engineer based in Riyadh, Saudi Arabia.

His core expertise spans:
• **Current Role**: IT Engineer at First Saudi Company in Riyadh.
• **Logistics Technology**: Managing Reverse Vending Machine (RVM) smart recycling kiosks (deployed in Granada Mall, Riyadh), REST API telemetry, SQL transactional ledgers, and hardware-software integration.
• **Software Engineering**: Full-Stack development with React.js, Node.js, Express, PHP, and SQL databases.
• **IT Infrastructure**: Server administration (Windows/Linux), network security, and enterprise IT operations.`;
  }

  if (qLower.includes('current role') || qLower.includes('first saudi') || qLower.includes('present') || qLower.includes('now')) {
    const role = portfolioKnowledge.currentRole;
    return `Faishal is currently working as an **${role.role}** at **${role.company}** in ${role.location} (${role.period}).

Key Responsibilities:
• Managing Reverse Vending Machine (RVM) smart recycling kiosk platforms in public commercial hubs, including Granada Mall, Riyadh.
• Overseeing REST API telemetry, optical sensor integration, and barcode scanner payload processing.
• Maintaining indexed SQL database transactional ledgers for deposit tracking with zero double-counting.
• Managing IT infrastructure, server administration, network security, and enterprise software automation.`;
  }

  if (qLower.includes('logistics') || qLower.includes('rvm') || qLower.includes('vending') || qLower.includes('granada')) {
    return `Faishal's **Logistics Technology & RVM Experience**:

• **Production Platform**: Engineered an end-to-end smart recycling kiosk solution connecting physical Reverse Vending Machine (RVM) optical sensors to a Node.js REST API backend.
• **Deployment**: Operational kiosks deployed at major public hubs, including Granada Mall, Riyadh.
• **Technical Architecture**: Built indexed SQL database transaction ledgers for real-time deposit tracking and an operational React analytics dashboard with fill-level threshold alerts.
• **Maintenance**: Handles kiosk hardware diagnostics, touchscreen UI troubleshooting, and network connectivity.`;
  }

  if (qLower.includes('crypto')) {
    const proj = portfolioKnowledge.projects[1];
    return `**${proj.title}** (${proj.period}):
• **Role**: ${proj.role}
• **Tech Stack**: ${proj.tech.join(', ')}
• **Overview**: ${proj.overview}
• **Key Contributions**:
  - Delivered real-time price charts, order books, news feeds, and sentiment analysis.
  - Implemented customizable dashboard layouts with single-page responsive web architecture.`;
  }

  if (qLower.includes('placement') || qLower.includes('student') || qLower.includes('teacher')) {
    const proj = portfolioKnowledge.projects[2];
    return `**${proj.title}** (${proj.period}):
• **Role**: ${proj.role}
• **Tech Stack**: ${proj.tech.join(', ')}
• **Overview**: ${proj.overview}
• **Key Contributions**:
  - Engineered role-based login authentication for Students and Faculty.
  - Enabled student registration for campus placement drives.
  - Designed MySQL database schemas and PHP backend routing.`;
  }

  if (qLower.includes('project') || qLower.includes('work') || qLower.includes('portfolio')) {
    return `Faishal has engineered several key production projects:

1. **Reverse Vending Machine (RVM) Smart Recycling Platform** (Logistics Tech / IoT + React + Node + SQL): Deployed in Granada Mall, Riyadh.
2. **Crypto Analytics Dashboard** (React + Redux + Chart.js): Real-time crypto price tracking, order books, and sentiment analysis.
3. **Student/Teacher Placement Portal** (PHP + MySQL): Institution-wide portal with role-based authentication and drive management.`;
  }

  if (qLower.includes('tech') || qLower.includes('skill') || qLower.includes('language') || qLower.includes('stack')) {
    return `Faishal's Technical Competencies:

• **Software Engineering**: React.js, Node.js, Express.js, JavaScript (ES6+), PHP, C++, REST APIs, SQL, MySQL, MongoDB, Data Structures & Algorithms (DSA).
• **IT Engineering**: IT Infrastructure, Server Admin (Windows/Linux), Network Infrastructure & Firewalls, Hardware Diagnostics, Healthcare IT Security, Microsoft Azure.
• **Logistics Technology**: Reverse Vending Machine (RVM) Systems, Touchscreen Kiosks, Hardware-to-Cloud Telemetry Integration.
• **Tools**: Git/GitHub, VS Code, SQL Management Studio, Postman, Chart.js, Tailwind CSS.`;
  }

  if (qLower.includes('software engineering') || qLower.includes('developer') || qLower.includes('frontend') || qLower.includes('backend')) {
    return `Faishal's **Software Engineering Experience**:

• **Full-Stack Development**: Experienced in React.js, Node.js, Express, PHP, C++, and SQL databases.
• **Szoftver Telemechanics**: Worked as a Full Stack Developer Intern (Feb 2024 — Jul 2024), engineering web apps, REST APIs, and microservices.
• **RVM Cloud Integration**: Built Node.js REST API endpoints to process optical sensor telemetry data and record indexed SQL transactions.`;
  }

  if (qLower.includes('it engineer') || qLower.includes('it engineering') || qLower.includes('infrastructure') || qLower.includes('suitable') || qLower.includes('hire')) {
    return `Why Faishal's profile is highly suitable for an **IT Engineer / Systems Role**:

• **Dual Technical Foundation**: Combines full-stack software development with enterprise IT infrastructure management.
• **First Saudi Company (Riyadh)**: Managing RVM smart kiosks, server environments, networking, SQL databases, and kiosk hardware troubleshooting.
• **Healthcare IT Experience**: Managed enterprise IT infrastructure and hospital management system databases at GS Medical College & Hospital.
• **Technical Ownership**: Known for bridging hardware-to-cloud operations, hardware diagnostics, and ensuring zero-downtime platform reliability.`;
  }

  if (qLower.includes('career') || qLower.includes('journey') || qLower.includes('background') || qLower.includes('story')) {
    return `Faishal's Career Journey:

1. **B.Tech in Computer Science & Engineering**
2. **Full Stack Developer Intern** at Szoftver Telemechanics (Feb 2024 — Jul 2024)
3. **IT Administrative** at Akshar Consultancy / GS Medical College & Hospital (Sep 2024 — Mar 2026)
4. **IT Engineer** at First Saudi Company in Riyadh (May 2026 — Present), leading RVM logistics technology & software infrastructure.`;
  }

  if (qLower.includes('certification') || qLower.includes('certified') || qLower.includes('azure') || qLower.includes('hackerrank')) {
    return `Faishal's Official Certifications:

• **Microsoft Azure Fundamentals**: Cloud Concepts & Azure Management/Governance (Jan 2024)
• **Certified in React JS** — Coursera (Jul 2023)
• **Certified in SQL** — HackerRank (Jul 2023)
• **Certified in Data Structures & Algorithms** — GeeksforGeeks (Jul 2022)
• **Certified in Front End Development** — Simplilearn (Jan 2023)`;
  }

  if (qLower.includes('education') || qLower.includes('degree') || qLower.includes('college') || qLower.includes('university')) {
    return `Faishal holds a **B.Tech in Computer Science & Engineering** with specialized training in Data Structures & Algorithms, Software Engineering, SQL Database Management, and IT Infrastructure Administration.`;
  }

  // Strict factual rule fallback for unlisted information
  return `I don't have that information in the current portfolio. You can explore Faishal's verified experience, projects, skills, and logistics technology work in the sections below or download his resume.`;
}

/**
 * Infer relevant action buttons based on user query and response content
 */
function inferActions(question, answerText) {
  const actions = [];
  const qLower = question.toLowerCase();
  const aLower = answerText.toLowerCase();

  if (qLower.includes('resume') || aLower.includes('resume') || qLower.includes('hire') || qLower.includes('role')) {
    actions.push({ label: 'View Resume', url: '/resume' });
  }

  if (qLower.includes('rvm') || qLower.includes('logistics') || qLower.includes('vending') || aLower.includes('rvm')) {
    actions.push({ label: 'View RVM Case Study', url: '/projects/reverse-vending-machine' });
  } else if (qLower.includes('project') || qLower.includes('crypto') || qLower.includes('placement') || aLower.includes('project')) {
    actions.push({ label: 'Explore Projects', url: '/projects' });
  }

  if (qLower.includes('experience') || qLower.includes('first saudi') || qLower.includes('journey') || qLower.includes('background')) {
    actions.push({ label: 'View Experience', url: '#experience' });
  }

  if (qLower.includes('skill') || qLower.includes('tech') || qLower.includes('stack')) {
    actions.push({ label: 'View Tech Stack', url: '#tech-stack' });
  }

  const uniqueActions = [];
  const seenUrls = new Set();
  for (const act of actions) {
    if (!seenUrls.has(act.url)) {
      seenUrls.add(act.url);
      uniqueActions.push(act);
    }
  }

  if (uniqueActions.length === 0) {
    uniqueActions.push({ label: 'View Resume', url: '/resume' });
  }

  return uniqueActions.slice(0, 2);
}

/**
 * Main Controller Handler for Portfolio AI API
 */
export const askAiAssistant = async (req, res) => {
  const { question = '', history = [] } = req.body;
  const trimmedQuestion = typeof question === 'string' ? question.trim() : '';

  console.log('[Portfolio AI Request]', {
    question: trimmedQuestion,
    historyLength: Array.isArray(history) ? history.length : 0,
    timestamp: new Date().toISOString()
  });

  // Validate Input
  if (!trimmedQuestion) {
    return res.status(400).json({
      success: false,
      errorType: 'INVALID_INPUT',
      message: 'Question prompt cannot be empty.'
    });
  }

  if (trimmedQuestion.length > 500) {
    return res.status(400).json({
      success: false,
      errorType: 'INVALID_INPUT',
      message: 'Question prompt exceeds the 500 character limit.'
    });
  }

  // Resolve API Credentials
  const geminiApiKey = process.env.GEMINI_API_KEY || process.env.AI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GOOGLE_API_KEY;
  const openAiApiKey = process.env.OPENAI_API_KEY;

  try {
    let answerText = '';
    let providerName = '';

    if (geminiApiKey && geminiApiKey.trim() !== '') {
      providerName = 'Google Gemini API';
      console.log(`[Portfolio AI Provider] Invoking ${providerName}...`);
      answerText = await callGeminiApi(geminiApiKey, trimmedQuestion, history);
    } else if (openAiApiKey && openAiApiKey.trim() !== '') {
      providerName = 'OpenAI API';
      console.log(`[Portfolio AI Provider] Invoking ${providerName}...`);
      answerText = await callOpenAiApi(openAiApiKey, trimmedQuestion, history);
    } else {
      providerName = 'Portfolio AI Engine (Built-in Knowledge Base)';
      console.log(`[Portfolio AI Provider] Invoking ${providerName}...`);
      answerText = generateFallbackPortfolioResponse(trimmedQuestion, history);
    }

    console.log(`[Portfolio AI Success] ${providerName} generated response length: ${answerText.length}`);

    const actions = inferActions(trimmedQuestion, answerText);

    return res.status(200).json({
      success: true,
      answer: answerText,
      actions: actions,
      provider: providerName,
      knowledgeSource: 'portfolioData'
    });

  } catch (error) {
    console.error('[Portfolio AI Error]', error);

    // Fallback gracefully to built-in Portfolio Knowledge Engine if API fails
    try {
      console.log('[Portfolio AI Fallback] Falling back to built-in Portfolio AI Engine...');
      const fallbackAnswer = generateFallbackPortfolioResponse(trimmedQuestion, history);
      const actions = inferActions(trimmedQuestion, fallbackAnswer);
      return res.status(200).json({
        success: true,
        answer: fallbackAnswer,
        actions: actions,
        provider: 'Portfolio AI Engine (Fallback)',
        knowledgeSource: 'portfolioData'
      });
    } catch (fallbackErr) {
      const status = error.status || 500;
      return res.status(status >= 400 && status < 600 ? status : 500).json({
        success: false,
        errorType: 'SERVER_ERROR',
        message: 'Something went wrong while processing your question.'
      });
    }
  }
};
