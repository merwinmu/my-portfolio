import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { SkillsSection } from "../portfolio";

const Skills = () => {
  const { locale } = useRouter(); // Get the current locale (e.g., 'en' or 'de')

  const localizedSkills = SkillsSection[locale as keyof typeof SkillsSection]; // Select the localized skills section

  return (
    localizedSkills && (
      <Container className="text-center pb-8">
        <h3 className="h3 pb-4">{localizedSkills.title}</h3>
        {localizedSkills.data.map((section, index) => {
          return (
            <Row className="" key={index}>
              <Col lg="6" className="order-1 order-lg-1">
                <DisplayLottie height={section.lottieheight} width={section.lottiewidth} animationPath={section.lottieAnimationFile} />
              </Col>
              <Col lg="6" className="order-1 order-lg-2  d-flex justify-content-center flex-column text-center">
                <h5 className="h5 mb-2">{section.title}</h5>
                <div className="d-flex justify-content-center flex-wrap mb-2">
                  {section.softwareSkills.map((skill, i) => {
                    return (
                      <Fragment key={i}>
                        <div
                          className="icon icon-lg icon-shape shadow-sm rounded-circle m-1 bg-white"
                          id={skill.skillName.replace(/\s/g, "")}
                        >
                          <Icon icon={skill.iconifyTag} data-inline="false"></Icon>
                        </div>
                        <UncontrolledTooltip delay={0} placement="bottom" target={skill.skillName.replace(/\s/g, "")}>
                          {skill.skillName}
                        </UncontrolledTooltip>
                      </Fragment>
                    );
                  })}
                </div>
                <div className="text-left">
                  {section.skills.map((skill, i) => {
                    return (
                      <div key={i}>
                        <p>{skill}</p>
                        {i < section.skills.length - 1 && (
                          <>
                            <br />
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </Col>
            </Row>
          );
        })}
      </Container>
    )
  );
};

export default Skills;
