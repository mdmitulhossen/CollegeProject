
import React from 'react';
import { Table } from 'antd';
const columns = [
    {
        title: 'Full Name',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
    },
    {
        title: 'Age',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        fixed: 'left',
    },
    {
        title: 'Email',
        dataIndex: 'address',
        key: '1',
        width: 150,
    },
    {
        title: 'Department',
        dataIndex: 'address',
        key: '2',
        width: 150,
    },
    {
        title: 'Session',
        dataIndex: 'address',
        key: '3',
        width: 150,
    },
    {
        title: 'Phone No',
        dataIndex: 'address',
        key: '4',
        width: 150,
    },
    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a href='/'>action</a>,
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
const StudentDataTable = () => {

    return (
        <div>
            <div className='m-auto mb-2'>
                <button className='btn btn-primary mx-2'>Student</button>
                <button className='btn btn-success'>Teacher</button>
            </div>

            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                scroll={{
                    x: 1500,
                    y: 300,
                }}
            />
        </div>
    );
};
export default StudentDataTable;