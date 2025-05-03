import React, { useState, useEffect } from "react";
import "./Signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleSignup = () => {
    if (
      data.name === "" ||
      data.email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      toast.error("Please fill all the fields");
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match");

    } else {
      const getData = JSON.parse(localStorage.getItem("users") || "[]");
      const userExists = getData.some((user) => user.email === data.email);

      if (userExists) {
        toast.error("Account already exists");
      } else {
        const newUser = { ...data, password };
        getData.push(newUser);
        localStorage.setItem("users", JSON.stringify(getData));
        toast.success("Signup successful!");
        navigate("/");
      }
    }
  };
  const isUserLogedIn = localStorage.getItem('logedInUser')

  useEffect(() => {
    if (isUserLogedIn) {
      navigate('/home')
    }

  }, [])

  return (
    <div className="login-conatiner">
      <Toaster />
      <div className="header">
        <h1>SignUp</h1>
      </div>
      <div className="input-field">
        <label>Username</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />

        <div className="pswrd-sec">
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
          <span onMouseDown={() => setShowPassword(!showPassword)} onMouseUp={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>

        </div>

        <div className="pswrd-sec">
          <label>Confirm Password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleChange}
          />
          <span onMouseDown={() => setShowConfirmPassword(!showConfirmPassword)}
            onMouseUp={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
      </div>

      <div className="login-btn">
        <button onClick={handleSignup}>Create Account</button>
        <span>OR</span>
        <NavLink to="/" className="text-data">
          Already have account? Login
        </NavLink>
      </div>
    </div>
  );
};

export default Signup;
