import React from "react";
import "./App.css";
import "./index.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course from "./pages/Course.jsx";
import Service from "./pages/Service.jsx";
import Program from "./pages/Program.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import PageNotFound from "./Components/PageNotFound/PageNotFound.jsx";
import Layout from "./Components/Layout.jsx";
import Loginpage from "./pages/Loginpage.jsx";
import Signup from "./Features/LoginSignup/Signup.jsx";
import ProtectedRoute from "./Components/ProtectedRoute";


const App = () => {
  return (
    <BrowserRouter>

<Routes>
  <Route element={<Layout />}>
    <Route
      path="/home"
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
    />
    <Route
      path="/about"
      element={
        <ProtectedRoute>
          <About />
        </ProtectedRoute>
      }
    />
    <Route
      path="/course"
      element={
        <ProtectedRoute>
          <Course />
        </ProtectedRoute>
      }
    />
    <Route
      path="/service"
      element={
        <ProtectedRoute>
          <Service />
        </ProtectedRoute>
      }
    />
    <Route
      path="/programs"
      element={
        <ProtectedRoute>
          <Program />
        </ProtectedRoute>
      }
    />
    <Route
      path="/blog"
      element={
        <ProtectedRoute>
          <Blog />
        </ProtectedRoute>
      }
    />
    <Route
      path="/contact"
      element={
        <ProtectedRoute>
          <Contact />
        </ProtectedRoute>
      }
    />
  </Route>

  <Route path="/" element={<Loginpage />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="*" element={<PageNotFound />} />
</Routes>
    </BrowserRouter>
  );
};

export default App;
