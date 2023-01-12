import { Button } from 'antd';
import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./topNav.css";
// import logo from "../../assets/image/logo2.png"
import { toast } from "react-toastify";


const TopNav = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    // const user = true;
    console.log(user);

    const handleLogout=async()=>{
             
        await axios.get('http://localhost:8000/auth/api/logout')
        .then((response) => {
            console.log(response);
            if (response.status === 200 || response.status === 400) {
                // navigate('/student/signin')
                localStorage.clear();
                toast.success("Logout Successful",{position: "top-center"});

            }
            
        })
        .catch(function (error) {
            console.log(error);
            toast.error("Logout UnSuccessful",{position: "top-center"});
        });
        window.location.reload(true)
    }

    const handleMyProfile=()=>{
        localStorage.setItem("profileEmail",user.email);
        window.reload();
    }

    return (
        <div className="topnav">
            {/* <!--Main Navigation--> */}
            <header className="nav">
                {/* <!-- Jumbotron --> */}
                <div className="p-3 text-center Jumbotron" style={{ backgroundColor: "#ffffff" }}>
                    <div >
                        <div className="row">
                            <div className="col-sm-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
                                <NavLink to="/" className="ms-md-2 radius-4">
                                    {/* <img src={logo} height="35px" alt="" /> */}
                                    <div class="content">
                                        <h2>FEC Diary</h2>
                                    </div>
                                </NavLink >
                                <i className='bx bx-menu' ></i>
                            </div>

                            <div className="col-sm-4">
                                <form className="d-flex input-group w-auto  my-auto mb-3 mb-md-0">
                                    <input autoComplete="off" type="search" className="form-control rounded " placeholder="Search" />
                                    <span className="input-group-text border-0 d-none d-lg-flex"><i className="fas fa-search searchIcon"></i></span>
                                </form>
                            </div>

                            <div className="col-sm-4 d-flex justify-content-center justify-content-md-end align-items-center">
                                <div className="d-flex">
                                    {/* <!-- Cart --> */}
                                    {/* <!-- <NavLink  className="text-reset me-3" to="#">
                                        <span><i className="fas fa-shopping-cart"></i></span>
                                        <span className="badge rounded-pill badge-notification bg-danger">1</span>
                                    </NavLink > --> */}

                                    {/* <!-- Notification --> */}
                                    {/* <!-- <div className="dropdown">
                                        <NavLink  className="text-reset me-3 dropdown-toggle hidden-arrow" to="#" id="navbarDropdownMenuLink"
                                            role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                            <i className="fas fa-bell"></i>
                                        </NavLink >
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                            <li><NavLink  className="dropdown-item" to="#">Some news</NavLink ></li>
                                            <li><NavLink  className="dropdown-item" to="#">Another news</NavLink ></li>
                                            <li>
                                                <NavLink  className="dropdown-item" to="#">Something else here</NavLink >
                                            </li>
                                        </ul>
                                    </div> --> */}


                                    {/* <!-- User --> */}
                                  

                                    <div className="dropdown">
                                    {
                                        user? 
                                            <div>
                                            <NavLink className="text-reset dropdown-toggle d-flex align-items-center hidden-arrow drop" to="#"
                                                id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                                <img src="https://mdbootstrap.com/img/new/avatars/1.jpg" className="rounded-circle" height="22" alt=""
                                                    loading="lazy" />
                                                <span className="d-block mx-2">{user?.name}</span>
                                            </NavLink >


                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                                <li><NavLink className="dropdown-item" to="/student/studentProfile" onClick={handleMyProfile}>My profile</NavLink ></li>
                                                <li><NavLink className="dropdown-item" to="#">Settings</NavLink ></li>


                                                <li><NavLink className="dropdown-item" onClick={handleLogout} to="/student/signin">LogOut</NavLink ></li>



                                            </ul>
                                            </div>
                                        
                                            : <NavLink to="/student/signin"><Button type='primary'>signin</Button></NavLink>
                                    }



                                        {/* <NavLink className="text-reset dropdown-toggle d-flex align-items-center hidden-arrow drop" to="#"
                                            id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                            <img src="https://mdbootstrap.com/img/new/avatars/1.jpg" className="rounded-circle" height="22" alt=""
                                                loading="lazy" />
                                            <span className="d-block mx-2">{user?.name}</span>
                                        </NavLink >


                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                            <li><NavLink className="dropdown-item" to="#">My profile</NavLink ></li>
                                            <li><NavLink className="dropdown-item" to="#">Settings</NavLink ></li>
                                            {
                                                user?.login ?
                                                <li><NavLink className="dropdown-item" to="/student/signin">SignOut</NavLink ></li>
                                                :<li><NavLink className="dropdown-item" to="/student/signin">SignIn</NavLink ></li>
                                            }

                                        </ul> */}
                                    </div>
                                    
                                </div>
                        </div>
                    </div>
                </div>
        </div>


            </header >
        </div >
    );
};

export default TopNav;