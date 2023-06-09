import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const [show, setShow] = useState(false);
  const { signIn } = useContext(AuthContext);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User logged In successfully");
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setSuccess("");
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSignIn} className="form">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder="Your password"
            required
          />
          <p onClick={() => setShow(!show)}>
            <small>
              {show ? <span>Hide password</span> : <span>Show password</span>}
            </small>
          </p>
        </div>
        <h4 className="success-text">{success}</h4>
        <h4 className="error-text">{error}</h4>
        <button className="">Login</button>
        <p className="toggle-paragraph">
          <small>
            New to Ema-john?
            <Link className="toggle-link" to="/signup">
              Create New Account
            </Link>
          </small>
        </p>
        <div className="container">
          <div className="line"></div>
          <p className="text">or</p>
          <div className="line"></div>
        </div>
      </form>
    </div>
  );
};

export default Login;
