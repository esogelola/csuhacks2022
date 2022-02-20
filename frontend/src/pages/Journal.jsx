import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import useJournal from "../hooks/useJournal";

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
  CircularProgress,
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
    label: "Very",
  },
  {
    value: 100,
    label: "Very Very",
  },
];

const Pill = styled.span`
  color: #fff;
  background: ${(props) => {
    if (props.type === "anger") {
      return "red";
    } else if (props.type === "joy") {
      return "green";
    } else if (props.type === "sadness") {
      return "teal";
    } else if (props.type === "suprise") {
      return "yellow";
    }
  }};
  display: inline-block;
  padding: 0.25em 0.4em;

  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  width: 2rem;
  margin-right: 1rem;
`;

const searchCol = {
  background: "#B8C2BB",
  boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.25)",
  padding: "1rem 3rem",

  transition: "all 0.25s ease-in-out",
};
const detailsCol = {
  background: "#F4F4F4",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "31px",
  padding: "2rem 3rem",

  transition: "all 0.25s ease-in-out",
  margin: "16px",
  height: "1002px",
};
const inputStyle = {
  background: "#FFFFFF",
  borderRadius: "14px",
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

function Journal(props) {
  const [visible, setVisible] = useState(true);
  const {
    journals,
    setSubmitted,
    newJournal,
    setNewJournal,
    addJournal,
    loading,
    setLoading,
  } = useJournal();
  const [clickedJournal, setClickedJournal] = useState(null);

  useEffect(() => {
    setSubmitted(true);
  }, []);

  useEffect(() => {}, [journals]);
  const handleJournalEntryClick = (e, journalData) => {
    setClickedJournal(journalData);
  };
  const toFancy = function (date) {
    var mm = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDate();

    return [
      date.getFullYear(),
      (mm > 9 ? "" : "0") + mm,
      (dd > 9 ? "" : "0") + dd,
    ].join(" ");
  };

  const handleSliderChange = (event, newValue) => {
    setClickedJournal(null);
    setNewJournal({ ...newJournal, productivityRange: newValue });
  };
  const handleTextAreaChange = (e) => {
    setClickedJournal(null);
    setNewJournal({ ...newJournal, dayDescription: e.target.value });
  };

  const hasExercisedRef = useRef();

  return (
    <Container className="h-100" fluid>
      <Row className="h-100">
        <Col md={visible ? 4 : 12} style={searchCol} className="overflow-auto">
          <Form.Control
            size="sm"
            type="text"
            placeholder="Search..."
            style={inputStyle}
            className="mb-5"
          />

          <Row
            className="g-4 fancy-scroll-bar"
            style={{ maxHeight: "900px", overflow: "auto", padding: "6px" }}
          >
            {!journals && <CircularProgress />}
            {journals &&
              journals.map((_, idx) => (
                <Card
                  className="journalCard"
                  onClick={(e) => {
                    handleJournalEntryClick(e, _);
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      {new Date(_.date)
                        .toISOString()
                        .slice(0, 10)
                        .replace(/-/g, " ")}
                    </Card.Title>

                    <Card.Text>{_.dayDescription}</Card.Text>
                    {_.emotionAnalysis.emotions_detected.map((emotion) => {
                      return <Pill type={emotion}></Pill>;
                    })}
                  </Card.Body>
                </Card>
              ))}
          </Row>
          <Button
            onClick={() => {
              setVisible(!visible);
            }}
          >
            {visible ? <span>Close</span> : <span> Open </span>}
          </Button>
        </Col>
        <Col className={visible ? "" : "d-none"} style={detailsCol} md={7}>
          <h2>
            {clickedJournal
              ? toFancy(new Date(clickedJournal.date))
              : newJournal.date}
          </h2>
          <hr />
          <div className="my-4">
            <h3> Were you productive today?</h3>
            <Box>
              <Slider
                defaultValue={0}
                value={
                  clickedJournal
                    ? clickedJournal.productivityRange
                    : newJournal.productivityRange
                }
                aria-label="Small"
                valueLabelDisplay="auto"
                step={null}
                marks={marks}
                onChange={handleSliderChange}
              />
            </Box>
          </div>
          <h3> Have you exercised today?</h3>

          <div className="mb-3 mx-auto">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="No"
                name="radio-buttons-group"
                row
                ref={hasExercisedRef}
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
          <Form.Control
            className="text-black"
            as="textarea"
            rows={10}
            value={
              clickedJournal
                ? clickedJournal.dayDescription
                : newJournal.dayDescription
            }
            onChange={(e) => {
              handleTextAreaChange(e);
            }}
          />

          <Button
            onClick={async () => {
              await addJournal();
            }}
          >
            {!loading && "Save"}
            {loading && <CircularProgress className="text-white" />}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Journal;
