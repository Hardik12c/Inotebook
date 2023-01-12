import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const showalert = useOutletContext();
  const postform = async (input) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        { name: input.name, email: input.email, password: input.password }
      );
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      showalert(error.response.data.messg, "danger");
    }
  };
  const [registerinput, setregisterinput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    setregisterinput({ ...registerinput, [e.target.name]: e.target.value });
  };
  const submitform = async (e) => {
    e.preventDefault();
    await postform(registerinput);
    setregisterinput({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <h2 className="my-2">Create an account to use Inotebook</h2>
      <form>
        <div className="form-group my-2">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your Name"
            value={registerinput.name}
            onChange={handlechange}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your Email"
            value={registerinput.email}
            onChange={handlechange}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="exampleInputPassword1"
            placeholder="Password"
            value={registerinput.password}
            onChange={handlechange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={submitform}>
          Submit
        </button>
      </form>
    </div>
  );
}
