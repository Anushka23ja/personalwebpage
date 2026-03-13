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
  location: "Remote / Open to relocation",
  availability: "Open to work now",
  education_short: "B.S. Computer Science",

  // Hero section photo — put file in same folder as index.html, e.g. "hero.jpg"
  heroImage: "images/uw.anushka-22.jpg",   // e.g. "hero.jpg" or null for gradient placeholder

  // About section photo
  aboutImage: "images/uwgrad.png",  // e.g. "about.jpg" or null for placeholder

  // Stats shown in the About side-panel
  stats: [
    { num: "4+",  label: "Domains" },
    { num: "12+", label: "Projects" },
    { num: "1+",  label: "Years exp." },
  ],

  interests: ["Open Source","AI Safety","HCI","Writing","Teaching CS","System Design","Data Viz"],

  aboutBio: [
    `I'm <span class="panel-highlight">Anushka</span> — a computer science student and engineer passionate about building things at the intersection of <span class="panel-highlight">software</span>, <span class="panel-highlight">data</span>, <span class="panel-highlight">design</span>, and <span class="panel-highlight">AI</span>.`,
    `I thrive in fast-moving environments where I get to go deep on hard problems — whether that's optimizing a backend system, running user research, or fine-tuning a language model.`,
    `Currently focused on agentic AI research and actively looking for full-time opportunities in software engineering or AI/ML.`,
  ],

  /* ── CONTACT LINKS ──────────────────────────────────────── */
  contactLinks: [
    { icon: "💼", label: "LinkedIn",  handle: "/anushkaachougule", url: "https://linkedin.com/in/anushkaachougule", bg: "#0077b5" },
    { icon: "🐙", label: "GitHub",    handle: "/anushka23ja",    url: "https://github.com/anushka23ja",    bg: "#1a1a2e" },
    { icon: "✉️",  label: "Email",    handle: "anuachoug@gmail.com", url: "mailto:anuachoug@gmail.com",            bg: "#e07040" },
    { icon: "📄", label: "Resume",   handle: "Download PDF", url: "ChouguleAnushka_Resume (6).pdf",            bg: "#4a90e2" },
  ],

  /* ── FEATURED ───────────────────────────────────────────── */
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
    }
  ],

  /* ── PROJECTS ───────────────────────────────────────────── */
  /**
   * HOW TO ADD A NEW PROJECT:
   *   1. Copy the template at the BOTTOM of this array (after the last project)
   *   2. Paste it above the closing ], remove the /* and *\/ comment markers
   *   3. Fill in your details and save — it appears on the site automatically!
   *
   * category:  "ai"  |  "programming"  |  "data"  |  "design"  |  "research"
   * color:     "mint" |  "sky"  |  "lilac"  |  "peach"  |  "lemon"
   * image:     put file in /images folder, e.g. "images/my-project.png" (or null)
   * links:     add as many { label, url } objects as you need
   */
  projects: [
    {
      title: "Pathwiser AI: Academic & Career Roadmap",
      date: "Jan 2026 - Present · UW Foster School of Business",
      desc: "Full-stack AI platform enabling students and professionals to generate personalized academic and career roadmaps. Implemented end-to-end functionality across the front-end and back-end with AI-driven recommendations.",
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
      desc: "Developed and trained 6 machine learning models to predict physical activity using time-series data from Fitbit wearable sensors. Step count and heart rate data were cleaned, structured, and used to train and evaluate predictive algorithms, enabling accurate classification and forecasting of activity patterns.",
      tags: ["Research", "Python", "Scikit-learn", "XGBoost"],
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
      desc: "Analyzed the impact of peer facilitation in supporting students with diverse skill levels in introductory programming courses. Survey data from 34 students was evaluated to assess the effectiveness of various academic support resources. Peer facilitators emerged as one of the most frequently used and highly rated forms of support.",
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
      desc: "Built a mobile-first restaurant website using AI-assisted vibe coding (Lovable) for a real business. Added a voice AI feature powered by ElevenLabs and Claude that calls the restaurant on the user's behalf. Iterated through stakeholder and customer feedback to improve usability, navigation, and operational clarity.",
      tags: ["Programming", "Prompt Engineering", "UX Design", "Claude AI"],
      category: "programming",
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
      desc: "Built a multi-agent agentic workflow in n8n that auto-generates personalized cover letters. A Research Agent uses Tavily web search to pull real company culture and values, then a Tailoring Agent writes a targeted letter using Claude 3.5 Sonnet. Delivers final output directly to Gmail in under 60 seconds.",
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
      desc: "Analyzed Freddie Mac's Single-Family Loan-Level Dataset to identify borrower and loan characteristics driving interest rate spread. Built a multiple linear regression model using credit score, LTV ratio, DTI ratio, and loan purpose as predictors, explaining ~26% of rate spread variation.",
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
      desc: "AI-powered content studio for Hearth & Brew. Input one topic, get platform-native posts for Instagram, Facebook, and TikTok. Each post is scored on 5 brand-fit dimensions by a second AI call. Generates matched images per platform. Publishes directly to connected accounts.",
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
      desc: "Predicting sales volume for 252 Zara menswear products using five regression models, from Linear Regression to XGBoost and MLP. XGBoost was the best performer at R² = 0.474 after GridSearchCV tuning, with SHAP values explaining each prediction. Findings are deployed in an interactive four-tab Streamlit dashboard with live prediction inputs.",
      tags: ["Data Analysis", "Python", "Machine Learning", "XGBoost", "SHAP"],
      category: "data",
      color: "lemon",
      image: "images/zara.jpg",
      links: [
        { label: "Live App ↗", url: "https://clear-insight-app.lovable.app" },
        { label: "GitHub ↗",  url: "https://github.com/Anushka23ja/zara-sales-prediction" },
      ],
    },

    /* ── ADD NEW PROJECT — copy block below, remove these comment markers, fill in ──
    {
      title: "My New Project",
      date: "Month Year · Context / Class",
      desc: "One to three sentences describing what you built, the problem it solves, and any key results or impact.",
      tags: ["Tag1", "Tag2", "Tag3"],
      category: "ai",           // "ai" | "programming" | "data" | "design" | "research"
      color: "mint",            // "mint" | "sky" | "lilac" | "peach" | "lemon"
      image: "images/proj-name.png",  // or null for no image
      links: [
        { label: "GitHub ↗",   url: "https://github.com/..." },
        { label: "Demo ↗",     url: "https://..." },
        { label: "Paper ↗",    url: "https://..." },
      ],
    },
    ── END TEMPLATE ── */
  ],

  /* ── EXPERIENCE ─────────────────────────────────────────── */
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
  ],

  /* ── EDUCATION ──────────────────────────────────────────── */
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
  ],

  /* ── SKILLS ─────────────────────────────────────────────── */
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
  ],

  /* ── CERTIFICATIONS / ACHIEVEMENTS ─────────────────────── */
  certifications: [
    {
      title: "Introduction to Neuroscience and Artificial Intelligence",
      sub: "University of Washington · Issued Dec 2024 ",
      color: "mint",
    },
    {
      title: "Computer Programming Foundations Certificate  ",
      sub: "Cascadia College · Issued 2023 ",
      color: "sky",
    },
    // ── ADD MORE BELOW ──
    // { title: "My Cert", sub: "Issuer · Date", color: "lilac" },
  ],

};