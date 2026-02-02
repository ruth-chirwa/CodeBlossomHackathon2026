import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    localStorage.setItem("user", "demo-user");
    navigate("/dashboard");
  }

  return (
    <form className="auth" onSubmit={handleLogin}>
      <h2>Login</h2>
      <input placeholder="Email" required />
      <input placeholder="Password" type="password" required />
      <button>Login</button>
      <p onClick={() => navigate("/signup")}>Create an account</p>
    </form>
  );
}
