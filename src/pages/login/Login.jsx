import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.scss";
import { useGetInputValue } from "../../hooks/useGetInputValue";
const initial = {
  username: "john32",
  password: "87654321",
};
function Login() {
  let navigate = useNavigate();
  const { formData, handleChange, setFormData } = useGetInputValue(initial);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username === "john32" && formData.password === "87654321") {
      localStorage.setItem("x-auth-token", "fake token");
      navigate("/admin");
      toast.success("Welcome");
    } else {
      toast.error("Password or Username wrong");
    }
  };
  return (
    <div>
      <div className="login">
        <div className="container">
          <div className="route">
            <p>
              Главная <b>/ Login</b>
            </p>
          </div>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit} action="">
            <h4>Username</h4>
            <input
              value={formData.username}
              onChange={handleChange}
              required
              type="text"
              name="username"
            />
            <h4>Password</h4>
            <input
              value={formData.password}
              onChange={handleChange}
              required
              type="password"
              name="password"
              id=""
            />
            <button>LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
