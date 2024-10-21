import {
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
  EducationSection,
  ExperienceSection,
} from "./types/sections";

// Define greetings for both languages, ensuring it matches GreetingsType
export const greetings: { en: GreetingsType; de: GreetingsType } = {
  en: {
    name: "Merwin Mudavamkunnel",
    title: "Merwin Mudavamkunnel",
    description:
      "I am a passionate software developer with extensive experience in developing web applications using Python, Django, React.js, and cloud technologies. My enthusiasm for new technologies motivates me to continuously learn and integrate them into my projects. As a self-motivated and dedicated developer, I enjoy working in teams and taking on challenges. Additionally, I have experience as an RPA developer and in Mixed Reality development with Unity.",
    resumeLink: "/pdf/test_cv.pdf",
    resumeTitle: "My Resume",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQELxvdKuu8TIQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729179967364?e=1734566400&v=beta&t=dvDx7U-1L_Ck6kQXYoIvBhni1JZmOWMU5xD0RovFJ04",
  },
  de: {
    name: "Merwin Mudavamkunnel",
    title: "Merwin Mudavamkunnel",
    description:
      "Ich bin ein leidenschaftlicher Software Entwickler mit umfangreicher Erfahrung in der Entwicklung von Webanwendungen unter Einsatz von Python, Django, React.js und Cloud-Technologien. Meine Begeisterung für neue Technologien motiviert mich, diese kontinuierlich zu erlernen und in meine Projekte zu integrieren. Als selbstmotivierter und engagierter Entwickler arbeite ich gerne im Team und nehme Herausforderungen an. Zudem habe ich Erfahrung als RPA-Entwickler sowie in der Mixed Reality-Entwicklung mit Unity",
    resumeLink: "/pdf/test_cv.pdf",
    resumeTitle: "Mein Lebenslauf",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQELxvdKuu8TIQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729179967364?e=1734566400&v=beta&t=dvDx7U-1L_Ck6kQXYoIvBhni1JZmOWMU5xD0RovFJ04",
  },
};

export const openSource = {
  githubUserName: "merwinmu",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:merwin.m@hotmail.com",
  linkedin: "https://www.linkedin.com/in/merwin-mudavamkunnel-a73342169/",
  github: "https://github.com/merwinmu",
  // instagram: "https://www.instagram.com/merwingee",
  // facebook: 'https://www.facebook.com/merwin',
  // twitter: 'https://twitter.com/merwin',
};

