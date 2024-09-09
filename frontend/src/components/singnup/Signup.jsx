import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [userName,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault();
         // Basic validation checks
    if (!email || !password) {
        alert("Please fill in both fields");
        return;
      }
  
      try {
        const res = await fetch('/api/user/signup', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password,userName })
        });
  
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || 'Failed to log in');
        }
  
        const data = await res.json();
        console.log(data);
  
        navigate("/login");
  
      } catch (error) {
        console.error('Error logging in:', error.message);
        alert(`Error: ${error.message}`);
      }
    }

  return (
    <div className='container'>
        <div className="box">
            <h2>Sign UP</h2>
            <br/>
            <form onSubmit={handleSubmit}> 
            <input type="text" name="" id="" value={userName} onChange={(e)=>setUsername(e.target.value)} />
            <br/>
            <input type="email" name="" id="" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <br/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <br/><br/>
            <input type="submit" value="Submit" />
            </form>

        </div>
        
    </div>
  )
  }

export default Signup