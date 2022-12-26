import { Table } from 'antd';
import React from 'react';

const columns = [
    {
        title: 'Full Name',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
    },
    {
        title: 'Department',
        width: 100,
        dataIndex: 'department',
        key: 'department',
        fixed: 'left',
    },
    {
        title: 'Session',
        dataIndex: 'session',
        key: 'session',
        width: 150,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 150,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        width: 150,
    },
    {
        title: 'Phone No',
        dataIndex: 'phoneno',
        key: 'phoneNo',
        width: 150,
    },
    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a href='/#'>action</a>,
    },
];
const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
    });
}
const SdataTable = () => {
    return (
        <div>
            <div className='mb-2 d-flex'>
                <div className='w-50'>
                <button className='btn btn-success'>Student</button>
                <button className='btn btn-primary mx-2'>Teacher</button>
                
                </div>
                {/* <div className='d-flex w-50'>
                
                </div> */}
                <h4 className='text-center'>Data Table</h4>
                
                
            </div>
                <Table
                    columns={columns}
                    dataSource={data}
                   pagination={false}
                />
        </div>
    )

};
export default SdataTable;