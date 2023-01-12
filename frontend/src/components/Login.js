import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
export default function Login() {
  const navigate=useNavigate();

  const postform = async (email,password) => {
    try {
      const {data} = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        { email: email, password: password }
      );
      localStorage.setItem('token',data.token);
      navigate('/');
    } catch (error) {
      showalert(error.response.data.messg, "danger");
    }
  };

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleinput = (e) => {
    setemail(e.target.value);
  };
  const handlepassword = (e) => {
    setpassword(e.target.value);
  };
  const submitform=(e)=>{
    e.preventDefault();
    postform(email,password);
    setemail("");
    setpassword("");
  }
  return (
    <div className="container">
      <form>
        <div className="form-group my-2">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={handleinput}
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
            value={password}
            onChange={handlepassword}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={submitform}>
          Submit
        </button>
      </form>
    </div>
  );
}
