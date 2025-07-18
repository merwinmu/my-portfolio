import React from "react";
import EducationCard from "../components/EducationCard";
import { educationSection, experienceSection } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import { useRouter } from "next/router"; // Import useRouter
import ExperienceCard from "../components/ExperienceCard";

const Career = () => {
  const { locale } = useRouter(); // Get the current locale (e.g., 'en' or 'de')
  const localizedExperience = experienceSection[locale as keyof typeof experienceSection]; // Select the experience section for the current locale
  const localizedEducation = educationSection[locale as keyof typeof educationSection]; // Select the experience section for the current locale

  return (
      <section className="">

        <Container className="flex flex-col">
          <div>
          <h2 className="h2 text-center pb-4 font-bold">{localizedExperience.title}</h2>

            {localizedExperience.experienceType.map(info => {
              return (
                <div>
                  <ol className="flex justify-center" key={info.company}>
                    <ExperienceCard {...info} />
                  </ol>
                </div>

              );
            })}
          </div>
          <div className="py-8">
          <h2 className="h2 text-center pb-4 font-bold">{localizedEducation.title}</h2>

            {localizedEducation.educationTypes.map(info => {
              return (
                <div>
                  <ol className="flex justify-center" key={info.schoolName}>
                    <EducationCard {...info} />
                  </ol>
                </div>

              );
            })}
          </div>
        </Container>
      </section>

  );
};

export default Career;
