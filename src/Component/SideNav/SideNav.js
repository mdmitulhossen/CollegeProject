import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import CelenderB from '../Celender/CelenderB';
import DashBoard from '../Dashboard/DashBoard';
import StudentDataTable from '../StudentData/StudentDataTable';
import TeacherDataTable from '../TeacherData/TeacherDataTable';
import "./sideNav.css";
import "./toggle.js";


const SideNav = () => {

    return (
        <div className="sideNav">
            <div className="sidebar">
                <ul className="nav-links">
                    <li>
                        <NavLink to="/">
                            <i className='bx bx-grid-alt' ></i>
                            <span className="link_name">Dashboard</span>
                        </NavLink>
                        <ul className="sub-menu blank">
                            <li><NavLink className="link_name" to="#">DashBoard</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <NavLink to="department">
                                <i className='bx bx-collection' ></i>
                                <span className="link_name">Department</span>
                            </NavLink>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><NavLink className="link_name" to="#">Department</NavLink></li>
                            <li><NavLink to="/department/cse">CSE</NavLink></li>
                            <li><NavLink to="/department/eee">EEE</NavLink></li>
                            <li><NavLink to="/department/ce">CE</NavLink></li>
                        </ul>
                    </li>
                    {/* <li>
                        <div className="iocn-link">
                            <NavLink to="#">
                                <i className='bx bx-book-alt' ></i>
                                <span className="link_name">Posts</span>
                            </NavLink>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><NavLink className="link_name" to="#">Posts</NavLink></li>
                            <li><NavLink to="#">Web Design</NavLink></li>
                            <li><NavLink to="#">Login Form</NavLink></li>
                            <li><NavLink to="#">Card Design</NavLink></li>
                        </ul>
                    </li> */}
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
                    {/* <li>
                        <div className="iocn-link">
                            <NavLink to="#">
                                <i className='bx bx-plug' ></i>
                                <span className="link_name">Plugins</span>
                            </NavLink>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><NavLink className="link_name" to="#">Plugins</NavLink></li>
                            <li><NavLink to="#">UI Face</NavLink></li>
                            <li><NavLink to="#">Pigments</NavLink></li>
                            <li><NavLink to="#">Box Icons</NavLink></li>
                        </ul>
                    </li> */}
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
                                <div className="profile_name">MD Mitul</div>
                                <div className="job">Web Developer</div>
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
                        <Route path='/' exact element={<DashBoard />} />
                        <Route path='/student' element={<StudentDataTable/>} />
                        <Route path='/teacher' element={<TeacherDataTable/>} />
                        <Route path='/celender' element={<CelenderB/>} />
                    </Routes>
                </div>

            </div>
           
        </div>
    );
};

export default SideNav;