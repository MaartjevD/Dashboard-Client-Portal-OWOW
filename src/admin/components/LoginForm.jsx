import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginInput from "./Logininput";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/workspace");
  };

  return (
    <div className="card shadow-sm border-0 p-4" style={{ maxWidth: "420px", width: "100%" }}>
      
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="h4 fw-semibold mb-1">Welcome back</h2>
        <p className="text-muted mb-0">Log in to continue</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <LoginInput
            label="Email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={setEmail}
          />
        </div>

        <div className="mb-3">
          <LoginInput
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={setPassword}
          />
        </div>

        {/* Options */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="form-check-label small" htmlFor="rememberMe">
              Remember me
            </label>
          </div>

          <button type="button" className="btn btn-link p-0 small">
            Forgot password?
          </button>
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-primary w-100 mb-3">
          Login
        </button>
      </form>

      {/* Signup */}
      <p className="text-center small mb-0">
        Don&apos;t have an account?{" "}
        <button type="button" className="btn btn-link p-0">
          Sign up
        </button>
      </p>
    </div>
  );
}

export default LoginForm;