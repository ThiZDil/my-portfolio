import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import suicide from "../../Assets/Projects/suicide.png";
import output from "../../Assets/Projects/output.png";
import goglobe from "../../Assets/Projects/goglobe.png";
import sentimantAnalysis from "../../Assets/Projects/sentimantAnalysis.jpg";
import Bus_Reservation from "../../Assets/Projects/Bus_Reservation.png"
import bubble from "../../Assets/Projects/bubble.png"
import edufun from "../../Assets/Projects/edufun.jpg"
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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={output}
              isBlog={false}
              title="Resume Screening"
              description="This system helps HR managers to upload several CV’s and their Job description. The system will give a matching score. Developed using Python. Used BERT framework."
              ghLink="https://github.com/ThiZDil/Research_Model"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goglobe}
              isBlog={false}
              title="GoGlobe Travel Guide"
              description="Travel planning application that will provide the easy way to plan a trip to travelers. Technologies- PHP, mySQL."
              ghLink="https://github.com/ThiZDil/GoGlobe-Travel/tree/main/GoGlobeTravele"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentimantAnalysis}
              isBlog={false}
              title="Twtiter Sentiment Analysis"
              description="A system that can accurately categorize social media posts into positive, negative, or neutral sentiments. A working prototype of a sentiment analysis system that can be used by businesses, researchers, or individuals."
              ghLink="https://github.com/ThiZDil/Sentiment-Analysis"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bus_Reservation}
              isBlog={false}
              title="Bus Reservation System"
              description="Online Bus Ticket Reservation System is a Web based application that works within a centralized network. This project presents a review on the software program “Online Bus Ticket Reservation System” as should be used in a bus transportation system, a facility which is used to reserve seats, cancellation of reservation and different types of route enquiries used on securing quick reservations."
              ghLink="https://github.com/ThiZDil/BusReservation-Project"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bubble}
              isBlog={false}
              title="Mini Game Project"
              description="This is a single player game which has 2 levels. Bubbles keep falling randomly, and you need to shoot the bubbles to score. For each bubble attack, you get 10 marks. After you score 100 marks, the 1st level is completed. Then you can move to level 2 as your preference. In the 2nd level, there is no time limit, so you can score marks until you lose all your lives. At the beginning of level 1, you are given 3 lives (represented as hearts   ) and in level 2, 4 lives. For each life, you get 5 energy levels. When bubbles fall on to the shooter, you lose energy levels one by one. When all three lives are over, you lose the game."
              ghLink="https://github.com/ThiZDil/miniGame"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edufun}
              isBlog={false}
              title="Education + Entertainment applicication for Kids"
              description="Mobile application that will give education + entertainment experience for kids, Technologies- java,firebase."
              ghLink="https://github.com/ThiZDil/edufun"
               
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
