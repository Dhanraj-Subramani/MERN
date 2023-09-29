import React from 'react'
import {Link} from 'react-router-dom'
export default function Registered() {
  return (
    <div className='App-header'>
        <h1>
            Registration Completed <br />
            <Link to="/login">
                <button>
                Login    
                </button>
            </Link>
        </h1>
    </div>
  )
}
