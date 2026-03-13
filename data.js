/**
 * ============================================================
 *  PORTFOLIO DATA — Edit everything here!
 * ============================================================
 *
 *  HOW TO ADD IMAGES:
 *  - Put your image files in the same folder as index.html
 *  - Then reference them like: image: "my-photo.jpg"
 *  - Or use a full URL: image: "https://example.com/photo.jpg"
 *  - To use NO image (show placeholder): image: null
 * ============================================================
 */

const PORTFOLIO = {

  /* ── PERSONAL INFO ──────────────────────────────────────── */
  name: "Anushka Chougule",
  initials: "AC",
  roles: "Software Engineer · AI Researcher · UX Designer",
  heroTagline: `Hi, I'm Anushka,<br><em>an engineer who builds<br> what matters, with passion.</em>`,
  heroDesc: "",
  email: "anuachoug@gmail.com",
  location: "Seattle + Open to relocation",
  availability: "Open to work now",
  education_short: "B.S. Computer Science",

  // Hero section photo — put file in same folder as index.html, e.g. "hero.jpg"
  heroImage: "images/uw.anushka-22.jpg",   // e.g. "hero.jpg" or null for gradient placeholder

  // About section photo
  aboutImage: "images/uwgrad.png",  // e.g. "about.jpg" or null for placeholder

  interests: ["Open Source","AI Safety","HCI","Writing","Teaching CS","System Design","Data Viz"],

  aboutBio: [
    `Hi! I'm <span class="panel-highlight">Anushka</span>, a grad student at <span class="panel-highlight">UW Foster</span> studying information systems, with a background spanning <span class="panel-highlight">software engineering</span>, <span class="panel-highlight">data</span>, and <span class="panel-highlight">AI</span>.`,
    `I like building software that scales, making sense of messy data, and shipping AI that actually does something useful.`,
    `Right now I'm deep in <span class="panel-highlight">agentic AI</span> and actively looking for full-time roles in <span class="panel-highlight">software engineering</span> and <span class="panel-highlight">AI/ML</span>.`,
  ],

  /* ── CONTACT LINKS ──────────────────────────────────────── */
  contactLinks: [
    { icon: "💼", label: "LinkedIn",  handle: "/anushkaachougule", url: "https://linkedin.com/in/anushkaachougule", bg: "#0077b5" },
    { icon: "🐙", label: "GitHub",    handle: "/anushka23ja",    url: "https://github.com/anushka23ja",    bg: "#1a1a2e" },
    { icon: "✉️",  label: "Email",    handle: "anuachoug@gmail.com", url: "mailto:anuachoug@gmail.com",            bg: "#e07040" },
    { icon: "📄", label: "Resume",   handle: "Download PDF", url: "ChouguleAnushka_Resume (6).pdf",            bg: "#4a90e2" },

    /* ── ADD NEW CONTACT LINK ──────────────────────────────────────────────
    {
      icon: "🐦",                          // emoji icon
      label: "Twitter",                   // display label
      handle: "@yourhandle",              // shown under the label
      url: "https://twitter.com/...",     // where the button links
      bg: "#1da1f2",                      // button background color (hex)
    },
    ── END TEMPLATE ── */
  ],

  /* ── FEATURED ───────────────────────────────────────────── */
  /**
   * HOW TO ADD A FEATURED CARD:
   *   type options:  "video" | "photo" | "article"
   *   - "video"  → shows a video thumbnail + play button linking to videoUrl
   *   - "photo"  → shows an image thumbnail with overlay text
   *   - "article"→ shows a text card with a read-more link
   *
   * Copy the matching template at the bottom of this array and fill it in.
   */
  featured: [
    {
      type: "video",
      icon: "VIDEO",
      platform: "TikTok",
      title: "Romantizing Autumn at UW",
      description: "Sharing positive mindset on social media as a 20-yr old UW grad student.",
      handle: "@chouguleanushka",
      url: "https://tiktok.com/@chouguleanushka",
      videoUrl: "https://www.tiktok.com/@chouguleanushka/video/1234567890",
      thumbnail: "images/tiktok.png",
      color: "#d1c7e9",
      autoplay: true,
      verified: true,
      verifiedColor: "#305a9e",
    },
    {
      type: "photo",
      icon: "Instagram",
      platform: "Instagram",
      title: "A Day In My Life",
      description: "Behind the scenes at UW Foster School of Business. A glimpse into the daily rhythm of graduate studies and academic life.",
      handle: "@uwfosterschool",
      url: "https://www.instagram.com/uwfosterschool",
      thumbnail: "images/instagram-day-life-thumb.jpg",
      color: "#a78bfa",
      overlayTitle: "A Day In My Life",
      overlaySubtitle: "as a graduate @ UW Foster",
      verified: true,
      verifiedColor: "#305a9e",
      autoplay: true
    },
    
    {
      type: "article",
      icon: "ARTICLE",
      platform: "Medium",
      title: "AI-Powered Restaurant Design",
      description: "Exploring the intersection of artificial intelligence and user experience design in the restaurant industry.",
      handle: "Medium · Feb 2026",
      linkText: "Read Article →",
      url: "https://medium.com/@anuchoug05/building-a-restaurant-website-with-ai-from-static-pages-to-a-voice-powered-experience-b1c03fef55f3",
      color: "#f59e0b",
      autoplay: false,
      verified: false
    },

    /* ── ADD NEW FEATURED — VIDEO ──────────────────────────────────────────
    {
      type: "video",
      icon: "VIDEO",
      platform: "YouTube",                          // platform name shown on card
      title: "My Video Title",
      description: "Short description of the video.",
      handle: "@yourhandle",
      url: "https://youtube.com/@...",              // link when card is clicked
      videoUrl: "https://youtube.com/watch?v=...",  // direct video URL
      thumbnail: "images/my-video-thumb.jpg",       // or null
      color: "#ff0000",                             // card accent color
      autoplay: false,
      verified: false,
      verifiedColor: "#305a9e",
    },
    ── END VIDEO TEMPLATE ── */

    /* ── ADD NEW FEATURED — PHOTO ──────────────────────────────────────────
    {
      type: "photo",
      icon: "PHOTO",
      platform: "Instagram",                        // platform label
      title: "My Photo Post",
      description: "Short caption or context.",
      handle: "@yourhandle",
      url: "https://instagram.com/p/...",           // link when card is clicked
      thumbnail: "images/my-photo-thumb.jpg",       // image to display
      color: "#a78bfa",                             // card accent color
      overlayTitle: "Title On Photo",               // text overlaid on the image
      overlaySubtitle: "subtitle under title",
      verified: false,
      verifiedColor: "#305a9e",
      autoplay: false,
    },
    ── END PHOTO TEMPLATE ── */

    /* ── ADD NEW FEATURED — ARTICLE ────────────────────────────────────────
    {
      type: "article",
      icon: "ARTICLE",
      platform: "Medium",                           // or "Substack", "Blog", etc.
      title: "My Article Title",
      description: "One or two sentences about what the article covers.",
      handle: "Medium · Month Year",
      linkText: "Read Article →",
      url: "https://medium.com/@...",
      color: "#f59e0b",                             // card accent color
      autoplay: false,
      verified: false,
    },
    ── END ARTICLE TEMPLATE ── */
  ],

  /* ── PROJECTS ───────────────────────────────────────────── */
  /**
   * HOW TO ADD A NEW PROJECT:
   *   1. Copy the template below (after the last project)
   *   2. Remove the surrounding comment markers
   *   3. Fill in your details — it appears on the site automatically!
   *
   * category options:  "ai" | "programming" | "data" | "design" | "research"
   * color options:     "mint" | "sky" | "lilac" | "peach" | "lemon"
   * image:             "images/proj-name.png"  or  null  for no image
   * links:             add as many { label, url } objects as you need
   */
  projects: [
    {
      title: "Pathwiser AI: Academic & Career Roadmap",
      date: "Jan 2026 - Present · UW Foster School of Business",
      desc: "Built a full-stack AI platform using React.js and TypeScript that delivers personalized academic and career roadmaps through AI-driven recommendations.",
      tags: ["AI Research", "React.js", "TypeScript", "Full-Stack"],
      category: "ai",
      color: "peach",
      image: "images/proj-pathwiser.png",
      links: [
        { label: "GitHub ↗", url: "https://github.com/Anushka23ja/pathwiser-ai" },
        { label: "Demo ↗",   url: "https://www.youtube.com/watch?v=cPWkLyS5p1I" },
      ],
    },
    {
      title: "Predicting Physical Activity from Wearable Sensor Data",
      date: "Jan 2025 - Jun 2025 · University of Washington",
      desc: "Developed and compared 6 machine learning models (XGBoost, Scikit-learn) on Fitbit time-series data to classify and predict physical activity with high accuracy.",
      tags: ["Research", "Python", "Scikit-learn", "XGBoost", "Time-Series Analysis"],
      category: "research",
      color: "peach",
      image: "images/proj-wearable.png",
      links: [
        { label: "GitHub ↗", url: "https://github.com/Anushka23ja/CapstoneProject" },
      ],
    },
    {
      title: "Leveraging Peer Facilitation to Bridge Skill Gaps in Introductory Programming Education",
      date: "Mar 2025 - May 2025 · University of Washington",
      desc: "Conducted survey-based research across 34 students to quantify the impact of peer support in CS education; peer facilitation emerged as the highest-rated academic resource.",
      tags: ["Research", "Survey Analysis", "Python"],
      category: "research",
      color: "peach",
      image: "images/proj-peer-facilitation.png",
      links: [
        { label: "Research PDF ↗", url: "https://drive.google.com/file/d/1RnLKDcbzv9rx06xxhd6OYKBPmj_QFLHL/view?usp=share_link" },
      ],
    },
    {
      title: "AI-Powered Restaurant Website: Yea's Wok",
      date: "Feb 2026 · UW Foster MSIS",
      desc: "Delivered a production-ready, mobile-first restaurant website with an integrated voice AI agent (ElevenLabs + Claude API) that places calls on behalf of users.",
      tags: ["Programming", "Prompt Engineering", "UX Design", "Claude AI"],
      category: "ai",
      color: "sky",
      image: "images/proj-yeas-wok.png",
      links: [
        { label: "Live Site ↗", url: "https://yeaswok.lovable.app" },
        { label: "Article ↗",  url: "https://medium.com/@anuchoug05/building-a-restaurant-website-with-ai-from-static-pages-to-a-voice-powered-experience-b1c03fef55f3" },
      ],
    },
    {
      title: "AI-Powered Cover Letter Agent",
      date: "Feb 2026 · UW Foster MSIS",
      desc: "Engineered a multi-agent automation pipeline in n8n using Claude 3.5 Sonnet and Tavily web search to generate tailored cover letters and deliver them via Gmail API in under 60 seconds.",
      tags: ["AI Agents", "n8n", "Claude 3.5 Sonnet", "Tavily", "Gmail API"],
      category: "ai",
      color: "mint",
      image: "images/proj-cover-letter.png",
      links: [
        { label: "Workflow ↗", url: "https://hello34.app.n8n.cloud/workflow/ubVIQ6dOfTXxsRqS?project" },
        { label: "PDF ↗",      url: "https://drive.google.com/file/d/1oEObzI3oNE_gv9j1Em2jiDUlCcEgfp4J/view?usp=share_link" },
      ],
    },
    {
      title: "An Analysis on Factors Affecting Mortgage Rate",
      date: "Sep 2025 · UW Foster MSIS",
      desc: "Applied multiple linear regression to Freddie Mac's loan-level dataset, identifying credit score, LTV, and DTI as key drivers of rate spread (R² = 0.26) across thousands of records.",
      tags: ["Data Analysis", "Python", "Pandas", "Google Colab"],
      category: "data",
      color: "lemon",
      image: "images/proj-mortgage.jpg",
      links: [
        { label: "Google Colab ↗", url: "https://colab.research.google.com/drive/1AWMH8QseaydJNNH6G3dMW4RM1G99vpRT?usp=sharing" },
        { label: "Slides ↗",       url: "https://drive.google.com/file/d/1CRcPcm2aIurFoYLNDcUpppO49L6JU1JF/view?usp=share_link" },
        { label: "Report ↗",       url: "https://drive.google.com/file/d/1NyOpSbX2hPZrMk6H-wvAVxNydqqh-8lv/view?usp=share_link" },
      ],
    },
    {
      title: "AI Social Media Content Studio",
      date: "Mar 2026 · UW Foster MSIS",
      desc: "Designed an AI content pipeline that generates and scores platform-native posts for Instagram, Facebook, and TikTok from a single input, with automated image generation and direct publishing.",
      tags: ["AI Agents", "API Integration", "Prompt Engineering", "Python"],
      category: "ai",
      color: "lilac",
      image: "images/hearth-brew.png",
      links: [
        { label: "GitHub ↗",       url: "https://github.com/Anushka23ja/Hearth-Brew/tree/main" },
        { label: "Presentation ↗", url: "https://drive.google.com/file/d/1IWYioVxU_sGz3c4mb0-2fMOh0OfLEp9H/view?usp=share_link" },
      ],
    },
    {
      title: "Zara Menswear Sales Prediction",
      date: "Feb 2026 · UW Foster MSIS",
      desc: "Trained and evaluated 5 regression models on 252 products, achieving R² = 0.47 with XGBoost; deployed SHAP-explainable predictions in an interactive Streamlit dashboard.",
      tags: ["Data Analysis", "Python", "Machine Learning", "XGBoost", "SHAP"],
      category: "data",
      color: "lemon",
      image: "images/zara.jpg",
      links: [
        { label: "Live App ↗", url: "https://clear-insight-app.lovable.app" },
        { label: "GitHub ↗",  url: "https://github.com/Anushka23ja/zara-sales-prediction" },
      ],
    },
    {
      title: "Simulated File System in C",
      date: "Jan 2025 · CSSE Operating Systems",
      desc: "Implemented a low-level file system in C using BFS block traversal, FBN/DBN mapping, and block-level read/write with support for dynamically extended file sizes.",
      tags: ["Programming", "Operating System", "C", "File Systems", "Memory Management"],
      category: "programming",
      color: "mint",
      image: "images/proj-os.png",
      links: [
        { label: "Demo ↗",   url: "https://endeavor-essence-view.lovable.app/" },
        { label: "GitHub ↗", url: "https://..." },
      ],
    },
    {
      title: "Linked List Implementations and Algorithms",
      date: "Jan 2025 · CSSE Data Structures",
      desc: "Implemented circular doubly linked, move-to-front, and transpose linked lists in C++, with full support for insertion, deletion, traversal, and access operations.",
      tags: ["Programming", "Data Structures", "C++", "Algorithms", "Linked Lists"],
      category: "programming",
      color: "mint",
      image: "images/proj-dsa.png",
      links: [
        { label: "Demo ↗",   url: "https://easy-see-code.lovable.app/" },
        { label: "GitHub ↗", url: "https://github.com/Anushka23ja/CSS343" },
      ],
    },
    {
      title: "Media Rental Store System",
      date: "Jan 2025 · CSSE Data Structures",
      desc: "Designed a modular C++ rental store system with OOP architecture, hash table-based retrieval, and a command parser to handle real-world inventory, borrowing, and return workflows.",
      tags: ["Programming", "Data Structures", "C++", "Algorithms", "OOP"],
      category: "programming",
      color: "mint",
      image: "images/proj-dsa(2).png",
      links: [
        { label: "Demo ↗",   url: "https://unveil-my-wonder.lovable.app/" },
        { label: "GitHub ↗", url: "https://github.com/Anushka23ja/CSS343" },
      ],
    },

    /* ── ADD NEW PROJECT — copy block below, remove these comment markers, fill in ──
    {
      title: "My New Project",
      date: "Month Year · Context / Class",
      desc: "One to three sentences describing what you built, the problem it solves, and any key results or impact.",
      tags: ["Tag1", "Tag2", "Tag3"],
      //       ↑ pick from: "AI Research" | "React.js" | "TypeScript" | "Python" | "Full-Stack"
      //                    "Data Analysis" | "Machine Learning" | "Research" | "UX Design"
      //                    "Programming" | "C++" | "Java" | "JavaScript" | "Go"
      //                    ...or make up your own!

      category: "ai",
      //         ↑ "ai" | "programming" | "data" | "design" | "research"

      color: "mint",
      //      ↑ "mint" (green) | "sky" (blue) | "lilac" (purple) | "peach" (orange) | "lemon" (yellow)

      image: "images/proj-name.png",  // or null for no image

      links: [
        { label: "GitHub ↗",   url: "https://github.com/Anushka23ja/..." },
        { label: "Demo ↗",     url: "https://..." },
        { label: "Paper ↗",    url: "https://drive.google.com/..." },
        { label: "Slides ↗",   url: "https://drive.google.com/..." },
        { label: "Live App ↗", url: "https://..." },
        // ↑ add or remove links as needed — only include what you have!
      ],
    },
    ── END TEMPLATE ── */
  ],

  /* ── EXPERIENCE ─────────────────────────────────────────── */
  /**
   * HOW TO ADD A NEW EXPERIENCE:
   *   1. Copy the template below and paste it at the TOP of this array
   *      (most recent jobs first)
   *   2. Remove the comment markers and fill in your details.
   *
   * color options: "mint" | "sky" | "lilac" | "peach" | "lemon"
   * stack:         list of tech/skills used — shown as small tags
   */
  experience: [
    {
      role: "AI Curriculum Developer + Research Lead",
      company: "Interactive Intelligence",
      date: "Oct 2025 - Present",
      color: "mint",
      desc: "Designing and delivering a deep learning-focused AI curriculum covering neural network architectures, mathematical foundations, and advanced concepts with hands-on Jupyter Notebook exercises. Guiding 21+ undergraduate students on AI research projects by mentoring teams in machine learning, data analysis, and experimental design.",
      stack: ["Deep Learning","Curriculum Design","Jupyter","Mentorship"],
    },
    {
      role: "Research Assistant",
      company: "University of Washington",
      date: "Jan 2025 - Jul 2025",
      color: "sky",
      desc: "Conducted AI research on health wearables with a focus on human-computer interaction and value-sensitive design. Used ML, NLP, and time-series analysis to develop inclusive, user-centered systems that improve accessibility and promote health equity.",
      stack: ["Python","NLP","Time-series","HCI"],
    },
    {
      role: "Undergraduate Teaching Assistant",
      company: "University of Washington",
      date: "Sep 2024 - Jun 2025",
      color: "lilac",
      desc: "Facilitated Java-based OOP and data structures sessions for 120+ students, delivering live coding demos to strengthen core fundamentals. Provided 1:1 debugging support and evaluated 250+ assignments and exams to improve instructional clarity.",
      stack: ["Java","Data Structures","Teaching","Leadership"],
    },
    {
      role: "Software Engineer Intern",
      company: "SEAL - Seattle, WA",
      date: "Jun 2024 - Nov 2024",
      color: "peach",
      desc: "Designed and developed software, web pages, apps, scripts, and media solutions on the DevOps team. Led the design of a SEAL robotics webpage using Figma, React.js, TypeScript, and Bootstrap.",
      stack: ["React.js","TypeScript","Figma","Bootstrap","DevOps"],
    },

    /* ── ADD NEW EXPERIENCE — copy block below, remove comment markers, fill in ──
    {
      role: "Job Title / Role",
      company: "Company Name - City, State",
      date: "Mon Year - Mon Year",          // e.g. "Jun 2026 - Aug 2026" or "Jun 2026 - Present"
      color: "mint",
      //      ↑ "mint" | "sky" | "lilac" | "peach" | "lemon"
      desc: "2-4 sentences about your responsibilities, what you built or contributed, and measurable impact (numbers help!).",
      stack: ["Skill1", "Skill2", "Skill3"],
      // ↑ 3–6 keywords shown as tags — use tech, tools, or soft skills
    },
    ── END TEMPLATE ── */
  ],

  /* ── EDUCATION ──────────────────────────────────────────── */
  /**
   * HOW TO ADD A NEW EDUCATION ENTRY:
   *   1. Copy the template below and paste it at the TOP of this array
   *      (most recent degree first)
   *   2. Remove the comment markers and fill in your details.
   *
   * gpa:   optional — omit the field entirely if you don't want to show it
   * tags:  clubs, honors, programs, etc. — shown as small pills
   */
  education: [
    {
      degree: "MS, Management Information Systems",
      school: "UW Foster School of Business",
      year: "Jun 2025 - Jun 2026",
      color: "mint",
      tags: ["MSIS Social Committee", "Amazon ReachBack Technical Cohort"],
    },
    {
      degree: "BS, Computer Science & Software Engineering",
      school: "University of Washington",
      year: "Sep 2023 - Jun 2025",
      color: "sky",
      gpa: "Dean's List",
      tags: ["Society of Women Engineers","Google Development Groups", "American Cancer Society", "Women in Informatics", "Indian Student Association"],
    },
    {
      degree: "Associate's, Integrated Studies DTA",
      school: "Cascadia College",
      year: "Sep 2021 - Jun 2023",
      color: "lilac",
      tags: ["Dual Enrollment","Phi Theta Kappa"],
    },

    /* ── ADD NEW EDUCATION — copy block below, remove comment markers, fill in ──
    {
      degree: "Degree Name, Field of Study",   // e.g. "PhD, Computer Science"
      school: "University Name",
      year: "Sep 20XX - Jun 20XX",
      color: "peach",
      //      ↑ "mint" | "sky" | "lilac" | "peach" | "lemon"
      gpa: "3.9 / 4.0",                        // optional — delete this line to hide
      tags: ["Club Name", "Honor Society", "Relevant Program"],
      // ↑ extracurriculars, honors, or programs — add as many as you like
    },
    ── END TEMPLATE ── */
  ],

  /* ── SKILLS ─────────────────────────────────────────────── */
  /**
   * HOW TO UPDATE SKILLS:
   *   - To ADD a new skill to an existing group: just add it to the items array.
   *   - To ADD a new skill group: copy the template at the bottom of this array.
   *
   * label:  shown as a section header (the "// Engineering" style)
   * color:  "mint" | "sky" | "lilac" | "peach" | "lemon"
   * items:  list of individual skills shown as tags
   */
  skills: [
    {
      label: "// Engineering",
      color: "mint",
      items: ["Python","JavaScript","TypeScript","Go","React","Node.js","FastAPI","PostgreSQL","Docker"],
    },
    {
      label: "// Data & ML",
      color: "sky",
      items: ["Pandas","NumPy","Scikit-learn","PyTorch","Tableau","D3.js","SQL","R"],
    },
    {
      label: "// Design",
      color: "lilac",
      items: ["Figma","User Research","Prototyping","Design Systems","WCAG / A11y"],
    },
    {
      label: "// AI & Research",
      color: "peach",
      items: ["LangChain","RAG","LoRA / Fine-tuning","Evals","Prompt Engineering","HuggingFace"],
    },

    /* ── ADD NEW SKILL GROUP — copy block below, remove comment markers, fill in ──
    {
      label: "// Cloud & DevOps",             // shown as the group header
      color: "lemon",
      //      ↑ "mint" | "sky" | "lilac" | "peach" | "lemon"
      items: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      // ↑ list as many individual skills as you want
    },
    ── END TEMPLATE ── */
  ],

  /* ── CERTIFICATIONS / ACHIEVEMENTS ─────────────────────── */
  /**
   * HOW TO ADD A NEW CERTIFICATION:
   *   1. Copy the template below and paste it before the closing ]
   *   2. Remove the comment markers and fill in your details.
   *
   * color options: "mint" | "sky" | "lilac" | "peach" | "lemon"
   */
  certifications: [
    {
      title: "Introduction to Neuroscience and Artificial Intelligence",
      sub: "University of Washington · Issued Dec 2024",
      color: "mint",
    },
    {
      title: "Computer Programming Foundations Certificate",
      sub: "Cascadia College · Issued 2023",
      color: "sky",
    },

    /* ── ADD NEW CERTIFICATION — copy block below, remove comment markers, fill in ──
    {
      title: "Certification or Award Name",
      sub: "Issuing Organization · Issued Month Year",
      //     ↑ examples: "Coursera · Issued Jan 2026"
      //                 "AWS · Issued Mar 2026 · Expires Mar 2028"
      color: "lilac",
      //      ↑ "mint" | "sky" | "lilac" | "peach" | "lemon"
    },
    ── END TEMPLATE ── */
  ],

};