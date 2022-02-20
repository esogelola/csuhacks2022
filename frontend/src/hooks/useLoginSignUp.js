import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../contexts/GlobalContext";
import { useHistory } from "react-router-dom";
const useLoginSignUp = (isLogin) => {
  const history = useHistory();
  const [login, setLogin] = useState(isLogin);
  const [submitted, setSubmitted] = useState(false);
  const [signUpUser, setSignUpUser] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
  });

  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });

  const { setIsLoggedIn, setToken, setUsername } = useContext(GlobalContext);

  const handleLogin = (token, username) => {
    setIsLoggedIn(true);
    setToken(token);
    setSubmitted(false);
    setUsername(username);
    history.push("/journals");
  };

  useEffect(() => {
    if (isLogin && submitted) {
      axios.post("http://localhost:8080/user/login", loginUser).then((res) => {
        handleLogin(res.data.data.token, loginUser.username);
      });
    } else if (submitted) {
      axios
        .post("http://localhost:8080/user/register", signUpUser)
        .then((res) => {
          axios
            .post("https://localhost:8080/user/login", {
              username: signUpUser.username,
              password: signUpUser.password,
            })
            .then((res) => {
              handleLogin(res.data.data.token, signUpUser.username);
            });
        });
    }
  }, [submitted]);

  return {
    login,
    setLogin,
    setSubmitted,
    setSignUpUser,
    setLoginUser,
    loginUser,
    signUpUser,
  };
};

export default useLoginSignUp;
