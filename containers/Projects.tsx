import React from "react";
import { projects } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";

const Projects = () => {
  return (
      <div >
        
        <div className="text-center">
          <h2 className="h2 text-center pb-4">Meine Projekte</h2>
        </div>

        {/* Tailwind CSS grid layout */}
        <Container >
          <Row>
            {projects.map((data, i) => (
              <Col key={i} md="6" lg="6" className="mb-4 ">
              <ProjectsCard key={i} {...data} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  )

};

export default Projects;
