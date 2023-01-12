import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AcademicCelender from '../../Helper/AcademicCelender';
import SdataTable from '../../Helper/SdataTable';
import UniCarousel from '../../Helper/UniCarousel';
import MeasureCart from '../MeasureCard/MeasureCart';
import ProfileCard from '../ProfileCard/ProfileCard';
import "./Dashboard.css";


const DashBoard = () => {
    const [studentData, setStudentData] = useState({})
    const [teacherData, setTeacherData] = useState({})
    const [staffData, setStaffData] = useState({})
    useEffect(() => {
        // axios.get('http://localhost:8000/auth/api/findall')
        // .then((response) => {
        //     // console.log(response.data);
        //    setData(response.data)

        //     }
        // )
        // .catch(function (error) {
        //     console.log(error);
        // });
        AllData();
    }, [])
 console.log(studentData.data)
    const AllData = async () => {
        //student
        await axios.get('http://localhost:8000/auth/api/findall')
            .then((response) => {
                // console.log(response.data);
                setStudentData(response)

            }
            )
            .catch(function (error) {
                console.log(error);
            });

        //teacher
        await axios.get('http://localhost:8000/teacher/api/findall')
            .then((response) => {
                // console.log(response.data);
                setTeacherData(response)

            }
            )
            .catch(function (error) {
                console.log(error);
            });
        //staff
        await axios.get('http://localhost:8000/staff/api/findall')
            .then((response) => {
                // console.log(response.data);
                setStaffData(response)

            }
            )
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='dashboard'>
            <UniCarousel />
            <div className='intro'>
                <p className=''>DashBoard</p>
                <span>Home <i className='bx bxs-chevron-right arrow' ></i> DashBoard</span>
            </div>
            <div className='cardSection'>
                <MeasureCart hName="Student" number={studentData?.data?.length} icon="fa-people-roof" color="cyan" />
                <MeasureCart hName="Teacher" number={teacherData?.data?.length} icon="fa-chalkboard-user" color="blue" />
                <MeasureCart hName="Staff" number={staffData?.data?.length} icon="fa-people-robbery" color="orange" />
                <MeasureCart hName="Total" number={staffData?.data?.length+teacherData?.data?.length+studentData?.data?.length} icon="fa-user-plus" color="red" />
            </div>
             {/* <div className='line d-flex justify-content-center'><div></div></div> */}
            {/*======= Card Celelender========= */}

            <div className='profilecard d-md-flex'>
                <div className='w-50 profile'>
                    <ProfileCard />
                </div>
                <div className='w-50 d-flex justify-content-center celender'>
                    <AcademicCelender />
                </div>
            </div>

            {/* ========Data Table======== */}

            <div className='datatable'>
                <SdataTable/>
            </div>


{/* ==========Location ==========*/}
       
        <div className='w-100 mb-5 mx-4 mt-5'>
            <h5>Campus Location</h5>
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.201203852467!2d89.85262341490164!3d23.597115984665173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe2535f9df3a73%3A0x820055c30208a76c!2sFaridpur%20Engineering%20College!5e0!3m2!1sen!2sbd!4v1669959066852!5m2!1sen!2sbd" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='location'></iframe>
            </div>
        </div>

    );
};

export default DashBoard;