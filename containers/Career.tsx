import React from "react";
import EducationCard from "../components/EducationCard";
import { educationSection, experienceSection } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import ExperienceCard from "../components/ExperienceCard";

const Career = () => {
  return (
      <section className="">

        <Container className="flex flex-col">
          <div>
          <h2 className="h2 text-center pb-4">{educationSection.title}</h2>

            {experienceSection.map(info => {
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
          <h2 className="h2 text-center pb-4">{educationSection.title}</h2>

            {educationSection.educationTypes.map(info => {
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
