import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please fill the details carefully");
    } else {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      // console.log(data.token);
      const jwttoken = data.token;
      localStorage.setItem("JSONWebToken", jwttoken);
      if (res.status === 200) {
        window.alert("Login Successful");
        navigate("/");
      } else if (res.status === 404) {
        window.alert("User not found, please Signup");
      } else {
        window.alert("Login Failed, Try again");
      }
    }
  };
  return (
    <div>
      <div id="pageContent">
        <div className="d-flex align-items-center h-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-xs-12 ms-auto">
                <div className="bg-white rounded shadow-lg">
                  <h1 className="text-center h5 pt-5 pb-3">
                    <strong>LOGIN</strong>
                  </h1>
                  <form className="py-2">
                    <div className="position-relative maxWidth320 px-2">
                      <div className="inlineLogo">
                        <i className="text-accent fas fa-at"></i>
                      </div>
                      <input
                        type="email"
                        placeholder="Email ID"
                        className="border-0  w-100"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="position-relative maxWidth320 px-2 d-flex align-items-end justify-content-between">
                      <div>
                        <div className="inlineLogo">
                          <i className="text-accent fas fa-key"></i>
                        </div>
                        <input
                          type="password"
                          placeholder="Password"
                          className="border-0  w-100"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div>
                        <button className="btn text-accent">Forgot?</button>
                      </div>
                    </div>
                    <div id="submitBtn" className="text-center">
                      <button
                        className="btn w-50 btn-lg shadow-sm rounded-pill"
                        onClick={login}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  <div className="text-center pb-4">
                    Don't have an account?
                    <NavLink to="/signup">SignUp</NavLink>
                  </div>
                </div>
                <div className="p-2 mx-2 rounded-bottom shadow bg-accent border-bottom border-dark"></div>
                <div className="p-1 mx-3 rounded-bottom shadow bg-accent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
