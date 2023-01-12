import React, { useState } from 'react';
import { Breadcrumb, Button, Input, Tooltip } from 'antd';
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import "../StudentData/StudentDataTable.css"
import DataTableStaff from './DataTableStaff';
import axios from "axios";


const Staff = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    
    const [name,setName]=useState("");
    const [id,setId]=useState("");
    const [department,setDepartment]=useState("");
    const [data,setData]=useState("");


    const handleStaffSearch = async () => {
   console.log("click")
        if(name){
            await axios.post('http://localhost:8000/staff/api/searchstaff', {name})
            .then((response) => {
                // console.log(response)
                if (response.status === 200 || response.status === 400) {
                    setData(response)
                }
                
            })
            .catch(function (error) {
                console.log(error);
              
            });
        }
       else if(id){
            await axios.post('http://localhost:8000/staff/api/searchstaff', {id})
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
            await axios.post('http://localhost:8000/staff/api/searchstaff', {department})
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
            await axios.post('http://localhost:8000/staff/api/searchstaff', {name,department})
            .then((response) => {
                
                if (response.status === 200 || response.status === 400) {
                    setData(response)
                }
                
            })
            .catch(function (error) {
                console.log(error);
              
            });
        }
        else if(id && department){
            await axios.post('http://localhost:8000/staff/api/searchstaff', {id,department})
            .then((response) => {
                
                if (response.status === 200 || response.status === 400) {
                    setData(response)
                }
                
            })
            .catch(function (error) {
                console.log(error);
              
            });
        }
        else if(id && name){
            await axios.post('http://localhost:8000/staff/api/searchstaff', {id,name})
            .then((response) => {
                
                if (response.status === 200 || response.status === 400) {
                    setData(response)
                }
                
            })
            .catch(function (error) {
                console.log(error);
              
            });
        }
        else if(id && name && department){
            await axios.post('http://localhost:8000/staff/api/searchstaff', {id,name,department})
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
                <h4>Staff</h4>
                <Breadcrumb
                    style={{
                        margin: '0px 0 16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>staff</Breadcrumb.Item>
                    <Breadcrumb.Item>list</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='d-flex justify-content-center mt-4'>
                
                    <Input onChange={(e)=>setName(e.target.value)} placeholder='Search By Name......' style={style} />
                    <Input onChange={(e)=>setId(e.target.value)} placeholder='Search By ID......' style={style} />
                    <Input onChange={(e)=>setDepartment(e.target.value)} placeholder='Search By Department......' style={style} />
                    <Tooltip title="Search">
                    <Button type="primary" onClick={handleStaffSearch} style={{marginLeft:"10px"}} size='large' icon={<SearchOutlined />}>
                        Search
                    </Button>
                    </Tooltip>
                    {
                            user?.role && <Tooltip title="Add Teacher">
                            <Button type="primary"  style={{marginLeft:"10px"}} icon={<PlusOutlined />}  size="large"></Button>
                            </Tooltip>
                    }
                    {/* <Tooltip title="Add Teacher">
                    <Button type="primary"  style={{marginLeft:"10px"}} icon={<PlusOutlined />}  size="large"></Button>
                    </Tooltip> */}

              
            </div>
            {/* <DataTable/> */}
            <DataTableStaff staff={data} />
        </div>
    );
};

export default Staff;