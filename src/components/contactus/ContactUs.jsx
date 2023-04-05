import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../content_option"
import image from './OIP.jpg';
import './ContactUs.css';
export default function ContactUs() {
  

  return (
    <Container>
      <div className="aboutflex">
        <div>
          <Row className="mb-5 mt-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">About Us</h1>
              <hr className="t_border my-4 ml-0 text-left" />
              <p>
                {" "}
                Welcome to our website, which serves as a comprehensive
                portfolio showcasing the members of Team Musketeers. Our team
                comprises individuals who work together to learn and
                collaborate, and have devoted considerable effort to presenting
                their skills through this remarkable portfolio. In essence, our
                mission is to share the story of Team Musketeers' journey and
                highlight our collective achievements, skills etc.., while also
                providing visitors with convenient ways to connect with us.
              </p>
            </Col>
          </Row>
        </div>
        <div className="image_musketeers">
          <img src={image} alt="ima " width="400" />
        </div>
      </div>
      <Row className="mb-5 mt-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Contact Us</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h3 className="color_sec py-4">Details</h3>
          <address>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
              {contactConfig.YOUR_EMAIL}
            </a>
            <br />
            <br />
            {contactConfig.hasOwnProperty("YOUR_FONE") ? (
              <p>
                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
              </p>
            ) : (
              ""
            )}
          </address>
          <p>{contactConfig.description}</p>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <form className="contact__form w-100">
            <Row>
              <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  required
                />
              </Col>
              <Col lg="6" className="form-group">
                <input
                  className="form-control rounded-0"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
              </Col>
            </Row>
            <textarea
              className="form-control rounded-0"
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
              required
            ></textarea>
            <br />
            <Row>
              <Col lg="12" className="form-group">
                <button className="btn ac_btn" type="submit">
                  Send
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
      <h5>
        <center>
          Thank you for taking the time to visit our Contact Us page. We look
          forward to hearing from you soon!
        </center>
      </h5>
    </Container>
  );
}