export const SkillsSection: { en: SkillsSectionType; de: SkillsSectionType } = {

  en: {
    title: "My Tech Stacks",
    subTitle: "Web Application",

    data: [
      {
        title: "Web Application",
        lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
        lottieheight: 400,
        lottiewidth: 400,
        skills: [
          "Backend development with Python and Django, including REST APIs, PostgreSQL databases, and Redis for caching and queue management",
          "Building interactive frontends with React, Next.js, and Tailwind CSS for responsive designs",
          "Server deployment with Docker and NGINX as well as CI/CD automation through GitHub Actions for continuous integration and deployment",
        ],
        softwareSkills: [
          {
            skillName: "Python",
            iconifyTag: "logos:python",
          },
          {
            skillName: "Django",
            iconifyTag: "vscode-icons:file-type-django",
          },
          {
            skillName: "PostgreSQL",
            iconifyTag: "logos:postgresql",
          },

          {
            skillName: "JavaScript",
            iconifyTag: "logos:javascript",
          },
          {
            skillName: "Reactjs",
            iconifyTag: "vscode-icons:file-type-reactjs",
          },
          {
            skillName: "Nextjs",
            iconifyTag: "vscode-icons:file-type-light-next",
          },
          {
            skillName: "NGINX",
            iconifyTag: "logos:nginx",
          },
          {
            skillName: "Docker",
            iconifyTag: "logos:docker-icon",
          },
          {
            skillName: "Github",
            iconifyTag: "akar-icons:github-fill",
          },
        ],
      },
      {
        title: "Mixed Reality Application",
        lottieAnimationFile: "/lottie/skills/mr.json", // Path of Lottie Animation JSON File
        lottieheight: 400,
        lottiewidth: 400,
        skills: [
          "Development of Mixed Reality applications with Unity and C# for Microsoft Hololens",
          "Also, developing Android applications using Java and Kotlin",
          "Implementation of communication channels between Android devices and Microsoft Hololens via Bluetooth to ensure seamless interaction and data exchange between the two platforms",
        ],
        softwareSkills: [
          {
            skillName: "Csharp",
            iconifyTag: "devicon:csharp",
          },
          {
            skillName: "Unity",
            iconifyTag: "logos:unity",
          },
          {
            skillName: "Mixed Reality",
            iconifyTag: "akar-icons:augmented-reality",
          },
          {
            skillName: "Java",
            iconifyTag: "logos:java",
          },
          {
            skillName: "Kotlin",
            iconifyTag: "logos:kotlin",
          },
          {
            skillName: "Github",
            iconifyTag: "akar-icons:github-fill",
          },
        ],
      },
      {
        title: "Robotic Process Automation",
        lottieAnimationFile: "/lottie/skills/rpa.json", // Path of Lottie Animation JSON File
        lottieheight: 400,
        lottiewidth: 400,
        skills: [
          "Developing RPA bots (including process analysis, conceptualization, programming, documentation, and go-live in close collaboration with the business) across various Migros companies and departments",
          "DevOps integration: UiPath pipeline, .NET 8 (C# 12) self-contained build with Visual Studio Code, UiPath unattended build",
          "Working in SCRUM in the BPA team",
          "Tools used: UiPath, Office O365, SAP, Jira, .NET 8 (C# 12), Visual Studio Code, Azure Eventhub",
        ],
        softwareSkills: [
          {
            skillName: "Csharp",
            iconifyTag: "devicon:csharp",
          },
          {
            skillName: "Dot Net",
            iconifyTag: "logos:dotnet",
          },
          {
            skillName: "UiPath",
            iconifyTag: "simple-icons:uipath",
          },
          {
            skillName: "Gitlab",
            iconifyTag: "logos:gitlab",
          },
        ],
      },
    ],
  },

  de: {
    title: "Meine Tech-Stacks",
    subTitle: "Web Applikation",

    data: [
      {
        title: "Web Applikation",
        lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
        lottieheight: 400,
        lottiewidth: 400,
        skills: [
          "Backend-Entwicklung mit Python und Django, inklusive REST APIs, PostgreSQL-Datenbanken und Redis für Caching und Warteschlangenmanagement",
          "Entwicklung interaktiver Frontends mit React, Next.js und Tailwind CSS für responsive Designs",
          "Serverbereitstellung mit Docker und NGINX sowie CI/CD-Automatisierung über GitHub Actions für kontinuierliche Integration und Deployment",
        ],
        softwareSkills: [
          {
            skillName: "Python",
            iconifyTag: "logos:python",
          },
          {
            skillName: "Django",
            iconifyTag: "vscode-icons:file-type-django",
          },
          {
            skillName: "PostgreSQL",
            iconifyTag: "logos:postgresql",
          },

          {
            skillName: "JavaScript",
            iconifyTag: "logos:javascript",
          },
          {
            skillName: "Reactjs",
            iconifyTag: "vscode-icons:file-type-reactjs",
          },
          {
            skillName: "Nextjs",
            iconifyTag: "vscode-icons:file-type-light-next",
          },
          {
            skillName: "NGINX",
            iconifyTag: "logos:nginx",
          },
          {
            skillName: "Docker",
            iconifyTag: "logos:docker-icon",
          },
          {
            skillName: "Github",
            iconifyTag: "akar-icons:github-fill",
          },
        ],
      },
      {
        title: "Mixed Reality Applikation",
        lottieAnimationFile: "/lottie/skills/mr.json", // Path of Lottie Animation JSON File
        lottieheight: 400,
        lottiewidth: 400,
        skills: [
          "Entwicklung von Mixed-Reality-Anwendungen mit Unity und C# für Microsoft Hololens",
          "Zudem erfolgt die Entwicklung von Android-Applikationen unter Einsatz von Java und Kotlin,",
          "Implementierung von Kommunikationskanälen zwischen Android-Geräten und Microsoft Hololens mittels Bluetooth, um eine nahtlose Interaktion und Datenaustausch zwischen den beiden Plattformen zu ermöglichen",
        ],
        softwareSkills: [
          {
            skillName: "Csharp",
            iconifyTag: "devicon:csharp",
          },
          {
            skillName: "Unity",
            iconifyTag: "logos:unity",
          },
          {
            skillName: "Mixed Reality",
            iconifyTag: "akar-icons:augmented-reality",
          },
          {
            skillName: "Java",
            iconifyTag: "logos:java",
          },
          {
            skillName: "Kotlin",
            iconifyTag: "logos:kotlin",
          },
          {
            skillName: "Github",
            iconifyTag: "akar-icons:github-fill",
          },
        ],
      },
      {
        title: "Robotic Process Automation",
        lottieAnimationFile: "/lottie/skills/rpa.json", // Path of Lottie Animation JSON File
        lottieheight: 400,
        lottiewidth: 400,
        skills: [
          "Entwickeln von RPA Robotern (inkl. Prozessanalyse, Konzeptionierung, Programmierung, Dokumentation und Go-Live in enger Zusammenarbeit mit dem Business) in verschiedenen Migros Unternehmen und Abteilungen",
          "DevOps Integration: Pipeline UiPath, .NET 8 (C# 12) self-contained Build mit Visual Studio Code, UiPath unattended build",
          "Arbeiten nach SCRUM im BPA Team",
          "Eingesetzte Tools: UiPath, Office O365, SAP, Jira, .NET 8 (C# 12), Visual Studio Code, Azure Eventhub",
        ],
        softwareSkills: [
          {
            skillName: "Csharp",
            iconifyTag: "devicon:csharp",
          },
          {
            skillName: "Dot Net",
            iconifyTag: "logos:dotnet",
          },
          {
            skillName: "UiPath",
            iconifyTag: "simple-icons:uipath",
          },
          {
            skillName: "Gitlab",
            iconifyTag: "logos:gitlab",
          },
        ],
      },
    ],
  },
};


