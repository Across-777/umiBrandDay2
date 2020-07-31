import React from 'react'
import { Table, Pagination } from 'antd';
const columns = [
    {
        title: '品牌名称',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '状态',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '操作',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '操作人',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '操作时间',
        dataIndex: 'address',
        key: 'address',
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
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

export default (props) => {
    const {tableDate} =props
    console.log('tableDate',props);
    const onChange = ()=>{
        console.log('onchange');
    }

    return (
        
        <div>
            <div className='table_txt'>
                品牌确认
            </div>
            <div>
                <Table columns={columns} dataSource={data} 
                pagination={{
                    defaultCurrent: 1,
                    total: 100,
                    onChange: onChange,}
                }
                />
            </div>
        </div>
    )
}