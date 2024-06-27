import { Space, Table, Tag } from 'antd';
import { fetchALLUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';

const UserTable = () => {
    const [dataUser, setDataUser] = useState([])
    //empty array => run once
    useEffect(() => {
        loadUser();
    }, []);
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
        },
        {
            title: 'FullName',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    const loadUser = async () => {
        const res = await fetchALLUserAPI()
        setDataUser(res.data)
    }

    return (
        <Table
            columns={columns}
            dataSource={dataUser}
            rowKey={'_id'}
        />

    )

}
export default UserTable;