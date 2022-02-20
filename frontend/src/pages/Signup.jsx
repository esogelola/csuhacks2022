import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import useLoginSignUp from "../hooks/useLoginSignUp";
import { Snackbar } from "@mui/material";
function Signup() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
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

  const {
    login,
    setLogin,
    setSubmitted,
    setSignUpUser,
    setLoginUser,
    loginUser,
    signUpUser,
    error,
  } = useLoginSignUp(false);

  const onPasswordChange = (e) => {
    setSignUpUser({ ...signUpUser, password: e.target.value });
  };

  const onUsernameChange = (e) => {
    setSignUpUser({ ...signUpUser, username: e.target.value });
  };

  const onNameChange = (e) => {
    setSignUpUser({ ...signUpUser, name: e.target.value });
  };

  const onEmailChange = (e) => {
    setSignUpUser({ ...signUpUser, email: e.target.value });
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);

  return (
    <div className="bg " id="signup" style={styles.container}>
      <h1 className="bigHeading">Amumu</h1>
      <Container className="text-white glossy">
        <div
          className="form-signin"
          style={{
            width: "100%",
            maxWidth: "500px",
            padding: "15px",
            margin: "0 auto",
          }}
        >
          <div className="heading mb-5">
            <p className="">
              Can't wait to help you on your journey, fill out the form.
            </p>
            <p className="text-danger">{error}</p>
          </div>
          <input
            type="text"
            id="inputEmail"
            className="form-control mb-5"
            placeholder="Name"
            required=""
            autoFocus=""
            onChange={onNameChange}
          />
          <div className="row">
            <div className="col">
              <label htmlFor="inputEmail" className="sr-only">
                username
              </label>
              <input
                type="text"
                id="inputEmail"
                className="form-control"
                placeholder="username"
                required=""
                autoFocus=""
                onChange={onUsernameChange}
              />
            </div>
            <div className="col">
              <label htmlFor="inputPassword" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                required=""
                onChange={onPasswordChange}
              />
            </div>
          </div>

          <input
            type="email"
            id="inputEmail"
            className="form-control mt-5"
            placeholder="email"
            required=""
            autoFocus=""
            onChange={onEmailChange}
          />
          <div className="d-flex flex-column justify-content-center mt-3">
            <button
              className="btn-submit"
              type="submit"
              onClick={() => setSubmitted(true)}
            >
              Sign up
            </button>
            <span className="btn-submit-lead">
              Already have an account? <Link to="/login">Login</Link>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
