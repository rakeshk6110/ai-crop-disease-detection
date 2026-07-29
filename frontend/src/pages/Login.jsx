import { useState } from "react";
import API from "../services/api";

import { toast } from "react-toastify";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/token/", {
        username: username,
        password: password,
      });
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("user_id", response.data.user_id);
      toast.success("Login Successful");

      if (response.data.role === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/dashboard";
      }
    } catch (error) {
      toast.error("Invalid Credentials");
    }
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1 className="auth-title">🌿 Farmer Login</h1>
        <p className="auth-subtitle">AI-Based Crop Disease Detection System</p>

        <form onSubmit={handlelogin}>
          <div className="form-group">
            <label className="form-label">Username</label>

            <input
              type="text"
              className="form-input"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>

            <input
              type="password"
              className="form-input"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <p style={{ marginTop: "15px", textAlign: "center" }}>
            Don't have an account?
            <a href="/register"> Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;
