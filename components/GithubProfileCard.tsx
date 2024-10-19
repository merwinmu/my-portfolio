import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { GithubUserType } from "../types";
import SocialLinks from "./SocialLinks";
import Link from "next/link";

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <div className="space-y-3">
          
          <h3 className="h3">
             Kontakt aufnehmen
          </h3>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Möchten Sie mir eine Nachricht schreiben? <br></br>
            <Link
              href="mailto:merwin.m@hotmail.com"
              className="text-blue-500 hover:underline"
            >
              Schicken Sie mir einfach eine Mail{" "}
            </Link>{" "}
           
          </p>
        </div>
      </div>
    </section>
  );
};

export default GithubProfileCard;
