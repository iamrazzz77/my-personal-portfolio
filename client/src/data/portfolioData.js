export const portfolioData = {
  profile: {
    name: "Faishal Saif",
    title: "Software Engineer | IT Engineer | Logistics Technology & Systems",
    tagline: "Bridging software engineering, IT infrastructure, and logistics technology platforms.",
    positioningStatement: "Systems & Software Engineer with a career story spanning Software Engineering → IT Engineering → Logistics Technology → Software + Hardware Integration → System Management → Technical Ownership & Leadership.",
    summary: "Systems & Software Engineer with hands-on experience in full-stack web development, enterprise IT infrastructure, and logistics technology platforms. Currently working as an IT Engineer at First Saudi Company in Riyadh, managing Reverse Vending Machine (RVM) smart recycling kiosks, REST API telemetry, SQL databases, and hardware-software integration. Experienced in collaborating with senior management and operational teams to deliver reliable system deployment, hardware diagnostics, network security, and technical troubleshooting.",
    location: "Riyadh, Saudi Arabia",
    education: "B.Tech in Computer Science & Engineering",
    avatarInitials: "FS",
    profileImage: "/images/faishal-saif-profile.jpg",
    status: {
      role: "IT Engineer",
      company: "First Saudi Company",
      isProminent: true,
      location: "Riyadh, Saudi Arabia",
      availability: "Open for selective technical engineering & growth opportunities",
      focus: "Logistics Tech + IT Infrastructure + Full-Stack Software"
    },
    bio: "I am a Software & IT Engineer currently working at First Saudi Company in Riyadh, Saudi Arabia, holding a B.Tech in Computer Science & Engineering. My career spans enterprise IT administration at GS Medical College & Hospital (via Akshar Consultancy Services), full-stack software development at Szoftver Telemechanics, and ongoing logistics technology operations. My unique combination of infrastructure management and software engineering enables me to build software with a deep understanding of deployment environments, reliability, security, and hardware integration.",
    socials: {
      github: "https://github.com/iamrazzz77",
      linkedin: "https://www.linkedin.com/in/faishal-saif-3b13601b7/",
      email: "faishalsaif331@gmail.com",
      locationMap: "https://maps.google.com/?q=Riyadh,Saudi+Arabia",
      phoneCall: "+966 53 864 0213",
      phoneRaw: "+966538640213",
      whatsapp: "+91 95703 81954",
      whatsappRaw: "919570381954",
      whatsappUrl: "https://wa.me/919570381954"
    }
  },

  logisticsTechnology: {
    title: "LOGISTICS TECHNOLOGY & SYSTEMS",
    subtitle: "Software + IT Infrastructure + Hardware + Logistics Operations",
    summary: "Engineering end-to-end smart recycling kiosk platforms and logistics telemetry pipelines connecting physical Reverse Vending Machine (RVM) sensors directly to cloud backend APIs, transactional SQL ledgers, and real-time operational analytics dashboards.",
    highlights: [
      "Manage Reverse Vending Machine (RVM) operational platforms and technical kiosk hardware configurations in major public hubs including Granada Mall, Riyadh.",
      "Integrate optical sensors and barcode scanner telemetry payloads over Node.js & Express REST endpoints.",
      "Maintain indexed SQL database transactional ledgers for real-time deposit metrics and zero double-counting.",
      "Deliver hardware diagnostics, touchscreen interface support, network connectivity troubleshooting, and system maintenance."
    ]
  },

  services: [
    {
      id: "software-dev",
      title: "Software Development",
      icon: "Code2",
      order: 1,
      description: "Engineering responsive web applications, microservices, and REST APIs using React.js, Node.js, Express, PHP, JavaScript (ES6+), and SQL databases.",
      tags: ["React.js", "Node.js", "Express", "REST APIs", "SQL", "JavaScript"]
    },
    {
      id: "it-eng",
      title: "IT Engineering",
      icon: "Server",
      order: 2,
      description: "Managing enterprise server infrastructure (Windows/Linux), network security, firewalls, database administration, and user access management.",
      tags: ["Windows Server", "Linux", "Networking", "Firewalls", "Database Admin"]
    },
    {
      id: "logistics-tech",
      title: "Logistics Technology",
      icon: "Workflow",
      order: 3,
      description: "Operating Reverse Vending Machine (RVM) smart recycling kiosk platforms, optical sensor telemetry, and cloud software integration in public hubs across Riyadh.",
      tags: ["RVM Systems", "Kiosk Platforms", "Telemetry", "Logistics Tech"]
    },
    {
      id: "hardware-integration",
      title: "Hardware Integration",
      icon: "Cpu",
      order: 4,
      description: "Connecting physical vending machine sensors, touchscreen UI units, and barcode scanners to cloud backend APIs and indexed SQL transaction ledgers.",
      tags: ["Optical Sensors", "Touchscreen UI", "Hardware-to-Cloud", "Barcode Scanners"]
    },
    {
      id: "tech-troubleshooting",
      title: "Technical Problem Solving",
      icon: "Wrench",
      order: 5,
      description: "Diagnosing complex hardware-software integration failures, network connectivity issues, touchscreen kiosk units, and database query performance bottlenecks.",
      tags: ["Diagnostics", "Network Support", "Hardware Troubleshooting", "SQL Tuning"]
    },
    {
      id: "tech-ownership",
      title: "Technical Ownership",
      icon: "ShieldCheck",
      order: 6,
      description: "Taking end-to-end technical responsibility for system deployments, operational uptime, configuration management, and cross-functional operational coordination.",
      tags: ["Technical Leadership", "System Uptime", "Platform Operations", "Deployment"]
    }
  ],

  techStackCategories: [
    {
      name: "SOFTWARE ENGINEERING",
      order: 1,
      icon: "Code2",
      skills: ["React.js", "Node.js", "Express.js", "JavaScript (ES6+)", "PHP", "C++", "REST APIs", "Data Structures & Algorithms"]
    },
    {
      name: "IT ENGINEERING",
      order: 2,
      icon: "Server",
      skills: ["IT Infrastructure", "Windows Server Administration", "Linux Administration", "Network Infrastructure & Firewalls", "Enterprise & Healthcare IT Security", "Microsoft Azure Fundamentals"]
    },
    {
      name: "LOGISTICS TECHNOLOGY",
      order: 3,
      icon: "Workflow",
      skills: ["Reverse Vending Machine (RVM) Platform Operations", "Kiosk Hardware & Touchscreen UI Systems", "Hardware-to-Cloud Telemetry Integration", "Operational Uptime & Maintenance"]
    },
    {
      name: "DATABASES",
      order: 4,
      icon: "Database",
      skills: ["SQL", "MySQL", "MS SQL Server", "MongoDB", "Indexed Transaction Ledgers"]
    },
    {
      name: "TOOLS & PLATFORMS",
      order: 5,
      icon: "Terminal",
      skills: ["Git / GitHub", "VS Code", "SQL Management Studio", "Postman", "Chart.js", "Tailwind CSS"]
    }
  ],

  projects: [
    {
      id: "proj-rvm",
      slug: "reverse-vending-machine",
      title: "Reverse Vending Machine Recycling Platform",
      category: "Logistics Technology / IoT + Full-Stack",
      featured: true,
      period: "2024 — Present",
      summary: "Production smart recycling platform connecting physical Reverse Vending Machine (RVM) sensors via REST APIs to a Node.js backend and React analytics dashboard deployed in Granada Mall, Riyadh.",
      image: "/images/rvm/rvm-granada-mall-riyadh.jpg",
      tags: ["RVM Technology", "Logistics Tech", "React", "Node.js", "SQL", "Express", "IoT"],
      githubUrl: "https://github.com/iamrazzz77",
      liveUrl: "#",
      details: {
        role: "IT & Systems Engineer",
        period: "2024 — Present",
        highlights: [
          "Manage Reverse Vending Machine (RVM) systems, platform operations, and kiosk hardware diagnostics.",
          "Oversee smart recycling kiosks in major public spaces including Granada Mall, Riyadh.",
          "Integrate optical sensors and barcode scanners with Express REST endpoints and SQL database records.",
          "Deliver connectivity troubleshooting, touchscreen UI maintenance, and automated threshold alerts."
        ]
      }
    },
    {
      id: "proj-crypto",
      slug: "crypto-dashboard",
      title: "Crypto Dashboard",
      category: "Full-Stack / React",
      featured: true,
      period: "May '23 — Jun '23",
      summary: "A web-based application providing real-time data on the cryptocurrency market, including price charts, order books, news feeds, and social media sentiment analysis.",
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800",
      tags: ["React JS", "Redux", "Axios", "Chart.js", "JavaScript", "REST API"],
      githubUrl: "https://github.com/iamrazzz77",
      liveUrl: "#",
      details: {
        role: "Lead Frontend Developer",
        period: "May 2023 — June 2023",
        highlights: [
          "Engineered real-time price charts, order books, news feeds, and social sentiment analysis.",
          "Implemented customizable dashboard layouts allowing users to tailor market feeds.",
          "Ensured full cross-device portability through responsive single-page web architecture."
        ]
      }
    },
    {
      id: "proj-placement",
      slug: "placement-portal",
      title: "Placement Portal (Student / Teacher)",
      category: "Full-Stack / PHP & MySQL",
      featured: true,
      period: "Sept '22 — Oct '22",
      summary: "A comprehensive placement management portal accessed throughout the organization with role-based login credentials for students and faculty.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "GitHub"],
      githubUrl: "https://github.com/iamrazzz77",
      liveUrl: "#",
      details: {
        role: "Full-Stack Developer",
        period: "Sept 2022 — Oct 2022",
        highlights: [
          "Engineered role-based authentication for Students and Faculty across the institution.",
          "Enabled student registration for placement drives and automated announcement notices.",
          "Designed MySQL database schemas and structured PHP backend routing logic."
        ]
      }
    }
  ],

  experience: [
    {
      id: "exp-current",
      role: "IT Engineer",
      company: "First Saudi Company",
      location: "Riyadh, Saudi Arabia",
      period: "May '26 — Present",
      current: true,
      type: "Full-Time",
      description: "Managing Reverse Vending Machine (RVM) platforms, logistics technology, IT infrastructure, SQL databases, web platforms, and software automation systems.",
      responsibilities: [
        "Manage Reverse Vending Machine (RVM) systems, operational platforms, and technical kiosk infrastructure.",
        "Oversee RVM Smart Recycling Kiosks deployed across major public hubs including Granada Mall, Riyadh.",
        "Support software, hardware, touchscreen UI, and connectivity troubleshooting across deployed kiosk systems.",
        "Manage IT infrastructure, server administration, SQL databases, networking, and security protocols.",
        "Develop and maintain web platforms and software automation systems for enterprise operations."
      ],
      skillsUsed: [
        "RVM Technology",
        "Logistics Tech",
        "IT Infrastructure",
        "SQL Databases",
        "Hardware Diagnostics",
        "Web Development",
        "Networking & Security"
      ]
    },
    {
      id: "exp-akshar",
      role: "IT Administrative",
      company: "Akshar Consultancy Services (Client: GS Medical College & Hospital)",
      location: "Pilkhuwa, Hapur, India",
      period: "Sep '24 — Mar '26",
      current: false,
      type: "Full-Time",
      description: "Managed GS Medical College & Hospital's IT infrastructure, healthcare software systems, network security, and user support.",
      responsibilities: [
        "Maintained hospital IT infrastructure and strengthened data security measures to meet healthcare compliance regulations.",
        "Overseeing implementation, configuration, and maintenance of healthcare software solutions.",
        "Delivered technical support for hardware and software issues, maintaining high system uptime.",
        "Configured network security, firewalls, and data access policies for sensitive medical data.",
        "Conducted end-user training sessions to boost technological proficiency across institutional staff."
      ],
      skillsUsed: ["IT Infrastructure", "Healthcare Security", "Firewalls", "Network Security", "Software Support", "User Training"]
    },
    {
      id: "exp-szoftver",
      role: "Full Stack Developer Intern",
      company: "Szoftver Telemechanics Private Limited",
      location: "Gurugram, India",
      period: "Feb '24 — Jul '24",
      current: false,
      type: "Internship",
      description: "Engineered web application frontends using React and developed backend Node.js microservices.",
      responsibilities: [
        "Developed internal web applications and responsive single-page web interfaces using React.js.",
        "Built, tested, and maintained backend API endpoints and microservices using Node.js.",
        "Structured server-side website architecture, REST endpoints, and database communications.",
        "Collaborated on full-cycle web engineering project modules during the internship."
      ],
      skillsUsed: ["React.js", "Node.js", "Full Stack Engineering", "REST APIs", "JavaScript"]
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Computer Science & Engineering",
      location: "",
      period: "Graduated",
      status: "Graduated",
      highlights: [
        "Core Focus: Computer Science & Engineering fundamentals, Data Structures & Algorithms, Database Systems, Web Engineering.",
        "Built full-stack software applications (Crypto Dashboard, Placement Portal, IoT Reverse Vending Machine).",
        "Active participant in competitive hackathons and coding challenges."
      ]
    }
  ],

  certifications: [
    {
      id: "cert-azure-mgmt",
      title: "Microsoft Azure Fundamentals: Describe Azure management and governance",
      issuer: "Microsoft",
      date: "Jan 18, 2024",
      credentialId: "MS-AZ-MGMT-2024",
      icon: "Cloud",
      description: "Official Microsoft certification covering Azure management tools, governance strategies, resource compliance, and cloud cost management."
    },
    {
      id: "cert-azure-cloud",
      title: "Microsoft Azure Fundamentals: Describe cloud concepts",
      issuer: "Microsoft",
      date: "Jan 18, 2024",
      credentialId: "MS-AZ-CLOUD-2024",
      icon: "Cloud",
      description: "Official Microsoft certification covering cloud computing models (IaaS, PaaS, SaaS), high availability, scalability, and Azure cloud architecture."
    },
    {
      id: "cert-react",
      title: "Certified In React JS",
      issuer: "Coursera",
      date: "Jul '23",
      credentialId: "Coursera-ReactJS-2023",
      icon: "Code2",
      description: "Mastery of ReactJS state management, component lifecycles, hooks, Redux, and modern frontend architecture."
    },
    {
      id: "cert-sql",
      title: "Certified In SQL",
      issuer: "HackerRank",
      date: "Jul '23",
      credentialId: "HackerRank-SQL-2023",
      icon: "Database",
      description: "Verified competence in advanced SQL queries, joins, aggregations, database schemas, and performance."
    },
    {
      id: "cert-frontend",
      title: "Certified In Introduction to Front End Development",
      issuer: "Simplilearn",
      date: "Jan '23",
      credentialId: "Simplilearn-FE-2023",
      icon: "Code2",
      description: "Foundational certification covering HTML5, CSS3, JavaScript ES6+, responsive layouts, and cross-browser styling."
    },
    {
      id: "cert-dsa",
      title: "Certified In GeeksforGeeks | DSA",
      issuer: "GeeksforGeeks",
      date: "Jul '22",
      credentialId: "GFG-DSA-2022",
      icon: "Server",
      description: "Data Structures & Algorithms certification covering arrays, trees, graphs, sorting, searching, and C++ problem-solving."
    }
  ],

  achievements: [
    {
      id: "ach-1",
      title: "iNeuron Hackathon — 4th Prize Winner",
      date: "Feb '22",
      organization: "iNeuron.ai",
      badge: "4th Rank National",
      icon: "Trophy",
      description: "Participated in national-level hackathon organized by iNeuron where our team secured 4th prize among competing developer teams."
    },
    {
      id: "ach-2",
      title: "Flipkart GRIP Hackathon — Round 1 Qualifier",
      date: "Jan '22",
      organization: "FLIPKART",
      badge: "National Qualifier",
      icon: "Medal",
      description: "Participated in Flipkart GRIP engineering hackathon and successfully cleared the competitive first round."
    },
    {
      id: "ach-3",
      title: "College Chess Competition — 1st Place Winner",
      date: "College Level",
      organization: "Inter-College Tournament",
      badge: "1st Place Gold",
      icon: "Crown",
      description: "Secured 1st rank in college chess championship, demonstrating strategic foresight, analytical tactics, and quick decision-making under competitive pressure."
    }
  ],

  featuredCaseStudy: {
    id: "rvm",
    title: "Reverse Vending Machine & Logistics Technology",
    category: "Logistics Technology / IoT + Full-Stack",
    overview: "Production smart recycling platform connecting physical vending machine sensors via REST APIs to a Node.js backend, transactional SQL ledgers, and a real-time React analytics dashboard deployed across commercial hubs in Riyadh, including Granada Mall.",
    challenge: "Managing real-time sensor data payloads from physical kiosk hardware, preventing double-counting of recycled material deposit credits, handling connectivity intermittent drops, and providing real-time operational visibility for bin fill levels.",
    myRole: "IT & Systems Engineer at First Saudi Company — responsible for hardware-software integration, REST API telemetry validation, SQL transactional ledger indexing, kiosk touchscreen maintenance, and operational dashboard monitoring.",
    technology: ["RVM Technology", "Node.js", "Express.js", "React.js", "SQL Databases", "IoT Optical Sensors", "Barcode Scanners", "REST Telemetry"],
    implementation: "Designed and deployed Node.js Express REST endpoints that parse telemetry JSON payloads sent by optical sensors upon item insertion. Configured indexed SQL transactional procedures to execute atomic ledger updates, preventing duplicate point claims.",
    operationalContribution: "Delivered on-site and remote hardware diagnostics across Granada Mall kiosk units, configured touchscreen UI drivers, set up automated alert webhooks for 80% bin capacity thresholds, and ensured system uptime.",
    results: [
      { label: "Deployment Hubs", value: "Granada Mall, Riyadh" },
      { label: "Ledger Accuracy", value: "100% Zero Double-Counting" },
      { label: "Telemetry Pipeline", value: "Real-Time REST APIs" }
    ],
    visualFlow: [
      { stage: "Hardware", desc: "Optical sensors & barcode scanners in physical RVM kiosks" },
      { stage: "Software", desc: "Kiosk UI drivers & local telemetry payload validation" },
      { stage: "API", desc: "Node.js & Express REST API telemetry ingestion" },
      { stage: "Database", desc: "Indexed SQL database transactional ledgers" },
      { stage: "Dashboard", desc: "React analytics dashboard with fill-level alerts" },
      { stage: "Operations", desc: "On-site diagnostics & fleet maintenance in Riyadh" }
    ],
    heroImage: "/images/rvm/hero.webp",
    caseStudyUrl: "/projects/reverse-vending-machine"
  }
};