export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationSection: { en: EducationSection; de: EducationSection } = {
  en: {
    title: "Education",
    educationTypes: [
      {
        schoolName: "University of Basel",
        subHeader: "Master of Science in Computer Science",
        duration: "September 2022 - April 2024",
        urlLogo: "https://www.unibas.ch/dam/jcr:93abfa0e-58d6-45ed-930a-de414ca40b13/uni-basel-logo.svg",
        projectTitle: "Master Thesis",
        project: "Automated Testing of Website Functionality",
      },
      {
        schoolName: "University of Basel",
        subHeader: "Bachelor of Science in Computer Science",
        duration: "September 2017 - April 2021",
        urlLogo: "https://www.unibas.ch/dam/jcr:93abfa0e-58d6-45ed-930a-de414ca40b13/uni-basel-logo.svg",
        projectTitle: "Bachelor Thesis",
        project: "Historic Image Presentation in Mixed Reality using HoloLens",
      },
    ],
  },
  de: {
    title: "Ausbildung",
    educationTypes: [
      {
        schoolName: "Universität Basel",
        subHeader: "Master of Science in Computer Science",
        duration: "September 2022 - April 2024",
        urlLogo: "https://www.unibas.ch/dam/jcr:93abfa0e-58d6-45ed-930a-de414ca40b13/uni-basel-logo.svg",
        projectTitle: "Master Arbeit",
        project: "Automatisiertes Testen der Funktionalität von Websites",
      },
      {
        schoolName: "Universität Basel",
        subHeader: "Bachelor of Science in Computer Science",
        duration: "September 2017 - April 2021",
        urlLogo: "https://www.unibas.ch/dam/jcr:93abfa0e-58d6-45ed-930a-de414ca40b13/uni-basel-logo.svg",
        projectTitle: "Bachelor Arbeit",
        project: "Historische Bildpräsentation in Mixed Reality mit HoloLens",
      },
    ],
  },
};


