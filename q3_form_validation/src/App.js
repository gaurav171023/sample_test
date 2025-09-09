import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email.includes("@")) setError("Invalid email");
    else if(password.length<6) setError("Password too short");
    else { setError(""); alert("Login successful"); }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Form</h2>
      <input type="text" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <br/>
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      <br/>
      {error && <p style={{color:"red"}}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  )
}

export default App;
