import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";  // Import useRouter
import { githubProfileCardContent } from "../portfolio";  // Import the translation content

const Footer = () => {
  const { locale } = useRouter();  // Get the current locale (e.g., 'en' or 'de')

  // Get the content based on the current locale
  const content = githubProfileCardContent[locale as keyof typeof githubProfileCardContent];

  return (
    <section id="contact">
      <div className="flex  gap-4 px-4 justify-between md:px-6 w-full p-24 max-w-5xl mx-auto">
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
        <div>
          <a href="https://credentials.uipath.com/516ff2f9-c94b-49c0-b14e-4fbaf6b3b53c#acc.jE2itb5v">
          <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/155439527" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
