export type SEODataType = {
  title: string;
  author?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords: string[];
};

// https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures

export type SocialLinksType = {
  [link: string]: string;
};

// * HERO SECTION

export type GreetingsType = {
  name: string;
  title: string;
  description?: string;
  resumeLink?: string;
  resumeTitle?: string;
  imageUrl: string;
};

// * SKILLS SECTION

type SoftwareSkillType = {
  skillName: string;
  iconifyTag: string;
};

type SkillType = {
  title: string;
  lottieAnimationFile: string;
  lottieheight: number;
  lottiewidth: number;
  skills: React.ReactNode[] | string[];
  softwareSkills: SoftwareSkillType[];
};

export type SkillsSectionType = {
  title: string;
  subTitle: string;
  data: SkillType[];
};

// * PROFICIENCY SECTION

export type SkillBarsType = {
  Stack: string;
  progressPercentage: string;
};

// * EDUCATION SECTION

export type EducationSection = {
  title: string;
  educationTypes: EducationType[]
};

export type EducationType = {
  schoolName: string;
  urlLogo: string;
  subHeader: string;
  duration: string;
  projectTitle: string;
  project: string;
};

// * EXPERIENCE SECTION

export type ExperienceSection = {
  title: string;
  experienceType: ExperienceType[]
};

export type ExperienceType = {
  role: string;
  company: string;
  companyLogo: string;
  duration: string;
  desc: string;
  descBullets: string[];
};

// * PROJECT SECTION

export type ProjectType = {
  name: string;
  desc: string;
  duration: string;
  github?: string;
  link?: string;
  imageUrl?: string;
  videoUrl?: string;
};

// * FEEDBACK SECTION

export type FeedbackType = {
  name: string;
  role: string;
  feedback: string;
};
