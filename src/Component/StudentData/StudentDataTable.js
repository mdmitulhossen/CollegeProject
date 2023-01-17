import React, { useEffect, useState } from 'react';
import { Breadcrumb, Button, Input, Tooltip } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import DataTable212 from '../../Helper/Datatable212';

import "./StudentDataTable.css"
import axios from 'axios';
import { NavLink } from 'react-router-dom';





const StudentDataTable = () => {

    const [name,setName]=useState("");
    const [regNO,setRegNo]=useState("");
    const [department,setDepartment]=useState("");
    const [session,setSession]=useState("");
    const [data,setData]=useState("");
    const [role,setRole]=useState(false);

   
    useEffect(()=>{
        setRole(JSON.parse(localStorage.getItem("user")).role)
    },[role])
    
    const handleSearch = async () => {
    
        
        if(name){
            await axios.post('http://localhost:8000/auth/api/searchstudent', {name})
            .then((response) => {
                
                if (response.status === 200 || response.status === 400) {
                    setData(response)
                }
                
            })
            .catch(function (error) {
                console.log(error);
              
            });
        }
        else if(regNO){
            await axios.post('http://localhost:8000/auth/api/searchstudent', {regNO})
            .then((response) => {
                
                if (response.status === 200 || response.status === 400) {
                    setData(response)
                }
                
            })
            .catch(function (error) {
                console.log(error);
              
            });
        }
        else if(session){
            await axios.post('http://localhost:8000/auth/api/searchstudent', {session})
            .then((response) => {
                
                if (response.status === 200 || response.status === 400) {
                    setData(response)
                }
                
            })
            .catch(function (error) {
                console.log(error);
              
            });
        }
        else if(department){
            await axios.post('http://localhost:8000/auth/api/searchstudent', {department})
            .then((response) => {
                
                if (response.status === 200 || response.status === 400) {
                    setData(response)
                }
                
            })
            .catch(function (error) {
                console.log(error);
              
            });
        }
        else if(name && department){
            await axios.post('http://localhost:8000/auth/api/searchstudent', {name,department})
            .then((response) => {
                
                if (response.status === 200 || response.status === 400) {
                    setData(response)
                }
                
            })
            .catch(function (error) {
                console.log(error);
              
            });
        }
        else if(regNO && department){
            await axios.post('http://localhost:8000/auth/api/searchstudent', {regNO,department})
            .then((response) => {
                
                if (response.status === 200 || response.status === 400) {
                    setData(response)
                }
                
            })
            .catch(function (error) {
                console.log(error);
              
            });
        }
        else if(session && department){
            await axios.post('http://localhost:8000/auth/api/searchstudent', {session,department})
            .then((response) => {
                
                if (response.status === 200 || response.status === 400) {
                    setData(response)
                }
                
            })
            .catch(function (error) {
                console.log(error);
              
            });
        }
        else if(regNO && name){
            await axios.post('http://localhost:8000/auth/api/searchstudent', {regNO,name})
            .then((response) => {
                
                if (response.status === 200 || response.status === 400) {
                    setData(response)
                }
                
            })
            .catch(function (error) {
                console.log(error);
              
            });
        }
        else if(regNO && name && department){
            await axios.post('http://localhost:8000/auth/api/searchstudent', {regNO,name,department})
            .then((response) => {
                
                if (response.status === 200 || response.status === 400) {
                    setData(response)
                }
                
            })
            .catch(function (error) {
                console.log(error);
              
            });
        }
        else{
            await axios.get('http://localhost:8000/auth/api/findall')
            .then((response) => {
                
                if (response.status === 200 || response.status === 400) {
                    setData(response)
                }
                
            })
            .catch(function (error) {
                console.log(error);
              
            });
        }
      
            
    }

    const style ={
        padding: "9px",
         width: "250px",
         marginLeft:"10px"
    }
    return (
        <div  className='student'>
            <div className='mx-1 mt-2'>
                <h4>Student</h4>
                <Breadcrumb
                    style={{
                        margin: '0px 0 16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Student</Breadcrumb.Item>
                    <Breadcrumb.Item>list</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='d-flex justify-content-center mt-4'>
                
                    <Input onChange={(e)=>setName(e.target.value)} placeholder='Search By Name......' style={style} />
                    <Input onChange={(e)=>setRegNo(e.target.value)} placeholder='Search By RegNo......' style={style} />
                    <Input onChange={(e)=>setDepartment(e.target.value)} placeholder='Search By Department......' style={style} />
                    <Input onChange={(e)=>setSession(e.target.value)} placeholder='Search By Session......' style={style} />
                    <Tooltip title="Search">
                    <Button type="primary" style={{marginLeft:"10px"}} size='large' onClick={handleSearch} icon={<SearchOutlined />}>
                        Search
                    </Button>
                    </Tooltip>
                    
                    {
                           role &&<Tooltip title="Add Student">
                            <NavLink to="/student/register"><Button type="primary" style={{marginLeft:"10px"}} icon={<PlusOutlined />} size="large"></Button></NavLink>
                           
                           
                           </Tooltip>
                    }
                    {/* <Tooltip title="Add Student">
                    <Button type="primary" style={{marginLeft:"10px"}} icon={<PlusOutlined />} size="large"></Button>
                    </Tooltip> */}
              
            </div>
            {/* <DataTable/> */}
            <DataTable212 SSData={data} />
        </div>
    );
};

export default StudentDataTable;