import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"


function Header() {
  return (
    <>
    
      <div className='Header'>
        <h2>LoGo</h2>

        <div className='links'>
          <Link className='link'>About</Link>
          <Link className='link'>Contact</Link>
          <Link className='link'>Home</Link>

        </div>

      <div className='buttons'>
       <button><Link className='link' to='/login'>Login</Link></button>
        <button><Link className='link' to='/signup'>Sign UP</Link></button>
    </div>
      </div>
    </>
  )
}

export default Header