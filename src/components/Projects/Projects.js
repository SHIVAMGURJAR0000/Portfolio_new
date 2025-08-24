import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import codeReview from "../../Assets/Projects/codeReview2.png";
import kissanSetu from "../../Assets/Projects/kissan.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "start", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kissanSetu}
              isBlog={false}
              title="Kissan Setu"
              description="Kissan Setu is a digital marketplace designed to connect farmers directly with consumers and retailers, eliminating middlemen and ensuring better prices for farmers. The platform provides a transparent and secure ecosystem where farmers can showcase their produce, negotiate deals, and manage transactions seamlessly."
              ghLink="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeReview}
              isBlog={false}
              title="Code Reviewer"
              description="AI Code Reviewer is a web application that enables users to submit their code and receive AI-generated reviews instantly. The platform is built using React, Node.js, Express, MySQL, and Prisma ORM, providing a seamless and secure environment. leveraging AI powered by the Google Gemini Flash 2.0 API to get intelligent feedback and suggestions."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
