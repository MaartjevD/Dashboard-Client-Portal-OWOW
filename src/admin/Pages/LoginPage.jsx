import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm";


function LoginPage() {
  return (
    <div className="login-page">
      <LoginHeader />
      <div className="login-page__content">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;