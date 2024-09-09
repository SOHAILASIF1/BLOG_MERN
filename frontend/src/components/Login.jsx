import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation checks
    if (!email || !password) {
      alert("Please fill in both fields");
      return;
    }

    try {
      const res = await fetch('/api/user/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to log in');
      }

      const data = await res.json();
      console.log(data);
      localStorage.setItem("Users",JSON.stringify(data))

      navigate("/");

    } catch (error) {
      console.error('Error logging in:', error.message);
      alert(`Error: ${error.message}`);
    }
  }

  return (
    <div className='Container'>
      <div className='box'>
        <h2 className='Login'>LOGIN</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <br />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;
