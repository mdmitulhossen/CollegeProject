import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import DashBoard from '../Dashboard/DashBoard';
import "./sideNav.css";
import "./toggle.js";

const SideNav = () => {

    return (
        <div className="sideNav">
            <div className="sidebar">
                <ul className="nav-links">
                    <li>
                        <NavLink to="#">
                            <i className='bx bx-grid-alt' ></i>
                            <span className="link_name">Dashboard</span>
                        </NavLink>
                        <ul className="sub-menu blank">
                            <li><NavLink className="link_name" to="#">Category</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <NavLink to="#">
                                <i className='bx bx-collection' ></i>
                                <span className="link_name">Category</span>
                            </NavLink>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><NavLink className="link_name" to="#">Category</NavLink></li>
                            <li><NavLink to="#">HTML & CSS</NavLink></li>
                            <li><NavLink to="#">JavaScript</NavLink></li>
                            <li><NavLink to="#">PHP & MySQL</NavLink></li>
                        </ul>
                    </li>
                    <li>
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
                    </li>
                    <li>
                        <NavLink to="#">
                            <i className='bx bx-pie-chart-alt-2' ></i>
                            <span className="link_name">Analytics</span>
                        </NavLink>
                        <ul className="sub-menu blank">
                            <li><NavLink className="link_name" to="#">Analytics</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="#">
                            <i className='bx bx-line-chart' ></i>
                            <span className="link_name">Chart</span>
                        </NavLink>
                        <ul className="sub-menu blank">
                            <li><NavLink className="link_name" to="#">Chart</NavLink></li>
                        </ul>
                    </li>
                    <li>
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
                    </li>
                    <li>
                        <NavLink to="#">
                            <i className='bx bx-compass' ></i>
                            <span className="link_name">Explore</span>
                        </NavLink>
                        <ul className="sub-menu blank">
                            <li><NavLink className="link_name" to="#">Explore</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="#">
                            <i className='bx bx-history'></i>
                            <span className="link_name">History</span>
                        </NavLink>
                        <ul className="sub-menu blank">
                            <li><NavLink className="link_name" to="#">History</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="#">
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
                        <Route path='/' element={<DashBoard />} />
                    </Routes>
                </div>

            </div>
           
        </div>
    );
};

export default SideNav;