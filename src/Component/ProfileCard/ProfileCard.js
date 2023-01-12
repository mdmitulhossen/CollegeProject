import React from 'react';
import "./ProfileCrad.css";
import image from "../../assets/image/logo2.png"

const ProfileCard = () => {
    const LogINuser = JSON.parse(localStorage.getItem("user"));
    return (
        <div className='w-100'>
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col col-lg-12 mb-4 mb-lg-0">
                            <div class="card mb-3" style={{ borderRadius: ".5rem" }}>
                                <div class="row g-0">
                                    <div class="col-md-4 gradient-custom text-center text-white"
                                        style={{ borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem" }}>
                                        <img src={image}
                                            alt="Avatar" class="img-fluid my-5" style={{ width: "80px" }} />
                                        {
                                            LogINuser ? <h5>{LogINuser.name}</h5> : <h5>Unknow</h5>
                                        }

                                        <p>Student</p>
                                        <i class="far fa-edit mb-5"></i>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body p-4">
                                            <h6>Information</h6>
                                            <hr class="mt-0 mb-4" />
                                            <div class="row pt-1">
                                                <div class="col-6 mb-3">
                                                   
                                                    <h6>Email</h6>
                                                    {
                                                        LogINuser ? <p class="text-muted">{LogINuser.email}</p>: <p class="text-muted">info@example.com</p>
                                                    }
                                                    {/* <p class="text-muted">info@example.com</p> */}
                                                </div>
                                                <div class="col-6 mb-3">
                                                    <h6>Phone</h6>
                                                    
                                                    <p class="text-muted">123 456 789</p>
                                                </div>
                                            </div>
                                            <h6>Projects</h6>
                                            <hr class="mt-0 mb-4" />
                                            <div class="row pt-1">
                                                <div class="col-6 mb-3">
                                                    <h6>Recent</h6>
                                                    <p class="text-muted">Lorem ipsum</p>
                                                </div>
                                                <div class="col-6 mb-3">
                                                    <h6>Most Viewed</h6>
                                                    <p class="text-muted">Dolor sit amet</p>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-start">
                                                <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                                                <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
                                                <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
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

export default ProfileCard;