import React, { useState, useEffect } from "react";
import { greetings, socialLinks } from "../portfolio";
import Link from "next/link";

const Navigation = () => {



  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex gap-3 justify-end p-4">
        {socialLinks.facebook && (
          <div>
            <Link
              rel="noopener"
              aria-label="Facebook"
              className="nav-link-icon"
              href={socialLinks.facebook}
              target="_blank"
            >
              <i className="fa fa-facebook-square" />
            </Link>
          </div>
        )}
        {socialLinks.instagram && (
          <div>
            <Link
              rel="noopener"
              aria-label="Instagram"
              className="nav-link-icon"
              href={socialLinks.instagram}
              target="_blank"
            >
              <i className="fa fa-instagram" />
            </Link>
          </div>
        )}
        {socialLinks.github && (
          <div>
            <Link
              rel="noopener"
              aria-label="Github"
              className="nav-link-icon"
              href={socialLinks.github}
              target="_blank"
            >
              <i className="fa fa-github" />
            </Link>
          </div>
        )}
        {socialLinks.linkedin && (
          <div>
            <Link
              rel="noopener"
              aria-label="Linkedin"
              className="nav-link-icon"
              href={socialLinks.linkedin}
              target="_blank"
            >
              <i className="fa fa-linkedin" />
            </Link>
          </div>
        )}
        {socialLinks.twitter && (
          <div>
            <Link
              rel="noopener"
              aria-label="Twitter"
              className="nav-link-icon"
              href={socialLinks.twitter}
              target="_blank"
            >
              <i className="fa fa-twitter-square" />
              <span className="nav-link-inner--text d-lg-none ml-2">Twitter</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );

};

export default Navigation;
