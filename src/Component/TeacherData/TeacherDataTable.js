import React from 'react';
import { Breadcrumb, Button, Input, Tooltip } from 'antd';
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import DataTable212 from '../../Helper/Datatable212';

import "../StudentData/StudentDataTable.css"
import DataTableTeacher from '../../Helper/DatatableTeacher';


const TeacherDataTable = () => {
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
                
                    <Input placeholder='Search By Name......' style={style} />
                    <Input placeholder='Search By ID......' style={style} />
                    <Input placeholder='Search By Department......' style={style} />
                    <Tooltip title="Search">
                    <Button type="primary" style={{marginLeft:"10px"}} size='large' icon={<SearchOutlined />}>
                        Search
                    </Button>
                    </Tooltip>
                    <Tooltip title="Add Teacher">
                    <Button type="primary" style={{marginLeft:"10px"}} icon={<PlusOutlined />} size="large"></Button>
                    </Tooltip>

              
            </div>
            {/* <DataTable/> */}
            <DataTableTeacher />
        </div>
    );
};

export default TeacherDataTable;