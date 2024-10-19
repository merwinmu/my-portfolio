import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
  EducationSection,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Merwin Mudavamkunnel",
  title: "Merwin Mudavamkunnel",
  description:
    "Ich bin ein leidenschaftlicher Software Entwickler mit umfangreicher Erfahrung in der Entwicklung von Webanwendungen unter Einsatz von Python, Django, React.js und Cloud-Technologien. Meine Begeisterung für neue Technologien motiviert mich, diese kontinuierlich zu erlernen und in meine Projekte zu integrieren. Als selbstmotivierter und engagierter Entwickler arbeite ich gerne im Team und nehme Herausforderungen an. Zudem habe ich Erfahrung als RPA-Entwickler sowie in der Mixed Reality-Entwicklung mit Unity",
  resumeLink: "/pdf/test_cv.pdf",
  imageUrl: "https://media.licdn.com/dms/image/v2/D4E03AQELxvdKuu8TIQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729179967364?e=1734566400&v=beta&t=dvDx7U-1L_Ck6kQXYoIvBhni1JZmOWMU5xD0RovFJ04"
};

export const openSource = {
  githubUserName: "merwinmu",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:merwin.m@hotmail.com",
  linkedin: "https://www.linkedin.com/in/1hanzla100/",
  github: "https://github.com/merwinmu",
  instagram: "https://www.instagram.com/merwingee",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const SkillsSection: SkillsSectionType = {
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
        "Entwickeln von RPA Robotern (inkl. Prozessanalyse, Konzeptionierung, Programmierung,Dokumentation und Go-Live in enger Zusammenarbeit mit dem Business) in verschiedenen Migros Unternehmen und Abteilungen",
        "DevOps Integration: Pipeline UiPath, .NET 8 (C# 12) self-contained Build mit Visual Studio Code, UiPath unattended build",
        "Arbeiten nach SCRUM im BPA Team",
        "Eingesetzte Tools: UiPath, Office O365, SAP, Jira, .NET 8 (C# 12), Visual Studio Code, Azure Eventhub"
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

export const educationSection: EducationSection =
{
  title: "Ausbildung",
  educationTypes: [
    {
      schoolName: "Universität Basel",
      subHeader: "Master of Science in Computer Science",
      duration: "September 2022 - April 2024",
      urlLogo: "https://www.unibas.ch/dam/jcr:93abfa0e-58d6-45ed-930a-de414ca40b13/uni-basel-logo.svg",
      projectTitle: "Master Arbeit",
      project: "Automated Testing of Website Functionality"
    },
    {
      schoolName: "Universität Basel",
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2017 - April 2021",
      urlLogo: "https://www.unibas.ch/dam/jcr:93abfa0e-58d6-45ed-930a-de414ca40b13/uni-basel-logo.svg",
      projectTitle: "Bachelor Arbeit",
      project: "Historic Image Presentation in MixedReality using HoloLens"
    }
  ]
}



export const experienceSection: ExperienceType[] = [
  {
    role: "Full Stack Engineer und Inhaber",
    company: "michmieten.ch gmbh",
    companyLogo: "https://www.michmieten.ch/Images/Header/Logo.png",
    duration: "Feb 2022 - Aktuell",
    desc:"dsf",
    descBullets: ["Backend Development: Python (Django), PostgreSQL, Redis, Docker", "Frontend Development: React, NextJS, Tailwind, CSS", "Github CI/CD, Docker Deployment", "NGINX, Linux Server Configuration"]
  },
  {
    role: "Robotic Process Engineer",
    company: "Migros Genossenschaftsbund",
    companyLogo: "https://www.itjobs.ch/media/filer_public/ce/0d/ce0d79a2-debc-477f-97d3-c8cc1a8d6d1d/mgb_logo.png",
    duration: "Aug 2021 - Aug 2024",
    desc: "Entwicklung von Prozessautomatisierten Bots",
    descBullets: ["Processautomation C# , .NET 8 , UiPath", "Gitlab CI/CD Implementation", "DevOps Integration", "Scrum, Jira, Azure Eventhub Usage"]

  },
  {
    role: "Research Assistant Economic Psychology",
    company: "Universität Basel",
    companyLogo: "https://www.unibas.ch/dam/jcr:93abfa0e-58d6-45ed-930a-de414ca40b13/uni-basel-logo.svg",
    duration: "Aug 2019 - Jun 2023",
    desc: "Durchführung von statistischen Auswertungen und Datenanalysen mit Python und R zur Unterstützung wirtschaftspsychologischer Forschung.",
    descBullets: ["Statistical evaluation Python and R", "Data analysis"]

  },
  {
    role: "Intranet Entwickler",
    company: "Baloise Versicherung",
    companyLogo: "https://lobbymap.org/site//data/001/361/1361315.png",
    duration: "Oktober 2018 - März 2019",
    desc: "Intranet Entwickler",
    descBullets: ["Developing Intranet using Sharepoint", "Coordination and communication with national subsidiaries","Kanban and Jira"]

  },
];

export const projects: ProjectType[] = [
  {
    name: "michmieten.ch",
    desc: "michmieten.ch ist ein innovatives Online-Portal, auf dem Fahrzeuge für jedermann zur Miete angeboten werden. Die Plattform ermöglicht es Nutzern, schnell und einfach Fahrzeuge zu finden und zu mieten. Dank des integrierten Buchungstools können Mietvorgänge bequem online abgewickelt werden. Egal ob Privatpersonen oder Unternehmen michmieten.ch bietet eine benutzerfreundliche Lösung für alle, die ein Fahrzeug benötigen, und garantiert eine reibungslose Mietabwicklung",
    link: "michmieten.ch",
    duration: "2022",
    videoUrl: "video/michmieten_video.mp4"
  },
  {
    name: "michliefern.ch",
    desc: "michliefern.ch ist eine Plattform für Kuriere und Logistik, auf der Kunden den Start- und Zielort angeben können, und der Preis automatisch kalkuliert wird. Die Website bietet eine effiziente Lösung für den Transport und die Zustellung von Waren.",
    github: "https://github.com/merwinmu/michliefern-nextjs",
    link: "michliefern.ch",
    duration: "2024",
    videoUrl: "video/michliefern_video.mp4"

  },
  {
    name: "GoFind MR",
    desc: "Die GoFind! Anwendung ist ein Prototyp, der es Nutzern ermöglicht, historische multimediale Sammlungen an ihrem realen Standort mithilfe von Augmented Reality und Multimedia-Retrieval-Technologien zu visualisieren. Die Anwendung zielt hauptsächlich auf Smartphones mit Android ab, da sie von Googles AR Core Framework profitiert, das zur Entwicklung von AR-Erlebnissen verwendet wird.",
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
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Merwin Mudavamkunnel",
  description: greetings.description,
  author: "Merwin Mudavamkunnel",
  image: "https://avatars.githubusercontent.com/u/43412175?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
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
