import React from "react";
import { useRouter } from "next/router";  // Import useRouter
import { experienceSection } from "../portfolio";  // Import the multilingual experience data
import { Container, Row } from "reactstrap";
import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
  const { locale } = useRouter();  // Get the current locale (e.g., 'en' or 'de')
  
  const localizedExperience = experienceSection[locale as keyof typeof experienceSection];  // Select the localized experience section

  return (
    localizedExperience && (
      <section className="section section-lg">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-briefcase-24 text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">{localizedExperience.title}</h4> {/* Render the title based on the locale */}
            </div>
          </div>
          <Row className="row-grid align-items-start">
            {localizedExperience.experienceType.map((data, i) => {
              return <ExperienceCard key={i} {...data} />;
            })}
          </Row>
        </Container>
      </section>
    )
  );
};

export default Experience;
