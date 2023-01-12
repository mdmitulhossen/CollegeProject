import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { NavLink } from 'react-router-dom';
import StudentProfile from '../Component/StudentData/StudentProfile';
import axios from "axios"
import "./DataTable.css"

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: true,
        width: '20%',
        render: (text) => <NavLink to="/student/studentProfile">{text}</NavLink>
        // render: (date,record) => {
        //     return <NavLink onClick={showDetails(record)}>{date}</NavLink>
        // },
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
        title: 'Reg. NO',
        dataIndex: 'regNo',
        width: '20%'
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
        title: 'session',
        dataIndex: 'session',
        width: '20%'
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

const sData = [
    {
        key: 1,
        email: "md.mitul.hossen@gmail.com",
        name: "Mitul",
        gender: "male",
        regno: "3029",
        department: "CSE",
        session: "2019-20",
        phoneNo: "01759999999"
    },
    {
        key: 2,
        name: "Usama",
        gender: "male",
        regno: "3029",
        department: "CSE",
        session: "2019-20",
        phoneNo: "01759999999"
    },
    {
        key: 3,
        name: "Faisol",
        gender: "male",
        regno: "3029",
        department: "CSE",
        session: "2019-20",
        phoneNo: "01759999999"
    },
    {
        key: 4,
        name: "Azad",
        gender: "male",
        regno: "3029",
        department: "CeE",
        session: "2019-20",
        phoneNo: "01759999999"
    },
    {
        key: 5,
        name: "Fahim",
        gender: "male",
        regno: "3029",
        department: "CE",
        session: "2019-20",
        phoneNo: "01759999999"
    },
    {
        key: 6,
        name: "X",
        gender: "female",
        regno: "3029",
        department: "CSE",
        session: "2019-20",
        phoneNo: "01759999999"
    },
    {
        key: 7,
        name: "A",
        gender: "female",
        regno: "3029",
        department: "CE",
        session: "2019-20",
        phoneNo: "01759999999"
    },
]




const DataTable212 = ({SSData}) => {
    const [data, setData] = useState({})
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
        setAllData();
    }, [])
 console.log(data)
    const setAllData = async () => {
        await axios.get('http://localhost:8000/auth/api/findall')
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
                    SSData?.data ?
                     <Table
                        //edit row section
                        onRow={(record) => {
                            return {
                                onClick: event => {
                                    // save row data to state
                                    console.log(record.email);
                                    localStorage.setItem("profileEmail",record.email);
                                    // <StudentProfile email={record.email} />
                                }, // click row
                            };
                        }}
                        columns={columns}
                        rowSelection={{ type: "checkbox", onSelect: (record) => console.log(record) }}
                        // rowKey={(record) => record.login.uuid}
                        dataSource={SSData?.data?.user}
                        pagination={{ total: 200, showSizeChanger: true, pageSizeOptions: [2, 5, 10, 20, 50, 100] }}
                    // loading={true}
                    />
                    :
                    <Table
                    //edit row section
                    onRow={(record) => {
                        return {
                            onClick: event => {
                                // save row data to state
                                console.log(record.email);
                                localStorage.setItem("profileEmail",record.email);
                                // <StudentProfile email={record.email} />
                            }, // click row
                        };
                    }}
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
export default DataTable212;