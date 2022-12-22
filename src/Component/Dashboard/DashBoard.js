import React from 'react';
import AcademicCelender from '../../Helper/AcademicCelender';
import UniCarousel from '../../Helper/UniCarousel';
import MeasureCart from '../MeasureCard/MeasureCart';
import ProfileCard from '../ProfileCard/ProfileCard';
import StudentDataTable from '../StudentData/StudentDataTable';
import "./Dashboard.css";


const DashBoard = () => {
    return (
        <div className='dashboard'>
           <UniCarousel/>
          <div className='intro'>
            <p className=''>DashBoard</p>
            <span>Home <i className='bx bxs-chevron-right arrow' ></i> DashBoard</span>
          </div>
           <div className='cardSection'>
               <MeasureCart hName="Student" number="890" icon="fa-people-roof" color="cyan"/>
               <MeasureCart hName="Teacher" number="45" icon="fa-chalkboard-user" color="blue"/>
               <MeasureCart hName="Staff" number="58" icon="fa-people-robbery" color="orange"/>
               <MeasureCart hName="Total" number="1054" icon="fa-user-plus" color="red"/>
           </div>

           <div className='profilecard d-flex'>
            <ProfileCard/>  
            <AcademicCelender/>
           </div>

           <div className='datatable'>
           <StudentDataTable/>
           </div>
        </div>
    );
};

export default DashBoard;