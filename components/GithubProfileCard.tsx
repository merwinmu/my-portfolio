import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";  // Import useRouter
import { githubProfileCardContent } from "../portfolio";  // Import the translation content

const GithubProfileCard = () => {
  const { locale } = useRouter();  // Get the current locale (e.g., 'en' or 'de')

  // Get the content based on the current locale
  const content = githubProfileCardContent[locale as keyof typeof githubProfileCardContent];

  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full p-24">
        <div className="space-y-3">
          <h3 className="h3">{content.title}</h3>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {content.description}
            <br />
            <Link
              href={"mailto:"+content.mail}
              className="text-blue-500 hover:underline"
            >
              {content.mailLinkText}{" "}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default GithubProfileCard;
