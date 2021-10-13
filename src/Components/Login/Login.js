import React from "react";
import { Form } from "react-bootstrap";
import login from "../../images/login.png";
import "./Login.css";
import email from "../../images/email.png";
import googleimage from "../../images/google-logo.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";

import { Link } from "react-router-dom";
import Button from "@restart/ui/esm/Button";
import useAuth from "../../Hooks/useAuth";

export default function Login() {
  const { googleSignIn, facebookSignIn } = useAuth();

  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center justify-content-evenly flex-wrap gap-3 login-container">
        <div className="w-50">
          <h1 className="text-success font-weight-light text-center my-4">
            Please Login
          </h1>

          <div>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
                <Link to="/register">
                  <Button className="btn btn-danger">Resister</Button>
                </Link>
              </div>
            </Form>
          </div>

          <div className="my-4">
            <p className="text-center text-dark fw-light">Or login by</p>
            <div className="d-flex justify-content-center mx-auto my-4 otherslogin">
              <img src={email} alt="email" />

              <img onClick={googleSignIn} src={googleimage} alt="google" />
              <img onClick={facebookSignIn} src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
            </div>
          </div>
        </div>
        <img src={login} alt="" />
      </div>
    </div>
  );
}
