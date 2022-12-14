import React from "react";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = React.useState("usman.akram@gmail.com");
  const [password, setPassword] = React.useState("usman");
  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <b>Email: </b>{" "}
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <b>Password: </b>{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button
        onClick={(e) => {
          axios
            .post("http://localhost:2000/api/auth", { email, password })
            .then((res) => {
              console.log(res.data);
              localStorage.setItem("token", res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
