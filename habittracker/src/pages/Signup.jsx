import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

export default function Signup() {
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();
    localStorage.setItem("user", "demo-user");
    navigate("/dashboard");
  }

  return (
    <form className="auth" onSubmit={handleSignup}>
      <h2>Sign Up</h2>
      <input placeholder="Email" required />
      <input placeholder="Password" type="password" required />
      <button>Create Account</button>
      <p onClick={() => navigate("/login")}>Already have an account?</p>
    </form>
  );
}
