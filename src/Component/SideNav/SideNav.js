import React, { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import CelenderB from '../Celender/CelenderB';
import DashBoard from '../Dashboard/DashBoard';
import Login from '../Login/Login';
import NoticeBoard from '../NoticBoard/NoticeBoard';
import Register from '../Register/Register';
import StudentDataTable from '../StudentData/StudentDataTable';
import StudentProfile from '../StudentData/StudentProfile';
import UpdateProfile from '../StudentData/UpdateProfile';
import TeacherDataTable from '../TeacherData/TeacherDataTable';
import "./sideNav.css";
import "./toggle.js";
import Staff from "./../Staff/Staff";
import User from "./../../Auth/User";


const SideNav = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="sideNav">
            <div className="sidebar">
                <ul className="nav-links">
                    <li>
                        <NavLink to="/">
                            <i className='bx bx-grid-alt Dicon' ></i>
                            <span className="link_name">Dashboard</span>
                        </NavLink>
                        <ul className="sub-menu blank">
                            <li><NavLink className="link_name" to="#">DashBoard</NavLink></li>
                        </ul>
                    </li>
                   
                    <li>
                        <NavLink to="/student">
                        <i class="fa-solid fa-person"></i>
                            <span className="link_name">Student</span>
                        </NavLink>
                        <ul className="sub-menu blank">
                            <li><NavLink className="link_name" to="#">Student</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/teacher">
                            <i className='bx bx-line-chart' ></i>
                            <span className="link_name">Teacher</span>
                        </NavLink>
                        <ul className="sub-menu blank">
                            <li><NavLink className="link_name" to="#">Teacher</NavLink></li>
                        </ul>
                    </li>
                   
                    <li>
                        <NavLink to="staff">
                        <i class="fa-solid fa-person-skating"></i>
                            <span className="link_name">Staffs</span>
                        </NavLink>
                        <ul className="sub-menu blank">
                            <li><NavLink className="link_name" to="#">Staffs</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="notice">
                            <i className='bx bx-history'></i>
                            <span className="link_name">Notice</span>
                        </NavLink>
                        <ul className="sub-menu blank">
                            <li><NavLink className="link_name" to="#">History</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="celender">
                        <i class="fa-solid fa-calendar-days"></i>
                            <span className="link_name">Celender</span>
                        </NavLink>
                        <ul className="sub-menu blank">
                            <li><NavLink className="link_name" to="#">Celender</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="setting">
                            <i className='bx bx-cog' ></i>
                            <span className="link_name">Setting</span>
                        </NavLink>
                        <ul className="sub-menu blank">
                            <li><NavLink className="link_name" to="#">Setting</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <div className="profile-details">
                            <div className="profile-content">
                                {/* <!--<img src="image/profile.jpg" alt="profileImg">--> */}
                            </div>
                            <div className="name-job">
                                <div className="profile_name">{user?.name}</div>
                                {
                                    user?.role?<div className="job">Admin</div>:<div className="job">Student</div>
                                }
                            </div>
                            <i className='bx bx-log-out' ></i>
                        </div>
                    </li>
                </ul>
            </div>

            {/* ........// All Routes manages........... */}

            <div className="home-section">
                <div className="home-content">
                    <Routes>
                        <Route exact path='/' element={<DashBoard />} />
                        <Route exact path='/student' element={<User><StudentDataTable/></User>} />
                        <Route exact path='/teacher' element={<User><TeacherDataTable/></User>} />
                        <Route exact path='/staff' element={<User><Staff/></User>} />
                        <Route exact path='/celender' element={<CelenderB/>} />
                        <Route exact path='/notice' element={<NoticeBoard/>} />
                        <Route exact path='/student/studentProfile' element={<StudentProfile/>} />
                        <Route exact path='/student/update/studentProfile' element={<UpdateProfile/>} />
                        <Route exact path='/student/register' element={<Register/>} />
                        <Route exact path='/student/signin' element={<Login/>} />
                    </Routes>
                </div>

            </div>
           
        </div>
    );
};

export default SideNav;