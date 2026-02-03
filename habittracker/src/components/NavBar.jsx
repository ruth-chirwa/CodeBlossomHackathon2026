import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <nav className="navbar">
      <h3>🌱 Habit Tracker</h3>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}
