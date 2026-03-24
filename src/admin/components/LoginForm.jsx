import { useState } from "react";
import LoginInput from "./Logininput";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="login-card">
      <div className="login-card__header">
        <h2 className="login-card__title">Welcome back</h2>
        <p className="login-card__subtitle">Log in to continue</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <LoginInput
          label="Email"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={setEmail}
        />

        <LoginInput
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={setPassword}
        />

        <div className="login-form__options">
          <label className="remember-me">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span>Remember me</span>
          </label>

          <button type="button" className="forgot-password">
            Forgot password?
          </button>
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>

     

      <p className="signup-text">
        Don&apos;t have an account?{" "}
        <button type="button" className="signup-link">
          Sign up
        </button>
      </p>
    </div>
  );
}

export default LoginForm;
