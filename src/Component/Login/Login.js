import React from 'react';
import "./login.css"
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div class="login">
            <section class="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-xl-10">
                            <div class="card rounded-3 text-black">
                                <div class="row g-0">
                                    <div class="col-lg-6">
                                        <div class="card-body p-md-5 mx-md-4">

                                            <div class="text-center">
                                                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                    style="width: 185px;" alt="logo" /> */}
                                                <h4 class="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                                            </div>

                                            <form>
                                                <p>Please login to your account</p>

                                                <div class="form-outline mb-4">
                                                    <input type="text" id="form2Example11" class="form-control"
                                                    />
                                                    <label class="form-label" for="form2Example11">Username</label>
                                                </div>

                                                <div class="form-outline mb-4">
                                                    <input type="password" id="form2Example22" class="form-control" />
                                                    <label class="form-label" for="form2Example22">Password</label>
                                                </div>
                                                <div class="form-outline mb-4">
                                                    <input type="checkbox" className='mx-2'/>
                                                   <span class="rememberText">Remember me</span>
                                                </div>

                                                <div class="text-center pt-1 mb-5 pb-1">
                                                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
                                                        in</button>
                                                    <a class="text-muted" href="#!">Forgot password?</a>
                                                </div>


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