
import { useRef } from 'react';
import './form.css'
import axios from 'axios'
import {Link,useNavigate } from 'react-router-dom' 
function Login(props)
{
  const uname = useRef();
  const pwd = useRef();
  let auth;
  axios.defaults.withCredentials = true;
  const nav = useNavigate()
    return(
        <>
        
        
      <form method='post' className='form'>
      <div className='card'>
        <table>
          <tr>
            <td colSpan={2}>
            
              <h1>
                  Login
              </h1>
            
            </td>
          </tr>
          <tr>
            <td>
              <br />
            </td>
          </tr>
          <tr>
            <td>
              User Name 
            </td>
            <td>
              <input  type="text" ref={uname} id="uname" />
            </td>
          </tr>
          <tr>
            <td>
              Password 
            </td>
            <td>
              <input type="password" ref={pwd} id="pwd" />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <center>
              {/* <input type='submit'>Sign in</input> */}
              <button onClick={
                (e)=>
                {
                  e.preventDefault()
                  auth = {
                    uname:uname.current.value,
                    pwd:pwd.current.value
                  }
                  axios.post("https://mern-back-weld.vercel.app/login",auth).then(data=>
                  {
              
                    props.setData(data.data)
                    nav(`../${data.data.path}`, { replace: true });
                  });

                }
              }> Sign in</button>
              
              
              <Link to='/register'><button>Sign up</button></Link>
              
              </center>
              
            </td>
          </tr>
        </table>
        </div>
      </form>
      
      </>
    );
}

export default Login;
