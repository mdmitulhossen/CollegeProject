import React, { useState } from 'react';
import "./login.css";
import logo2 from"../../assets/image/logo2.png"
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const navigate=useNavigate();
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
   
    const handleLogin=async()=>{
        console.log("click")
        const user = {
           email,password
        }
        await axios.post('http://localhost:8000/auth/api/login',user)
            .then((response) => {
                console.log(response);
                if (response.status === 200 || response.status === 400) {
                    console.log(response.data)
                    const user ={
                        login:response.data.login,
                        email:response.data.user.email,
                        name:response.data.user.name,
                        department:response.data.user.department,
                        role:response.data.user.role
                    }
                    
                    localStorage.setItem("user",JSON.stringify(user));
                    // navigate('/');
                    toast.success("login Successful",{position: "top-center"});
                }
                
            })
            .catch(function (error) {
                console.log(error);
                toast.error("Login UnSuccessful",{position: "top-center"});
            });
            window.location.reload(true)
    }
    return (
        <div class="login">
            <section class="h-100 gradient-form">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-xl-10">
                            <div class="card rounded-3 text-black">
                                <div class="row g-0">
                                    <div class="col-lg-6">
                                        <div class="card-body p-md-5 mx-md-4">

                                            <div class="text-center mb-5">
                                                <img src={logo2} alt="logo" width="200px"/>
                                                {/* <h4 class="mt-1 mb-5 pb-1">We are The Lotus Team</h4> */}
                                            </div>

                                            <form>
                                                <p>Please login to your account</p>

                                                <div class="form-outline mb-4">
                                                    <input type="text" id="form2Example11" class="form-control" onChange={e=>setEmail(e.target.value)}
                                                    />
                                                    <label class="form-label" for="form2Example11">Username</label>
                                                </div>

                                                <div class="form-outline mb-4">
                                                    <input type="password" id="form2Example22" class="form-control" onChange={e=>setPassword(e.target.value)} />
                                                    <label class="form-label" for="form2Example22">Password</label>
                                                </div>
                                                <div class="form-outline mb-4">
                                                    <input type="checkbox" className='mx-2'/>
                                                   <span class="rememberText">Remember me</span>
                                                </div>

                                                <div class="text-center pt-1 mb-5 pb-1">
                                                    <NavLink to="/">
                                                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={handleLogin}>Log
                                                        in</button></NavLink>
                                                    <a class="text-muted" href="#!">Forgot password?</a>
                                                </div>
                                                <ToastContainer  />

                                            </form>

                                        </div>
                                    </div>
                                    <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 class="mb-4">Welcome to Login</h4>

                                            <div class="d-flex align-items-center justify-content-center pb-4">
                                                <p class="mb-0 me-2">Don't have an account?</p>
                                                <NavLink to="/student/register">
                                                    <button type="button" class="btn registerBtn">Register</button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;