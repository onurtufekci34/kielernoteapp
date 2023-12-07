import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, isPending } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Kieler Note App Login Page</h3>

      <label>Your E-Mail:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Your Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <p>
          If you don not have a membership<Link className="link_to_signup" to="/signup"> Sign up</Link>
        </p>
      {!isPending && <button>Login</button>}
      {isPending && <button disabled>processing</button>}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
