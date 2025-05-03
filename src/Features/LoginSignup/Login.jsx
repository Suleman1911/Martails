import React, { useEffect, useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword((prev) => !prev);
  };

  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };




  const hadleSignIn = () => {
    if (email === "" || password === "") {
      toast.error("please enter the details");
    } else {
      const getDetails = JSON.parse(localStorage.getItem("users")) || [];

      const userFound = getDetails.find((curValue) =>
        curValue.email === email && curValue.password === password
      );

      if (userFound) {
        localStorage.setItem('logedInUser',JSON.stringify(userFound))
        toast.success("login successfully!");
        setTimeout(() => {
          navigate("/home");
        }, 1500);
      } else {
        toast.error("Invalid Email or password!", {
          duration: 3000,
        });

      }
    }
  };

  const isUserLogedIn = localStorage.getItem('logedInUser')

  useEffect(() => {
    if(isUserLogedIn){
navigate('/home')
    }
  
  }, [])
  
  return (
    <div className="login-conatiner">
      <Toaster />
      <div className="header">
        <h1>SignIn</h1>
      </div>
      <div className="input-field">
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="enter your email"
          onChange={handleInput}
        />
        <div className="pswrd-sec">
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleInput}
          />
          <span onMouseDown={handleToggle} onMouseUp={handleToggle} style={{ cursor: "pointer" }}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

      </div>
      <div className="forgot">
        <p>Forgot Password ?</p>
      </div>
      <div className="login-btn">
        <button onClick={hadleSignIn}>Login</button>
        <span>OR</span>
        <NavLink to="/signup" className="text-data">
          Don't have account ? SignUp
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
