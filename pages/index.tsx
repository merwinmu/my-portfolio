import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import { greetings } from "../portfolio";
import { GreetingsType } from "../types/sections"; // Import the GreetingsType
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Career = dynamic(() => import("../containers/Career"));
const Projects = dynamic(() => import("../containers/Projects"));
const Footer = dynamic(() => import("../components/Footer"));
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import { GithubUserType } from "../types";

export default function Home({ githubProfileData }: { githubProfileData: any }) {
  const { locale } = useRouter();  // Get current language locale (e.g., 'en' or 'de')

  const selectedGreetings: GreetingsType = greetings[locale as keyof typeof greetings];


  return (

<div className="min-h-screen bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] ">
  <Navigation />
  <SEO />
  <Greetings />
  <Skills />
  <Career />
  <Projects />
  <Footer {...githubProfileData} />
</div>

  );
}

// Home.prototype = {
//   githubProfileData: PropTypes.object.isRequired,
// };

export async function getStaticProps() {
  const githubProfileData: GithubUserType = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then(res => res.json());

  return {
    props: { githubProfileData },
  };
}
