import React, { useState } from "react";
import styled from "styled-components";

import { Card, Row, Col, Container, Form } from "react-bootstrap";
import {
  Slider,
  Box,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  List,
} from "@mui/material";
const marks = [
  {
    value: 0,
    label: "Not Very",
  },
  {
    value: 25,
    label: "Kinda",
  },
  {
    value: 50,
    label: "Neutral",
  },
  {
    value: 75,
    label: "Pretty",
  },
  {
    value: 100,
    label: "Very",
  },
];

function Journal(props) {
  const [visible, setVisible] = useState(true);

  const Pill = styled.span`
    color: #fff;
    background-color: #dc3545;
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    width: 2rem;
  `;

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

  const Button = styled.button`
    background: #565f56;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 13px;

    color: #fff;
    border: none;
    padding: 1rem;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    margin-top: 1rem;
    margin-left: auto;
    span {
      font-family: Libre Baskerville;
      font-style: normal;
      font-weight: normal;
      font-size: 25px;
      line-height: 31px;
    }
    &:hover {
      cursor: pointer;
    }

    &:hover {
      background: #474747;
    }
  `;

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

                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </Card.Text>
                  <Pill></Pill>
                </Card.Body>
              </Card>
            ))}
          </Row>
          <Button>
            <span> + Add New Note</span>
          </Button>
        </Col>
        <Col className={visible ? "" : "d-none"} style={detailsCol} md={7}>
          <h2>February 02, 2022</h2>
          <hr />
          <div className="my-4">
            <h3> Were you productive today?</h3>
            <Box>
              <Slider
                defaultValue={0}
                aria-label="Small"
                valueLabelDisplay="auto"
                step={null}
                marks={marks}
              />
            </Box>
          </div>
          <h3> Have you exercised today?</h3>

          <div className="mb-3 mx-auto">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                row
              >
                <FormControlLabel
                  value="Yes"
                  control={
                    <Radio
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: "50px",
                        },
                      }}
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  value="No"
                  control={
                    <Radio
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: "50px",
                        },
                      }}
                    />
                  }
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <hr />
          <h3>How was your day?</h3>
          <Form.Control as="textarea" rows={10} />

          <Button>Save</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Journal;
