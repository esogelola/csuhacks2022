import React from "react";
import { Link } from "react-router-dom";

import useLoginSignUp from "../hooks/useLoginSignUp";
function Login() {
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
              to="/signup"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      <div className="text-center container  mt-5 bg-white shadow-sm">
        <div
          className="form-signin"
          style={{
            width: "100%",
            maxWidth: "330px",
            padding: "15px",
            margin: "0 auto",
          }}
        >
          <img
            className="mb-4"
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt=""
            width="72"
            height="72"
          />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
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
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            onClick={() => setSubmitted(true)}
          >
            Login
          </button>
          <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