export const experienceSection: { en: ExperienceSection; de: ExperienceSection } = {
  en: {
    title: "Experience",
    experienceType: [
      {
        role: "Full Stack Engineer and Founder",
        company: "michmieten.ch gmbh",
        companyLogo: "https://www.michmieten.ch/_next/image?url=%2FImages%2FHeader%2FLogoText.png&w=256&q=75",
        duration: "Febuary 2022 - Present",
        desc: "Founder and lead developer for michmieten.ch",
        descBullets: [
          "Backend Development: Python (Django), PostgreSQL, Redis, Docker",
          "Frontend Development: React, NextJS, Tailwind, CSS",
          "Github CI/CD, Docker Deployment",
          "NGINX, Linux Server Configuration",
        ],
      },
      {
        role: "Robotic Process Engineer",
        company: "Migros Genossenschaftsbund",
        companyLogo:
          "https://www.itjobs.ch/media/filer_public/ce/0d/ce0d79a2-debc-477f-97d3-c8cc1a8d6d1d/mgb_logo.png",
        duration: "August 2021 - August 2024",
        desc: "Development of automated process bots",
        descBullets: [
          "Process automation with C#, .NET 8, UiPath",
          "Gitlab CI/CD Implementation",
          "DevOps Integration",
          "Scrum, Jira, Azure Eventhub Usage",
        ],
      },
      {
        role: "Research Assistant Economic Psychology",
        company: "Universität Basel",
        companyLogo:
          "https://www.unibas.ch/dam/jcr:93abfa0e-58d6-45ed-930a-de414ca40b13/uni-basel-logo.svg",
        duration: "August 2019 - June 2023",
        desc: "Statistical evaluations and data analysis for economic psychology research.",
        descBullets: ["Statistical evaluation using Python and R", "Data analysis"],
      },
      {
        role: "Intranet Developer",
        company: "Baloise Insurance",
        companyLogo:
          "https://lobbymap.org/site//data/001/361/1361315.png",
        duration: "October 2018 - March 2019",
        desc: "Intranet developer for Baloise Insurance.",
        descBullets: [
          "Developing Intranet using Sharepoint",
          "Coordination and communication with national subsidiaries",
          "Kanban and Jira usage",
        ],
      },
    ]
  },
  de:
  {
    title: "Berufserfahrung",
    experienceType:
      [
        {
          role: "Full Stack Engineer und Inhaber",
          company: "michmieten.ch gmbh",
          companyLogo: "https://www.michmieten.ch/_next/image?url=%2FImages%2FHeader%2FLogoText.png&w=256&q=75",
          duration: "Februar 2022 - Aktuell",
          desc: "Gründer und leitender Entwickler von michmieten.ch",
          descBullets: [
            "Backend-Entwicklung: Python (Django), PostgreSQL, Redis, Docker",
            "Frontend-Entwicklung: React, NextJS, Tailwind, CSS",
            "Github CI/CD, Docker-Bereitstellung",
            "NGINX, Linux-Server-Konfiguration",
          ],
        },
        {
          role: "Robotic Process Engineer",
          company: "Migros Genossenschaftsbund",
          companyLogo:
            "https://www.itjobs.ch/media/filer_public/ce/0d/ce0d79a2-debc-477f-97d3-c8cc1a8d6d1d/mgb_logo.png",
          duration: "August 2021 - August 2024",
          desc: "Entwicklung von Prozessautomatisierten Bots",
          descBullets: [
            "Prozessautomatisierung mit C#, .NET 8, UiPath",
            "Gitlab CI/CD-Implementierung",
            "DevOps-Integration",
            "Verwendung von Scrum, Jira, Azure Eventhub",
          ],
        },
        {
          role: "Wissenschaftlicher Assistent Wirtschaftspsychologie",
          company: "Universität Basel",
          companyLogo:
            "https://www.unibas.ch/dam/jcr:93abfa0e-58d6-45ed-930a-de414ca40b13/uni-basel-logo.svg",
          duration: "August 2019 - June 2023",
          desc: "Statistische Auswertungen und Datenanalysen zur Unterstützung wirtschaftspsychologischer Forschung.",
          descBullets: ["Statistische Auswertung mit Python und R", "Datenanalyse"],
        },
        {
          role: "Intranet Entwickler",
          company: "Baloise Versicherung",
          companyLogo:
            "https://lobbymap.org/site//data/001/361/1361315.png",
          duration: "Oktober 2018 - März 2019",
          desc: "Intranet-Entwickler für Baloise Versicherung.",
          descBullets: [
            "Entwicklung des Intranets mit Sharepoint",
            "Koordination und Kommunikation mit nationalen Tochtergesellschaften",
            "Verwendung von Kanban und Jira",
          ],
        },
      ],
  }
};


