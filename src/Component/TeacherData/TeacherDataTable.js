import React, { useState } from 'react';
import { Breadcrumb, Button, Input, Tooltip } from 'antd';
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
// import DataTable212 from '../../Helper/Datatable212';

import "../StudentData/StudentDataTable.css"
import DataTableTeacher from '../../Helper/DatatableTeacher';
import axios from 'axios';


const TeacherDataTable = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    
    const [name,setName]=useState("");
    const [id,setId]=useState("");
    const [department,setDepartment]=useState("");
    const [data,setData]=useState("");

    const handleSearch = async () => {
    
        
        if(name){
            await axios.post('http://localhost:8000/teacher/api/searchTeacher', {name})
            .then((response) => {
                
                if (response.status === 200 || response.status === 400) {
                    setData(response)
                }
                
            })
            .catch(function (error) {
                console.log(error);
              
            });
        }
        if(id){
            await axios.post('http://localhost:8000/teacher/api/searchTeacher', {id})
            .then((response) => {
                
                if (response.status === 200 || response.status === 400) {
                    setData(response)
                }
                
            })
            .catch(function (error) {
                console.log(error);
              
            });
        }
        if(department){
            await axios.post('http://localhost:8000/teacher/api/searchTeacher', {department})
            .then((response) => {
                
                if (response.status === 200 || response.status === 400) {
                    setData(response)
                }
                
            })
            .catch(function (error) {
                console.log(error);
              
            });
        }
        if(name && department){
            await axios.post('http://localhost:8000/teacher/api/searchTeacher', {name,department})
            .then((response) => {
                
                if (response.status === 200 || response.status === 400) {
                    setData(response)
                }
                
            })
            .catch(function (error) {
                console.log(error);
              
            });
        }
        if(id && department){
            await axios.post('http://localhost:8000/teacher/api/searchTeacher', {id,department})
            .then((response) => {
                
                if (response.status === 200 || response.status === 400) {
                    setData(response)
                }
                
            })
            .catch(function (error) {
                console.log(error);
              
            });
        }
        if(id && name){
            await axios.post('http://localhost:8000/teacher/api/searchTeacher', {id,name})
            .then((response) => {
                
                if (response.status === 200 || response.status === 400) {
                    setData(response)
                }
                
            })
            .catch(function (error) {
                console.log(error);
              
            });
        }
        if(id && name && department){
            await axios.post('http://localhost:8000/teacher/api/searchTeacher', {id,name,department})
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
            <div className='mx-3 mt-2'>
                <h4>Teacher</h4>
                <Breadcrumb
                    style={{
                        margin: '0px 0 16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>teacher</Breadcrumb.Item>
                    <Breadcrumb.Item>list</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='d-flex justify-content-center mt-4'>
                
                    <Input onChange={(e)=>setName(e.target.value)} placeholder='Search By Name......' style={style} />
                    <Input onChange={(e)=>setId(e.target.value)} placeholder='Search By ID......' style={style} />
                    <Input onChange={(e)=>setDepartment(e.target.value)} placeholder='Search By Department......' style={style} />
                    <Tooltip title="Search">
                    <Button type="primary" style={{marginLeft:"10px"}} size='large' onClick={handleSearch} icon={<SearchOutlined />}>
                        Search
                    </Button>
                    </Tooltip>
                    {
                            user?.role && <Tooltip title="Add Teacher">
                            <Button type="primary"  style={{marginLeft:"10px"}} icon={<PlusOutlined />}  size="large"></Button>
                            </Tooltip>
                    }
                    {/* <Tooltip title="Add Teacher">
                    <Button type="primary" style={{marginLeft:"10px"}} icon={<PlusOutlined />} size="large"></Button>
                    </Tooltip> */}

              
            </div>
            {/* <DataTable/> */}
            <DataTableTeacher tdata={data} />
        </div>
    );
};

export default TeacherDataTable;