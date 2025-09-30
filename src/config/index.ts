import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Evan Hammam — Machine Learning Researcher & Software Developer",
  author: "Evan Hammam",
  description:
    "Machine learning researcher and full‑stack developer. I build ML models and production apps.",
  lang: "en",
  siteLogo: "/hammam_evan_8x10.JPG",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Experience", href: "#experience" },
    { text: "Student Life", href: "#student-life" },
    { text: "Projects", href: "#projects" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/evan-hammam/" },
    { text: "Github", href: "https://github.com/ehh67855" },
    { text: "Youtube", href: "https://www.youtube.com/@evanhammam1388" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://evan-hammam.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Evan Hammam",
    specialty: "Machine Learning Researcher and Software Developer",
    summary:
      "Developer focused on building machine learning models and full-stack applications. Founder of AI@UGA.",
    email: "evanhammam@gmail.com",
  },
  experience: [
    {
      company: "University of Georgia, Center for Geospatial Research",
      position: "Graduate Research Assistant",
      startDate: "May 2025",
      endDate: "Present",
      summary: [
        "Building a radiance field model for downward-facing multispectral drone imagery to reconstruct outdoor scenes at scale.",
        "Set up image alignment and radiometric calibration so data is both geometrically and spectrally consistent.",
        "Produced the lab’s first high‑quality 3D reconstructions of outdoor environments.",
        "Mapped point clouds between coordinate systems to bring reconstructions into standard mapping workflows.",
        "Research supports biodiversity monitoring, conservation planning, and environmental forecasting.",
        "Preparing a conference submission for 2025 in New Orleans.",
      ],
    },
    {
      company: "Map Large",
      position: "Senior Software Intern",
      startDate: "May 2024",
      endDate: "August 2024",
      summary: [
        "Improved a TypeScript documentation site with data fetching and automated tests for stability.",
        "Wrote and maintained 30+ docs for core libraries including strings, identifiers, and data formats.",
        "Built a small tool to convert between query languages, reducing manual effort and mistakes.",
        "Expanded interface tests to check query consistency across runs.",
        "Helped streamline day‑to‑day development.",
      ],
    },
    {
      company: "University of Georgia",
      position: "Peer Learning Assistant (Systems Programming in C and C++)",
      startDate: "January 2024",
      endDate: "May 2024",
      summary: [
        "Coached 30+ students in systems programming, focusing on debugging and performance.",
        "Explained memory management, system calls, and other low‑level concepts in plain language.",
        "Led code reviews and one‑on‑one sessions to help students ship better projects.",
      ],
    },
    {
      company: "Alpha Comm Enterprises",
      position: "Software and IT Intern",
      startDate: "June 2023",
      endDate: "July 2023",
      summary: [
        "Built a full‑stack ASP.NET MVC app so the sales team could view SQL Server data easily.",
        "Simplified queries with timestamp updates to remove repetitive manual edits.",
        "Automated user and device tasks with PowerShell, saving time and reducing mistakes.",
        "Improved usability for non‑technical staff and made IT operations smoother.",
      ],
    },
    {
      company: "Map Large",
      position: "Software Intern",
      startDate: "June 2021",
      endDate: "July 2021",
      summary: [
        "Parsed OpenStreetMap data with C# to build a base map of Georgia for a geospatial product.",
        "Wrote AppleScript automations to register 500+ devices on the company network.",
        "Cut manual work during large deployments and sped up onboarding.",
        "Learned the basics of geospatial software and automation at scale.",
      ],
    },
    {
      company: "WebMD",
      position: "Software Development Intern",
      startDate: "May 2019",
      endDate: "August 2019",
      summary: [
        "Built interactive features and animations in JavaScript to make pages feel faster and clearer.",
        "Fixed browser quirks to keep the site consistent across platforms.",
        "Improved layouts for phones and tablets to make content easier to use.",
        "Contributed to production work on a major health information site.",
      ],
    },
  ],
  projects: [
    // Personal Projects
    {
      name: "Frame",
      summary:
        "TaskFlow plans practice for musicians. It uses evolutionary algorithms to build sessions from priorities, dependencies, time, and past progress.",
      category: "personal",
      linkPreview: "/",
      linkSource: "https://github.com/ehh67855/TaskFlow",
      image: "/Frame.png",
      tags: [
        "Java",
        "TypeScript",
        "React",
        "Next.js",
        "MySQL",
        "Spring Boot",
      ],
    },

    // Research
    {
      name: "VIPR",
      summary:
        "Genetic algorithms tune NeRF hyperparameters to train faster and more accurately for phenotyping and remote sensing.",
      category: "research",
      linkPreview: "/",
      linkSource: "https://github.com/ehh67855",
      image: "/VIPR.png",
      tags: [
        "Python",
        "PyTorch",
        "Scikit-Learn",
        "Evolutionary Programming",
        "Gaussian Processes",
      ],
    },
    {
      name: "UAV NeRF",
      summary:
        "A NeRF model for nadir UAV imagery, designed for downward facing multispectral data.",
      category: "research",
      linkPreview: "/",
      linkSource: "https://github.com/ehh67855",
      image: "/UAV Nerf.png",
      tags: ["Python", "PyTorch", "Neural Radiance Fields", "OpenCV"],
    },

    // Hackathons
    {
      name: "TuneShift",
      summary:
        "Version control for music. Branch ideas, collaborate, and keep every take. Built to help artists iterate, remix, and share feedback.",
      category: "hackathon",
      linkPreview: "https://www.youtube.com/watch?v=IN4iGRQFuo0",
      linkSource: "https://github.com/ehh67855/UgaHacksX",
      image: "/TuneShift.png",
      tags: [
        "Java",
        "MySQL",
        "Next.js",
        "React",
        "Spring Boot",
        "Tailwind CSS",
        "TypeScript",
      ],
    },
    
    {
      name: "Gym Buddies",
      summary:
        "Personalized workout plans with progress tracking like PRs and weights. A simple social feed lets friends share updates and stay accountable.",
      category: "hackathon",
      linkPreview: "https://youtube.com/watch?v=nQyVQKObYAU",
      linkSource: "https://github.com/ExtraneousFalcon/GymBuddies",
      image: "/GymBuddies.png",
      tags: [
        "HTML",
        "CSS",
        "Python",
        "Django",
        "JavaScript",
        "SQLite",
        "Heroku",
      ],
    },

    // Class Projects
    {
      name: "Multi threaded web server",
      summary:
        "A multithreaded HTTP server in C using sockets, pthreads, and semaphores to handle requests in parallel.",
      category: "class",
      linkPreview: "/",
      linkSource: "https://github.com/ehh67855/Web-Server-Threading",
      image: "/Web Server.png",
      tags: ["C", "Multithreading"],
    },
    {
      name: "Multi-Process IPC Word Counter",
      summary:
        "A word counter that uses multiple UNIX processes and IPC to parallelize large files.",
      category: "class",
      linkPreview: "/",
      linkSource: "https://github.com/ehh67855/Multi-process-and-IPC-word-counter",
      image: "/IPC.png",
      tags: ["C", "Parallel Computing"],
    },
    {
      name: "UGA Study Spots",
      summary:
        "A UGA study spot rating site for students. Final project for CSCI 4300.",
      category: "class",
      linkPreview: "/",
      linkSource: "https://github.com/Tomtom21/debug-thugs",
      image: "/Study Spots.png",
      tags: ["JavaScript", "React", "Node.js"],
    },
    {
      name: "Ebooking Cinema",
      summary:
        "A cinema booking app with seat selection, showtimes, and payments. Built for a software engineering course.",
      category: "class",
      linkPreview: "/",
      linkSource: "https://github.com/ehh67855/Cinema",
      image: "/Cinema.png",
      tags: ["Java", "JavaScript", "Spring Boot", "React", "MySQL"],
    },
    {
      name: "Gallery App",
      summary:
        "Search albums with the iTunes API and show artwork. Multithreaded for smoother performance.",
      category: "class",
      linkPreview: "/",
      linkSource: "https://github.com/ehh67855/GalleryApp",
      image: "/Gallery App.png",
      tags: ["Java", "JavaFX", "Multithreading"],
    },
  ],
  about: {
    description: `I graduated from UGA in Spring 2025 with a B.S. in Computer Science and a minor in Mathematics, and I’m now pursuing a Master’s in Artificial Intelligence. I founded AI@UGA to connect students with real-world AI projects, and I also led the Data Team at the UGA Small Satellite Research Lab, where my work in machine learning and computer vision led to my current research at the Center for Geospatial Research on Neural Radiance Fields for remote sensing. Outside of research, I play saxophone, drums, and guitar, and I created Frame, a personal project that combines my interests in music theory and programming.`,
    image: "/hammam_evan_8x10.JPG",
  },
  studentLife: [
    {
      title: "AI@UGA",
      role: "Founder and President",
      summary: `I started AI@UGA to match students with real projects. We work in small teams with a project lead and a few developers. The goal is simple: ship useful work and learn by doing. Visit: www.aiatuga.com/

Early on, we partnered with Athens‑Clarke County. Our team built simple wireless sensors and streaming tools so water quality data could feed into our models in real time. With support from UGA’s Department of Geology, that work led to two papers now in preparation.

We also worked with Hammerhead Construction. We trained U‑Net models to turn hand‑drawn floor plans into 3D CAD models. It speeds up drafting and helps standardize the workflow.

This semester, we teamed up with the City of Atlanta and UGA Forestry to classify satellite imagery into forest and non‑forest areas and estimate forest age. We are aiming for a publication.

We are building small mobile and LLM tools too. One app helps the City of Atlanta triage citizen reports with computer vision and short writeups for faster routing.

Today, AI@UGA has more than 20 active students and growing faculty support. It gives students a path to do meaningful work and, for some, a bridge into research.`,
      highlights: [
        "Led collaboration with Athens-Clarke County: engineered wireless sensors and ML models for real-time water quality analysis; supported by UGA Department of Geology; two manuscripts in preparation.",
        "Partnered with Hammerhead Construction: trained U-Net models to vectorize hand-drawn plans and auto-generate 3D CAD models, accelerating architectural workflows.",
        "Launched City of Atlanta + UGA Forestry project: classified satellite imagery to distinguish forest vs non-forest and estimate forest age for upcoming publication.",
        "Built mobile CV apps for City of Atlanta to triage citizen reports, auto-categorize, route, and generate summaries for departments.",
        "Grew to 20+ active students and increasing faculty support, creating pathways to thesis work and publications.",
      ],
      collaborators: [
        "Athens-Clarke County",
        "UGA Department of Geology",
        "Hammerhead Construction",
        "City of Atlanta",
        "UGA Department of Forestry",
      ],
      links: [],
      media: [],
    },
    {
      title: "UGA Small Satellite Research Lab",
      role: "Data Team Co-Leader",
      summary: `I co‑led the Data Team at the Small Satellite Research Lab. We focused on machine learning for satellite and drone imagery. I built a Python framework for Neural Radiance Fields so we could visualize and analyze scenes with better detail.

I also created a tuning tool that uses a Gaussian process model with an evolutionary search. It cut training time by about half while keeping quality. We made sure it could run on small devices like the Jetson Orin Nano.

Beyond the code, I set research priorities, designed experiments, and mentored teammates. This work feeds into my master’s thesis in Artificial Intelligence.`,
      highlights: [
        "Built NeRF processing framework for satellite/UAV imagery to generate high-fidelity visualizations.",
        "Developed multi-objective hyperparameter optimization with GP surrogate + evolutionary search, reducing training time ~50% while preserving fidelity.",
        "Optimized for edge deployment constraints (e.g., Jetson Orin Nano).",
        "Coordinated research directions, experiments, and mentorship; aligned outputs with master’s thesis in AI.",
      ],
      collaborators: ["UGA Small Satellite Research Lab"],
      links: [],
      media: [],
    },
    {
      title: "Developers On Wall Street Club",
      role: "Vice President",
      summary: `As Vice President, I helped grow the Developers On Wall Street Club through steady programming and outreach. I planned events, handled logistics, and hosted biweekly speakers. I interviewed professionals from Google, BlackRock, Citadel, JP Morgan, and Salesforce so members could learn directly from them.

I also built and launched a React site used by more than 300 members. It shares resources and event updates and keeps the community connected beyond campus. See: https://devs-on-wall-street.github.io/`,
      highlights: [
        "Hosted live interviews with professionals from Google, BlackRock, Citadel, JP Morgan, and Salesforce.",
        "Built and deployed a React website serving 300+ users for resources and event updates.",
      ],
      collaborators: ["Google", "BlackRock", "Citadel", "JP Morgan", "Salesforce"],
      links: [],
      media: [],
    },
  ],
};

// #5755ff