export const projects: { en: ProjectType[]; de: ProjectType[] } = {
  en: [
    {
      name: "michmieten.ch",
      desc: "michmieten.ch is an innovative online platform where anyone can rent vehicles. The platform allows users to quickly and easily find and rent vehicles. With an integrated booking tool, rental processes can be conveniently handled online. michmieten.ch offers a user-friendly solution for anyone needing a vehicle, ensuring smooth rental processing.",
      link: "michmieten.ch",
      duration: "2022",
      videoUrl: "video/michmieten_video.mp4",
    },
    {
      name: "michliefern.ch",
      desc: "michliefern.ch is a platform for couriers and logistics, where customers can specify the starting and destination points, and the price is automatically calculated. The website provides an efficient solution for transporting and delivering goods.",
      github: "https://github.com/merwinmu/michliefern-nextjs",
      link: "michliefern.ch",
      duration: "2024",
      videoUrl: "video/michliefern_video.mp4",
    },
    {
      name: "GoFind MR",
      desc: "GoFind! is a prototype that allows users to visualize historical multimedia collections at their real-world location using augmented reality and multimedia retrieval technologies. The application is primarily targeted at Microsoft HoloLens 2",
      github: "https://github.com/merwinmu/GoFindMR",
      duration: "2021",
      imageUrl: "https://github.com/merwinmu/GoFindMR/blob/master/img/hand2.jpg?raw=true",
      link: "https://dbis.dmi.unibas.ch/teaching/studentprojects/historic-image-presentation-in-mixed-reality-using-hololens/",
    },
    {
      name: "HoloLens GPS",
      desc: "HoloLens GPS is a companion application for HoloLens or GoFind that transfers GPS location data from Android to a UWP app or directly to the HoloLens via Bluetooth LE.",
      github: "https://github.com/merwinmu/HololensGPS",
      duration: "2021",
      imageUrl: "https://github.com/merwinmu/GoFindMR/raw/master/img/showmap.jpg",
      link: "https://dbis.dmi.unibas.ch/teaching/studentprojects/historic-image-presentation-in-mixed-reality-using-hololens/",
    },
  ],
  de: [
    {
      name: "michmieten.ch",
      desc: "michmieten.ch ist ein innovatives Online-Portal, auf dem Fahrzeuge für jedermann zur Miete angeboten werden. Die Plattform ermöglicht es Nutzern, schnell und einfach Fahrzeuge zu finden und zu mieten. Dank des integrierten Buchungstools können Mietvorgänge bequem online abgewickelt werden.",
      link: "michmieten.ch",
      duration: "2022",
      videoUrl: "video/michmieten_video.mp4",
    },
    {
      name: "michliefern.ch",
      desc: "michliefern.ch ist eine Plattform für Kuriere und Logistik, auf der Kunden den Start- und Zielort angeben können, und der Preis automatisch kalkuliert wird. Die Website bietet eine effiziente Lösung für den Transport und die Zustellung von Waren.",
      github: "https://github.com/merwinmu/michliefern-nextjs",
      link: "michliefern.ch",
      duration: "2024",
      videoUrl: "video/michliefern_video.mp4",
    },
    {
      name: "GoFind MR",
      desc: "Die GoFind! Anwendung ist ein Prototyp, der es Nutzern ermöglicht, historische multimediale Sammlungen an ihrem realen Standort mithilfe von Augmented Reality und Multimedia-Retrieval-Technologien zu visualisieren. Die Anwendung zielt hauptsächlich auf Microsoft HoloLens 2 ab",
      github: "https://github.com/merwinmu/GoFindMR",
      duration: "2021",
      imageUrl: "https://github.com/merwinmu/GoFindMR/blob/master/img/hand2.jpg?raw=true",
      link: "https://dbis.dmi.unibas.ch/teaching/studentprojects/historic-image-presentation-in-mixed-reality-using-hololens/",
    },
    {
      name: "HoloLens GPS",
      desc: "HoloLens GPS ist eine Begleitapplikation für die HoloLens bzw. GoFind, um GPS-Positionsdaten über Bluetooth LE von Android an eine UWP-Anwendung oder direkt an die HoloLens zu übertragen.",
      github: "https://github.com/merwinmu/HololensGPS",
      duration: "2021",
      imageUrl: "https://github.com/merwinmu/GoFindMR/raw/master/img/showmap.jpg",
      link: "https://dbis.dmi.unibas.ch/teaching/studentprojects/historic-image-presentation-in-mixed-reality-using-hololens/",
    },
  ],
};


// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Merwin Mudavamkunnel",
  description: greetings.de.description,
  author: "Merwin Mudavamkunnel",
  image: "https://media.licdn.com/dms/image/v2/D4E03AQELxvdKuu8TIQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729179967426?e=1735171200&v=beta&t=DDxkin2viG-JHaULF_Qk-yM3By6YCRY3TlIhlnFNtm0",
  url: "https://portfolio-merwin-mudavamkunnel.vercel.app",
  keywords: [
    "Merwin",
    "Merwin Mudavamkunnel",
    "@merwingee",
    "merwinmu",
    "Portfolio",
    "Merwin Portfolio ",
    "Merwin Mudavamkunnel Portfolio",
  ],
};


export const githubProfileCardContent = {
  en: {
    title: "Get in Touch",
    description: "Would you like to send me a message?",
    mailLinkText: "Just send me an email",
    mail: "merwin.m@hotmail.com"

  },
  de: {
    title: "Kontakt aufnehmen",
    description: "Möchten Sie mir eine Nachricht schreiben?",
    mailLinkText: "Schicken Sie mir einfach eine Mail",
    mail: "merwin.m@hotmail.com"
  },
};