import { Breadcrumb, Button } from 'antd';
import React from 'react';
import { FormOutlined } from '@ant-design/icons';

import "./StudentDemo.css"
import "./studentStyle.css"
import { NavLink } from "react-router-dom";


const StudentProfile = () => {
    return (
        <div>
            <div>
                {/*== HEading ====*/}
                <div className='mx-5 mt-4 mb-4 '>
                    <h4>Student Profile</h4>
                    <Breadcrumb
                        style={{
                            margin: '0px 0 16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>student</Breadcrumb.Item>
                        <Breadcrumb.Item>profile</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div class="rt-container">
                    <div class="col-rt-4" id="float-right">

                        {/* <!-- Ad Here --> */}


                    </div>
                    {/* <div class="col-rt-2">
                        <ul>
                            <li><a href="https://codeconvey.com/html-code-for-student-profile" title="Back to tutorial page">Back to Tutorial</a></li>
                        </ul>
                    </div> */}
                </div>
            </div>

            {/* <header class="ScriptHeader">
                <div class="rt-container">
                    <div class="col-rt-12">
                        <div class="rt-heading">
                            <h1>Student Profile Page Design Example</h1>
                            <p>A responsive student profile page design.</p>
                        </div>
                    </div>
                </div>
            </header> */}

            <section class='profileCardInfo'>
                <div class="rt-container">
                    <div class="col-rt-12">
                        <div class="Scriptcontent">

                            {/* <!-- Student Profile --> */}
                            <div class="student-profile py-4">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <div class="card shadow-sm">
                                                <div class="card-header bg-transparent text-center">
                                                    <img class="profile_img" src="https://source.unsplash.com/600x300/?student" alt="student dp" />
                                                    <h3>Md Mitul Hossain</h3>
                                                </div>
                                                <div class="card-body">
                                                    <p class="mb-0"><strong class="pr-1">Student ID:</strong>30000</p>
                                                    <p class="mb-0"><strong class="pr-1">Department:</strong>CSE</p>
                                                    <p class="mb-0"><strong class="pr-1">Batch:</strong>07</p>
                                                </div>
                                            </div>
                                            <div class="w-100 mt-4">
                                                <NavLink to="/student/update/studentProfile">
                                                <Button style={{width:"100%"}} type="primary" icon={<FormOutlined />} size="large">
                                                    Edit
                                                </Button>
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div class="col-lg-8">
                                            <div class="card shadow-sm allinfo">
                                                <div class="card-header bg-transparent border-0">
                                                    <h3 class="mb-0"><i class="far fa-clone pr-1 mx-3"></i>General Information</h3>
                                                </div>
                                                <div class="card-body pt-0">
                                                    <table class="table table-bordered">
                                                        <tr>
                                                            <th width="30%">Name</th>
                                                            <td width="2%">:</td>
                                                            <td>X</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Gender</th>
                                                            <td width="2%">:</td>
                                                            <td>Male</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Father Name</th>
                                                            <td width="2%">:</td>
                                                            <td>M</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Mother Name</th>
                                                            <td width="2%">:</td>
                                                            <td>Z</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Date of Birth</th>
                                                            <td width="2%">:</td>
                                                            <td>19.2.2001</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Address</th>
                                                            <td width="2%">:</td>
                                                            <td>Ksuhtia</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Religion</th>
                                                            <td width="2%">:</td>
                                                            <td>Islam</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Roll No</th>
                                                            <td width="2%">:</td>
                                                            <td>125</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Reg. No</th>
                                                            <td width="2%">:</td>
                                                            <td>3029</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">session</th>
                                                            <td width="2%">:</td>
                                                            <td>2029-20</td>
                                                        </tr>

                                                        <tr>
                                                            <th width="30%">Email</th>
                                                            <td width="2%">:</td>
                                                            <td>b233402@gmail.com</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">blood</th>
                                                            <td width="2%">:</td>
                                                            <td>B+</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                            <div style={{ height: "26px" }}></div>
                                            <div class="card shadow-sm">
                                                <div class="card-header bg-transparent border-0">
                                                    <h3 class="mb-0"><i class="far fa-clone pr-1 mx-3"></i>Other Information</h3>
                                                </div>
                                                <div class="card-body pt-0">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- partial --> */}

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StudentProfile;