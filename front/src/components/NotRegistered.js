import React from 'react'
import {Link} from 'react-router-dom'
export default function NotRegistered() {
  return (
    <div className='App-header'>
        <h1 className='rns'>
            Registration was Not Success<br />
            <Link to="/register">
                <button>
                sign up    
                </button>
            </Link>
        </h1>
    </div>
  )
}
