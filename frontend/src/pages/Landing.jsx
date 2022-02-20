import React from "react";
import { Navbar, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GrBook } from "react-icons/gr";
function Landing() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      height: "100vh",
      padding: "10px",
    },
    btn: {
      background: "#C3CAB4",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "13px",
    },
  };
  return (
    <div className="bg landing" style={styles.container}>
      <Container className="text-white">
        <Row>
          <Col md={8} className="d-flex flex-column justify-content-center">
            <div className="d-flex">
              <h1 className="display-3 text-left text-md-start">
                Welcome to <br />
                <span className="title">Amumu</span>.
              </h1>
              <svg
                width="200"
                height="200"
                viewBox="0 0 138 138"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60.375 60.375H94.875"
                  stroke="white"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M60.375 77.625H94.875"
                  stroke="white"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M112.125 21.5625H25.875C23.4933 21.5625 21.5625 23.4933 21.5625 25.875V112.125C21.5625 114.507 23.4933 116.438 25.875 116.438H112.125C114.507 116.438 116.438 114.507 116.438 112.125V25.875C116.438 23.4933 114.507 21.5625 112.125 21.5625Z"
                  stroke="white"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M43.125 21.5625V116.438"
                  stroke="white"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p className="text-left  w-75" style={{}}>
              Amumu is an intelligent mood tracking AI app that automatically
              detects your mood and suggests the ways to improve your mood.
            </p>
          </Col>
          <Col md={4} className="d-flex flex-column justify-content-center">
            <Link to="/login" className="btn-login">
              Login
            </Link>
            <span className="btn-lead">
              Don’t have an account? <Link to="/signup">Sign up</Link>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Landing;
