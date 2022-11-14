import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div id="pageContent">
        <div class="d-flex align-items-center h-100">
          <div class="container">
            <div class="row">
              <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-xs-12 ms-auto">
                <div class="bg-white rounded shadow-lg">
                  <h1 class="text-center h5 pt-5 pb-3">
                    <strong>LOGIN</strong>
                  </h1>
                  <form class="py-2">
                    <div class="position-relative maxWidth320 px-2">
                      <div class="inlineLogo">
                        <i class="text-accent fas fa-at"></i>
                      </div>
                      <input
                        type="email"
                        placeholder="Email ID"
                        class="border-0  w-100"
                      />
                    </div>
                    <div class="position-relative maxWidth320 px-2 d-flex align-items-end justify-content-between">
                      <div>
                        <div class="inlineLogo">
                          <i class="text-accent fas fa-key"></i>
                        </div>
                        <input
                          type="password"
                          placeholder="Password"
                          class="border-0  w-100"
                        />
                      </div>
                      <div>
                        <button class="btn text-accent">Forgot?</button>
                      </div>
                    </div>
                    <div id="submitBtn" class="text-center">
                      <button class="btn w-50 btn-lg shadow-sm rounded-pill">
                        Login
                      </button>
                    </div>
                  </form>
                  <div class="text-center pb-4">
                    Don't have an account?
                    <NavLink to="/signup">SignUp</NavLink>
                  </div>
                </div>
                <div class="p-2 mx-2 rounded-bottom shadow bg-accent border-bottom border-dark"></div>
                <div class="p-1 mx-3 rounded-bottom shadow bg-accent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
