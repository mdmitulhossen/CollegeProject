import React from 'react';
import './register.css';
import image1 from "../../assets/image/register3.jpg"
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        
            <div class="w-100">
            <div class="container mb-5  profileupdate">
                <div class=" row inner mt-4 border_top">
                {/* <div class="col-md-2">
                        <div class="image-holder"><img class="mt-5" width="250px" height="400px" src={image1} /></div>
                    </div> */}
                    <div class="col-md-12">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-center align-items-center mb-4">
                                <h3 class="text-right">Student Register Form</h3>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12"><label class="labels">User Name</label><input type="text" class="form-control" placeholder="userName.."  /></div>
                                
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" /></div>
                                <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control"  placeholder="surname" /></div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6"><label class="labels">Father Name</label><input type="text" class="form-control" placeholder="Father Name" /></div>
                                <div class="col-md-6"><label class="labels">Mother Name</label><input type="text" class="form-control" placeholder="mother name" /></div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6">
                                    <label for="gender" class="labels">Gender</label>
                                    <select id="gender" class="form-control" name="gender">
                                        <option value="male" selected>Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="blood" class="labels">Blood Group</label>
                                    <select id="blood" class="form-control" name="blood">
                                        <option value="A+" selected>A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6">
                                    <label for="religion" class="labels">Religion</label>
                                    <select id="religion" class="form-control" name="religion">
                                        <option value="islam" selected>Islam</option>
                                        <option value="hindu">Hindu</option>
                                        <option value="Christian">Christian</option>
                                        <option value="buddish">Buddish</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label class="labels">Date of Birth</label>
                                    <input type="date" class="form-control"  />
                                    
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12"><label class="labels">Mobile Number</label><input type="number" class="form-control" placeholder="enter phone number"  /></div>
                                <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder="enter address line 1"/></div>
                               
                                <div class="col-md-12"><label class="labels">Postcode</label><input type="text" class="form-control" placeholder="post code...."  /></div>
                              
                                <div class="col-md-12"><label class="labels">Area</label><input type="text" class="form-control" placeholder="enter your area" /></div>
                                <div class="col-md-12"><label class="labels">Email ID</label><input type="email" class="form-control" placeholder="enter email id" /></div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6">
                                    <label for="gender" class="labels">Department</label>
                                    <select id="department" class="form-control" name="department">
                                        <option value="CSE" selected>CSE</option>
                                        <option value="EEE">EEE</option>
                                        <option value="CE">CE</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="session" class="labels">session</label>
                                    <select id="session" class="form-control" name="session">
                                        <option value="2012-13" selected>2012-13</option>
                                        <option value="2013-14">2013-14</option>
                                        <option value="2014-15">2014-15</option>
                                        <option value="2015-16">2015-16</option>
                                        <option value="2016-17">2016-17</option>
                                        <option value="2017-18">2017-18</option>
                                        <option value="2018-19">2018-19</option>
                                        <option value="2019-20">2019-20</option>
                                        <option value="2020-21">2020-21</option>
                                        <option value="2021-22">2021-22</option>
                                        <option value="2022-23">2022-23</option>
                                        <option value="2023-24">2023-24</option>
                                        <option value="2025-26">2025-26</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value="" /></div>
                                <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state" /></div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6">
                                    <label for="password" class="labels">Password</label>
                                    <input type="password" class="form-control"  placeholder="Enter password"/>
                                </div>
                                <div class="col-md-6">
                                    <label class="labels">Repeat Password</label>
                                    <input type="password" class="form-control" placeholder="Repeat your password" />
                                    
                                </div>
                            </div>
                            <div class="mt-3">
                                <input type="checkbox" name="terms" className='mx-2'/><span className='terms'>  I agree all statement in <NavLink>Terms and Services</NavLink></span>
                            </div>
                            <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Register</button></div>
                            <div class="mt-5 text-center"><p>Have already an account? <NavLink to="/student/signin">Login Here</NavLink></p></div>
                            
                        </div>
                    </div>
                    {/* <div class="col-md-4">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br />
                            <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value="" /></div> <br />
                            <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value="" /></div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
       
    );
};

export default Register;