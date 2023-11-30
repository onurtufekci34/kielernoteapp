import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

export default function Navbar() {
  const { logout } = useLogout();

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Kieler Notebook</h1>
        </Link>
        <nav>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
          <div>
            <button onClick={logout}>Logout</button>
            
          </div>
        </nav>
      </div>
    </header>
  );
}
