import React, { useState } from 'react';
import './register.css';

import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
   const navigate= useNavigate();


    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [surename, setSurename] = useState("");
    const [fathername, setFathername] = useState("");
    const [mothername, setMothername] = useState("");
    const [gender, setGender] = useState("");
    const [bloodgroup, setBloodgroup] = useState("");
    const [religion, setReligion] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [postcode, setPostcode] = useState("");
    const [area, setArea] = useState("");
    const [session, setSession] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [country, setCountry] = useState("");
    const [password, setPassword] = useState("");
    const [roll, setRoll] = useState("");
    const [regNo, setRegNo] = useState("");
    const [region, setRegion] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    //Handle register
    const handleRegister = async () => {
        const user = {
            username, name, surename, fathername, mothername, gender, bloodgroup, religion, dateofbirth, number, address,
            postcode, area, email, department, session,roll,regNo, country, password
        }
        console.log("clicked");
        
        await axios.post('http://localhost:8000/auth/api/signup', user)
            .then((response) => {
                console.log(response);
                if (response.status === 200 || response.status === 400) {
                    navigate('/student/signin')
                    toast.success("Register Successful",{position: "top-center"});
                }
                
            })
            .catch(function (error) {
                console.log(error);
                toast.error("Register UnSuccessful",{position: "top-center"});
            });
            window.location.reload(true)
    }


    return (

        <div className="w-100">
            <div className="container mb-5  profileupdate">
                <div className=" row inner mt-4 border_top">
                    {/* <div className="col-md-2">
                        <div className="image-holder"><img className="mt-5" width="250px" height="400px" src={image1} /></div>
                    </div> */}
                    <div className="col-md-12">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-center align-items-center mb-4">
                                <h3 className="text-right">Student Register Form</h3>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels">User Name</label><input type="text" className="form-control" placeholder="userName.." onChange={e => setUsername(e.target.value)} /></div>

                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" onChange={e => setName(e.target.value)} /></div>

                                <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" placeholder="surname" onChange={e => setSurename(e.target.value)} /></div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6"><label className="labels">Father Name</label><input type="text" className="form-control" placeholder="Father Name" onChange={e => setFathername(e.target.value)} /></div>
                                <div className="col-md-6"><label className="labels">Mother Name</label><input type="text" className="form-control" placeholder="mother name" onClick={e => setMothername(e.target.value)} /></div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <label for="gender" className="labels">Gender</label>
                                    <select id="gender" className="form-control" name="gender" onClick={e => setGender(e.target.value)}>
                                        <option value="male" selected>Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label for="blood" className="labels">Blood Group</label>
                                    <select id="blood" className="form-control" name="blood" onClick={e => setBloodgroup(e.target.value)}>
                                        <option value="A+" selected>A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <label for="religion" className="labels">Religion</label>
                                    <select id="religion" className="form-control" name="religion" onClick={e => setReligion(e.target.value)}>
                                        <option value="islam" selected>Islam</option>
                                        <option value="hindu">Hindu</option>
                                        <option value="Christian">Christian</option>
                                        <option value="buddish">Buddish</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Date of Birth</label>
                                    <input type="date" className="form-control" onChange={e => setDateofbirth(e.target.value)} />

                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels">Mobile Number</label><input type="number" className="form-control" placeholder="enter phone number" onChange={e => setNumber(e.target.value)} /></div>

                                <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder="enter address line 1" onChange={e => setAddress(e.target.value)} /></div>

                                <div className="col-md-12"><label className="labels">Postcode</label><input type="text" className="form-control" placeholder="post code...." onChange={e => setPostcode(e.target.value)} /></div>

                                <div className="col-md-12"><label className="labels">Area</label><input type="text" className="form-control" placeholder="enter your area" onChange={e => setArea(e.target.value)} /></div>

                                <div className="col-md-12"><label className="labels">Email ID</label><input type="email" className="form-control" placeholder="enter email id" onChange={e => setEmail(e.target.value)} /></div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <label for="gender" className="labels">Department</label>
                                    <select id="department" className="form-control" name="department" onClick={e => setDepartment(e.target.value)}>
                                        <option value="CSE" selected>CSE</option>
                                        <option value="EEE">EEE</option>
                                        <option value="CE">CE</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label for="session" className="labels">session</label>
                                    <select id="session" className="form-control" name="session" onChange={e => setSession(e.target.value)}>
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
                            <div className="row mt-3">
                                <div className="col-md-6"><label className="labels">Roll </label><input type="number" className="form-control" placeholder="Roll No" onChange={e => setRoll(e.target.value)} /></div>

                                <div className="col-md-6"><label className="labels">Reg. No</label><input type="number" className="form-control" placeholder="reg. no.." onChange={e => setRegNo(e.target.value)} /></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" onChange={e => setCountry(e.target.value)} /></div>

                                <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" placeholder="state" onChange={e => setRegion(e.target.value)} /></div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <label for="password" className="labels">Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Repeat Password</label>
                                    <input type="password" className="form-control" placeholder="Repeat your password" onChange={e => setRepeatPassword(e.target.value)} />

                                </div>
                            </div>
                            <div className="mt-3">
                                <input type="checkbox" name="terms" className='mx-2' /><span className='terms'>  I agree all statement in <NavLink>Terms and Services</NavLink></span>
                            </div>
                            <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={handleRegister}>Register</button><ToastContainer  /></div>
                            <div className="mt-5 text-center"><p>Have already an account? <NavLink to="/student/signin">Login Here</NavLink></p></div>

                        </div>
                    </div>
                    {/* <div className="col-md-4">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span></div><br />
                            <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control" placeholder="experience" value="" /></div> <br />
                            <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" value="" /></div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

    );
};

export default Register;