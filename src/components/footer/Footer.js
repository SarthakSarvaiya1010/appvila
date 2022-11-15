import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
import { white } from "../../assets/images";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg={4}>
            <div>
              <div>
                <img src={white} alt="white" className="footerImg" />
              </div>
              <div>
                <p>
                  Making the world a better place through constructing elegant
                  hierarchies.
                </p>
              </div>
              <div className="social">
                <a href="javascript(0)">
                  <FaFacebookF />{" "}
                </a>
                <a href="javascript(0)">
                  {" "}
                  <FaTwitter />
                </a>
                <a href="javascript(0)">
                  {" "}
                  <FaInstagram />{" "}
                </a>
                <a href="javascript(0)">
                  {" "}
                  <FaLinkedin />
                </a>
                <a href="javascript(0)">
                  <FaYoutube />
                </a>
                <a href="javascript(0)">
                  <FaPinterest />
                </a>
              </div>
              <div>
                <p>
                  Designed and Developed by
                  <a href="https://www.w3schools.com/default.asp"> UIdeck </a>
                </p>
              </div>
            </div>
          </Col>

          <Col lg={8}>
            <Row>
              <Col lg={3} md={6}>
                <div>
                  <h3>Solutions</h3>
                  <ul>
                    <li>
                      <a href="javascpirt:video(0)">Marketing</a>
                    </li>
                    <li>
                      <a href="javascpirt:video(0)">Analytics</a>
                    </li>
                    <li>
                      <a href="javascpirt:video(0)">Commerce</a>
                    </li>
                    <li>
                      <a href="javascpirt:video(0)">Insights</a>
                    </li>
                    <li>
                      <a href="javascpirt:video(0)">Promotion</a>v
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={6}>
                <div>
                  <h3>Support</h3>
                  <ul>
                    <li>
                      <a href="javascpirt:video(0)">Pricing</a>
                    </li>
                    <li>
                      <a href="javascpirt:video(0)">Documentation</a>
                    </li>
                    <li>
                      <a href="javascpirt:video(0)">Guides</a>
                    </li>
                    <li>
                      <a href="javascpirt:video(0)">API Status</a>
                    </li>
                    <li>
                      <a href="javascpirt:video(0)">Live Support</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={6}>
                <div>
                  <h3>Company</h3>
                  <ul>
                    <li>
                      <a href="javascpirt:video(0)">About Us</a>
                    </li>
                    <li>
                      <a href="javascpirt:video(0)">Our Blog</a>
                    </li>
                    <li>
                      <a href="javascpirt:video(0)">Jobs</a>
                    </li>
                    <li>
                      <a href="javascpirt:video(0)">Press</a>
                    </li>
                    <li>
                      <a href="javascpirt:video(0)">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={6}>
                <div>
                  <h3>Legal</h3>
                  <ul>
                    <li>
                      <a href="javascpirt:video(0)">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="javascpirt:video(0)">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="javascpirt:video(0)">Catering Services</a>
                    </li>
                    <li>
                      <a href="javascpirt:video(0)">Customer Relations</a>
                    </li>
                    <li>
                      <a href="javascpirt:video(0)">Innovation</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
