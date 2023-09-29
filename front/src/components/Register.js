import { BrowserRouter, Link, Route, Routes, useNavigate} from 'react-router-dom'
import './form.css'
import { useEffect, useRef} from 'react'
import axios from 'axios';
export default function Register() {
    const fname = useRef();
    const lname = useRef();
    const mail = useRef();
    const uname = useRef();
    const pwd = useRef();
    const nav = useNavigate()

    
    return (

        <>



            <form method="post" className='form' action="">
                <div className='card'>
                    <table>
                        <tr>
                            <td colSpan={2}>
                                <h1>
                                    Register
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
                                First Name :
                            </td>
                            <td>
                                <input type="text" ref={fname} id="fname" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Last Name :
                            </td>
                            <td>
                                <input type="text" ref={lname} id="lname" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Email :
                            </td>
                            <td>
                                <input type="text" ref={mail} id="mail" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                User Name :
                            </td>
                            <td>
                                <input type="text" ref={uname} id="uname" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Password :
                            </td>
                            <td>
                                <input type="password" ref={pwd} id="pwd" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <center>
                                    <button onClick={async (e) => {
                                        e.preventDefault()
                                        let obj = {
                                            fname: fname.current.value,
                                            lname: lname.current.value,
                                            email: mail.current.value,
                                            uname: uname.current.value,
                                            pwd: pwd.current.value,
                                        }
                                        try
                                        {
                                           const data = await axios.post("http://localhost:3500/register", obj).then(response =>
                                           {
                                            nav(response.data);
                                           })
                                           .catch(error => {
                                             console.error('Error fetching client URL:', error);
                                           });
                                           console.log(data)
                                        }
                                        catch(e)
                                        {
                                            console.log(e)
                                        }
                                        
                                    }} >submit</button>
                                </center>

                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <p>
                                    already registered ? <Link to='/login'>click </Link> to login
                                </p>
                            </td>
                        </tr>
                    </table>
                </div>
            </form>


        </>
    )
}