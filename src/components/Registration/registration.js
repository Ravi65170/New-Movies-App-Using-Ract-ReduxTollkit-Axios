import React from "react";

import "./registration.scss";

const registration = () => {
  return (
    <div className="Container">
      <form>
        <h2>Create an account</h2>

        <label htmlFor="Your Email"> Email:</label>

        <input
          id="form2"
          type="email"
          placeholder="Enter-valid-Email"
          className="box"
        />

        <label htmlFor="Your Password"> Password:</label>
        <input
          id="form3"
          type="password"
          placeholder="Enter-valid-Password"
          className="box"
        />

        <button className="btn-l">Log-In</button>
        <button className="btn-r">Register</button>
      </form>
    </div>
  );
};

export default registration;
