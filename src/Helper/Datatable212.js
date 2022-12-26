
import { Table } from 'antd';

import "./DataTable.css"
const columns = [
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
        onFilter:(value,record)=>{
            return record.gender===value
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
        onFilter:(value,record)=>{
            return record.department===value;
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
        dataIndex: 'phoneNo',
        width: '20%'
    },

];

const sData = [
    {    key:1,
        email:"md.mitul.hossen@gmail.com",
        name: "Mitul",
        gender: "male",
        regNo: "3029",
        department: "CSE",
        session: "2019-20",
        phoneNo: "01759999999"
    },
    {key:2,
        name: "Usama",
        gender: "male",
        regNo: "3029",
        department: "CSE",
        session: "2019-20",
        phoneNo: "01759999999"
    },
    {key:3,
        name: "Faisol",
        gender: "male",
        regNo: "3029",
        department: "CSE",
        session: "2019-20",
        phoneNo: "01759999999"
    },
    {key:4,
        name: "Azad",
        gender: "male",
        regNo: "3029",
        department: "CeE",
        session: "2019-20",
        phoneNo: "01759999999"
    },
    {
        key:5,
        name: "Fahim",
        gender: "male",
        regNo: "3029",
        department: "CE",
        session: "2019-20",
        phoneNo: "01759999999"
    },
    {
        key:6,
        name: "X",
        gender: "female",
        regNo: "3029",
        department: "CSE",
        session: "2019-20",
        phoneNo: "01759999999"
    },
    {
        key:7,
        name: "A",
        gender: "female",
        regNo: "3029",
        department: "CE",
        session: "2019-20",
        phoneNo: "01759999999"
    },
]

const DataTable212 = () => {
   
    return (
        <div>
            <div className='dataTable'>
                <Table
                    columns={columns}
                    rowSelection={{type:"checkbox",onSelect:(record)=>console.log(record)}}
                    // rowKey={(record) => record.login.uuid}
                    dataSource={sData}
                    pagination={{total:200,showSizeChanger:true,pageSizeOptions:[2,5,10,20,50,100]}}
                    // loading={true}
                />
            </div>

        </div>

    );
};
export default DataTable212;