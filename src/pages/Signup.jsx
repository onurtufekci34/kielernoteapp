import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signup, isPending, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      signup(email, password, userName);
    } else {
      alert("passwords did not match");
    }

    // console.log(userName,email,password,confirmPassword)
    // setUserName("")
    // setEmail("")
    // setPassword("")
    // setConfirmPassword("")
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Kieler Note App Signup Page</h3>

      <label>Your Name:</label>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />

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

      <label>Confirm Your Password:</label>
      <input
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
      />

      {!isPending && <button>Signup</button>}
      {isPending && <button disabled>Your process is ongoing</button>}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
