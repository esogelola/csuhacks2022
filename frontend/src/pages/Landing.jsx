import React from "react";
import { Navbar, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand" href="./index.html">
            <img
              src="https://landkit.goodthemes.co/assets/img/brand.svg"
              className="navbar-brand-img"
              alt="..."
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fe fe-x"></i>
            </button>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <a
                  className="nav-link"
                  id="navbarLandings"
                  href="#"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Landings
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link "
                  id="navbarPages"
                  href="#"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link "
                  id="navbarAccount"
                  data-bs-toggle=""
                  href="#"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Account
                </a>
              </li>
            </ul>

            <Link
              className="navbar-btn btn btn-sm btn-primary lift ms-auto"
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
      <div
        className="pt-4 pt-md-11 bg-white shadow-sm"
        style={{ minHeight: "100vh" }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={7} lg={6}>
              <h1 className="display-3 text-center text-md-start">
                Welcome to <span className="text-primary">Amumu</span>. <br />
                Write it Down.
              </h1>
              <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8">
                Journal your journey, get your feedback and get better.
              </p>
              <div className="text-center text-md-start">
                <a
                  href="overview.html"
                  className="btn btn-primary shadow lift me-1"
                >
                  View all pages{" "}
                  <i className="fe fe-arrow-right d-none d-md-inline ms-3"></i>
                </a>
                <a href="docs/index.html" className="btn btn-primary-soft lift">
                  Documentation
                </a>
              </div>
            </Col>
            <Col md={5} lg={6}>
              <img
                src="https://landkit.goodthemes.co/assets/img/illustrations/illustration-2.png"
                className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate"
                alt="..."
                data-aos="fade-up"
                data-aos-delay="100"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pt-4 pt-md-11 bg-white shadow-sm">
        <Container>
          <h2 className="mb-0">Inspiration</h2>
          <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8">
            Journal your journey, get your feedback and get better.
          </p>
          <p>
            It is no secret that we are facing a mental health crisis,
            exacerbated by the COVID-19 pandemic. Statistics Canada reported a
            20% reduction in youth aged 15-24 reporting excellent or very good
            mental health after the pandemic started, with a particularly heavy
            impact of LGBTQ peoples and visible minorities. In trying and
            distant times, affordable mental health resources have grown
            increasingly difficult to access, creating a challenge for those in
            desperate need of help
          </p>
        </Container>
      </div>
    </div>
  );
}

export default Landing;
