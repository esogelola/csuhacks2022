import React, { useState } from "react";
import styled from "styled-components";

import { Card, Row, Col, Container, Form } from "react-bootstrap";

function Recommendations(props) {
  const [visible, setVisible] = useState(true);


  const searchCol = {
    background: "#8AA9A1",
    boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.25)",
    padding: "1rem 3rem",

    transition: "all 0.25s ease-in-out",
  };
  const detailsCol = {
    background: "#F4F4F4",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "31px",
    padding: "2rem 3rem",
    fontFamily:"Libre Baskerville", 

    transition: "all 0.25s ease-in-out",
    margin: "16px",
    height: "1002px",
  };
  const inputStyle = {
    background: "#FFFFFF",
    borderRadius: "14px",
    fontFamily: "Libre Baskerville",
    fontSize : "25px",
  };

  const cardStyle = {
    background: "#FCFAF4",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "19px",
  };
  return (
    <Container className="h-100" fluid>
      <Row className="h-100">
        <Col md={visible ? 3 : 12} style={searchCol} className="overflow-auto">
          <Form.Control
            size="sm"
            type="text"
            placeholder="Search..."
            style={inputStyle}
            className="mb-5"
          />
          <Row
            className="g-4 "
            style={{ maxHeight: "900px", overflow: "auto" }}
          >
            {Array.from({ length: 5 }).map((_, idx) => (
              <Card style={cardStyle}>
                <Card.Body>
                  <Card.Title>February 02, 2022</Card.Title>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Col>
        <Col className={visible ? "" : "d-none"} style={detailsCol} md={7}>
          <h2>February 02, 2022</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Recommendations;
