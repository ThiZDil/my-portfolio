import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Thisara Dilshan </span>
            from <span className="purple"> Nugegoda, Sri Lanka.</span>
            <br />
            I am currently employed as a Associate Software Engineer at Trivow Business Solutions.
            <br />
            I have completed Integrated BSc in IT at University of Kelaniya with a First class Honours(3.76/4.00 GPA).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness and Sports
            </li>
          </ul>

          <p>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Thisara</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
