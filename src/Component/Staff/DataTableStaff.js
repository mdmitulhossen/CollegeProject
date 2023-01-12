import { Table } from 'antd';
import axios from 'axios';

import "../../Helper/DataTable.css"
import { useEffect, useState } from "react";
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        width: '20%',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: true,
        width: '20%',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        filters: [
            {
                text: 'Male',
                value: 'male',
            },
            {
                text: 'Female',
                value: 'female',
            },
        ],
        onFilter: (value, record) => {
            return record.gender === value
        },
        width: '20%',
    },
    {
        title: 'Department',
        dataIndex: 'department',
        width: '20%',
        filters: [
            {
                text: 'CSE',
                value: 'CSE',
            },
            {
                text: 'EEE',
                value: 'EEE',
            },
            {
                text: 'CE',
                value: 'CE',
            },
        ],
        onFilter: (value, record) => {
            return record.department === value;
        },
    },
    {
        title: 'Email',
        dataIndex: 'email',
        width: '20%'
    },
    {
        title: 'Phone No',
        dataIndex: 'number',
        width: '20%'
    },

];

// const sData = [
//     {
//         key: 1,
//         id: 324,
//         email: "md.mitul.hossen@gmail.com",
//         name: "Mitul",
//         gender: "male",
//         department: "CSE",
//         phoneNo: "01759999999"
//     },
//     {
//         key: 2,
//         id: 324,
//         name: "Usama",
//         gender: "male",
//         department: "CSE",
//         phoneNo: "01759999999"
//     },
//     {
//         key: 3,
//         id: 324,
//         name: "Faisol",
//         gender: "male",
//         department: "CSE",
//         phoneNo: "01759999999"
//     },
//     {
//         key: 4,
//         id: 324,
//         name: "Azad",
//         gender: "male",
//         department: "CeE",
//         phoneNo: "01759999999"
//     },
//     {
//         key: 5,
//         id: 324,
//         name: "Fahim",
//         gender: "male",
//         department: "CE",
//         phoneNo: "01759999999"
//     },
//     {
//         key: 6,
//         id: 324,
//         name: "X",
//         gender: "female",
//         department: "CSE",
//         phoneNo: "01759999999"
//     },
//     {
//         key: 7,
//         id: 324,
//         name: "A",
//         gender: "female",
//         department: "CE",
//         phoneNo: "01759999999"
//     },
// ]

const DataTableStaff = ({staffData}) => {
    
console.log(staffData)
    const [data, setData] = useState({})

    useEffect(() => {
        setteacherAllData();
    }, [])


    //Data
    const setteacherAllData = async () => {
        await axios.get('http://localhost:8000/staff/api/findall')
            .then((response) => {
                // console.log(response.data);
                setData(response)

            }
            )
            .catch(function (error) {
                console.log(error);
            });
    }



    return (
        <div>

            <div className='dataTable'>
                {
                    staffData?.data
                        ?
                        <Table
                            columns={columns}
                            rowSelection={{ type: "checkbox", onSelect: (record) => console.log(record) }}
                            // rowKey={(record) => record.login.uuid}
                            dataSource={staffData?.data?.user}
                            pagination={{ total: 200, showSizeChanger: true, pageSizeOptions: [2, 5, 10, 20, 50, 100] }}
                        // loading={true}
                        />
                        :
                        <Table
                            columns={columns}
                            rowSelection={{ type: "checkbox", onSelect: (record) => console.log(record) }}
                            // rowKey={(record) => record.login.uuid}
                            dataSource={data?.data}
                            pagination={{ total: 200, showSizeChanger: true, pageSizeOptions: [2, 5, 10, 20, 50, 100] }}
                        // loading={true}
                        />
                }
            </div>
        </div>

    );
};
export default DataTableStaff;