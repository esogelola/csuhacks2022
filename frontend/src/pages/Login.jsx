import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import useLoginSignUp from "../hooks/useLoginSignUp";
function Login() {
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
  } = useLoginSignUp(true);

  const onPasswordChange = (e) => {
    setLoginUser({ ...loginUser, password: e.target.value });
  };

  const onUsernameChange = (e) => {
    setLoginUser({ ...loginUser, username: e.target.value });
  };

  return (
    <div className="bg " id="login" style={styles.container}>
      <h1 className="bigHeading">Amumu</h1>
      <Container className="text-white glossy">
        <div
          className="form-signin"
          style={{
            width: "100%",
            maxWidth: "330px",
            padding: "15px",
            margin: "0 auto",
          }}
        >
          <div className="heading">
            <p className="">Sign in to your account below.</p>
          </div>
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

          <div className="d-flex flex-column justify-content-center mt-3">
            <button
              className="btn-submit"
              type="submit"
              onClick={() => setSubmitted(true)}
            >
              Login
            </button>
            <span className="btn-submit-lead">
              Don’t have an account? <Link to="/signup">Sign up</Link>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
